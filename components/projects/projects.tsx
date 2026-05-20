
import { MapPin } from "lucide-react";
import Image from "next/image";



const projects = [
  { img: '/aerial-forest.jpg', place: "Atlantic Forest", country: "Brazil", goal: 500000, planted: 312400, tag: "Reforestation", desc: "Restoring one of the world's most biodiverse and most threatened rainforests." },
  { img: '/volunteers.jpg', place: "Rift Valley", country: "Kenya", goal: 120000, planted: 98200, tag: "Community", desc: "Indigenous-led agroforestry returning shade, soil, and harvests to highland farms." },
  { img: '/sapling-hands.jpg', place: "Cascadia", country: "Pacific NW, USA", goal: 80000, planted: 41100, tag: "Restoration", desc: "Replanting after wildfire with fire-resilient, climate-ready native conifers." },
  { img: '/canopy.jpg', place: "Borneo Lowlands", country: "Indonesia", goal: 250000, planted: 142000, tag: "Reforestation", desc: "Reconnecting fragmented orangutan habitat across degraded peatland." },
  { img: '/hero-planting.jpg', place: "Highlands", country: "Scotland", goal: 60000, planted: 22500, tag: "Rewilding", desc: "Bringing back native broadleaf woodland to barren glens." },
  { img: '/aerial-forest.jpg', place: "Sahel Belt", country: "Senegal", goal: 200000, planted: 88300, tag: "Community", desc: "A living wall against desertification, grown by women's cooperatives." },
];

export default function Projects() {
  return (
    <div>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Projects</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-balance">Forests in the making.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Every project is a partnership with the people who live on the land. Explore where we're growing — and what's growing back.</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
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
