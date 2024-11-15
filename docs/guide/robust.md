# Principe Robust

## Définition

Le contenu doit être suffisamment robuste pour être interprété par une large variété d'agents utilisateurs, y compris les technologies d'assistance.

## Points clés

### 1. Compatibilité

- HTML valide
- ARIA utilisé correctement
- Support des technologies d'assistance

```html
<!-- Bon exemple -->
<button role="tab" aria-selected="true" aria-controls="panel-1">Onglet 1</button>

<!-- Mauvais exemple -->
<div onclick="handleTab()">Onglet 1</div>
```

### 2. Parsing

- Balises bien formées
- IDs uniques
- Attributs dupliqués évités

```html
<!-- Bon exemple -->
<div id="unique-id">
  <p>Contenu structuré</p>
</div>

<!-- Mauvais exemple -->
<div id="duplicate-id">
  <p>Premier élément</p>
</div>
<div id="duplicate-id">
  <p>Deuxième élément</p>
</div>
```

### 3. Nom et Rôle

- Composants personnalisés avec rôles appropriés
- Noms accessibles pour tous les éléments interactifs
- États et propriétés communiqués

```html
<div role="alertdialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h2 id="dialog-title">Confirmation</h2>
  <p id="dialog-desc">Voulez-vous continuer ?</p>
</div>
```

## Tests de robustesse

1. Validation HTML
2. Tests avec différents navigateurs
3. Tests avec technologies d'assistance
4. Vérification des rôles ARIA
