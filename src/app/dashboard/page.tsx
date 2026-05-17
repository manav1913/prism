import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ReviewForm from "@/components/dashboard/ReviewForm"

export default async function DashboardPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/login");
  }

  return <ReviewForm/>
}