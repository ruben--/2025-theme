export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  isActive?: boolean;
  children?: NavigationItem[];
}

export interface SidebarProps {
  navigation: NavigationItem[];
  onItemClick?: (item: NavigationItem) => void;
}