# Structure HTML Sémantique

## Importance de la sémantique

Une structure HTML sémantique fournit du sens et du contexte au contenu, aidant les technologies d'assistance à comprendre et présenter l'information correctement.

## Structure de base

```html
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page titre descriptif</title>
  </head>
  <body>
    <header role="banner">
      <nav role="navigation" aria-label="Navigation principale">
        <!-- Navigation -->
      </nav>
    </header>

    <main id="main-content" role="main">
      <h1>Titre principal</h1>
      <article>
        <h2>Sous-titre</h2>
        <section>
          <h3>Section de contenu</h3>
          <!-- Contenu -->
        </section>
      </article>
    </main>

    <aside role="complementary">
      <!-- Contenu secondaire -->
    </aside>

    <footer role="contentinfo">
      <!-- Pied de page -->
    </footer>
  </body>
</html>
```

## Éléments sémantiques essentiels

1. **Structure de page**

   - `<header>`
   - `<main>`
   - `<footer>`
   - `<nav>`
   - `<aside>`

2. **Organisation du contenu**

   - `<article>`
   - `<section>`
   - `<figure>`
   - `<figcaption>`

3. **Texte**
   - `<h1>` à `<h6>`
   - `<p>`
   - `<blockquote>`
   - `<cite>`

## Rôles ARIA

```html
<!-- Landmark roles -->
<header role="banner">
  <nav role="navigation">
    <main role="main">
      <footer role="contentinfo">
        <aside role="complementary">
          <form role="search">
            <!-- Autres rôles courants -->
            <div role="alert">
              <div role="dialog">
                <div role="tabpanel"></div>
              </div>
            </div>
          </form>
        </aside>
      </footer>
    </main>
  </nav>
</header>
```

## Hiérarchie des titres

```html
<h1>Titre principal</h1>
<h2>Section majeure</h2>
<h3>Sous-section</h3>
<h3>Sous-section</h3>
<h2>Section majeure</h2>
<h3>Sous-section</h3>
```
