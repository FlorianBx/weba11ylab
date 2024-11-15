# Formulaires Accessibles

## Structure de base

Les formulaires doivent être faciles à comprendre et à utiliser pour tous.

```html
<form action="/submit" method="post">
  <div class="form-group">
    <label for="name">Nom complet</label>
    <input type="text" id="name" name="name" aria-required="true" aria-describedby="name-help" />
    <span id="name-help" class="help-text"> Entrez votre nom et prénom </span>
  </div>
</form>
```

## Validation et messages d'erreur

```html
<div class="form-group">
  <label for="email">Email</label>
  <input
    type="email"
    id="email"
    name="email"
    aria-required="true"
    aria-invalid="true"
    aria-describedby="email-error"
  />
  <span id="email-error" class="error-message" role="alert">
    Veuillez entrer une adresse email valide
  </span>
</div>
```

## Groupement de champs

```html
<fieldset>
  <legend>Informations de contact</legend>

  <div class="form-group">
    <label for="phone">Téléphone</label>
    <input type="tel" id="phone" name="phone" />
  </div>

  <div class="form-group">
    <label for="address">Adresse</label>
    <textarea id="address" name="address"></textarea>
  </div>
</fieldset>
```

## Boutons et actions

```html
<div class="form-actions">
  <button type="submit" class="primary">Envoyer</button>

  <button type="reset" class="secondary">Réinitialiser</button>
</div>
```

## CSS associé

```css
.form-group {
  margin-bottom: 1.5rem;
}

.help-text {
  font-size: 0.875rem;
  color: #666;
  margin-top: 0.25rem;
}

.error-message {
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* Style pour les champs invalides */
input:invalid,
input[aria-invalid='true'] {
  border-color: #dc3545;
  box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
}

/* Focus visible */
input:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}
```

## JavaScript pour la validation

```javascript
function validateForm(form) {
  const inputs = form.querySelectorAll('input[aria-required="true"]')

  inputs.forEach((input) => {
    if (!input.value) {
      input.setAttribute('aria-invalid', 'true')
      const errorId = `${input.id}-error`
      input.setAttribute('aria-describedby', errorId)

      // Créer message d'erreur
      const errorMsg = document.createElement('span')
      errorMsg.id = errorId
      errorMsg.className = 'error-message'
      errorMsg.setAttribute('role', 'alert')
      errorMsg.textContent = 'Ce champ est requis'

      input.parentNode.appendChild(errorMsg)
    }
  })
}
```
