import { defineConfig } from 'vitepress'

export const currentRelease = 'v.0.10.0'

export const sharedConfig = defineConfig({
  sitemap: {
    hostname: 'https://vitepress.dev',
    transformItems(items) {
      return items.filter((item) => !item.url.includes('migration'))
    },
  },
  /* prettier-ignore */
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.avif' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { property: 'og:site_name', content: 'WebA11yLab' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { name: 'author', content: 'Florian Beaumont' }],
    ['meta', { name: 'description', content: 'Laboratoire d’accessibilité et bonnes pratiques.' }],
    ['meta', { property: 'og:title', content: 'WebA11yLab' }],
    ['meta', { property: 'og:description', content: 'Laboratoire d’accessibilité et bonnes pratiques.' }],
    ['meta', { property: 'og:url', content: 'https://weba11ylab.dev' }],
    ['meta', { property: 'og:image', content: 'https://weba11ylab.dev/og-image.png' }],
  ],
  themeConfig: {
    logo: '/logo.png',
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/FlorianBx/weba11ylab' },
      { icon: 'discord', link: 'https://discord.gg/4uMdkdht' },
      { icon: 'bluesky', link: 'https://bsky.app/profile/florianbx.bsky.social' },
    ],
  },
  locales: {
    root: {
      label: 'Français',
      lang: 'fr',
      link: '/',
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      link: '/ja/',
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
      link: '/zh/',
    },
  },
})
