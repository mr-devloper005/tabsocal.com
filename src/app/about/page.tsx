import Link from 'next/link'
import { Sparkles, Target, Users } from 'lucide-react'
import { Footer } from '@/components/shared/footer'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { SITE_CONFIG } from '@/lib/site-config'

const principles = [
  {
    title: 'Visual-first discovery',
    body: 'People should be able to scan quality ideas quickly without forcing everything into a dense directory table.',
    icon: Sparkles,
  },
  {
    title: 'Human identity first',
    body: 'Creators and businesses need room for personality, trust cues, and social presence alongside their work.',
    icon: Users,
  },
  {
    title: 'Practical outcomes',
    body: 'Every section is designed to help users discover, save, and act instead of just scrolling.',
    icon: Target,
  },
]

export default function AboutPage() {
  return (
    <div className="tabs-shell min-h-screen text-[#34143f]">
      <NavbarShell />
      <main className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="tabs-panel-strong rounded-[2.2rem] p-7 sm:p-9">
            <span className="tabs-badge">About {SITE_CONFIG.name}</span>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#41144b] sm:text-5xl">
              A modern social canvas for visuals, profiles, and high-intent discovery.
            </h1>
            <p className="mt-5 max-w-3xl text-sm leading-8 text-[#704969]">
              {SITE_CONFIG.name} combines image sharing, profile surfaces, and utility lanes in one consistent product system.
              The goal is simple: keep creation expressive while making discovery cleaner and more useful.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/contact" className="tabs-button">Contact team</Link>
              <Link href="/help" className="tabs-button-soft">Open help center</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            <div className="tabs-panel rounded-[1.8rem] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ca5995]">People reached</p>
              <p className="mt-3 text-3xl font-semibold text-[#41144b]">120k+</p>
              <p className="mt-2 text-sm text-[#704969]">Monthly visits across visual and profile routes.</p>
            </div>
            <div className="tabs-panel rounded-[1.8rem] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ca5995]">Posts organized</p>
              <p className="mt-3 text-3xl font-semibold text-[#41144b]">1.8M+</p>
              <p className="mt-2 text-sm text-[#704969]">Cards, collections, and lane-specific metadata.</p>
            </div>
            <div className="tabs-panel rounded-[1.8rem] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ca5995]">Response speed</p>
              <p className="mt-3 text-3xl font-semibold text-[#41144b]">&lt; 24h</p>
              <p className="mt-2 text-sm text-[#704969]">Average support turnaround for active creators.</p>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="tabs-panel rounded-[1.8rem] p-6">
                <span className="tabs-badge">
                  <Icon className="h-3.5 w-3.5" />
                  Principle
                </span>
                <h2 className="mt-4 text-xl font-semibold text-[#41144b]">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#704969]">{item.body}</p>
              </article>
            )
          })}
        </section>
      </main>
      <Footer />
    </div>
  )
}
