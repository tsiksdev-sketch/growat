
import React from "react";
import Image from "next/image";

const values = [
  { title: "Native first", text: "We plant species that belong, not just what grows fast." },
  { title: "People-led", text: "Local communities design and steward every project." },
  { title: "Radically transparent", text: "Open data, open books, open forests." },
  { title: "Long horizon", text: "We commit to ten years on every site we plant." },
];

export default function About() {
  return (
    <div>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Our story</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-balance">A foundation built on roots.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-balance">
         The Grow A Tree Foundation was established in 2017 with the initial goal of planting 5 million trees throughout Southern Africa. We recognized the significant impact that trees, particularly fruit trees, can have on rural communities in coping with the effects of climate change. Since its establishment, the Foundation has expanded its operations and now takes a comprehensive approach to climate change initiatives.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="aspect-4/5 overflow-hidden rounded-3xl shadow-soft">
            <img src='/sapling-hands.jpg' alt="Child holding a young sapling" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-balance">We plant for the people who'll sit in the shade.</h2>
            <p className="mt-5 text-lg text-muted-foreground">We are proud to have supported numerous rural schools and communities through our award winning integrated climate-smart village model. This model encompasses water security, sustainable household energy provision, sustainable livelihoods, climate-smart infrastructure, and environmental education and awareness.</p>
            <p className="mt-4 text-lg text-muted-foreground">We aim to raise awareness about the importance of responsibly managing and giving back to the environment for the benefit of future generations. Join us today and contribute to a sustainable future.</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">What we stand for</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Four roots, one canopy.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="rounded-3xl border border-border bg-card p-8 shadow-card">
                <p className="font-display text-5xl text-primary/30">0{i+1}</p>
                <h3 className="mt-3 font-display text-2xl">{v.title}</h3>
                <p className="mt-2 text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl">
          <img src='/canopy.jpg' alt="Forest canopy with sunlight" loading="lazy" className="h-105 w-full object-cover" />
        </div>
        <blockquote className="mx-auto mt-10 max-w-3xl text-center font-display text-3xl leading-snug text-balance md:text-4xl">
          “The best time to plant a tree was twenty years ago. The second best time is now.”
          <footer className="mt-4 text-sm font-sans font-normal uppercase tracking-widest text-muted-foreground">— Ancient proverb, the heart of our work</footer>
        </blockquote>
      </section>
    </div>
  );
}
