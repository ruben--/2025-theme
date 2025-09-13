import { useState } from 'react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="p-2 rounded-md hover:bg-surface-hover dark:hover:bg-brand-800 transition-colors"
        aria-label="Toggle mobile menu"
      >
        <svg className="w-5 h-5 text-content-primary dark:text-content-inverse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={closeMenu}></div>
          
          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 max-w-[80vw] bg-surface dark:bg-brand-900 border-r border-brand-200 dark:border-brand-800 transform transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b border-brand-200 dark:border-brand-800">
              <h2 className="text-lg font-semibold text-content-primary dark:text-content-inverse">
                Navigation
              </h2>
              <button
                onClick={closeMenu}
                className="p-2 rounded-md hover:bg-surface-hover dark:hover:bg-brand-800 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-content-primary dark:text-content-inverse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="px-3 py-4">
              <div className="space-y-0.5">
                <a href="/" onClick={closeMenu} className="nav-item">
                  <span className="truncate">Overview</span>
                </a>
                <a href="/safety" onClick={closeMenu} className="nav-item">
                  <span className="truncate">Safety</span>
                </a>
                <a href="/documentation" onClick={closeMenu} className="nav-item">
                  <span className="truncate">Documentation</span>
                </a>
                <a href="/settings" onClick={closeMenu} className="nav-item">
                  <span className="truncate">Settings</span>
                </a>
                <a href="/profile" onClick={closeMenu} className="nav-item">
                  <span className="truncate">Profile</span>
                </a>
                <a href="/theme" onClick={closeMenu} className="nav-item">
                  <span className="truncate">Theme</span>
                </a>
                <a href="/blocks" onClick={closeMenu} className="nav-item">
                  <span className="truncate">Blocks</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}