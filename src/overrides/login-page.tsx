import Link from 'next/link'
import { Image as ImageIcon, Sparkles, UserRound } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  return (
    <div className="tabs-shell min-h-screen text-[#34143f]">
      <NavbarShell />
      <main className="mx-auto max-w-[1520px] px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="tabs-panel-strong rounded-[2.2rem] p-8">
            <ImageIcon className="h-8 w-8 text-[#ca5995]" />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#41144b]">Step back into your creative lane.</h1>
            <p className="mt-5 text-sm leading-8 text-[#704969]">
              Sign in to manage image drops, update your public profile, and keep your visual identity consistent across the site.
            </p>
            <div className="mt-8 grid gap-4">
              {['Image-first workspace', 'Profile-aware publishing surface', 'Same logic, better visual shell'].map((item) => (
                <div key={item} className="rounded-[1.6rem] border border-[rgba(93,28,106,0.1)] bg-white/72 px-4 py-4 text-sm font-medium text-[#41144b]">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="tabs-panel rounded-[2.2rem] p-8">
            <div className="tabs-badge">
              <Sparkles className="h-3.5 w-3.5" />
              Welcome back
            </div>
            <form className="mt-6 grid gap-4">
              <input className="h-12 rounded-2xl border border-[rgba(93,28,106,0.1)] bg-white/78 px-4 text-sm text-[#41144b]" placeholder="Email address" />
              <input className="h-12 rounded-2xl border border-[rgba(93,28,106,0.1)] bg-white/78 px-4 text-sm text-[#41144b]" placeholder="Password" type="password" />
              <button type="submit" className="tabs-button h-12">Sign in</button>
            </form>
            <div className="mt-6 flex items-center justify-between text-sm text-[#704969]">
              <Link href="/forgot-password" className="hover:text-[#41144b] hover:underline">Forgot password?</Link>
              <Link href="/register" className="inline-flex items-center gap-2 font-semibold hover:text-[#41144b] hover:underline">
                <UserRound className="h-4 w-4" />
                Create account
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
