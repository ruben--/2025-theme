import React from 'react';
import { Sidebar } from './Sidebar';
import { MobileSidebar } from './MobileSidebar';
import { SidebarToggle } from './SidebarToggle';
import { useSidebar } from '../hooks/useSidebar';
import { useDarkMode } from '../hooks/useDarkMode';
import type { NavigationItem } from '../types/navigation';

interface LayoutProps {
  children: React.ReactNode;
  navigation: NavigationItem[];
  onNavigationClick?: (item: NavigationItem) => void;
}

export const Layout: React.FC<LayoutProps> = ({ 
  children, 
  navigation, 
  onNavigationClick 
}) => {
  const { isMobileOpen, toggleMobile, closeMobile } = useSidebar();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="sidebar-layout">
      {/* Desktop Column 1: Spacer (hidden on mobile) */}
      <div className="hidden md:block"></div>
      
      {/* Desktop Column 2: Sidebar area (hidden on mobile) */}
      <div className="relative hidden md:block bg-surface dark:bg-brand-900">
        <Sidebar 
          navigation={navigation} 
          onItemClick={onNavigationClick}
        />
      </div>
      
      {/* Mobile Sidebar */}
      <MobileSidebar
        navigation={navigation}
        isOpen={isMobileOpen}
        onClose={closeMobile}
        onItemClick={onNavigationClick}
      />
      
      {/* Mobile: Column 1 / Desktop: Column 3 - Main Content Area */}
      <main className="flex min-h-screen w-full flex-col bg-brand-50 dark:bg-brand-950">
        {/* Mobile Header with Toggle */}
        <div className="md:hidden flex items-center justify-between p-4 bg-surface dark:bg-brand-900 border-b border-brand-200 dark:border-brand-800">
          <h1 className="text-lg font-semibold text-content-primary dark:text-content-inverse">Navigation</h1>
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md hover:bg-surface-hover dark:hover:bg-brand-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <svg className="w-5 h-5 text-content-primary dark:text-content-inverse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-content-primary dark:text-content-inverse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <SidebarToggle 
              isOpen={isMobileOpen}
              onClick={toggleMobile}
            />
          </div>
        </div>
        
        {/* Content Wrapper */}
        <div className="mx-auto w-full max-w-container px-6 py-8 md:py-12 lg:px-8">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12">
              {children}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};