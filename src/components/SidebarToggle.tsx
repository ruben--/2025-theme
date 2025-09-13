import React from 'react';

interface SidebarToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export const SidebarToggle: React.FC<SidebarToggleProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200 md:hidden"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      <svg 
        className="w-6 h-6" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
        aria-hidden="true"
      >
        {isOpen ? (
          // Close icon (X)
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M6 18L18 6M6 6l12 12" 
          />
        ) : (
          // Hamburger icon
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M4 6h16M4 12h16M4 18h16" 
          />
        )}
      </svg>
    </button>
  );
};