# OpenAI Sidebar Navigation Template

A sophisticated, responsive sidebar navigation template built with Tailwind CSS and React, inspired by OpenAI's navigation design.

## Features

- **CSS Grid Layout**: Dynamic column sizing with smooth transitions
- **Responsive Design**: Mobile drawer overlay + desktop fixed sidebar  
- **Smooth Animations**: Grid column transitions and transform-based mobile drawer
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **TypeScript**: Full type definitions included
- **Customizable**: Extensive theme variables and configuration options

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Layout.tsx           # Main grid layout component
│   ├── Sidebar.tsx          # Desktop sidebar navigation
│   ├── MobileSidebar.tsx    # Mobile drawer navigation
│   ├── SidebarToggle.tsx    # Hamburger menu button
│   └── icons.tsx            # Icon components
├── hooks/
│   └── useSidebar.ts        # Sidebar state management
├── types/
│   └── navigation.ts        # TypeScript interfaces
├── globals.css              # Tailwind styles & theme variables
└── App.tsx                  # Demo application
```

## Key Implementation Details

### CSS Grid Layout
The layout uses dynamic CSS Grid columns that transition smoothly:
- Mobile: `grid-cols-[0_1fr]` (sidebar hidden)
- Desktop: `grid-cols-[0_200px_1fr]` (sidebar visible)

### Theme Variables
Custom CSS variables defined with `@theme` directive:
```css
@theme {
  --nav-width: 200px;
  --duration-sidebar: 300ms;
  --ease-curve-sidebar: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Responsive Behavior
- **Desktop**: Fixed positioned sidebar with smooth grid transitions
- **Mobile**: Full-screen drawer overlay with transform animations

## Customization

### Navigation Data Structure
```typescript
interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  isActive?: boolean;
  children?: NavigationItem[];
}
```

### Theme Configuration
Modify `tailwind.config.js` to customize:
- Sidebar width and spacing
- Animation timing and easing
- Colors and typography
- Breakpoints

### Usage Example
```tsx
import { Layout } from './components/Layout';
import type { NavigationItem } from './types/navigation';

const navigation: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    href: '/',
    icon: HomeIcon,
    isActive: true,
  },
  // ... more items
];

function App() {
  return (
    <Layout navigation={navigation}>
      <YourContent />
    </Layout>
  );
}
```

## Browser Support

- Chrome, Firefox, Safari, Edge (modern versions)
- CSS Grid and Custom Properties support required
- Mobile responsive design for iOS Safari and Chrome Mobile

## License

MIT License - feel free to use in your projects!