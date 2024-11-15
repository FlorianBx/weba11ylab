# Images et Alternatives Textuelles

## Principes fondamentaux

Les images doivent avoir des alternatives textuelles appropriées pour être comprises par tous les utilisateurs.

## Types d'alternatives

### 1. Images informatives

```html
<!-- Image avec information importante -->
<img src="warning-icon.png" alt="Attention : information importante" />

<!-- Image avec texte -->
<img src="promotion.jpg" alt="Soldes d'été : -50% sur toute la collection" />
```

### 2. Images décoratives

```html
<!-- Image purement décorative -->
<img src="decorative-line.png" alt="" role="presentation" />

<!-- Ou en CSS -->
<div class="decorative-background"></div>
```

### 3. Images complexes

```html
<figure>
  <img src="data-chart.png" alt="Graphique montrant l'évolution des ventes" />
  <figcaption>
    Description détaillée du graphique : Les ventes ont augmenté de 50% entre janvier et juin, avec
    un pic notable en mars.
  </figcaption>
</figure>
```

## SVG accessibles

```html
<svg role="img" aria-labelledby="chart-title chart-desc">
  <title id="chart-title">Titre du graphique</title>
  <desc id="chart-desc">Description détaillée du graphique</desc>
  <!-- contenu SVG -->
</svg>
```

## Meilleures pratiques

1. **Longueur de l'alt**

   - Concis mais descriptif
   - Ne pas commencer par "Image de" ou "Photo de"
   - Se concentrer sur l'information importante

2. **Contexte**

   - Adapter la description au contexte
   - Inclure les informations essentielles
   - Éviter les répétitions

3. **Tests**
   - Vérifier sans images
   - Utiliser un lecteur d'écran
   - Valider avec des utilisateurs
