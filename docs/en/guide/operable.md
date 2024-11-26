# Operable Principle

## Definition

User interface and navigation must be operable by everyone.

## Key Criteria

### 1. Keyboard Accessibility

```html
<!-- Good example -->
<button onclick="submitForm()" onkeypress="submitForm()">Submit</button>
<!-- Focusable elements -->
<div tabindex="0" role="button" onclick="action()">Action</div>
```

### 2. Enough Time

- Allow extending time limits
- Ability to pause
- Avoid automatic timeouts

### 3. Navigation

- Site map
- Descriptive headings
- Logical focus order
- Multiple navigation methods

### 4. Seizure Prevention

- No flashing content
- No rapid animations
- Option to disable animations

## Best Practices

1. **Focus Ordering**

```html
<div class="modal">
  <button autofocus>Primary Action</button>
  <button>Secondary Action</button>
</div>
```

2. **Skip Links**

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

3. **Focus Management**

```javascript
// Trap focus in modal
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  )
}
```
