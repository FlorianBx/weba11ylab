# Images and Text Alternatives

## Core Principles

Images must have appropriate text alternatives to be understood by all users.

## Alternative Types

### 1. Informative Images

```html
<!-- Image with important information -->
<img src="warning-icon.png" alt="Warning: important information" />

<!-- Image with text -->
<img src="promotion.jpg" alt="Summer sale: 50% off entire collection" />
```

### 2. Decorative Images

```html
<!-- Purely decorative image -->
<img src="decorative-line.png" alt="" role="presentation" />

<!-- Or in CSS -->
<div class="decorative-background"></div>
```

### 3. Complex Images

```html
<figure>
  <img src="data-chart.png" alt="Chart showing sales evolution" />
  <figcaption>
    Detailed chart description: Sales increased by 50% between January and June, with a notable peak
    in March.
  </figcaption>
</figure>
```

## Accessible SVGs

```html
<svg role="img" aria-labelledby="chart-title chart-desc">
  <title id="chart-title">Chart Title</title>
  <desc id="chart-desc">Detailed chart description</desc>
  <!-- SVG content -->
</svg>
```

## Best Practices

1. **Alt Text Length**

   - Concise but descriptive
   - Don't start with "Image of" or "Photo of"
   - Focus on important information

2. **Context**

   - Adapt description to context
   - Include essential information
   - Avoid repetition

3. **Testing**
   - Check without images
   - Use screen reader
   - Validate with users
