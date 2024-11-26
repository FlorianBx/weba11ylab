import { defineConfig, type DefaultTheme } from 'vitepress'
import { currentRelease } from './shared'

const Guide = [
  { text: 'Débuter', link: '/guide/introduction' },
  { text: 'Principes POUR', link: '/guide/perceptible' },
  { text: 'Navigation', link: '/guide/keyboard' },
  { text: 'Contenu', link: '/guide/html-structure' },
  { text: 'Tests et Outils', link: '/guide/testing-tools' },
]

const release = [
  { text: 'Changelog', link: 'https://github.com/FlorianBx/weba11ylab/releases/tag/0.010' },
  { text: 'Contribuer', link: 'https://github.com/FlorianBx/weba11ylab/blob/main/CONTRIBUTING.md' },
]

export const fr = defineConfig({
  base: '/',
  title: 'WebA11yLab',
  description: "Un guide complet sur l'accessibilité web",
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    footer: {
      message: 'Publié sous la licence MIT.',
      copyright: 'Copyright © 2024-present Florian Beaumont',
    },
    editLink: {
      pattern: 'https://github.com/FlorianBx/doc-accessibility/edit/main/docs/:path',
      text: 'Modifier cette page sur GitHub',
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      items: [{ text: 'Guide', items: Guide }],
    },
    { text: 'Ressources', link: '/ressources' },
    { text: currentRelease, items: release, activeMatch: '/' },
  ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      items: [
        { text: "Qu'est-ce que l'accessibilité", link: '/guide/introduction' },
        { text: 'Importance', link: '/guide/importance' },
        { text: 'Cadre légal', link: '/guide/legal' },
      ],
    },
    {
      text: 'Principes POUR',
      items: [
        { text: 'Perceptible', link: '/guide/perceptible' },
        { text: 'Opérable', link: '/guide/operable' },
        { text: 'Compréhensible', link: '/guide/comprehensible' },
        { text: 'Robust', link: '/guide/robust' },
      ],
    },
    {
      text: 'Navigation',
      items: [
        { text: 'Navigation au clavier', link: '/guide/keyboard' },
        { text: 'Focus', link: '/guide/focus' },
        { text: 'Skip links', link: '/guide/skip-links' },
      ],
    },
    {
      text: 'Contenu',
      items: [
        { text: 'Structure HTML', link: '/guide/html-structure' },
        { text: 'Images et alternatives', link: '/guide/images' },
        { text: 'Formulaires', link: '/guide/forms' },
        { text: 'Tableaux', link: '/guide/tables' },
      ],
    },
    {
      text: 'Tests et Outils',
      items: [
        { text: 'Checklist', link: '/guide/checklist' },
        { text: 'Outils de test', link: '/guide/testing-tools' },
        { text: 'Ressources', link: '/ressources' },
      ],
    },
  ]
}
