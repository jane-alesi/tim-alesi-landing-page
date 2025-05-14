# Tim Alesi Landing Page - Design System

## Typography

### Headings
- **Primary**: "Playfair Display" (Serif)
- **Secondary**: "Inter" (Sans-serif)

### Body
- **Primary**: "Inter" (Sans-serif)
- **Secondary**: "Source Code Pro" (Monospace)

### Hierarchical Scale
- **H1**: 3rem/300/var(--color-heading)
- **H2**: 2.25rem/300/var(--color-heading)
- **H3**: 1.5rem/400/var(--color-heading)
- **Body**: 1rem/400/var(--color-text)
- **Small**: 0.875rem/400/var(--color-text-light)

## Color Palette

### Primary Colors
- **Deep Blue**: #1a365d
- **Accent Blue**: #2b6cb0
- **Highlight**: #63b3ed

### Neutral Palette
- **Dark**: #1a202c
- **Gray**: #718096
- **Light Gray**: #e2e8f0
- **Off White**: #f8fafc

### Accent Colors
- **Soft Green**: #38a169
- **Coral**: #ed8936
- **Purple**: #805ad5

## Layout Structure

- Golden Ratio Grid
- Content Width: 75ch maximum
- Visual Hierarchy Focus
- Progressive Disclosure Pattern

## Design Elements

- Geometric Accents
- Subtle Gradients
- Fine Dividing Lines
- Drop Shadows

## Components

### Cards
```css
.card {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  max-width: 350px;
  background: white;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}
```

### Buttons
```css
.button {
  display: inline-block;
  padding: 0.5rem 1.25rem;
  background: #2b6cb0;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: 500;
  transition: background 0.2s ease;
}

.button:hover {
  background: #1a365d;
}
```

### Navigation
```css
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  position: relative;
  transition: color 0.2s ease;
}

.nav-link:after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-primary);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover:after {
  width: 100%;
}
```

## Responsive Breakpoints

- **Mobile**: 0-768px
- **Tablet**: 768px-1024px
- **Desktop**: 1024px+

## Accessibility

- Color contrast ratio minimum 4.5:1 for text
- Focus indicators for interactive elements
- Semantic HTML structure
- ARIA attributes where appropriate
- Reduced motion option for animations