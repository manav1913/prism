import SnowFall from "../SnowFall"
import { Badge } from "../ui/badge"
import { CheckCircle2, GitPullRequest, ShieldCheck, Zap } from "lucide-react"

const steps = [
    {
        icon: GitPullRequest,
        title: "Connect your GitHub",
        description:
            "Link your repository in seconds. PRism automatically listens to your pull requests.",
    },
    {
        icon: Zap,
        title: "AI analyzes your PR",
        description:
            "Our AI scans your code for bugs, anti-patterns, and performance issues instantly.",
    },
    {
        icon: ShieldCheck,
        title: "Get smart suggestions",
        description:
            "Receive clear, actionable feedback before your code reaches production.",
    },
    {
        icon: CheckCircle2,
        title: "Merge with confidence",
        description:
            "Ship faster knowing your code is clean, secure, and production-ready.",
    },
]

const HowItWorks = () => {
    return (
        <section className="relative overflow-hidden bg-white py-28">
            <SnowFall/>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-80 h-80 bg-violet-100 rounded-full blur-3xl opacity-30 pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-80 h-80 bg-yellow-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <Badge
                    variant="outline"
                    className="mb-6 px-4 py-1.5 text-sm text-violet-700 border-violet-300 bg-violet-50 rounded-full font-medium"
                >
                    ✦ How it works
                </Badge>

                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Ship better code in{" "}
                    <span className="bg-linear-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                        4 simple steps
                    </span>
                </h2>

                <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-14">
                    PRism makes code reviews effortless by automating the entire PR feedback loop.
                </p>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        return (
                            <div
                                key={index}
                                className="p-6 rounded-2xl border bg-white/60 backdrop-blur-sm hover:shadow-md transition-all"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-50 text-violet-600 mx-auto mb-4">
                                    <Icon size={22} />
                                </div>

                                <h3 className="text-lg font-semibold mb-2">
                                    {step.title}
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks