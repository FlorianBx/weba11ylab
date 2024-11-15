# Tableaux Accessibles

## Structure de base

```html
<table>
  <caption>
    Liste des employés et leurs coordonnées
  </caption>
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Fonction</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>Développeur</td>
      <td>john@exemple.com</td>
    </tr>
  </tbody>
</table>
```

## Tableaux complexes

```html
<table>
  <caption>
    Ventes trimestrielles par région
  </caption>
  <thead>
    <tr>
      <th scope="col">Région</th>
      <th scope="col">T1</th>
      <th scope="col">T2</th>
      <th scope="col">T3</th>
      <th scope="col">T4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Nord</th>
      <td>100k€</td>
      <td>150k€</td>
      <td>120k€</td>
      <td>180k€</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>300k€</td>
      <td>450k€</td>
      <td>380k€</td>
      <td>520k€</td>
    </tr>
  </tfoot>
</table>
```

## CSS pour tableaux accessibles

```css
/* Style de base */
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
}

/* En-têtes */
th {
  background-color: #f8f9fa;
  font-weight: bold;
  text-align: left;
  padding: 0.75rem;
  border: 1px solid #dee2e6;
}

/* Cellules */
td {
  padding: 0.75rem;
  border: 1px solid #dee2e6;
}

/* Caption */
caption {
  padding: 0.75rem;
  caption-side: top;
  font-weight: bold;
  text-align: left;
  color: #212529;
}

/* Responsive */
@media screen and (max-width: 600px) {
  table {
    display: block;
    overflow-x: auto;
  }
}
```

## Meilleures pratiques

1. **Structure**

   - Utiliser `<caption>` pour le titre
   - Définir la portée des en-têtes
   - Grouper logiquement les données

2. **Lisibilité**

   - Contraste suffisant
   - Espacement adéquat
   - Police lisible

3. **Responsive**
   - Prévoir le défilement horizontal
   - Alternative pour petits écrans
   - Maintenir la lisibilité
