# Semantic HTML Structure

## Importance of Semantics

A semantic HTML structure provides meaning and context to content, helping assistive technologies understand and present information correctly.

## Basic Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Descriptive Page Title</title>
  </head>
  <body>
    <header role="banner">
      <nav role="navigation" aria-label="Main navigation">
        <!-- Navigation -->
      </nav>
    </header>

    <main id="main-content" role="main">
      <h1>Main Title</h1>
      <article>
        <h2>Subtitle</h2>
        <section>
          <h3>Content Section</h3>
          <!-- Content -->
        </section>
      </article>
    </main>

    <aside role="complementary">
      <!-- Secondary content -->
    </aside>

    <footer role="contentinfo">
      <!-- Footer -->
    </footer>
  </body>
</html>
```

## Essential Semantic Elements

1. **Page Structure**

   - `<header>`
   - `<main>`
   - `<footer>`
   - `<nav>`
   - `<aside>`

2. **Content Organization**

   - `<article>`
   - `<section>`
   - `<figure>`
   - `<figcaption>`

3. **Text**
   - `<h1>` to `<h6>`
   - `<p>`
   - `<blockquote>`
   - `<cite>`

## ARIA Roles

```html
<!-- Landmark roles -->
<header role="banner">
  <nav role="navigation">
    <main role="main">
      <footer role="contentinfo">
        <aside role="complementary">
          <form role="search">
            <!-- Other common roles -->
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

## Heading Hierarchy

```html
<h1>Main Title</h1>
<h2>Major Section</h2>
<h3>Subsection</h3>
<h3>Subsection</h3>
<h2>Major Section</h2>
<h3>Subsection</h3>
```
