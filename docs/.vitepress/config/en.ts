import { defineConfig, type DefaultTheme } from 'vitepress'
import { currentRelease } from './shared'

const Guide = [
  { text: 'Getting Started', link: '/en/guide/introduction' },
  { text: 'POUR Principles', link: '/en/guide/perceptible' },
  { text: 'Navigation', link: '/en/guide/keyboard' },
  { text: 'Content', link: '/en/guide/html-structure' },
  { text: 'Testing and Tools', link: '/en/guide/testing-tools' },
]

const release = [
  { text: 'Changelog', link: 'https://github.com/FlorianBx/weba11ylab/releases/tag/0.010' },
  { text: 'Contribute', link: 'https://github.com/FlorianBx/weba11ylab/blob/main/CONTRIBUTING.md' },
]

export const en = defineConfig({
  base: '/en/',
  title: 'WebA11yLab',
  description: 'A comprehensive guide to web accessibility',
  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Florian Beaumont',
    },
    editLink: {
      pattern: 'https://github.com/FlorianBx/doc-accessibility/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      items: [{ text: 'Guide', items: Guide }],
    },
    { text: 'Resources', link: '/en/ressources' },
    { text: currentRelease, items: release, activeMatch: '/' },
  ]
}

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introduction',
      items: [
        { text: 'What is Accessibility', link: '/en/guide/introduction' },
        { text: 'Importance', link: '/en/guide/importance' },
        { text: 'Legal Framework', link: '/en/guide/legal' },
      ],
    },
    {
      text: 'POUR Principles',
      items: [
        { text: 'Perceivable', link: '/en/guide/perceptible' },
        { text: 'Operable', link: '/en/guide/operable' },
        { text: 'Understandable', link: '/en/guide/comprehensible' },
        { text: 'Robust', link: '/en/guide/robust' },
      ],
    },
    {
      text: 'Navigation',
      items: [
        { text: 'Keyboard Navigation', link: '/en/guide/keyboard' },
        { text: 'Focus', link: '/en/guide/focus' },
        { text: 'Skip Links', link: '/en/guide/skip-links' },
      ],
    },
    {
      text: 'Content',
      items: [
        { text: 'HTML Structure', link: '/en/guide/html-structure' },
        { text: 'Images and Alternatives', link: '/en/guide/images' },
        { text: 'Forms', link: '/en/guide/forms' },
        { text: 'Tables', link: '/en/guide/tables' },
      ],
    },
    {
      text: 'Testing and Tools',
      items: [
        { text: 'Checklist', link: '/en/guide/checklist' },
        { text: 'Testing Tools', link: '/en/guide/testing-tools' },
        { text: 'Resources', link: '/en/ressources' },
      ],
    },
  ]
}
