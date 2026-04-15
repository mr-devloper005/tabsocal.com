import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Creative boards and standout profiles',
  },
  footer: {
    tagline: 'Images, creators, collections, and visual discovery',
  },
  hero: {
    badge: 'Image-first social canvas',
    title: ['A vibrant home for', 'visual drops and creator profiles.'],
    description:
      'Explore image-led posts, creative identities, and supporting content through a playful visual system built to help memorable work get noticed.',
    primaryCta: {
      label: 'Open image feed',
      href: '/image-sharing',
    },
    secondaryCta: {
      label: 'Meet creators',
      href: '/profile',
    },
    searchPlaceholder: 'Search images, creators, boards, and saved finds',
    focusLabel: 'Spotlight',
    featureCardBadge: 'live board highlights',
    featureCardTitle: 'Fresh posts shape the rhythm of the homepage in real time.',
    featureCardDescription:
      'The feed stays image-heavy while profile, article, and resource routes remain live in supporting layers.',
  },
  home: {
    metadata: {
      title: 'Images, creators, and visual discovery',
      description:
        'Browse image-led posts, creator profiles, and supporting content through a bright, playful discovery experience.',
      openGraphTitle: 'Images, creators, and visual discovery',
      openGraphDescription:
        'Discover images, profiles, and connected content through a bold gallery-first interface.',
      keywords: ['image sharing', 'creator profiles', 'visual discovery', 'gallery platform'],
    },
    introBadge: 'Why it works',
    introTitle: 'Built for images to travel farther and profiles to feel more alive.',
    introParagraphs: [
      'The homepage behaves like a creative board instead of a generic landing page, so visitors meet the images first and the supporting context second.',
      'Profiles work like identity anchors for the visual feed, helping people move from standout work into the creator, studio, or personality behind it.',
      'Other tasks stay active beneath the same logic, but the interface makes it clear that this product lives around images and the people who publish them.',
    ],
    sideBadge: 'What changes',
    sidePoints: [
      'Image boards lead the first scroll instead of text-heavy hero blocks.',
      'Creator profiles feel playful, editorial, and social instead of business-like.',
      'Supporting routes stay accessible without hijacking the main visual rhythm.',
      'Cards, spacing, and motion are tuned for browsing many images quickly.',
    ],
    primaryLink: {
      label: 'Browse images',
      href: '/image-sharing',
    },
    secondaryLink: {
      label: 'Browse profiles',
      href: '/profile',
    },
  },
  cta: {
    badge: 'Start sharing',
    title: 'Bring your visuals, style, and public identity into one brighter social canvas.',
    description:
      'Publish images, build a memorable profile, and keep supporting content available without flattening everything into the same template.',
    primaryCta: {
      label: 'Create profile',
      href: '/register',
    },
    secondaryCta: {
      label: 'Talk to us',
      href: '/contact',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this lane.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Stories, notes, and supporting reads',
    description: 'Read stories, commentary, and supporting editorial content that sits behind the visual feed.',
  },
  listing: {
    title: 'Listings and studio links',
    description: 'Explore listings, directories, and structured pages connected to creators and visual projects.',
  },
  classified: {
    title: 'Announcements and quick drops',
    description: 'Browse offers, notices, and timely posts in a faster, more compact discovery format.',
  },
  image: {
    title: 'Image sharing and visual drops',
    description: 'Explore galleries, image-led posts, and high-visibility visuals designed for fast browsing.',
  },
  profile: {
    title: 'Profiles and creative identities',
    description: 'Discover creator profiles, public identities, and personality-rich pages behind the visuals.',
  },
  sbm: {
    title: 'Curated links and saved boards',
    description: 'Browse saved links, references, and curated resources that support creative discovery.',
  },
  pdf: {
    title: 'PDFs and downloadable kits',
    description: 'Open documents, briefs, and downloadable resources connected to the visual ecosystem.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings, shops, and structured pages',
    paragraphs: [
      'Explore structured pages, shop links, and service-style posts that sit behind the creative work on the site.',
      'Listings stay available for practical browsing, but they are framed as supporting surfaces around the main image-and-profile identity.',
      'Use category filters to move between practical resources without losing access to the core visual feed.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore classifieds', href: '/classifieds' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  article: {
    title: 'Articles, stories, and context',
    paragraphs: [
      'This section gives extra context to the visual feed through stories, explainers, interviews, and longer notes.',
      'Articles remain fully functional, but the page design deliberately separates them from the image-heavy rhythm used elsewhere.',
      'Use this section when you want deeper reading behind creators, drops, and saved references.',
    ],
    links: [
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open image sharing', href: '/image-sharing' },
      { label: 'Browse resources', href: '/pdf' },
    ],
  },
  classified: {
    title: 'Classifieds, offers, and quick updates',
    paragraphs: [
      'This lane surfaces short-term offers, requests, and announcements in a compact, scan-first format.',
      'It stays connected to the broader system while keeping the pacing quicker and more alert than the image and profile pages.',
      'Use it for fast-moving posts, then jump into related profiles or stories when you want more context.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'Image-led posts and visual stories',
    paragraphs: [
      'Image sharing is the lead surface of the product, so the page is tuned for faster scanning, taller cards, and stronger visual hierarchy.',
      'These posts act as the main discovery engine and connect naturally to profiles, saved boards, articles, and supporting resources.',
      'Browse recent visuals, open a single post, then continue into the person or context behind it.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open classifieds', href: '/classifieds' },
    ],
  },
  profile: {
    title: 'Profiles, identities, and public pages',
    paragraphs: [
      'Profiles show the face, taste, and public identity behind the work that appears in the image feed.',
      'They function as identity anchors for creators, studios, brands, and public-facing personas without flattening them into business cards.',
      'Use profile pages to move from image discovery into the person, voice, or brand behind the post.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'Browse image sharing', href: '/image-sharing' },
    ],
  },
  sbm: {
    title: 'Curated links and bookmarked resources',
    paragraphs: [
      'This section collects saved links, references, mood-board resources, and support material around the visual feed.',
      'Bookmarks stay live in the system, but their UI is calmer and denser than the image and profile surfaces.',
      'Use this lane to move from inspiration into reference material without leaving the broader product.',
    ],
    links: [
      { label: 'Browse articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'PDFs, documents, and downloadable files',
    paragraphs: [
      'The PDF library supports downloadable kits, decks, briefs, and documents that orbit the creator and image experience.',
      'These documents stay available without borrowing the same visual rhythm used by the more image-heavy parts of the product.',
      'Use this section for practical files, then jump back into profiles, boards, or articles when you need context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'See listings', href: '/listings' },
      { label: 'Explore profiles', href: '/profile' },
    ],
  },
  social: {
    title: 'Short updates and community signals',
    paragraphs: [
      'Short updates add quick signals that keep activity flowing across the platform.',
      'They work well with stories, listings, and resources by helping visitors move from brief updates into deeper content.',
      'Use these posts as lightweight entry points into the broader site experience.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Comments and contextual responses',
    paragraphs: [
      'Comments surface responses connected directly to articles and help keep discussion close to the writing it belongs to.',
      'This layer adds perspective and reaction without needing a separate standalone content format.',
      'Use comments as supporting context beneath stories, then continue exploring related content from the same topic area.',
    ],
    links: [
      { label: 'Explore articles', href: '/articles' },
      { label: 'View listings', href: '/listings' },
      { label: 'See classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organizations, teams, and structured entities',
    paragraphs: [
      'Organization pages provide structured identity surfaces for teams, brands, communities, and agencies.',
      'Used with listings, stories, profiles, and resources, they help create stronger structure across the platform.',
      'Connect organization pages with related content to build a clearer and more unified site presence.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}
