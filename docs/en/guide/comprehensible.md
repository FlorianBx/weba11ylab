# Understandable Principle

## Definition

Information and user interface operation must be understandable.

## Guidelines

### 1. Readability

- Declared page language
- Declared language parts
- Clear and simple text

```html
<html lang="en">
  <head>
    ...
  </head>
  <body>
    <p>Text in English</p>
    <p lang="fr">Texte en français</p>
  </body>
</html>
```

### 2. Predictability

- Consistent navigation
- Consistent identification
- No unexpected context changes

```html
<!-- Good example -->
<button onclick="showDetails()" aria-expanded="false">Show more</button>

<!-- Bad example -->
<select onchange="submit()">
  <!-- Unexpected context change -->
</select>
```

### 3. Input Assistance

- Error identification
- Instructions and labels
- Error prevention

```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" aria-describedby="email-help" required />
  <span id="email-help">Expected format: example@domain.com</span>
</form>
```

## Best Practices

1. Clear error messages
2. Explicit instructions
3. Visible user feedback
4. Important action confirmations
