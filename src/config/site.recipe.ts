import type { SiteRecipe } from '@/design/factory/recipe-types'

export const SITE_RECIPE: SiteRecipe = {
  productFamily: 'visual',
  themePack: 'pinterest-creator',
  homepageTemplate: 'image-profile-home',
  navbarTemplate: 'floating-bar',
  footerTemplate: 'dense-footer',
  motionPack: 'studio-stagger',
  primaryTask: 'image',
  enabledTasks: ['image', 'profile', 'article', 'sbm', 'listing', 'classified', 'pdf'],
  taskTemplates: {
    image: 'image-masonry',
    profile: 'profile-creator',
    article: 'article-editorial',
    sbm: 'sbm-curation',
    listing: 'listing-showcase',
    classified: 'classified-bulletin',
    pdf: 'sbm-library',
  },
  manualOverrides: {
    navbar: true,
    footer: true,
    homePage: true,
    taskListPage: true,
    taskDetailPage: true,
    taskCard: true,
    contactPage: true,
    loginPage: true,
    registerPage: true,
  },
}
