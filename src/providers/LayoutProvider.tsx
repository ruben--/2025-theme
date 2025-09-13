import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useSidebar } from '../hooks/useSidebar';
import { useDarkMode } from '../hooks/useDarkMode';

interface LayoutContextType {
  // Sidebar state
  isMobileOpen: boolean;
  toggleMobile: () => void;
  closeMobile: () => void;
  
  // Dark mode state
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  
  // Active page state
  activePage: string;
  setActivePage: (page: string) => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

interface LayoutProviderProps {
  children: ReactNode;
  initialPage?: string;
}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ 
  children, 
  initialPage = 'overview' 
}) => {
  const { isMobileOpen, toggleMobile, closeMobile } = useSidebar();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [activePage, setActivePage] = useState(initialPage);

  const value: LayoutContextType = {
    // Sidebar state
    isMobileOpen,
    toggleMobile,
    closeMobile,
    
    // Dark mode state
    isDarkMode,
    toggleDarkMode,
    
    // Active page state
    activePage,
    setActivePage,
  };

  return (
    <LayoutContext.Provider value={value}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = (): LayoutContextType => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};