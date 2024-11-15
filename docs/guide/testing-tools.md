# Outils de Test d'Accessibilité

## Extensions de navigateur

### 1. WAVE (Web Accessibility Evaluation Tool)

```javascript
// Example d'utilisation de l'API WAVE
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
// Test automatisé avec axe-core
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

# Utilisation
lighthouse https://example.com --view
```

## Lecteurs d'écran

1. **VoiceOver** (macOS, Intégré)

   - Activation : Cmd + F5
   - Navigation : Ctrl + Alt + flèches
   - Lecture : Ctrl + Alt + A

2. **NVDA** (Windows, Gratuit)

   - Raccourcis principaux
   - Test de navigation
   - Vérification des alternatives

## Outils de contraste

```css
/* Exemples de ratios de contraste recommandés */
.text-normal {
  /* Ratio minimum 4.5:1 */
  color: #595959;
  background: #ffffff;
}

.text-large {
  /* Ratio minimum 3:1 pour grand texte */
  color: #767676;
  background: #ffffff;
}
```

## Tests automatisés

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

## Scripts d'audit

```bash
#!/bin/bash
# Audit d'accessibilité automatisé

# Test HTML
echo "Validating HTML..."
html-validator --file=index.html

# Test contraste
echo "Checking contrast..."
contrast-checker styles.css

# Test accessibilité
echo "Running accessibility checks..."
pa11y https://example.com
```

## Meilleures pratiques de test

1. **Tests réguliers**

   - Intégration continue
   - Tests automatisés
   - Revues manuelles

2. **Documentation**

   - Rapports de test
   - Suivi des corrections
   - Documentation des exceptions

3. **Processus itératif**
   - Tests précoces
   - Corrections rapides
   - Réévaluation continue
