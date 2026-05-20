import Link from "next/link";
import { Leaf } from "lucide-react";
import Image from "next/image";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/gallery", label: "Gallery" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex  max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 group">
       
            <Image src='/logo.png' width={1000} alt='logo' height={1000} loading="eager" className="h-25  w-50"/>
          
        
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/get-involved"
          className="inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:-translate-y-0.5"
        >
          Donate
        </Link>
      </div>
    </header>
  );
}
