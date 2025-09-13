import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type PageEntry = CollectionEntry<'pages'>;

/**
 * Get all pages from the content collection
 */
export async function getAllPages(): Promise<PageEntry[]> {
  try {
    const pages = await getCollection('pages');
    return pages.sort((a, b) => a.data.navOrder - b.data.navOrder);
  } catch (error) {
    console.error('Error loading pages:', error);
    return [];
  }
}

/**
 * Get pages that should show in navigation
 */
export async function getNavigationPages(): Promise<PageEntry[]> {
  const pages = await getAllPages();
  return pages.filter(page => page.data.showInNav);
}

/**
 * Get a specific page by slug
 */
export async function getPage(slug: string): Promise<PageEntry | undefined> {
  try {
    return await getEntry('pages', slug);
  } catch (error) {
    console.error(`Error loading page "${slug}":`, error);
    return undefined;
  }
}

/**
 * Get page title from slug
 */
export async function getPageTitle(slug: string): Promise<string> {
  const page = await getPage(slug);
  return page?.data.title || 'Page Not Found';
}

/**
 * Get page description from slug
 */
export async function getPageDescription(slug: string): Promise<string> {
  const page = await getPage(slug);
  return page?.data.description || 'Page description not available';
}

/**
 * Check if a page exists
 */
export async function pageExists(slug: string): Promise<boolean> {
  const page = await getPage(slug);
  return page !== undefined;
}

/**
 * Get related pages based on nav order
 */
export async function getRelatedPages(currentSlug: string, limit: number = 3): Promise<PageEntry[]> {
  const allPages = await getAllPages();
  const currentPage = allPages.find(page => page.id === currentSlug);
  
  if (!currentPage) return [];
  
  const currentOrder = currentPage.data.navOrder;
  
  // Get pages with similar nav order
  return allPages
    .filter(page => page.id !== currentSlug)
    .sort((a, b) => {
      const aDiff = Math.abs(a.data.navOrder - currentOrder);
      const bDiff = Math.abs(b.data.navOrder - currentOrder);
      return aDiff - bDiff;
    })
    .slice(0, limit);
}