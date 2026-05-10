import Image from "next/image";
import { Badge } from "../ui/badge";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-card/50 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Prism logo"
            width={200}
            height={200}
            className="h-10 w-auto object-contain"
            priority
          />

          <span
            style={{
              background: "linear-gradient(to right, #3b82f6, #7c3aed)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-2xl font-bold"
          >
            PRism
          </span>
        </div>
        
        <div className="flex items-center gap-3">

          <a
            href="https://github.com/manav1913/prism"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:border-violet-300 hover:text-violet-700 transition-colors"
          >
            ⭐ Star on GitHub
          </a>

          <Badge variant="outline">
            AI Powered PR Review
          </Badge>

        </div>

      </div>
    </header>
  );
};

export default Navbar;