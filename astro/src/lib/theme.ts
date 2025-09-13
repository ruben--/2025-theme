export type Theme = 'light' | 'dark' | 'system';

/**
 * Theme management utilities for client-side code
 */
export class ThemeManager {
  private static readonly STORAGE_KEY = 'theme';
  
  /**
   * Get the current theme from localStorage
   */
  static getStoredTheme(): Theme | null {
    if (typeof localStorage === 'undefined') return null;
    return localStorage.getItem(this.STORAGE_KEY) as Theme | null;
  }
  
  /**
   * Set theme in localStorage
   */
  static setStoredTheme(theme: Theme): void {
    if (typeof localStorage === 'undefined') return;
    localStorage.setItem(this.STORAGE_KEY, theme);
  }
  
  /**
   * Get system theme preference
   */
  static getSystemTheme(): 'light' | 'dark' {
    if (typeof window === 'undefined') return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  /**
   * Resolve theme to actual light/dark value
   */
  static resolveTheme(theme: Theme): 'light' | 'dark' {
    if (theme === 'system') {
      return this.getSystemTheme();
    }
    return theme;
  }
  
  /**
   * Apply theme to document
   */
  static applyTheme(theme: 'light' | 'dark'): void {
    if (typeof document === 'undefined') return;
    
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
  
  /**
   * Initialize theme on page load
   */
  static initialize(): 'light' | 'dark' {
    const storedTheme = this.getStoredTheme() || 'system';
    const resolvedTheme = this.resolveTheme(storedTheme);
    this.applyTheme(resolvedTheme);
    return resolvedTheme;
  }
  
  /**
   * Toggle between light and dark themes
   */
  static toggle(): 'light' | 'dark' {
    const current = this.getStoredTheme() || 'system';
    const resolved = this.resolveTheme(current);
    const newTheme = resolved === 'light' ? 'dark' : 'light';
    
    this.setStoredTheme(newTheme);
    this.applyTheme(newTheme);
    return newTheme;
  }
  
  /**
   * Listen for system theme changes
   */
  static watchSystemTheme(callback: (isDark: boolean) => void): () => void {
    if (typeof window === 'undefined') return () => {};
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => callback(e.matches);
    
    mediaQuery.addEventListener('change', handler);
    
    // Return cleanup function
    return () => mediaQuery.removeEventListener('change', handler);
  }
}

/**
 * Generate theme-aware CSS classes
 */
export function getThemeClasses(baseClasses: string, darkClasses: string): string {
  return `${baseClasses} dark:${darkClasses}`;
}

/**
 * Theme-aware color utilities
 */
export const themeColors = {
  // Content colors
  primary: 'text-content-primary dark:text-content-inverse',
  secondary: 'text-content-secondary dark:text-brand-300',
  
  // Background colors
  surface: 'bg-surface dark:bg-brand-900',
  background: 'bg-brand-50 dark:bg-brand-950',
  
  // Border colors
  border: 'border-brand-200 dark:border-brand-700',
  borderLight: 'border-brand-200 dark:border-brand-800',
  
  // Interactive states
  hover: 'hover:bg-surface-hover dark:hover:bg-brand-800',
  active: 'bg-brand-100 dark:bg-brand-800',
} as const;