# Accessibility Testing Tools

## Browser Extensions

### 1. WAVE (Web Accessibility Evaluation Tool)

```javascript
// WAVE API usage example
fetch('https://wave.webaim.org/api/request', {
  method: 'POST',
  body: JSON.stringify({
    url: 'https://example.com',
    key: 'your-api-key',
  }),
})
```

### 2. axe DevTools

```javascript
// Automated testing with axe-core
const axe = require('axe-core')
axe.run(document, (err, results) => {
  if (err) throw err
  console.log(results.violations)
})
```

### 3. Lighthouse

```bash
# Installation
npm install -g lighthouse
# Usage
lighthouse https://example.com --view
```

## Screen Readers

1. **VoiceOver** (macOS, Built-in)
   - Activate: Cmd + F5
   - Navigate: Ctrl + Alt + arrows
   - Read: Ctrl + Alt + A
2. **NVDA** (Windows, Free)
   - Main shortcuts
   - Navigation testing
   - Alternative text verification

## Contrast Tools

```css
/* Recommended contrast ratios examples */
.text-normal {
  /* Minimum ratio 4.5:1 */
  color: #595959;
  background: #ffffff;
}
.text-large {
  /* Minimum ratio 3:1 for large text */
  color: #767676;
  background: #ffffff;
}
```

## Automated Testing

### Jest + axe-core

```javascript
import { axe } from 'jest-axe'
describe('Page accessibility', () => {
  it('should not have any accessibility violations', async () => {
    const html = document.documentElement.outerHTML
    const results = await axe(html)
    expect(results).toHaveNoViolations()
  })
})
```

### Cypress + axe

```javascript
describe('Accessibility tests', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.injectAxe()
  })
  it('Has no detectable accessibility violations', () => {
    cy.checkA11y()
  })
})
```

## Audit Scripts

```bash
#!/bin/bash
# Automated accessibility audit
# HTML testing
echo "Validating HTML..."
html-validator --file=index.html
# Contrast testing
echo "Checking contrast..."
contrast-checker styles.css
# Accessibility testing
echo "Running accessibility checks..."
pa11y https://example.com
```

## Testing Best Practices

1. **Regular Testing**
   - Continuous integration
   - Automated tests
   - Manual reviews
2. **Documentation**
   - Test reports
   - Fix tracking
   - Exception documentation
3. **Iterative Process**
   - Early testing
   - Quick fixes
   - Continuous reassessment
