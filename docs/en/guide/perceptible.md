# Perceivable Principle

## What is Perceivability?

Content must be presented in ways that all users can perceive, regardless of their abilities.

## Essential Criteria

### 1. Text Alternatives

```html
<!-- Good example -->
<img src="logo.avif" alt="XYZ Company Logo" />
<!-- Bad example -->
<img src="logo.avif" />
```

### 2. Time-based Media

- Video captions
- Audio transcripts
- Audio descriptions for important visual content

### 3. Adaptability

Content must be presentable in different ways without losing information:

```html
<!-- Semantic structure -->
<header>
  <h1>Main Title</h1>
</header>
<nav>
  <ul>
    <li><a href="#section1">Section 1</a></li>
  </ul>
</nav>
<main>
  <article>
    <h2>Subtitle</h2>
  </article>
</main>
```

### 4. Distinguishable

- Sufficient contrast
- Sound control
- Text spacing
- Information not conveyed through color alone

## Testing Tools

1. Contrast:
   - WCAG Contrast Checker
   - WebAIM Contrast Checker
2. Structure:
   - WAVE Evaluation Tool
   - AXE DevTools
