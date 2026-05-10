const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="relative overflow-hidden bg-white border-t py-6">
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-50 h-50 bg-violet-100 rounded-full blur-3xl opacity-30 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex items-center justify-between text-sm text-gray-500">

                <span>© {year} PRism. All rights reserved.</span>

                <div className="flex gap-4">
                    <a
                        href="https://github.com/manav1913"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-600 transition-colors"
                    >
                        GitHub
                    </a>

                    <a
                        href="https://www.linkedin.com/in/manav-p-86b2652a3/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-violet-600 transition-colors"
                    >
                        LinkedIn
                    </a>
                </div>

            </div>
        </footer>
    )
}

export default Footer