'use client'
import { Mail, MapPin, Phone } from "lucide-react";



export default function Contact() {
  return (
    <div>
      <section className="bg-gradient-hero">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-balance">Let's grow something.</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">Questions, partnerships, press, or just a tree story — write to us. We read everything.</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-5">
        <form className="md:col-span-3 rounded-3xl border border-border bg-card p-8 shadow-card" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-sm font-medium">Name</span>
              <input className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Jane Forester" />
            </label>
            <label className="block">
              <span className="text-sm font-medium">Email</span>
              <input type="email" className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="jane@email.com" />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-sm font-medium">Subject</span>
            <input className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="I'd like to plant 100 trees…" />
          </label>
          <label className="mt-5 block">
            <span className="text-sm font-medium">Your message</span>
            <textarea rows={6} className="mt-2 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Tell us how you'd like to grow with us." />
          </label>
          <button className="mt-6 inline-flex h-12 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-glow hover:-translate-y-0.5">
            Send message
          </button>
        </form>

        <aside className="md:col-span-2 space-y-4">
          {[
            { icon: Mail, label: "Email", value: "info@growatreefoundation.com" },
            { icon: Phone, label: "Phone", value: "+263776373513 /+263777700465" },
            { icon: MapPin, label: "HQ", value: "info@growatreefoundation.com" },
          ].map((c) => (
            <div key={c.label} className="flex gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-leaf text-primary-foreground">
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                <p className="mt-1 font-medium">{c.value}</p>
              </div>
            </div>
          ))}
          <div className="rounded-2xl bg-gradient-leaf p-6 text-primary-foreground shadow-soft">
            <p className="font-display text-2xl">Office hours</p>
            <p className="mt-2 text-sm opacity-90">Mon – Fri, 9am – 5pm PT.<br />We reply within two business days.</p>
          </div>
        </aside>
      </section>
    </div>
  );
}
