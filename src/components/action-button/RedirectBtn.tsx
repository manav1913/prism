
import { ReactNode } from "react"
import Link from "next/link"
import { Button } from "../ui/button"

interface RedirectBtnProps {
  url: string
  className?: string
  children: ReactNode
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link"
 
}

const RedirectBtn = ({
  url,
  className,
  children,
  variant = "default",
}: RedirectBtnProps) => {
  return (
    <Link href={url}>
      <Button variant={variant} className={className}>
        {children}
      </Button>
    </Link>
  );
};

export default RedirectBtn