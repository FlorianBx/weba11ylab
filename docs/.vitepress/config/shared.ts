import { defineConfig } from 'vitepress'

export const currentRelease = 'v.0.10.0'

export const sharedConfig = defineConfig({
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
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
