const Guide = [
  { text: 'Débuter', link: '/guide/introduction' },
  { text: 'Principes POUR', link: '/guide/perceptible' },
  { text: 'Navigation', link: '/guide/keyboard' },
  { text: 'Contenu', link: '/guide/html-structure' },
  { text: 'Tests et Outils', link: '/guide/testing-tools' },
]

const Links = [
  { text: 'Add-ons', link: '/add-ons' },
  { text: 'Ecosystem', link: '/ecosystem' },
  { text: 'Export Size', link: '/export-size' },
  { text: 'Recent Updated', link: '/functions.html#sort=updated' },
  { text: 'Why no translations?', link: '/why-no-translations' },
]

const Learn = [
  { text: 'Why VueUse', link: '/why-vueuse' },
  { text: 'Why no translations?', link: '/why-no-translations' },
]

const release = [
  // { text: 'v1.0.0', link: '/changelog#v100' },
  // { text: 'v0.4.0', link: '/changelog#v040' },
  // { text: 'v0.3.0', link: '/changelog#v030' },
  // { text: 'v0.2.0', link: '/changelog#v020' },
  { text: 'v0.01.0', link: 'https://github.com/FlorianBx/weba11ylab/releases/tag/0.010' },
]

const currentRelease = release[0].text

export default {
  base: '/',
  title: 'WebA11yLab',
  description: "Un guide complet sur l'accessibilité web",
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
    nav: [
      // { text: 'Accueil', link: '/' },
      {
        text: 'Guide',
        items: [
          { text: 'Guide', items: Guide },
          // { text: 'Learn', items: Learn },
          // { text: 'Links', items: Links },
        ],
      },
      // { text: 'Guide', link: '/guide/' },
      { text: 'Ressources', link: '/ressources' },
      { text: currentRelease, items: release, activeMatch: '/' },
    ],
    sidebar: [
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
    ],
    editLink: {
      pattern: 'https://github.com/FlorianBx/doc-accessibility/edit/main/docs/:path',
      text: 'Modifier cette page sur GitHub',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Florian Beaumont',
    },
  },
}
