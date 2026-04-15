import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

import Link from 'next/link'
import { ArrowUpRight, Bookmark, FileText, Image as ImageIcon, MapPin, Paperclip, Sparkles, Tag, UserRound } from 'lucide-react'
import { ContentImage } from '@/components/shared/content-image'

export const TASK_POST_CARD_OVERRIDE_ENABLED = true

type PostContent = Record<string, unknown>

function stripHtml(value?: string | null) {
  return (value || '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<\/?[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function excerpt(value?: string | null, max = 120) {
  const text = stripHtml(value)
  if (!text) return ''
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text
}

function getContent(post: SitePost): PostContent {
  return post.content && typeof post.content === 'object' ? (post.content as PostContent) : {}
}

function getImage(post: SitePost, content: PostContent) {
  const media = Array.isArray(post.media) ? post.media : []
  const mediaUrl = media.find((item) => typeof item?.url === 'string' && item.url)?.url
  const direct = typeof content.image === 'string' ? content.image : null
  const images = Array.isArray(content.images) ? content.images.find((item) => typeof item === 'string') : null
  const logo = typeof content.logo === 'string' ? content.logo : null
  return mediaUrl || direct || images || logo || '/placeholder.svg?height=1200&width=900'
}

function category(post: SitePost, content: PostContent) {
  return (typeof content.category === 'string' && content.category) || post.tags?.[0] || 'Post'
}

function location(content: PostContent) {
  return (typeof content.address === 'string' && content.address) || (typeof content.location === 'string' && content.location) || ''
}

export function TaskPostCardOverride(_: {
  post: SitePost
  href: string
  taskKey?: TaskKey
  compact?: boolean
}) {
  const { post, href, taskKey, compact } = _
  const task = taskKey || 'image'
  const content = getContent(post)
  const image = getImage(post, content)
  const metaCategory = category(post, content)
  const metaLocation = location(content)
  const summary = excerpt((typeof content.description === 'string' && content.description) || post.summary, compact ? 72 : 130)

  if (task === 'image') {
    return (
      <Link href={href} className="group block overflow-hidden rounded-[1.8rem] bg-white shadow-[0_22px_40px_rgba(93,28,106,0.12)] transition hover:-translate-y-1 hover:shadow-[0_28px_55px_rgba(93,28,106,0.18)]">
        <div className="relative overflow-hidden">
          <ContentImage src={image} alt={post.title} width={900} height={1200} className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.035]" sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 25vw" quality={75} />
          <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <span className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#5d1c6a]">
              {metaCategory}
            </span>
            <span className="rounded-full bg-[#db7093]/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
              image
            </span>
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2e1137]/88 via-[#2e1137]/30 to-transparent p-4 text-white opacity-0 transition duration-200 group-hover:opacity-100">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-[#5d1c6a]">Open post</span>
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="px-4 pb-4 pt-3">
          <div className="mb-2 flex items-center justify-between gap-2">
            <span className="tabs-badge bg-[#fff1d3] text-[#ca5995]">Visual drop</span>
            <button type="button" className="rounded-full bg-[#fff1d3] p-2 text-[#ca5995]" aria-label="Save post">
              <Bookmark className="h-4 w-4" />
            </button>
          </div>
          <h3 className="line-clamp-2 text-[15px] font-semibold leading-snug text-[#41144b]">{post.title}</h3>
          {summary ? <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#704969]">{summary}</p> : null}
        </div>
      </Link>
    )
  }

  if (task === 'profile') {
    return (
      <Link href={href} className="group flex h-full flex-col rounded-[1.9rem] border border-[rgba(93,28,106,0.1)] bg-[linear-gradient(160deg,rgba(255,176,144,0.26),rgba(202,89,149,0.16),rgba(255,255,255,0.96))] p-4 shadow-[0_18px_34px_rgba(93,28,106,0.1)] transition hover:-translate-y-1 hover:shadow-[0_28px_50px_rgba(93,28,106,0.16)]">
        <div className="relative overflow-hidden rounded-[1.4rem] bg-white/70 p-3">
          <ContentImage src={image} alt={post.title} width={680} height={520} className="h-52 w-full rounded-[1.1rem] object-cover" sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 320px" quality={75} />
          <div className="absolute left-5 top-5 rounded-full bg-[#5d1c6a]/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">
            profile
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#5d1c6a] text-white shadow-[0_10px_20px_rgba(93,28,106,0.16)]">
            <UserRound className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#41144b]">{post.title}</h3>
            <p className="text-sm text-[#704969]">{metaCategory}</p>
          </div>
        </div>
        {summary ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#704969]">{summary}</p> : null}
      </Link>
    )
  }

  if (task === 'article') {
    return (
      <Link href={href} className="group flex h-full flex-col overflow-hidden rounded-[1.8rem] bg-white shadow-[0_18px_36px_rgba(93,28,106,0.1)] transition hover:-translate-y-1 hover:shadow-[0_26px_56px_rgba(93,28,106,0.14)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <ContentImage src={image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 34vw" quality={75} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#41144b]/85 via-[#41144b]/20 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <span className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ca5995]">Story</span>
            <span className="rounded-full bg-black/25 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-white">{metaCategory}</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="line-clamp-2 text-2xl font-semibold tracking-[-0.04em] text-[#41144b]">{post.title}</h3>
          <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#704969]">{summary || 'Open the story and move from the image feed into the context behind it.'}</p>
          <div className="mt-auto pt-4 text-sm font-semibold text-[#5d1c6a]">Read story</div>
        </div>
      </Link>
    )
  }

  if (task === 'listing' || task === 'classified') {
    return (
      <Link href={href} className="group flex h-full flex-col rounded-[1.7rem] border border-[rgba(93,28,106,0.09)] bg-[linear-gradient(180deg,#fffaf3_0%,#fff3ea_100%)] p-5 shadow-[0_16px_30px_rgba(93,28,106,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(93,28,106,0.12)]">
        <div className="flex items-center justify-between gap-3">
          <span className="tabs-badge">{task === 'listing' ? 'Listing' : 'Quick post'}</span>
          <ArrowUpRight className="h-5 w-5 text-[#5d1c6a]" />
        </div>
        <h3 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-[#41144b]">{post.title}</h3>
        {summary ? <p className="mt-3 line-clamp-3 text-sm leading-7 text-[#704969]">{summary}</p> : null}
        <div className="mt-5 flex flex-wrap gap-3 text-xs text-[#5d1c6a]">
          <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5"><Tag className="h-3.5 w-3.5" />{metaCategory}</span>
          {metaLocation ? <span className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5"><MapPin className="h-3.5 w-3.5" />{metaLocation}</span> : null}
        </div>
      </Link>
    )
  }

  if (task === 'pdf' || task === 'sbm' || task === 'social' || task === 'comment') {
    return (
      <Link href={href} className="group flex h-full gap-4 rounded-[1.55rem] border border-[rgba(93,28,106,0.09)] bg-white p-5 shadow-[0_14px_28px_rgba(93,28,106,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(93,28,106,0.12)]">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fff1d3] text-[#ca5995]">
          {task === 'pdf' ? <Paperclip className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#fff1d3] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#ca5995]">
              {task === 'pdf' ? 'PDF' : task === 'sbm' ? 'Saved' : 'Update'}
            </span>
            <span className="text-xs text-[#704969]">{metaCategory}</span>
          </div>
          <h3 className="mt-3 line-clamp-2 text-lg font-semibold text-[#41144b]">{post.title}</h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#704969]">{summary || 'Open this resource and continue browsing the creative network.'}</p>
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className="group flex h-full flex-col gap-4 rounded-[1.75rem] border border-[rgba(93,28,106,0.09)] bg-white p-4 shadow-[0_16px_32px_rgba(93,28,106,0.08)] transition hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(93,28,106,0.12)]">
      <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem]">
        <ContentImage src={image} alt={post.title} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw" quality={75} />
      </div>
      <div>
        <div className="mb-2 flex items-center gap-2 text-xs text-[#704969]">
          <FileText className="h-3.5 w-3.5 text-[#ca5995]" />
          <span>{metaCategory}</span>
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold text-[#41144b]">{post.title}</h3>
      </div>
    </Link>
  )
}
