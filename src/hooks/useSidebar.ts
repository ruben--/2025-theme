import { useState, useCallback } from 'react';

export interface UseSidebarReturn {
  isMobileOpen: boolean;
  openMobile: () => void;
  closeMobile: () => void;
  toggleMobile: () => void;
}

export const useSidebar = (): UseSidebarReturn => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const openMobile = useCallback(() => {
    setIsMobileOpen(true);
  }, []);

  const closeMobile = useCallback(() => {
    setIsMobileOpen(false);
  }, []);

  const toggleMobile = useCallback(() => {
    setIsMobileOpen(prev => !prev);
  }, []);

  return {
    isMobileOpen,
    openMobile,
    closeMobile,
    toggleMobile,
  };
};