import type { TaskKey } from '@/lib/site-config'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight, Bookmark, Compass, Image as ImageIcon, Paperclip, UserRound } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { ContentImage } from '@/components/shared/content-image'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'
import { ArticleComments } from '@/components/tasks/article-comments'
import { fetchTaskPostBySlug, fetchTaskPosts, getPostImages } from '@/lib/task-data'
import { getTaskConfig } from '@/lib/site-config'
import type { SitePost } from '@/lib/site-connector'

export const TASK_DETAIL_PAGE_OVERRIDE_ENABLED = true

type PostContent = Record<string, unknown>

function getContent(post: SitePost): PostContent {
  return post.content && typeof post.content === 'object' ? (post.content as PostContent) : {}
}

function textValue(value: unknown) {
  return typeof value === 'string' ? value : ''
}

export async function TaskDetailPageOverride({ task, slug }: { task: TaskKey; slug: string }) {
  const taskConfig = getTaskConfig(task)
  const post = await fetchTaskPostBySlug(task, slug)

  if (!post) {
    notFound()
  }

  const content = getContent(post)
  const images = getPostImages(post)
  const leadImage = images[0] || '/placeholder.svg?height=1200&width=900'
  const description =
    textValue(content.description) ||
    textValue(content.body) ||
    post.summary ||
    'Details coming soon.'
  const descriptionHtml = formatRichHtml(description, 'Details coming soon.')
  const related = (await fetchTaskPosts(task, 6)).filter((item) => item.slug !== post.slug).slice(0, 3)
  const category = textValue(content.category) || post.tags?.[0] || taskConfig?.label || task

  return (
    <div className="tabs-shell min-h-screen text-[#34143f]">
      <NavbarShell />
      <main className="mx-auto max-w-[1520px] px-4 py-10 sm:px-6 lg:px-8">
        <Link href={taskConfig?.route || '/'} className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#5d1c6a] hover:text-[#41144b]">
          <ArrowLeft className="h-4 w-4" />
          Back to {taskConfig?.label || task}
        </Link>

        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <div className="tabs-badge">
              {task === 'image' ? <ImageIcon className="h-3.5 w-3.5" /> : task === 'profile' ? <UserRound className="h-3.5 w-3.5" /> : task === 'pdf' ? <Paperclip className="h-3.5 w-3.5" /> : <Compass className="h-3.5 w-3.5" />}
              {category}
            </div>
            <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-[#41144b] sm:text-5xl">{post.title}</h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#ca5995]">{task}</span>
              {post.tags?.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full border border-[rgba(93,28,106,0.08)] bg-white/80 px-3 py-2 text-xs font-semibold text-[#704969]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-[2.1rem] overflow-hidden shadow-[0_24px_60px_rgba(93,28,106,0.14)]">
              <ContentImage src={leadImage} alt={post.title} width={1200} height={1400} className="h-auto w-full object-cover" sizes="(max-width: 1024px) 100vw, 58vw" quality={80} />
            </div>
          </div>

          <div className="grid gap-5 lg:sticky lg:top-24">
            <div className="tabs-panel-strong rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ca5995]">Detail view</p>
              <p className="mt-4 text-sm leading-7 text-[#704969]">
                This page keeps the original post logic intact while shifting the presentation into a more colorful, image-aware editorial frame.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/profile" className="tabs-button-soft">
                  <UserRound className="h-4 w-4" />
                  Open profiles
                </Link>
                <Link href="/image-sharing" className="tabs-button">
                  More visuals
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="tabs-panel rounded-[2rem] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ca5995]">About this post</p>
              <RichContent html={descriptionHtml} className="mt-4 text-[#704969] prose-p:my-4 prose-h2:mt-8 prose-h2:text-[#41144b]" />
            </div>

            {task === 'article' ? (
              <div className="tabs-panel rounded-[2rem] p-6">
                <ArticleComments slug={post.slug} />
              </div>
            ) : null}
          </div>
        </section>

        {images.length > 1 ? (
          <section className="mt-10">
            <div className="tabs-badge">More from this post</div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {images.slice(1, 4).map((image, index) => (
                <div key={`${image}-${index}`} className="overflow-hidden rounded-[1.8rem] shadow-[0_18px_36px_rgba(93,28,106,0.1)]">
                  <ContentImage src={image} alt={`${post.title} ${index + 2}`} width={900} height={1100} className="h-full w-full object-cover" sizes="(max-width: 768px) 92vw, 31vw" quality={75} />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {related.length ? (
          <section className="mt-12">
            <div className="tabs-badge">
              <Bookmark className="h-3.5 w-3.5" />
              Related in this lane
            </div>
            <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((item, index) => (
                <TaskPostCard key={item.id ?? `${item.slug}-${index}`} post={item} href={`${taskConfig?.route || '/'}${taskConfig?.route?.endsWith('/') ? '' : '/'}${item.slug}`.replace('//', '/')} taskKey={task} compact />
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  )
}
