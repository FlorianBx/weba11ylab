export default {
  base: '/',
  title: 'WebA11yLab',
  description: "Un guide complet sur l'accessibilité web",
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Ressources', link: '/ressources' },
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
  },
}
