# Robust Principle

## Definition

Content must be robust enough to be reliably interpreted by a wide variety of user agents, including assistive technologies.

## Key Points

### 1. Compatibility

- Valid HTML
- Proper ARIA implementation
- Assistive technology support

```html
<!-- Good example -->
<button role="tab" aria-selected="true" aria-controls="panel-1">Tab 1</button>
<!-- Bad example -->
<div onclick="handleTab()">Tab 1</div>
```

### 2. Parsing

- Well-formed tags
- Unique IDs
- No duplicate attributes

```html
<!-- Good example -->
<div id="unique-id">
  <p>Structured content</p>
</div>
<!-- Bad example -->
<div id="duplicate-id">
  <p>First element</p>
</div>
<div id="duplicate-id">
  <p>Second element</p>
</div>
```

### 3. Name and Role

- Custom components with appropriate roles
- Accessible names for all interactive elements
- Communicated states and properties

```html
<div role="alertdialog" aria-labelledby="dialog-title" aria-describedby="dialog-desc">
  <h2 id="dialog-title">Confirmation</h2>
  <p id="dialog-desc">Do you want to continue?</p>
</div>
```

## Robustness Testing

1. HTML validation
2. Cross-browser testing
3. Assistive technology testing
4. ARIA role verification
