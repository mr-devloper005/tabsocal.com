import type { TaskKey } from '@/lib/site-config'
import Link from 'next/link'
import { Compass, Image as ImageIcon, LayoutGrid, Search, Sparkles, UserRound } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskListClient } from '@/components/tasks/task-list-client'
import { fetchTaskPosts } from '@/lib/task-data'
import { getTaskConfig } from '@/lib/site-config'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'

export const TASK_LIST_PAGE_OVERRIDE_ENABLED = true

const introMap: Record<string, { badge: string; title: string; body: string; chips: string[] }> = {
  image: {
    badge: 'Visual lane',
    title: 'A bright, high-scroll image feed with stronger card variety.',
    body: 'This page leans into denser image browsing, taller cards, and faster scanning so the product stays image-first even beyond the homepage.',
    chips: ['masonry rhythm', 'fast scan', 'high image density'],
  },
  profile: {
    badge: 'Creator lane',
    title: 'Profiles with more personality, style, and social presence.',
    body: 'The profile surface stays connected to the images but gives creators more breathing room, stronger presentation, and identity-first framing.',
    chips: ['identity first', 'creator spotlight', 'social feel'],
  },
  article: {
    badge: 'Story lane',
    title: 'Reading support that feels editorial without hijacking the product.',
    body: 'Articles remain fully live, but the layout shifts to calmer reading blocks so the site does not collapse into one repeated card template.',
    chips: ['editorial spacing', 'support reading', 'context pages'],
  },
}

export async function TaskListPageOverride({ task, category }: { task: TaskKey; category?: string }) {
  const taskConfig = getTaskConfig(task)
  const posts = await fetchTaskPosts(task, 30)
  const normalizedCategory = category ? normalizeCategory(category) : 'all'
  const intro = introMap[task] || {
    badge: 'Support lane',
    title: `${taskConfig?.label || task} in a lighter support surface.`,
    body: 'This route remains fully accessible and functional, but it sits in a lower-emphasis presentation than the primary image and profile surfaces.',
    chips: ['supporting route', 'same logic', 'lighter emphasis'],
  }

  const heroIcon = task === 'image' ? ImageIcon : task === 'profile' ? UserRound : task === 'article' ? Compass : LayoutGrid
  const HeroIcon = heroIcon

  return (
    <div className="tabs-shell min-h-screen text-[#34143f]">
      <NavbarShell />
      <main className="mx-auto max-w-[1520px] px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div className="tabs-panel-strong rounded-[2.3rem] p-6 sm:p-8">
            <div className="tabs-badge">
              <HeroIcon className="h-3.5 w-3.5" />
              {intro.badge}
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.06em] text-[#41144b] sm:text-5xl">{intro.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#704969]">{intro.body}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {intro.chips.map((chip) => (
                <span key={chip} className="rounded-full border border-[rgba(93,28,106,0.1)] bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5d1c6a]">
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={taskConfig?.route || '#'} className="tabs-button">Open latest</Link>
              <Link href="/search" className="tabs-button-soft">
                <Search className="h-4 w-4" />
                Search site
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="tabs-panel rounded-[1.8rem] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ca5995]">Primary</p>
              <p className="mt-3 text-xl font-semibold text-[#41144b]">{task === 'image' ? 'Image-heavy' : 'Task-aware'}</p>
              <p className="mt-2 text-sm leading-6 text-[#704969]">The visual rhythm changes by task instead of reusing one card shell everywhere.</p>
            </div>
            <div className="tabs-panel rounded-[1.8rem] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ca5995]">Filter</p>
              <form action={taskConfig?.route || '#'} className="mt-3 grid gap-3">
                <select name="category" defaultValue={normalizedCategory} className="h-11 rounded-xl border border-[rgba(93,28,106,0.1)] bg-white/85 px-3 text-sm text-[#41144b]">
                  <option value="all">All categories</option>
                  {CATEGORY_OPTIONS.map((item) => (
                    <option key={item.slug} value={item.slug}>{item.name}</option>
                  ))}
                </select>
                <button type="submit" className="tabs-button h-11">Apply</button>
              </form>
            </div>
            <div className="tabs-panel rounded-[1.8rem] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ca5995]">Access</p>
              <p className="mt-3 text-xl font-semibold text-[#41144b]">Still modular</p>
              <p className="mt-2 text-sm leading-6 text-[#704969]">Lower-emphasis tasks remain available by URL and inside the wider site structure.</p>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <TaskListClient task={task} initialPosts={posts} category={normalizedCategory} />
        </section>

        <section className="mt-10 grid gap-4 lg:grid-cols-3">
          {[
            { title: 'Image sharing', href: '/image-sharing' },
            { title: 'Profiles', href: '/profile' },
            { title: 'Saved resources', href: '/sbm' },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="tabs-panel rounded-[1.8rem] p-5 transition hover:-translate-y-1">
              <div className="tabs-badge">{item.title}</div>
              <p className="mt-4 text-lg font-semibold text-[#41144b]">Move into {item.title.toLowerCase()} without leaving the same product system.</p>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
