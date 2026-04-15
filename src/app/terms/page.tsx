import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { SITE_CONFIG } from '@/lib/site-config'

const termsSections = [
  {
    title: 'Account and access',
    body: 'You are responsible for the activity on your account. Keep your login secure and use real ownership details for published business and creator profiles.',
  },
  {
    title: 'Content rights',
    body: 'You keep ownership of your original content. By publishing on the platform, you grant a limited license so we can host, index, and display that content in product surfaces.',
  },
  {
    title: 'Acceptable behavior',
    body: 'No spam, impersonation, malware, scraping abuse, or unlawful content. Repeated violations may lead to restricted visibility or account removal.',
  },
  {
    title: 'Platform availability',
    body: 'We continuously improve features and may evolve or retire parts of the service. We aim to communicate major changes before they impact normal workflows.',
  },
]

export default function TermsPage() {
  return (
    <div className="tabs-shell min-h-screen text-[#34143f]">
      <NavbarShell />
      <main className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <section className="tabs-panel-strong rounded-[2.2rem] p-7 sm:p-9">
          <span className="tabs-badge">Terms of Service</span>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#41144b] sm:text-5xl">
            Product use terms for {SITE_CONFIG.name}
          </h1>
          <p className="mt-4 text-sm leading-8 text-[#704969]">
            These terms explain how to use the platform responsibly and what to expect from access, content rights, and moderation decisions.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b5f82]">Last updated: April 15, 2026</p>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {termsSections.map((section) => (
            <article key={section.title} className="tabs-panel rounded-[1.8rem] p-6">
              <h2 className="text-xl font-semibold text-[#41144b]">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#704969]">{section.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 tabs-panel rounded-[1.8rem] p-6">
          <h2 className="text-xl font-semibold text-[#41144b]">Questions about terms</h2>
          <p className="mt-3 text-sm leading-7 text-[#704969]">
            If you need clarification about a section, contact support before publishing sensitive or regulated content.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/help" className="tabs-button">Open help</Link>
            <Link href="/privacy" className="tabs-button-soft">View privacy policy</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
