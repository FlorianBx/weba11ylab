# Principe Perceptible

## Qu'est-ce que la perceptibilité ?

Le contenu doit être présenté de manière à être perçu par tous les utilisateurs, indépendamment de leurs capacités.

## Critères essentiels

### 1. Alternatives textuelles

```html
<!-- Bon exemple -->
<img src="logo.avif" alt="Logo de l'entreprise XYZ" />

<!-- Mauvais exemple -->
<img src="logo.avif" />
```

### 2. Contenu multimédia temporel

- Sous-titres pour les vidéos
- Transcriptions pour l'audio
- Audiodescription pour les contenus visuels importants

### 3. Adaptabilité

Le contenu doit pouvoir être présenté de différentes manières sans perte d'information :

```html
<!-- Structure sémantique -->
<header>
  <h1>Titre principal</h1>
</header>
<nav>
  <ul>
    <li><a href="#section1">Section 1</a></li>
  </ul>
</nav>
<main>
  <article>
    <h2>Sous-titre</h2>
  </article>
</main>
```

### 4. Distinguable

- Contraste suffisant
- Contrôle du son
- Espacement du texte
- Pas d'information basée uniquement sur la couleur

## Outils de vérification

1. Contraste :

   - WCAG Contrast Checker
   - WebAIM Contrast Checker

2. Structure :
   - WAVE Evaluation Tool
   - AXE DevTools
