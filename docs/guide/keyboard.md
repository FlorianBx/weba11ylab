# Navigation au clavier

## Importance

La navigation au clavier est essentielle pour de nombreux utilisateurs qui ne peuvent pas utiliser une souris.

## Principes fondamentaux

### 1. Focus visible

```css
/* Style de focus personnalisé */
:focus {
  outline: 3px solid #4a90e2;
  outline-offset: 2px;
}

/* Ne jamais supprimer l'outline sans alternative */
:focus:not(:focus-visible) {
  outline: none;
  box-shadow: 0 0 0 3px #4a90e2;
}
```

### 2. Ordre logique de tabulation

```html
<header>
  <nav>
    <a href="#main-content" class="skip-link"> Aller au contenu principal </a>
    <a href="/">Accueil</a>
    <a href="/about">À propos</a>
  </nav>
</header>
<main id="main-content" tabindex="-1">
  <!-- Contenu principal -->
</main>
```

### 3. Raccourcis clavier

- Tab : Navigation entre les éléments focusables
- Shift + Tab : Navigation arrière
- Enter/Space : Activation des éléments
- Flèches : Navigation dans les menus

## Implémentation

```javascript
// Gestionnaire de touches pour un menu
function handleMenuKeyPress(event) {
  switch (event.key) {
    case 'ArrowDown':
      // Navigation vers le bas
      focusNextMenuItem()
      break
    case 'ArrowUp':
      // Navigation vers le haut
      focusPreviousMenuItem()
      break
    case 'Escape':
      // Fermeture du menu
      closeMenu()
      break
  }
}
```

## Tests

1. Débrancher la souris
2. Vérifier la visibilité du focus
3. Tester tous les éléments interactifs
4. Vérifier les pièges au clavier
