# Checklist d'Accessibilité

## Navigation et Structure

### 🔍 Structure HTML

- [ ] Balisage sémantique utilisé (`header`, `main`, `nav`, `footer`, etc.)
- [ ] Hiérarchie des titres cohérente (H1-H6)
- [ ] Landmarks ARIA appropriés
- [ ] Skip links présents
- [ ] Attribut `lang` sur le `html`
- [ ] Pas d'overlaps visuels entre les éléments avec le zoom à 200%

### ⌨️ Navigation au clavier

- [ ] Focus visible sur tous les éléments interactifs
- [ ] Ordre de tabulation logique
- [ ] Pas de piège au clavier
- [ ] Raccourcis clavier documentés

## Contenu

### 📝 Texte

- [ ] Contraste suffisant (4.5:1 minimum)
- [ ] Taille de police ajustable
- [ ] Interlignage suffisant
- [ ] Alignement à gauche par défaut

### 🖼️ Images

- [ ] Alternatives textuelles pour toutes les images informatives
- [ ] Images décoratives marquées appropriément
- [ ] Texte alternatif pertinent et concis
- [ ] Description détaillée pour les images complexes

### 📋 Formulaires

- [ ] Labels associés aux champs
- [ ] Instructions claires
- [ ] Messages d'erreur explicites
- [ ] Groupement logique des champs
- [ ] Validation accessible

## Multimédia

### 🎥 Vidéo

- [ ] Sous-titres pour les contenus audio
- [ ] Transcription textuelle disponible
- [ ] Contrôles de lecture accessibles
- [ ] Pas de lecture automatique

### 🔊 Audio

- [ ] Transcription textuelle
- [ ] Contrôle du volume
- [ ] Pas de son automatique

## Technique

### 💻 Code

```html
<!-- Exemple de vérification -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
```

### 🔍 Tests

- [ ] Validation W3C
- [ ] Tests avec lecteur d'écran
- [ ] Tests de contraste
- [ ] Tests responsifs

## Guide d'utilisation de la checklist

1. **Avant le développement**

   - Revoir les exigences d'accessibilité
   - Planifier la structure
   - Identifier les points critiques

2. **Pendant le développement**

   - Vérifier chaque point au fur et à mesure
   - Tester régulièrement
   - Documenter les choix

3. **Après le développement**
   - Audit complet
   - Tests utilisateurs
   - Corrections et ajustements
