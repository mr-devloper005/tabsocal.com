import Link from 'next/link'
import { Compass, Image as ImageIcon, Sparkles, UserRound } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

export function FooterOverride() {
  return (
    <footer className="tabs-shell border-t border-[rgba(93,28,106,0.08)]">
      <div className="mx-auto grid max-w-[1520px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:px-8">
        <div className="tabs-panel-strong rounded-[2rem] p-6">
          <div className="tabs-badge">
            <Sparkles className="h-3.5 w-3.5" />
            {SITE_CONFIG.name}
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em] text-[#41144b]">A playful image-and-profile product, not a recycled template.</h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-[#704969]">
            The homepage puts visuals first, creator identity second, and everything else into supporting discovery lanes without removing the underlying routes.
          </p>
        </div>

        <div className="tabs-panel rounded-[2rem] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ca5995]">Main lanes</p>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-[#41144b]">
            <Link href="/image-sharing" className="inline-flex items-center gap-2 hover:text-[#ca5995]"><ImageIcon className="h-4 w-4" />Image feed</Link>
            <Link href="/profile" className="inline-flex items-center gap-2 hover:text-[#ca5995]"><UserRound className="h-4 w-4" />Profiles</Link>
            <Link href="/articles" className="inline-flex items-center gap-2 hover:text-[#ca5995]"><Compass className="h-4 w-4" />Stories</Link>
          </div>
        </div>

        <div className="tabs-panel rounded-[2rem] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ca5995]">Supporting routes</p>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-semibold text-[#41144b]">
            <Link href="/sbm" className="hover:text-[#ca5995]">Saved</Link>
            <Link href="/listings" className="hover:text-[#ca5995]">Listings</Link>
            <Link href="/classifieds" className="hover:text-[#ca5995]">Classifieds</Link>
            <Link href="/pdf" className="hover:text-[#ca5995]">PDF</Link>
            <Link href="/contact" className="hover:text-[#ca5995]">Contact</Link>
            <Link href="/register" className="hover:text-[#ca5995]">Register</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
