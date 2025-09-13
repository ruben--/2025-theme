import React from 'react';

export const ThemePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-content-primary dark:text-content-inverse mb-8">
        Theme Showcase
      </h1>
      
      {/* Typography Showcase */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-content-primary dark:text-content-inverse mb-6">
          Typography
        </h2>
        <div className="space-y-4 bg-surface dark:bg-brand-900 border border-brand-200 dark:border-brand-700 rounded-lg p-6">
          <div className="text-6xl font-bold text-content-primary dark:text-content-inverse">
            Heading 6xl
          </div>
          <div className="text-5xl font-bold text-content-primary dark:text-content-inverse">
            Heading 5xl
          </div>
          <div className="text-4xl font-semibold text-content-primary dark:text-content-inverse">
            Heading 4xl
          </div>
          <div className="text-3xl font-semibold text-content-primary dark:text-content-inverse">
            Heading 3xl
          </div>
          <div className="text-2xl font-semibold text-content-primary dark:text-content-inverse">
            Heading 2xl
          </div>
          <div className="text-xl font-semibold text-content-primary dark:text-content-inverse">
            Heading xl
          </div>
          <div className="text-lg font-medium text-content-primary dark:text-content-inverse">
            Heading lg
          </div>
          <div className="text-base text-content-primary dark:text-content-inverse">
            Body text (base)
          </div>
          <div className="text-sm text-content-secondary dark:text-brand-300">
            Small text (sm)
          </div>
          <div className="text-xs text-content-tertiary dark:text-brand-400">
            Extra small text (xs)
          </div>
        </div>
      </div>
      
      {/* Color Palette */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-content-primary dark:text-content-inverse mb-6">
          Brand Color System
        </h2>
        
        {/* Brand Scale */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-content-primary dark:text-content-inverse mb-4">
            Brand Scale (50-950)
          </h3>
          <div className="grid grid-cols-12 gap-2">
            <div className="col-span-1">
              <div className="bg-brand-50 h-16 rounded border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-xs font-medium text-content-primary dark:text-content-inverse text-center">50</div>
            </div>
            <div className="col-span-1">
              <div className="bg-brand-100 h-16 rounded border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-xs font-medium text-content-primary dark:text-content-inverse text-center">100</div>
            </div>
            <div className="col-span-1">
              <div className="bg-brand-200 h-16 rounded border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-xs font-medium text-content-primary dark:text-content-inverse text-center">200</div>
            </div>
            <div className="col-span-1">
              <div className="bg-brand-300 h-16 rounded border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-xs font-medium text-content-primary dark:text-content-inverse text-center">300</div>
            </div>
            <div className="col-span-1">
              <div className="bg-brand-400 h-16 rounded border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-xs font-medium text-content-primary dark:text-content-inverse text-center">400</div>
            </div>
            <div className="col-span-1">
              <div className="bg-brand-500 h-16 rounded border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-xs font-medium text-content-primary dark:text-content-inverse text-center">500</div>
            </div>
            <div className="col-span-1">
              <div className="bg-brand-600 h-16 rounded border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-xs font-medium text-content-primary dark:text-content-inverse text-center">600</div>
            </div>
            <div className="col-span-1">
              <div className="bg-brand-700 h-16 rounded border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-xs font-medium text-content-primary dark:text-content-inverse text-center">700</div>
            </div>
            <div className="col-span-1">
              <div className="bg-brand-800 h-16 rounded border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-xs font-medium text-content-primary dark:text-content-inverse text-center">800</div>
            </div>
            <div className="col-span-1">
              <div className="bg-brand-900 h-16 rounded border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-xs font-medium text-content-primary dark:text-content-inverse text-center">900</div>
            </div>
            <div className="col-span-1">
              <div className="bg-brand-950 h-16 rounded border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-xs font-medium text-content-primary dark:text-content-inverse text-center">950</div>
            </div>
          </div>
        </div>
        
        {/* Semantic Colors */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-content-primary dark:text-content-inverse mb-4">
            Semantic Colors
          </h3>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <div className="bg-content-primary h-24 rounded-lg mb-2"></div>
              <div className="text-sm font-medium text-content-primary dark:text-content-inverse">Primary Text</div>
              <div className="text-xs text-content-tertiary dark:text-brand-400">text-content-primary</div>
            </div>
            <div className="col-span-3">
              <div className="bg-content-secondary h-24 rounded-lg mb-2"></div>
              <div className="text-sm font-medium text-content-primary dark:text-content-inverse">Secondary Text</div>
              <div className="text-xs text-content-tertiary dark:text-brand-400">text-content-secondary</div>
            </div>
            <div className="col-span-3">
              <div className="bg-surface h-24 rounded-lg border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-sm font-medium text-content-primary dark:text-content-inverse">Surface</div>
              <div className="text-xs text-content-tertiary dark:text-brand-400">bg-surface</div>
            </div>
            <div className="col-span-3">
              <div className="bg-surface-hover h-24 rounded-lg border border-brand-200 dark:border-brand-700 mb-2"></div>
              <div className="text-sm font-medium text-content-primary dark:text-content-inverse">Hover State</div>
              <div className="text-xs text-content-tertiary dark:text-brand-400">bg-surface-hover</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Grid System */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-content-primary dark:text-content-inverse mb-6">
          12-Column Grid System
        </h2>
        
        {/* Full Width */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          <div className="col-span-12 bg-blue-100 dark:bg-blue-900 border border-blue-300 dark:border-blue-700 rounded-lg p-4 text-center">
            <div className="text-sm font-semibold text-blue-900 dark:text-blue-100">12 Columns (Full Width)</div>
            <div className="text-xs text-blue-700 dark:text-blue-300 mt-1">col-span-12</div>
          </div>
        </div>
        
        {/* Half Width */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          <div className="col-span-6 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg p-4 text-center">
            <div className="text-sm font-semibold text-green-900 dark:text-green-100">6 Columns</div>
            <div className="text-xs text-green-700 dark:text-green-300 mt-1">col-span-6</div>
          </div>
          <div className="col-span-6 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg p-4 text-center">
            <div className="text-sm font-semibold text-green-900 dark:text-green-100">6 Columns</div>
            <div className="text-xs text-green-700 dark:text-green-300 mt-1">col-span-6</div>
          </div>
        </div>
        
        {/* Thirds */}
        <div className="grid grid-cols-12 gap-6 mb-6">
          <div className="col-span-4 bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 rounded-lg p-4 text-center">
            <div className="text-sm font-semibold text-purple-900 dark:text-purple-100">4 Columns</div>
            <div className="text-xs text-purple-700 dark:text-purple-300 mt-1">col-span-4</div>
          </div>
          <div className="col-span-4 bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 rounded-lg p-4 text-center">
            <div className="text-sm font-semibold text-purple-900 dark:text-purple-100">4 Columns</div>
            <div className="text-xs text-purple-700 dark:text-purple-300 mt-1">col-span-4</div>
          </div>
          <div className="col-span-4 bg-purple-100 dark:bg-purple-900 border border-purple-300 dark:border-purple-700 rounded-lg p-4 text-center">
            <div className="text-sm font-semibold text-purple-900 dark:text-purple-100">4 Columns</div>
            <div className="text-xs text-purple-700 dark:text-purple-300 mt-1">col-span-4</div>
          </div>
        </div>
      </div>
      
      {/* Component Classes */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-content-primary dark:text-content-inverse mb-6">
          Component Classes
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium text-content-primary dark:text-content-inverse mb-2">
              Container
            </h3>
            <code className="text-sm bg-brand-100 dark:bg-brand-800 px-2 py-1 rounded">
              grid grid-cols-12
            </code>
            <p className="text-sm text-content-secondary dark:text-brand-300 mt-1">
              12-column grid with standard gaps
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-content-primary dark:text-content-inverse mb-2">
              Layout
            </h3>
            <code className="text-sm bg-brand-100 dark:bg-brand-800 px-2 py-1 rounded">
              .sidebar-layout
            </code>
            <p className="text-sm text-content-secondary dark:text-brand-300 mt-1">
              Responsive sidebar layout grid
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};