import Link from "next/link";
import { Leaf, } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/40 z-20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-leaf">
                <Leaf className="h-5 w-5 text-primary-foreground" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-semibold">Grow A Tree Foundation</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Planting trees, restoring ecosystems, and growing communities.
            </p>
           
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground">Our Mission</Link></li>
              <li><Link href="/projects" className="hover:text-foreground">Projects</Link></li>
              <li><Link href="/get-involved" className="hover:text-foreground">Get Involved</Link></li>
              <li><Link href="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Stay rooted</h4>
            <p className="mt-4 text-sm text-muted-foreground">Monthly stories from the forest floor.</p>
            <form className="mt-4 flex gap-2">
              <input type="email" placeholder="you@email.com" className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm outline-none focus:border-primary" />
              <button type="submit" className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:shadow-soft">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Grow A Tree Foundation.</p>
          <p>Crafted with care for a greener tomorrow.</p>
        </div>
      </div>
    </footer>
  );
}
