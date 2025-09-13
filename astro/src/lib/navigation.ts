import { getEntry } from 'astro:content';

export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  icon?: string;
  order: number;
  description?: string;
}

export async function getNavigationItems(): Promise<NavigationItem[]> {
  try {
    const navEntry = await getEntry('navigation', 'main');
    if (!navEntry) {
      console.warn('Navigation data not found, falling back to default');
      return getDefaultNavigation();
    }

    const navItems = navEntry.data;
    return navItems.sort((a, b) => a.order - b.order);
  } catch (error) {
    console.error('Error loading navigation:', error);
    return getDefaultNavigation();
  }
}

function getDefaultNavigation(): NavigationItem[] {
  return [
    { id: 'overview', title: 'Overview', href: '/', order: 1 },
    { id: 'safety', title: 'Safety', href: '/safety', order: 2 },
    { id: 'documentation', title: 'Documentation', href: '/documentation', order: 3 },
    { id: 'settings', title: 'Settings', href: '/settings', order: 4 },
    { id: 'profile', title: 'Profile', href: '/profile', order: 5 },
    { id: 'theme', title: 'Theme', href: '/theme', order: 6 },
    { id: 'blocks', title: 'Blocks', href: '/blocks', order: 7 },
  ];
}

export function isCurrentPage(href: string, currentPath: string): boolean {
  if (href === '/' && currentPath === '/') return true;
  if (href !== '/' && currentPath.startsWith(href)) return true;
  return false;
}

export function getPageTitle(currentPath: string, navItems: NavigationItem[]): string {
  const currentItem = navItems.find(item => isCurrentPage(item.href, currentPath));
  return currentItem ? currentItem.title : 'Page';
}