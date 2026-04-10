import { Image as ImageIcon, Mail, Sparkles, UserRound } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  const lanes = [
    {
      icon: ImageIcon,
      title: 'Visual campaigns',
      body: 'Talk to us about image drops, featured boards, and creative collaborations built around the visual feed.',
    },
    {
      icon: UserRound,
      title: 'Profile support',
      body: 'Need help shaping a creator page, public identity surface, or profile-first launch? This lane is for you.',
    },
    {
      icon: Mail,
      title: 'Partnerships',
      body: 'Reach out for community launches, media kits, curated features, and cross-promotional collaborations.',
    },
  ]

  return (
    <div className="tabs-shell min-h-screen text-[#34143f]">
      <NavbarShell />
      <main className="mx-auto max-w-[1520px] px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.96fr_1.04fr] lg:items-start">
          <div>
            <div className="tabs-badge">
              <Sparkles className="h-3.5 w-3.5" />
              Contact Tab Socal
            </div>
            <h1 className="mt-4 text-5xl font-semibold tracking-[-0.06em] text-[#41144b]">A support page designed for a creative image-and-profile product.</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#704969]">
              Tell us what you are launching, fixing, or trying to grow. We keep the support flow aligned to the visual product instead of dropping everything into one generic form.
            </p>
            <div className="mt-8 space-y-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="tabs-panel rounded-[1.7rem] p-5">
                  <lane.icon className="h-5 w-5 text-[#ca5995]" />
                  <h2 className="mt-3 text-xl font-semibold text-[#41144b]">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#704969]">{lane.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="tabs-panel-strong rounded-[2.1rem] p-7">
            <h2 className="text-2xl font-semibold text-[#41144b]">Send a message</h2>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-2xl border border-[rgba(93,28,106,0.1)] bg-white/78 px-4 text-sm text-[#41144b]" placeholder="Your name" />
              <input className="h-12 rounded-2xl border border-[rgba(93,28,106,0.1)] bg-white/78 px-4 text-sm text-[#41144b]" placeholder="Email address" />
              <input className="h-12 rounded-2xl border border-[rgba(93,28,106,0.1)] bg-white/78 px-4 text-sm text-[#41144b]" placeholder="What do you need help with?" />
              <textarea className="min-h-[180px] rounded-[1.6rem] border border-[rgba(93,28,106,0.1)] bg-white/78 px-4 py-3 text-sm text-[#41144b]" placeholder="Share the context so we can route you to the right lane." />
              <button type="submit" className="tabs-button h-12">Send message</button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
