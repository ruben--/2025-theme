import React from 'react';
import type { SidebarProps } from '../types/navigation';

export const Sidebar: React.FC<SidebarProps> = ({ navigation, onItemClick }) => {
  return (
    <nav 
      className="px-3 w-full h-full overflow-y-auto"
      id="navigation-sidebar-desktop"
      aria-label="Desktop navigation"
    >
      <div className="space-y-0.5 py-4 pt-20">
        {navigation.map((item) => (
          <div key={item.id}>
            <a
              href={item.href}
              onClick={(e) => {
                if (onItemClick) {
                  e.preventDefault();
                  onItemClick(item);
                }
              }}
              className={`nav-item ${item.isActive ? 'nav-item--active' : ''}`}
              aria-current={item.isActive ? 'page' : undefined}
            >
              <span className="truncate">{item.label}</span>
            </a>
            
            {/* Nested navigation items */}
            {item.children && item.children.length > 0 && (
              <div className="ml-6 mt-0.5 space-y-0.5">
                {item.children.map((child) => (
                  <a
                    key={child.id}
                    href={child.href}
                    onClick={(e) => {
                      if (onItemClick) {
                        e.preventDefault();
                        onItemClick(child);
                      }
                    }}
                    className={`nav-child ${child.isActive ? 'nav-child--active' : ''}`}
                    aria-current={child.isActive ? 'page' : undefined}
                  >
                    <span className="truncate">{child.label}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};