# Principe Opérable

## Définition

L'interface utilisateur et la navigation doivent être utilisables par tous.

## Critères clés

### 1. Accessibilité au clavier

```html
<!-- Bon exemple -->
<button onclick="submitForm()" onkeypress="submitForm()">Envoyer</button>

<!-- Elements focusables -->
<div tabindex="0" role="button" onclick="action()">Action</div>
```

### 2. Délai suffisant

- Permettre de prolonger les délais
- Possibilité de mettre en pause
- Éviter les timeouts automatiques

### 3. Navigation

- Plan du site
- Titres descriptifs
- Ordre de focus logique
- Plusieurs moyens de navigation

### 4. Prévention des crises

- Pas de clignotements
- Pas d'animations rapides
- Possibilité de désactiver les animations

## Bonnes pratiques

1. **Ordonnancement du focus**

```html
<div class="modal">
  <button autofocus>Action principale</button>
  <button>Action secondaire</button>
</div>
```

2. **Skip links**

```html
<a href="#main-content" class="skip-link"> Aller au contenu principal </a>
```

3. **Gestion du focus**

```javascript
// Piéger le focus dans une modale
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
}
```
