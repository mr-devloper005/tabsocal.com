import Link from 'next/link'
import { ArrowRight, Compass, Image as ImageIcon, Sparkles, UserRound } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { fetchTaskPosts } from '@/lib/task-data'
import { SITE_CONFIG } from '@/lib/site-config'

export const HOME_PAGE_OVERRIDE_ENABLED = true

export async function HomePageOverride() {
  const [imagePosts, profilePosts, articlePosts, savedPosts] = await Promise.all([
    fetchTaskPosts('image', 24),
    fetchTaskPosts('profile', 8),
    fetchTaskPosts('article', 4),
    fetchTaskPosts('sbm', 4),
  ])

  const heroPins = imagePosts.slice(0, 14)
  const creatorSpots = profilePosts.slice(0, 4)
  const sideReads = articlePosts.slice(0, 3)
  const savedFinds = savedPosts.slice(0, 3)
  const labelCloud = ['color edits', 'portrait studies', 'lookbooks', 'art direction', 'textures', 'identity']

  return (
    <div className="tabs-shell min-h-screen text-[#34143f]">
      <NavbarShell />
      <main className="mx-auto max-w-[1520px] px-4 pb-14 pt-6 sm:px-6 lg:px-8">
        <SchemaJsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: SITE_CONFIG.name,
            url: SITE_CONFIG.baseUrl,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${SITE_CONFIG.baseUrl.replace(/\/$/, '')}/search?q={search_term_string}`,
              'query-input': 'required name=search_term_string',
            },
          }}
        />

        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="lg:sticky lg:top-24">
            <div className="tabs-badge">
              <Sparkles className="h-3.5 w-3.5" />
              Funky visual network
            </div>
            <h1 className="mt-5 max-w-[11ch] text-5xl font-semibold tracking-[-0.07em] text-[#41144b] sm:text-6xl">
              Images that pop. Profiles that feel alive.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#704969]">
              Tab Socal is built for visual discovery first. The first scroll behaves like a live creative board, while profiles, stories, and saved resources sit behind it as supporting layers.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/image-sharing" className="tabs-button">
                Explore images
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/profile" className="tabs-button-soft">
                Meet creators
                <UserRound className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-7 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              <div className="tabs-panel rounded-[1.8rem] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ca5995]">Primary</p>
                <p className="mt-2 text-xl font-semibold">Image feed</p>
                <p className="mt-2 text-sm leading-6 text-[#704969]">Tall cards, quick scanning, and a board-like rhythm shape the first impression.</p>
              </div>
              <div className="tabs-panel rounded-[1.8rem] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ca5995]">Secondary</p>
                <p className="mt-2 text-xl font-semibold">Profiles</p>
                <p className="mt-2 text-sm leading-6 text-[#704969]">Creator surfaces stay visible without turning the site into a business directory clone.</p>
              </div>
              <div className="tabs-panel rounded-[1.8rem] p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#ca5995]">Support</p>
                <p className="mt-2 text-xl font-semibold">Stories + saves</p>
                <p className="mt-2 text-sm leading-6 text-[#704969]">Articles and saved finds are still live, just dialed back in the main discovery flow.</p>
              </div>
            </div>

            <div className="tabs-panel-strong tabs-noise mt-8 rounded-[2rem] p-5">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="tabs-badge">Creative search lane</div>
                  <p className="mt-4 text-2xl font-semibold tracking-[-0.05em]">Search moods, visuals, creators, and reference trails.</p>
                </div>
                <Compass className="hidden h-10 w-10 text-[#ca5995] sm:block" />
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {labelCloud.map((label) => (
                  <span key={label} className="rounded-full border border-[rgba(93,28,106,0.1)] bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#5d1c6a]">
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="tabs-masonry">
            {heroPins.map((post, index) => (
              <TaskPostCard key={post.id ?? `${post.slug}-${index}`} post={post} href={`/image-sharing/${post.slug}`} taskKey="image" />
            ))}
          </div>
        </section>

        <section className="mt-14 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="tabs-panel-strong rounded-[2.4rem] p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="tabs-badge">
                  <UserRound className="h-3.5 w-3.5" />
                  Creator focus
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em]">Profiles feel expressive and social, not stiff or corporate.</h2>
              </div>
              <Link href="/profile" className="tabs-button-soft hidden sm:inline-flex">
                All profiles
              </Link>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {creatorSpots.map((post, index) => (
                <TaskPostCard key={post.id ?? `${post.slug}-${index}`} post={post} href={`/profile/${post.slug}`} taskKey="profile" compact />
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            <div className="tabs-panel rounded-[2rem] p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="tabs-badge">
                    <ImageIcon className="h-3.5 w-3.5" />
                    Side reading
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.05em]">Stories stay accessible without stealing the homepage from the images.</h2>
                </div>
                <Link href="/articles" className="text-sm font-semibold text-[#5d1c6a]">All stories</Link>
              </div>
              <div className="mt-5 grid gap-4">
                {sideReads.map((post, index) => (
                  <TaskPostCard key={post.id ?? `${post.slug}-${index}`} post={post} href={`/articles/${post.slug}`} taskKey="article" compact />
                ))}
              </div>
            </div>

            <div className="tabs-panel rounded-[2rem] p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="tabs-badge">
                    <Compass className="h-3.5 w-3.5" />
                    Saved boards
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.05em]">Reference links and support resources stay nearby for deeper exploration.</h2>
                </div>
                <Link href="/sbm" className="text-sm font-semibold text-[#5d1c6a]">Open saved</Link>
              </div>
              <div className="mt-5 grid gap-4">
                {savedFinds.map((post, index) => (
                  <TaskPostCard key={post.id ?? `${post.slug}-${index}`} post={post} href={`/sbm/${post.slug}`} taskKey="sbm" compact />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
