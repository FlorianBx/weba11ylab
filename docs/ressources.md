# Ressources sur l'Accessibilité

## Documentation officielle

### WCAG 2.1

- [Guide de démarrage rapide](https://www.w3.org/WAI/standards-guidelines/wcag/glance/)
- [Documentation complète](https://www.w3.org/WAI/WCAG21/quickref/)
- [Comprendre WCAG 2.1](https://www.w3.org/WAI/WCAG21/Understanding/)

### WAI-ARIA

```html
<!-- Exemples de patterns ARIA -->
<div role="alert" aria-live="assertive">Message important</div>

<button aria-expanded="false" aria-controls="menu">Ouvrir le menu</button>
```

## Formations et tutoriels

1. **Cours en ligne**

   - Udacity Web Accessibility
   - Google Web Accessibility
   - EdX Introduction to Web Accessibility

2. **Tutoriels pratiques**
   - MDN Web Docs Accessibility
   - Web.dev Accessibility
   - A11Y Project

## Outils et bibliothèques

### Bibliothèques React accessibles

```javascript
// Exemple avec @reach/dialog
import { Dialog } from '@reach/dialog'

function AccessibleDialog() {
  return (
    <Dialog aria-label="Confirmation">
      <h2>Confirmation requise</h2>
      <p>Êtes-vous sûr de vouloir continuer ?</p>
      <button>Confirmer</button>
    </Dialog>
  )
}
```

### Outils de test

- WAVE
- axe DevTools
- Lighthouse
- Pa11y
- NVDA
- VoiceOver

## Communauté et support

### Forums et groupes

- WebAIM Forum
- A11Y Slack
- Accessibility Developers Guide

### Conférences

- CSUN Assistive Technology Conference
- AccessU
- A11yTO

## Lectures recommandées

1. **Livres**

   - "Inclusive Design Patterns" par Heydon Pickering
   - "A Web for Everyone" par Sarah Horton
   - "Accessibility for Everyone" par Laura Kalbag

2. **Blogs**
   - The Paciello Group Blog
   - WebAIM Blog
   - A11y With Lindsey

## Outils de développement

```bash
# Installation des outils essentiels
npm install -D eslint-plugin-jsx-a11y
npm install -D axe-core
npm install -D jest-axe
```

## Modèles et patterns

```html
<!-- Modèle de dialogue modal accessible -->
<div role="dialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h2 id="dialog-title">Titre du dialogue</h2>
  <p id="dialog-desc">Description du dialogue</p>
  <button>Fermer</button>
</div>
```

## Services d'audit et de conseil

- Deque Systems
- Level Access
- The Paciello Group
- WebAIM

## Mises à jour et veille

- Suivre @A11Y sur Twitter
- S'abonner aux newsletters d'accessibilité
- Participer aux webinaires
