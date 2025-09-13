import { useState, useEffect } from 'react';

interface MobileMenuProps {
  children: React.ReactNode;
}

export default function MobileMenu({ children }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Listen for custom close event from navigation links
  useEffect(() => {
    const handleCloseMenu = () => setIsOpen(false);
    window.addEventListener('closeMobileMenu', handleCloseMenu);
    return () => window.removeEventListener('closeMobileMenu', handleCloseMenu);
  }, []);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md hover:bg-surface-hover transition-colors"
        aria-label="Toggle mobile menu"
      >
        <svg className="w-5 h-5 text-content-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={closeMenu}></div>
          
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-surface border-r border-brand-700 transform transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b border-brand-700">
              <h2 className="text-lg font-semibold text-content-primary">
                Navigation
              </h2>
              <button
                onClick={closeMenu}
                className="p-2 rounded-md hover:bg-surface-hover transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-content-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {children}
          </div>
        </div>
      )}
    </>
  );
}