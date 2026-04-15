import Link from 'next/link'
import { Footer } from '@/components/shared/footer'
import { NavbarShell } from '@/components/shared/navbar-shell'

const supportCards = [
  {
    title: 'Account setup and profile quality',
    body: 'Get guidance on profile completion, social trust signals, and improving creator discoverability.',
  },
  {
    title: 'Publishing and post visibility',
    body: 'Learn category strategy, media best practices, and how to improve reach with cleaner metadata.',
  },
  {
    title: 'Collections and saved workflows',
    body: 'Organize bookmarks into useful systems for teams, clients, or repeated personal research.',
  },
  {
    title: 'Safety and moderation',
    body: 'Report impersonation, abuse, or suspicious activity and track support actions from one place.',
  },
]

const quickAnswers = [
  {
    question: 'How fast does support reply?',
    answer: 'Most requests receive a first response within one business day. Critical safety issues are prioritized.',
  },
  {
    question: 'Can I edit published posts later?',
    answer: 'Yes. You can update titles, descriptions, and visuals, then republish changes without creating a new post.',
  },
  {
    question: 'How do I report a policy issue?',
    answer: 'Open the help request route and include post URLs, account names, and screenshots for faster verification.',
  },
]

export default function HelpPage() {
  return (
    <div className="tabs-shell min-h-screen text-[#34143f]">
      <NavbarShell />
      <main className="w-full px-4 py-10 sm:px-6 lg:px-8">
        <section className="tabs-panel-strong rounded-[2.2rem] p-7 sm:p-9">
          <span className="tabs-badge">Help Center</span>
          <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#41144b] sm:text-5xl">
            Support built for creators and teams
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#704969]">
            Browse practical guides, resolve account issues, and get product help without leaving the same visual experience as the homepage.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="tabs-button">Contact support</Link>
            <Link href="/privacy" className="tabs-button-soft">Policy overview</Link>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-2">
          {supportCards.map((item) => (
            <article key={item.title} className="tabs-panel rounded-[1.8rem] p-6">
              <h2 className="text-xl font-semibold text-[#41144b]">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#704969]">{item.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-8 tabs-panel rounded-[1.8rem] p-6">
          <h2 className="text-xl font-semibold text-[#41144b]">Quick answers</h2>
          <div className="mt-5 grid gap-3">
            {quickAnswers.map((item) => (
              <article key={item.question} className="rounded-[1.1rem] border border-[rgba(93,28,106,0.12)] bg-white/70 p-4">
                <h3 className="text-sm font-semibold text-[#41144b]">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-[#704969]">{item.answer}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
