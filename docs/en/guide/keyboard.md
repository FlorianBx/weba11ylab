# Keyboard Navigation

## Importance

Keyboard navigation is essential for many users who cannot use a mouse.

## Core Principles

### 1. Visible Focus

```css
/* Custom focus style */
:focus {
  outline: 3px solid #4a90e2;
  outline-offset: 2px;
}

/* Never remove outline without alternative */
:focus:not(:focus-visible) {
  outline: none;
  box-shadow: 0 0 0 3px #4a90e2;
}
```

### 2. Logical Tab Order

```html
<header>
  <nav>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </nav>
</header>
<main id="main-content" tabindex="-1">
  <!-- Main content -->
</main>
```

### 3. Keyboard Shortcuts

- Tab: Navigate between focusable elements
- Shift + Tab: Navigate backwards
- Enter/Space: Activate elements
- Arrows: Menu navigation

## Implementation

```javascript
// Menu key handler
function handleMenuKeyPress(event) {
  switch (event.key) {
    case 'ArrowDown':
      // Navigate down
      focusNextMenuItem()
      break
    case 'ArrowUp':
      // Navigate up
      focusPreviousMenuItem()
      break
    case 'Escape':
      // Close menu
      closeMenu()
      break
  }
}
```

## Testing

1. Unplug mouse
2. Check focus visibility
3. Test all interactive elements
4. Check for keyboard traps
