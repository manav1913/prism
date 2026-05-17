"use client"

import { useState } from "react"
import Navbar from "../homepage/Navbar"
import { Badge } from "../ui/badge"
import SnowFall from "../SnowFall"

export default function DashboardPage() {
  const [prUrl, setPrUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [review, setReview] = useState("")

const handleReview = async () => {
  if (!prUrl) return
  setLoading(true)
  const res = await fetch("/api/review", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prUrl })
  })
  const data = await res.json()
  setReview(data.review)
  setLoading(false)
}

  return (
    
     <main className="relative min-h-screen overflow-hidden bg-white">
      
      <SnowFall />

      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-150 h-150 bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-32 left-[10%] w-75 h-75 bg-blue-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute top-32 right-[10%] w-75 h-75 bg-yellow-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

      <Navbar />

      <section className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge
            variant="outline"
            className="mb-6 px-4 py-1.5 text-sm text-violet-700 border-violet-300 bg-violet-50 rounded-full font-medium"
          >
            ✦ AI Powered Pull Request Reviews
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Review your PRs
            <br />
            <span className="bg-linear-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
              instantly with AI.
            </span>
          </h1>

          <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Paste your GitHub Pull Request URL and get instant feedback on
            bugs, code quality, performance, and security issues.
          </p>

          
          <div className="backdrop-blur-xl bg-white/70 border border-white shadow-2xl rounded-3xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                value={prUrl}
                onChange={(e) => setPrUrl(e.target.value)}
                placeholder="https://github.com/owner/repo/pull/123"
                className="flex-1 px-5 py-4 rounded-2xl border border-gray-200 bg-white/80 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
              />

              <button
                onClick={handleReview}
                disabled={loading || !prUrl}
                className="px-7 py-4 rounded-2xl bg-violet-600 text-white font-medium hover:bg-violet-700 hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Reviewing..." : "Review PR"}
              </button>
            </div>

            <p className="mt-4 text-sm text-gray-400">
              Supports public GitHub Pull Requests
            </p>
          </div>

          
          {review && (
            <div className="mt-10 text-left backdrop-blur-xl bg-white/70 border border-violet-100 shadow-xl rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-violet-100 flex items-center justify-center">
                  ✨
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    AI Review
                  </h2>
                  <p className="text-sm text-gray-500">
                    Generated instantly by PRism AI
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <p className="text-gray-700 whitespace-pre-wrap text-sm leading-7">
                  {review}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}