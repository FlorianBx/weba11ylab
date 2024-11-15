# Gestion du Focus

## Principes de base

La gestion du focus est cruciale pour l'accessibilité au clavier et l'utilisation des technologies d'assistance.

## Styles de focus

```css
/* Style de base */
:focus {
  outline: 2px solid #4a90e2;
  outline-offset: 2px;
}

/* Style avancé avec focus-visible */
:focus-visible {
  outline: 2px solid #4a90e2;
  box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.3);
  border-radius: 3px;
}

/* Styles spécifiques pour différents éléments */
button:focus-visible {
  background-color: #e9ecef;
  outline: none;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.5);
}
```

## Gestion programmatique du focus

```javascript
// Focus sur ouverture de modale
function openModal(modalElement) {
  modalElement.style.display = 'block'

  // Trouve le premier élément focusable
  const firstFocusable = modalElement.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )

  // Focus automatique
  if (firstFocusable) {
    firstFocusable.focus()
  }
}

// Piège du focus dans une modale
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  const firstFocusable = focusableElements[0]
  const lastFocusable = focusableElements[focusableElements.length - 1]

  element.addEventListener('keydown', function (e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          lastFocusable.focus()
          e.preventDefault()
        }
      } else {
        if (document.activeElement === lastFocusable) {
          firstFocusable.focus()
          e.preventDefault()
        }
      }
    }
  })
}
```

## Bonnes pratiques

1. **Ordre logique**

   - Structure HTML logique
   - Utilisation appropriée de tabindex
   - Navigation cohérente

2. **Visibilité**

   - Focus toujours visible
   - Contraste suffisant
   - Indication claire de l'élément focusé

3. **Gestion des cas particuliers**
   - Modales et popups
   - Menus déroulants
   - Carrousels
