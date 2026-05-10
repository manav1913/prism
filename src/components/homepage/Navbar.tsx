import Image from "next/image";
import { Badge } from "../ui/badge";

const Navbar = () => {
    return (
        <header className="sticky top-0 z-50 border-b bg-card/50 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center">
                    <Image
                        src="/logo.png"
                        alt="Prism logo"
                        width={200}
                        height={200}
                        className="h-14 w-auto"
                        priority
                    />
                    <span className="text-2xl font-bold bg-linear-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent">
                        PRism
                    </span>
                </div>
                <Badge variant={"outline"}>
                    AI Powered PR Review
                </Badge>

                
            </div>
        </header>
    );
};

export default Navbar;
