/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      // Custom spacing values following rem units
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Layout dimensions
      maxWidth: {
        'container': '86rem', // 1376px content width
        'content': 'calc(100vw - 12.5rem)', // Full width minus sidebar
      },
      
      width: {
        'sidebar': '12.5rem', // 200px sidebar
      },
      
      // Color system following Tailwind conventions
      colors: {
        // Brand colors with proper scales
        brand: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0f0f0f',
        },
        
        // Semantic colors for UI elements
        surface: {
          DEFAULT: '#ffffff',
          hover: 'rgba(0, 0, 0, 0.04)',
          active: 'rgba(0, 0, 0, 0.08)',
          muted: '#fafafa',
        },
        
        // Text colors
        content: {
          primary: '#0f0f0f',
          secondary: '#6b6b6b',
          tertiary: '#8d8d8d',
          inverse: '#ffffff',
        },
      },
      
      // Grid templates
      gridTemplateColumns: {
        'layout': '0 12.5rem 1fr', // Sidebar layout
        '12': 'repeat(12, minmax(0, 1fr))', // 12-column grid
      },
      
      // Typography - using Inter font
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      
      // Custom animations
      transitionProperty: {
        'grid': 'grid-template-columns',
      },
      
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      
      // Z-index scale
      zIndex: {
        'dropdown': '10',
        'sticky': '20',
        'fixed': '30',
        'modal-backdrop': '40',
        'modal': '50',
        'popover': '60',
        'tooltip': '70',
      },
    },
  },
  plugins: [
    // Add typography plugin for better text rendering
    // require('@tailwindcss/typography'),
    
    // Custom component plugin
    function({ addComponents, theme }) {
      addComponents({
        // Container component
        '.container-custom': {
          maxWidth: theme('maxWidth.container'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: theme('spacing.6'),
          paddingRight: theme('spacing.6'),
          '@media (min-width: 1024px)': {
            paddingLeft: theme('spacing.8'),
            paddingRight: theme('spacing.8'),
          },
        },
        
        // Grid component
        '.grid-12': {
          display: 'grid',
          gridTemplateColumns: theme('gridTemplateColumns.12'),
          gap: theme('spacing.6'),
        },
        
        // Layout component
        '.layout-sidebar': {
          display: 'grid',
          gridTemplateColumns: theme('gridTemplateColumns.layout'),
          minHeight: '100vh',
          '@media (max-width: 767px)': {
            gridTemplateColumns: '1fr',
          },
        },
      });
    },
  ],
}