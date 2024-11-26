# Focus Management

## Basic Principles

Focus management is crucial for keyboard accessibility and assistive technology usage.

## Focus Styles

```css
/* Base style */
:focus {
  outline: 2px solid #4a90e2;
  outline-offset: 2px;
}

/* Advanced style with focus-visible */
:focus-visible {
  outline: 2px solid #4a90e2;
  box-shadow: 0 0 0 4px rgba(74, 144, 226, 0.3);
  border-radius: 3px;
}

/* Element-specific styles */
button:focus-visible {
  background-color: #e9ecef;
  outline: none;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.5);
}
```

## Programmatic Focus Management

```javascript
// Modal focus
function openModal(modalElement) {
  modalElement.style.display = 'block'
  // Find first focusable element
  const firstFocusable = modalElement.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
  // Automatic focus
  if (firstFocusable) {
    firstFocusable.focus()
  }
}

// Focus trap in modal
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

## Best Practices

1. **Logical Order**

   - Logical HTML structure
   - Appropriate tabindex usage
   - Consistent navigation

2. **Visibility**

   - Always visible focus
   - Sufficient contrast
   - Clear focus indication

3. **Special Cases Management**
   - Modals and popups
   - Dropdown menus
   - Carousels
