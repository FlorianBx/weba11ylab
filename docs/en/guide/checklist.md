# Accessibility Checklist

## Navigation and Structure

### 🔍 HTML Structure

- [ ] Semantic markup used (`header`, `main`, `nav`, `footer`, etc.)
- [ ] Coherent heading hierarchy (H1-H6)
- [ ] Appropriate ARIA landmarks
- [ ] Skip links present
- [ ] `lang` attribute on `html`
- [ ] No visual overlaps between elements at 200% zoom

### ⌨️ Keyboard Navigation

- [ ] Visible focus on all interactive elements
- [ ] Logical tab order
- [ ] No keyboard traps
- [ ] Documented keyboard shortcuts

## Content

### 📝 Text

- [ ] Sufficient contrast (4.5:1 minimum)
- [ ] Adjustable font size
- [ ] Adequate line spacing
- [ ] Left alignment by default

### 🖼️ Images

- [ ] Text alternatives for all informative images
- [ ] Decorative images properly marked
- [ ] Relevant and concise alt text
- [ ] Detailed description for complex images

### 📋 Forms

- [ ] Labels associated with fields
- [ ] Clear instructions
- [ ] Explicit error messages
- [ ] Logical field grouping
- [ ] Accessible validation

## Multimedia

### 🎥 Video

- [ ] Captions for audio content
- [ ] Text transcript available
- [ ] Accessible playback controls
- [ ] No autoplay

### 🔊 Audio

- [ ] Text transcript
- [ ] Volume control
- [ ] No automatic sound

## Technical

### 💻 Code

```html
<!-- Verification example -->
<button aria-expanded="false" aria-controls="menu">Menu</button>
```

### 🔍 Testing

- [ ] W3C validation
- [ ] Screen reader testing
- [ ] Contrast testing
- [ ] Responsive testing

## Checklist Usage Guide

1. **Before Development**

   - Review accessibility requirements
   - Plan structure
   - Identify critical points

2. **During Development**

   - Check each point progressively
   - Test regularly
   - Document choices

3. **After Development**
   - Complete audit
   - User testing
   - Corrections and adjustments
