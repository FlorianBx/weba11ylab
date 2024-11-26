# Skip Links

## What is a skip link?

Skip links allow keyboard users to jump directly to main content sections, avoiding repetitive navigation.

## Implementation

### Basic HTML

```html
<body>
  <a href="#main-content" class="skip-link">Skip to main content</a>
  <header>
    <!-- Navigation, etc. -->
  </header>
  <main id="main-content" tabindex="-1">
    <!-- Main content -->
  </main>
</body>
```

### Required CSS

```css
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  padding: 8px;
  background-color: #000;
  color: white;
  z-index: 100;
  transition: top 0.2s ease;
}
.skip-link:focus {
  top: 0;
}
/* Ensure target element can receive focus */
[tabindex='-1'] {
  outline: none;
}
```

## Types of Skip Links

1. **Main Content**

```html
<a href="#main-content">Skip to main content</a>
```

2. **Navigation**

```html
<a href="#navigation">Skip to navigation</a>
```

3. **Search**

```html
<a href="#search">Skip to search</a>
```

4. **Multiple Skip Links**

```html
<ul class="skip-links">
  <li><a href="#main-content">Main content</a></li>
  <li><a href="#navigation">Navigation</a></li>
  <li><a href="#footer">Footer</a></li>
</ul>
```

## Best Practices

1. Place links at document start
2. Make them visible on focus
3. Use clear, concise messages
4. Ensure targets are focusable
