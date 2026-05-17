
import { SignIn } from "@clerk/nextjs"
import SnowFall from "@/components/SnowFall"

const LogInPage = () => {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <SnowFall/>
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-150 h-150 bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute top-25 left-[10%] w-75 h-75 bg-blue-100 rounded-full blur-2xl opacity-30 pointer-events-none" />
      <div className="absolute top-25 right-[10%] w-75 h-75 bg-yellow-100 rounded-full blur-2xl opacity-30 pointer-events-none" />

      <div className="relative z-10">
        <SignIn
        
          appearance={{
            variables: {
              colorPrimary: "#7c3aed",
              colorText: "#111827",
              colorTextSecondary: "#6b7280",
              colorBackground: "#ffffff",
              colorInputBackground: "#ffffff",
              colorInputText: "#111827",
              borderRadius: "0.75rem",
              fontFamily: "inherit",
            },
            elements: {
              card: "shadow-lg border border-violet-100 rounded-xl",
              headerTitle: "text-2xl font-bold tracking-tight",
              headerSubtitle: "text-gray-500",
              formButtonPrimary:
                "bg-violet-600 hover:bg-violet-700 transition-transform hover:scale-105 rounded-xl text-base",
              formFieldInput:
                "rounded-xl border-gray-200 focus:ring-violet-500 focus:border-violet-500",
              footerActionLink: "text-violet-600 hover:text-violet-700",
              identityPreviewEditButton: "text-violet-600",
            },
          }}
        />
      </div>
    </main>
  )
}

export default LogInPage