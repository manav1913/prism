import Groq from "groq-sdk"
import { auth } from "@clerk/nextjs/server"
import { prisma } from "@/lib/prisma"
import { NextRequest, NextResponse } from "next/server"

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY })

export async function POST(req: NextRequest) {
  const { userId } = await auth()
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  const { prUrl } = await req.json()

  
  const match = prUrl.match(/github\.com\/(.+)\/(.+)\/pull\/(\d+)/)
  if (!match) return NextResponse.json({ error: "Invalid PR URL" }, { status: 400 })

  const [, owner, repo, pullNumber] = match
  const diffRes = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/pulls/${pullNumber}`,
    { headers: { Accept: "application/vnd.github.v3.diff" } }
  )
  const diff = await diffRes.text()

  
  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      {
        role: "system",
        content: "You are an expert code reviewer. Review the following PR diff and provide detailed feedback on bugs, security issues, performance, and best practices."
      },
      {
        role: "user",
        content: `Review this PR diff:\n\n${diff}`
      }
    ]
  })

  const reviewResult = completion.choices[0].message.content ?? ""

  
  await prisma.review.create({
    data: {
      userId,
      prUrl,
      reviewResult
    }
  })

  return NextResponse.json({ review: reviewResult })
}