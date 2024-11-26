# Accessible Tables

## Basic Structure

```html
<table>
  <caption>
    Employee List and Contact Information
  </caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John Doe</td>
      <td>Developer</td>
      <td>john@example.com</td>
    </tr>
  </tbody>
</table>
```

## Complex Tables

```html
<table>
  <caption>
    Quarterly Sales by Region
  </caption>
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="col">Q1</th>
      <th scope="col">Q2</th>
      <th scope="col">Q3</th>
      <th scope="col">Q4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">North</th>
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

## CSS for Accessible Tables

```css
/* Base style */
table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 1rem;
}
/* Headers */
th {
  background-color: #f8f9fa;
  font-weight: bold;
  text-align: left;
  padding: 0.75rem;
  border: 1px solid #dee2e6;
}
/* Cells */
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

## Best Practices

1. **Structure**
   - Use `<caption>` for title
   - Define header scope
   - Group data logically
2. **Readability**
   - Sufficient contrast
   - Adequate spacing
   - Readable font
3. **Responsive**
   - Plan for horizontal scrolling
   - Small screen alternative
   - Maintain readability
