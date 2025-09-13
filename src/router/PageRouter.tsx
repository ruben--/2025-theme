import React from 'react';
import { OverviewPage } from '../pages/OverviewPage';
import { SafetyPage } from '../pages/SafetyPage';
import { DocumentationPage } from '../pages/DocumentationPage';
import { SettingsPage } from '../pages/SettingsPage';
import { ProfilePage } from '../pages/ProfilePage';
import { ThemePage } from '../pages/ThemePage';
import { BlocksPage } from '../pages/BlocksPage';
import { useLayout } from '../providers/LayoutProvider';

// Page registry for clean routing
const pages = {
  overview: OverviewPage,
  safety: SafetyPage,
  documentation: DocumentationPage,
  settings: SettingsPage,
  profile: ProfilePage,
  theme: ThemePage,
  blocks: BlocksPage,
} as const;

export type PageKey = keyof typeof pages;

interface PageRouterProps {
  className?: string;
}

export const PageRouter: React.FC<PageRouterProps> = ({ className }) => {
  const { activePage } = useLayout();
  
  // Get the page component or fallback to overview
  const PageComponent = pages[activePage as PageKey] || OverviewPage;
  
  return (
    <div className={className}>
      <PageComponent />
    </div>
  );
};

export const isValidPage = (page: string): page is PageKey => {
  return page in pages;
};