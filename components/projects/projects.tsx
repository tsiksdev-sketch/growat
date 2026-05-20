
import { MapPin } from "lucide-react";
import Image from "next/image";
import PagesHero from "../PagesHero";
import { projectsy } from "@/constants";


export default function Projects() {
  return (
    <div>
      
      <PagesHero subtitle="Projects" title="Forests in the making." description="Every project is a partnership with the people who live on the land. Explore where we're growing — and what's growing back." />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsy.map((p) => {
            const pct = Math.round((p.planted / p.goal) * 100);
            return (
              <article key={p.place} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="aspect-4/3 overflow-hidden">
                  <Image src={p.img} alt={`${p.place}, ${p.country}`} width={4000} height={3000} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">{p.tag}</span>
                    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {p.country}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl">{p.place}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-5">
                    <div className="flex justify-between text-xs font-medium text-muted-foreground">
                      <span>{p.planted.toLocaleString()} planted</span>
                      <span>{pct}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-gradient-leaf" style={{ width: `${pct}%` }} />
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">Goal: {p.goal.toLocaleString()} trees</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
