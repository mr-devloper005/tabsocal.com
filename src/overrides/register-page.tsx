import Link from 'next/link'
import { Image as ImageIcon, Sparkles, UserRound } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

export function RegisterPageOverride() {
  return (
    <div className="tabs-shell min-h-screen text-[#34143f]">
      <NavbarShell />
      <main className="mx-auto max-w-[1520px] px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="tabs-panel-strong rounded-[2.2rem] p-8">
            <ImageIcon className="h-8 w-8 text-[#ca5995]" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#41144b]">Create a profile built for visuals, not a generic account shell.</h1>
            <p className="mt-5 text-sm leading-8 text-[#704969]">
              Set up your public identity, connect it to image posts, and start publishing into a feed that actually behaves like a creative board.
            </p>
            <div className="mt-8 grid gap-4">
              {['Profile-led discovery', 'Image-first publishing', 'Distinct visual identity across the whole product'].map((item) => (
                <div key={item} className="rounded-[1.6rem] border border-[rgba(93,28,106,0.1)] bg-white/72 px-4 py-4 text-sm font-medium text-[#41144b]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="tabs-panel rounded-[2.2rem] p-8">
            <div className="tabs-badge">
              <Sparkles className="h-3.5 w-3.5" />
              Join the network
            </div>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-2xl border border-[rgba(93,28,106,0.1)] bg-white/78 px-4 text-sm text-[#41144b]" placeholder="Full name" />
              <input className="h-12 rounded-2xl border border-[rgba(93,28,106,0.1)] bg-white/78 px-4 text-sm text-[#41144b]" placeholder="Email address" />
              <input className="h-12 rounded-2xl border border-[rgba(93,28,106,0.1)] bg-white/78 px-4 text-sm text-[#41144b]" placeholder="Password" type="password" />
              <input className="h-12 rounded-2xl border border-[rgba(93,28,106,0.1)] bg-white/78 px-4 text-sm text-[#41144b]" placeholder="What kind of work do you share?" />
              <button type="submit" className="tabs-button h-12">Create account</button>
            </form>
            <div className="mt-6 flex items-center justify-between text-sm text-[#704969]">
              <span>Already have an account?</span>
              <Link href="/login" className="inline-flex items-center gap-2 font-semibold hover:text-[#41144b] hover:underline">
                <UserRound className="h-4 w-4" />
                Sign in
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
