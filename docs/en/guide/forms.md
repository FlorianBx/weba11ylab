# Accessible Forms

## Basic Structure

Forms must be easy to understand and use for everyone.

```html
<form action="/submit" method="post">
  <div class="form-group">
    <label for="name">Full Name</label>
    <input type="text" id="name" name="name" aria-required="true" aria-describedby="name-help" />
    <span id="name-help" class="help-text">Enter your first and last name</span>
  </div>
</form>
```

## Validation and Error Messages

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
    Please enter a valid email address
  </span>
</div>
```

## Field Grouping

```html
<fieldset>
  <legend>Contact Information</legend>
  <div class="form-group">
    <label for="phone">Phone</label>
    <input type="tel" id="phone" name="phone" />
  </div>
  <div class="form-group">
    <label for="address">Address</label>
    <textarea id="address" name="address"></textarea>
  </div>
</fieldset>
```

## Buttons and Actions

```html
<div class="form-actions">
  <button type="submit" class="primary">Submit</button>
  <button type="reset" class="secondary">Reset</button>
</div>
```

## Associated CSS

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

/* Style for invalid fields */
input:invalid,
input[aria-invalid='true'] {
  border-color: #dc3545;
  box-shadow: 0 0 0 2px rgba(220, 53, 69, 0.25);
}

/* Visible focus */
input:focus {
  outline: 2px solid #007bff;
  outline-offset: 2px;
}
```

## JavaScript for Validation

```javascript
function validateForm(form) {
  const inputs = form.querySelectorAll('input[aria-required="true"]')
  inputs.forEach((input) => {
    if (!input.value) {
      input.setAttribute('aria-invalid', 'true')
      const errorId = `${input.id}-error`
      input.setAttribute('aria-describedby', errorId)
      // Create error message
      const errorMsg = document.createElement('span')
      errorMsg.id = errorId
      errorMsg.className = 'error-message'
      errorMsg.setAttribute('role', 'alert')
      errorMsg.textContent = 'This field is required'
      input.parentNode.appendChild(errorMsg)
    }
  })
}
```
