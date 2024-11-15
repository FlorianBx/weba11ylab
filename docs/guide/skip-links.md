# Skip Links (Liens d'évitement)

## Qu'est-ce qu'un skip link ?

Les liens d'évitement permettent aux utilisateurs de clavier de sauter directement aux sections principales du contenu, évitant ainsi la navigation répétitive.

## Implémentation

### HTML de base

```html
<body>
  <a href="#main-content" class="skip-link"> Aller au contenu principal </a>

  <header>
    <!-- Navigation, etc. -->
  </header>

  <main id="main-content" tabindex="-1">
    <!-- Contenu principal -->
  </main>
</body>
```

### CSS nécessaire

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px;
  background-color: #000;
  color: white;
  z-index: 100;
  transition: top 0.2s ease;
}

.skip-link:focus {
  top: 0;
}

/* S'assurer que l'élément cible peut recevoir le focus */
[tabindex='-1'] {
  outline: none;
}
```

## Types de liens d'évitement

1. **Contenu principal**

```html
<a href="#main-content">Aller au contenu principal</a>
```

2. **Navigation**

```html
<a href="#navigation">Aller à la navigation</a>
```

3. **Recherche**

```html
<a href="#search">Aller à la recherche</a>
```

4. **Multiple liens d'évitement**

```html
<ul class="skip-links">
  <li><a href="#main-content">Contenu principal</a></li>
  <li><a href="#navigation">Navigation</a></li>
  <li><a href="#footer">Pied de page</a></li>
</ul>
```

## Meilleures pratiques

1. Placer les liens au début du document
2. Les rendre visibles au focus
3. Utiliser des messages clairs et concis
4. S'assurer que les cibles sont focusables
