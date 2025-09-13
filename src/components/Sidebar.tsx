import React from 'react';
import type { SidebarProps } from '../types/navigation';

export const Sidebar: React.FC<SidebarProps> = ({ navigation, onItemClick }) => {
  return (
    <nav 
      className="px-3 w-sidebar absolute right-0 top-0 mt-48 hidden md:block"
      id="navigation-sidebar-desktop"
      aria-label="Desktop navigation"
    >
      <div className="space-y-0.5 py-4">
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
              <div className="flex items-center">
                {item.icon && (
                  <item.icon className="mr-2.5 h-4 w-4 flex-shrink-0 text-content-tertiary dark:text-brand-400" />
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
                      if (onItemClick) {
                        e.preventDefault();
                        onItemClick(child);
                      }
                    }}
                    className={`nav-child ${child.isActive ? 'nav-child--active' : ''}`}
                    aria-current={child.isActive ? 'page' : undefined}
                  >
                    <div className="flex items-center">
                      {child.icon && (
                        <child.icon className="mr-2 h-3 w-3 flex-shrink-0 text-content-tertiary dark:text-brand-400" />
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
  );
};