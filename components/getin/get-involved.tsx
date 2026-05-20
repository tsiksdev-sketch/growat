
import Image from "next/image";
import PagesHero from "../PagesHero";
import { tiers,ways } from "@/constants";



export default function GetInvolved() {
  return (
    <div>
      <PagesHero
        subtitle="Get involved"
        title="Grow with us."
        description="Whether you give five dollars or five Saturdays, you're growing a forest. Pick a way that fits your season of life."
      />

      

      {/* DONATE TIERS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <h2 className="font-display text-4xl md:text-5xl">Plant a tree today.</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Choose an amount. We'll plant, protect, and report back on every single tree.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {tiers.map(t => (
            <div key={t.amount} className={`relative rounded-3xl border bg-card p-8 shadow-card transition-all hover:-translate-y-1 ${t.popular ? "border-primary shadow-glow" : "border-border"}`}>
              {t.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">Most loved</span>}
              <p className="font-display text-5xl font-semibold text-primary">{t.amount}</p>
              <p className="mt-2 font-medium">{t.trees}</p>
              <p className="mt-3 text-sm text-muted-foreground">{t.note}</p>
              <button className="mt-6 w-full rounded-full bg-primary py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-soft">
                Give {t.amount}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* WAYS */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-soft">
            <Image src='/volunteers.jpg' width="1000" height="1000" alt="Smiling volunteers carrying saplings" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-balance">More than money, we grow people.</h2>
            <div className="mt-8 space-y-4">
              {ways.map(w => (
                <div key={w.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-leaf text-primary-foreground">
                    <w.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl">{w.title}</h3>
                    <p className="text-sm text-muted-foreground">{w.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
