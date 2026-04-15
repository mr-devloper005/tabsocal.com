'use client'

import { useMemo, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, Plus, Search, UserRound, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useAuth } from '@/lib/auth-context'

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

export const NAVBAR_OVERRIDE_ENABLED = true

export function NavbarOverride() {
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const [open, setOpen] = useState(false)

  const primaryLinks = useMemo(
    () => [
      { label: 'Images', href: '/image-sharing' },
      { label: 'Profiles', href: '/profile' },
    ],
    [],
  )

  const supportLinks = useMemo(
    () => [
      { label: 'About', href: '/about' },
      { label: 'Terms', href: '/terms' },
      { label: 'Policy', href: '/privacy' },
      { label: 'Help', href: '/help' },
    ],
    [],
  )

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(93,28,106,0.08)] bg-[rgba(255,248,234,0.82)] backdrop-blur-xl">
      <nav className="flex w-full items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 rounded-full bg-white/80 px-3 py-2 shadow-[0_16px_32px_rgba(93,28,106,0.08)]">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white shadow-[0_14px_26px_rgba(93,28,106,0.22)]">
            <img src="/favicon.png?v=20260415" alt={`${SITE_CONFIG.name} logo`} width="44" height="44" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-[#41144b]">{SITE_CONFIG.name}</p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#ca5995]">Image + profile social canvas</p>
          </div>
        </Link>

        <div className="hidden min-w-0 flex-1 items-center gap-3 lg:flex">
          <Link href="/search" className="flex min-w-0 flex-1 items-center gap-3 rounded-full bg-white/86 px-5 py-3 text-sm text-[#704969] shadow-[0_12px_26px_rgba(93,28,106,0.06)]">
            <Search className="h-4 w-4 text-[#ca5995]" />
            <span className="truncate">Search visuals, creators, saved boards, and support content</span>
          </Link>
          <div className="flex items-center gap-2 rounded-full bg-white/72 p-1.5 shadow-[0_12px_26px_rgba(93,28,106,0.05)]">
            {primaryLinks.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    active
                      ? 'rounded-full bg-[#5d1c6a] px-4 py-2.5 text-sm font-semibold text-white'
                      : 'rounded-full px-4 py-2.5 text-sm font-semibold text-[#5d1c6a] transition hover:bg-white hover:text-[#41144b]'
                  }
                >
                  {item.label}
                </Link>
              )
            })}
          </div>
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="hidden items-center gap-2 xl:flex">
            {supportLinks.slice(0, 2).map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-semibold text-[#704969] hover:bg-white/70 hover:text-[#41144b]">
                {item.label}
              </Link>
            ))}
          </div>
          <Link href="/create/image" className="tabs-button px-4 py-3">
            <Plus className="h-4 w-4" />
            Create
          </Link>
          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <Link href="/register" className="tabs-button-soft px-4 py-3">
              Join
            </Link>
          )}
        </div>

        <button type="button" onClick={() => setOpen((value) => !value)} className="ml-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/86 text-[#41144b] lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-[rgba(93,28,106,0.08)] bg-[rgba(255,248,234,0.96)] px-4 py-4 lg:hidden">
          <div className="mb-4 flex items-center gap-2 rounded-full bg-white/80 px-4 py-3 text-sm text-[#704969]">
            <Search className="h-4 w-4 text-[#ca5995]" />
            Search the visual feed
          </div>
          <div className="grid gap-2">
            {[...primaryLinks, ...supportLinks].map((item) => (
              <Link key={item.href} href={item.href} className="rounded-[1.2rem] bg-white/80 px-4 py-3 text-sm font-semibold text-[#41144b]">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex gap-2">
            <Link href="/create/image" className="tabs-button flex-1">
              Create pin
            </Link>
            <Link href="/profile" className="tabs-button-soft flex-1 justify-center">
              <UserRound className="h-4 w-4" />
              Profiles
            </Link>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="tabs-badge">
              Support and policy pages
            </span>
          </div>
        </div>
      ) : null}
    </header>
  )
}
