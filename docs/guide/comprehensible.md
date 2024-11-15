# Principe Compréhensible

## Définition

L'information et l'utilisation de l'interface utilisateur doivent être compréhensibles.

## Lignes directrices

### 1. Lisibilité

- Langue de la page déclarée
- Langue des parties déclarée
- Texte clair et simple

```html
<html lang="fr">
  <head>
    ...
  </head>
  <body>
    <p>Texte en français</p>
    <p lang="en">Text in English</p>
  </body>
</html>
```

### 2. Prévisibilité

- Navigation cohérente
- Identification cohérente
- Pas de changements de contexte inattendus

```html
<!-- Bon exemple -->
<button onclick="showDetails()" aria-expanded="false">Afficher plus</button>

<!-- Mauvais exemple -->
<select onchange="submit()">
  <!-- Changement de contexte inattendu -->
</select>
```

### 3. Assistance à la saisie

- Identification des erreurs
- Instructions et étiquettes
- Prévention des erreurs

```html
<form>
  <label for="email">Email :</label>
  <input type="email" id="email" name="email" aria-describedby="email-help" required />
  <span id="email-help">Format attendu : exemple@domaine.com</span>
</form>
```

## Meilleures pratiques

1. Messages d'erreur clairs
2. Instructions explicites
3. Retours utilisateur visibles
4. Confirmation des actions importantes
