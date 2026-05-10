import RedirectBtn from "../action-button/RedirectBtn"
import SnowFall from "../SnowFall"
import { Badge } from "../ui/badge"


const HeroSection = () => {
    return (
        <main className="relative overflow-hidden bg-white">
            <SnowFall/>
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-150 h-150 bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
            <div className="absolute top-25 left-[10%] w-75 h-75 bg-blue-100 rounded-full blur-2xl opacity-30 pointer-events-none" />
            <div className="absolute top-25 right-[10%] w-75 h-75 bg-yellow-100 rounded-full blur-2xl opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 py-28 text-center relative z-10">
                <Badge
                    variant="outline"
                    className="mb-6 px-4 py-1.5 text-sm text-violet-700 border-violet-300 bg-violet-50 rounded-full font-medium"
                >
                    ✦ Powered by Grok AI SDK
                </Badge>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                    Ship better code,
                    <br />
                    <span className="bg-linear-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                        faster than ever.
                    </span>
                </h1>
                <p className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
                    PRism reviews your GitHub Pull Requests instantly — catching bugs,
                    bad practices, and security issues before they hit production.
                </p>
                <div>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

                        <RedirectBtn
                            url="/signup"
                            variant="default"
                            className="px-6 py-3 text-base rounded-xl cursor-pointer transition-transform hover:scale-105"
                        >
                            Get Started For Free
                        </RedirectBtn>

                        <RedirectBtn
                            url="https://github.com/manav1913/prism"
                            variant="outline"
                            className="px-6 py-3 text-base rounded-xl cursor-pointer transition-transform hover:scale-105"
                        >   
                            View on GitHub
                        </RedirectBtn>

                    </div>
                    <p className="mt-6 text-sm text-gray-400">
                        No credit card  · Free to try · Instant results
                    </p>
                </div>



            </div>
        </main>
    )
}

export default HeroSection