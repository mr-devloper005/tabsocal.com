export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'tabsocal',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Tab Socal',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Image and profile studio',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A playful image-first platform for sharing visuals, discovering creators, and helping standout work find the right audience.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'tabsocal.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://tabsocal.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
