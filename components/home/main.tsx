
import { ArrowRight, Sprout, Users, Globe2, Heart, TreePine, Sun } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { stats,pillars } from "@/constants";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-xs font-medium text-primary backdrop-blur">
              <Sun className="h-3.5 w-3.5" /> A brighter, greener tomorrow
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] tracking-tight text-balance md:text-7xl">
              Planting <em className="not-italic text-primary">hope</em>,<br />
              one tree at a time.
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground text-balance">
              We're a global community restoring forests, reviving ecosystems, and growing the people who care for them. Every tree planted is a promise to the future.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/get-involved" className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:-translate-y-0.5">
                Plant a tree <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/projects" className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-secondary">
                See our work
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-9 w-9 rounded-full border-2 border-background bg-gradient-leaf" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Joined by <span className="font-semibold text-foreground">12,000+</span> growers worldwide</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-glow">
              <Image src='/hero-planting.jpg' loading="eager" alt="Community planting a young tree at golden hour" width={1600} height={1100} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-background p-4 shadow-card md:flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-sun">
                <TreePine className="h-6 w-6 text-bark" />
              </span>
              <div>
                <p className="font-display text-2xl font-semibold leading-none">+8,420</p>
                <p className="text-xs text-muted-foreground">trees this month</p>
              </div>
            </div>
            <div className="absolute -right-4 top-10 hidden h-24 w-24 rounded-full bg-gradient-sun opacity-60 blur-2xl md:block" />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden bg-border md:grid-cols-4 ">
          {stats.map((s) => (
            <div key={s.label} className="bg-background px-6 py-10 text-center hover:bg-green-700 hv transition-all hover:scale-125">   
              <p className="font-display text-4xl font-semibold text-primary md:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSION PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">What we do</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">Roots that reach further than trees.</h2>
          <p className="mt-4 text-lg text-muted-foreground">We work where forests, climate, and community meet — because real restoration grows in all three.</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="group rounded-3xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-leaf text-primary-foreground transition-transform group-hover:scale-110">
                <p.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-2xl">{p.title}</h3>
              <p className="mt-2 text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SPLIT FEATURE */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-soft">
            <Image src='/canopy.jpg' alt="Sunlight through a green forest canopy" loading="lazy" width={1400} height={900} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Our promise</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-balance">Every tree, traced. Every project, measured.</h2>
            <p className="mt-5 text-lg text-muted-foreground">From seed to canopy, our forests are monitored with satellite imagery, on-the-ground partners, and open public reports — so your support grows real, lasting impact.</p>
            <ul className="mt-8 space-y-4">
              {["Native, biodiversity-first species", "10-year monitoring of every planting site", "100% of donations tied to a project"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary">
                    <Heart className="h-3 w-3" fill="currentColor" />
                  </span>
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECT TEASE */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary">Featured projects</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Growing in places that matter.</h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
            View all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { img: '/aerial-forest.jpg', place: "Atlantic Forest, Brazil", goal: "500,000 trees", tag: "Reforestation" },
            { img: '/volunteers.jpg', place: "Rift Valley, Kenya", goal: "120,000 trees", tag: "Community" },
            { img: '/sapling-hands.jpg', place: "Cascadia, Pacific NW", goal: "80,000 trees", tag: "Restoration" },
          ].map((p) => (
            <article key={p.place} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
              <div className="aspect-4/3 overflow-hidden">
                <Image src={p.img} alt={p.place} width={1000} height={1000} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{p.tag}</span>
                <h3 className="mt-3 font-display text-2xl">{p.place}</h3>
                <p className="mt-1 text-sm text-muted-foreground">Goal: {p.goal}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-leaf p-12 text-center text-primary-foreground shadow-glow md:p-20">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-sun/30 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-sun/20 blur-3xl" />
          <h2 className="relative font-display text-4xl md:text-6xl text-balance">A tree today. A forest tomorrow.</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg opacity-90">Just $5 plants and protects a tree for ten years. Imagine what a forest of us can do.</p>
          <Link href="/get-involved" className="relative mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-background px-7 text-sm font-medium text-primary shadow-soft transition-transform hover:-translate-y-0.5">
            Plant your first tree <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
