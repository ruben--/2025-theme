import React, { useEffect } from 'react';
import type { SidebarProps } from '../types/navigation';

interface MobileSidebarProps extends SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileSidebar: React.FC<MobileSidebarProps> = ({ 
  navigation, 
  isOpen, 
  onClose, 
  onItemClick 
}) => {
  // Close sidebar when clicking outside or pressing escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleItemClick = (item: any) => {
    if (onItemClick) {
      onItemClick(item);
    }
    onClose(); // Close mobile sidebar after clicking an item
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-25 md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Mobile Sidebar */}
      <div
        className={`duration-sidebar ease-curve-sidebar fixed inset-0 z-sidebar bg-white transition-transform md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="navigation-sidebar-mobile"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-md"
            aria-label="Close navigation"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Navigation Content */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto" aria-label="Mobile navigation">
          <div className="space-y-0.5">
            {navigation.map((item) => (
              <div key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item);
                  }}
                  className={`sidebar-nav-item ${item.isActive ? 'active' : ''}`}
                  aria-current={item.isActive ? 'page' : undefined}
                >
                  <div className="flex items-center">
                    {item.icon && (
                      <item.icon className="mr-2.5 h-4 w-4 flex-shrink-0 text-gray-400" />
                    )}
                    <span className="truncate">{item.label}</span>
                  </div>
                </a>
                
                {/* Nested navigation items */}
                {item.children && item.children.length > 0 && (
                  <div className="ml-6 mt-0.5 space-y-0.5">
                    {item.children.map((child) => (
                      <a
                        key={child.id}
                        href={child.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleItemClick(child);
                        }}
                        className={`sidebar-nav-child ${child.isActive ? 'active' : ''}`}
                        aria-current={child.isActive ? 'page' : undefined}
                      >
                        <div className="flex items-center">
                          {child.icon && (
                            <child.icon className="mr-2 h-3 w-3 flex-shrink-0 text-gray-400" />
                          )}
                          <span className="truncate">{child.label}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};