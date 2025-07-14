# Contribution Guide

Thank you for your interest in contributing to our web accessibility guide! This document explains how you can help improve the project.

## How to Contribute?

1. **Fork & Clone**  
- Create a fork of the repository  
- Clone your fork locally  
```bash
git clone https://github.com/FlorianBx/weba11ylab
```

2. **Create a Branch**  
```bash
git checkout -b feature/your-change-name
```

3. **Make Your Changes**  
- Follow the existing file structure  
- Use consistent naming conventions  
- Add code examples when relevant  
- Test your examples before submitting  

4. **Content Guidelines**  
- Use clear and concise language  
- Include practical examples  
- Follow this Markdown structure:  
````markdown
# Main Title

## Subtitle

### Section

- Key points  
- Examples

### Code Examples
```html
<!-- Your code here -->
```
`````

5. **Commit & Push**

```bash
git add .
git commit -m "clear description of your changes"
git push origin feature/your-change-name
```

6. **Create a Pull Request**

* Use a clear and descriptive title
* Explain your changes in the description
* Reference related issues if applicable

## Project Structure

```
docs/
├── checklist.md         # Accessibility checklist
├── forms.md             # Accessible forms guide
├── images.md            # Accessible images guide
├── keyboard.md          # Keyboard navigation
└── ...
```

## Best Practices

* **Documentation**: All new content should be documented and explained
* **Examples**: Always include concrete, tested examples
* **Testing**: Make sure your code examples are valid and accessible
* **Style**: Follow the existing documentation style

## Questions?

If you have any questions or need help:

1. Check the existing issues
2. Open a new issue with the "question" label
3. Reach out to the project maintainers

We appreciate all contributions — from typo fixes to full new chapters!
