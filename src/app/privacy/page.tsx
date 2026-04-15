import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { NavbarShell } from '@/components/shared/navbar-shell'

const privacySections = [
  {
    title: 'Information collected',
    body: 'We collect account details, profile metadata, and activity signals needed to run feeds, search, moderation, and performance insights.',
  },
  {
    title: 'How information is used',
    body: 'Data is used to deliver features, improve relevance, detect abuse, and provide support. We do not sell personal information.',
  },
  {
    title: 'Control and retention',
    body: 'You can request account updates or deletion. Some data may be retained for legal, security, and anti-fraud obligations.',
  },
  {
    title: 'Cookies and analytics',
    body: 'Essential cookies keep sessions stable. Analytics tools help us measure product quality and improve the creator experience.',
  },
]

export default function PrivacyPage() {
  return (
    <div className="tabs-shell min-h-screen text-[#34143f]">
      <NavbarShell />
      <main className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <section className="tabs-panel-strong rounded-[2.2rem] p-7 sm:p-9">
          <span className="tabs-badge">Privacy Policy</span>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#41144b] sm:text-5xl">
            How your data is handled
          </h1>
          <p className="mt-4 text-sm leading-8 text-[#704969]">
            This policy explains what data we collect, why we collect it, and how we protect user information across publishing and discovery workflows.
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b5f82]">Last updated: April 15, 2026</p>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {privacySections.map((section) => (
            <article key={section.title} className="tabs-panel rounded-[1.8rem] p-6">
              <h2 className="text-xl font-semibold text-[#41144b]">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#704969]">{section.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 tabs-panel rounded-[1.8rem] p-6">
          <h2 className="text-xl font-semibold text-[#41144b]">Need a privacy request?</h2>
          <p className="mt-3 text-sm leading-7 text-[#704969]">
            For account export, deletion, or correction requests, contact support with your account email and request type.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/help" className="tabs-button">Go to help</Link>
            <Link href="/terms" className="tabs-button-soft">Read terms</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
