import { HomeIcon, ShieldIcon, DocumentIcon, CogIcon, UserIcon, PaintBrushIcon } from '../components/icons';
import type { NavigationItem } from '../types/navigation';

export const navigationData: NavigationItem[] = [
  {
    id: 'overview',
    label: 'Overview',
    href: '/overview',
    icon: HomeIcon,
    isActive: true,
  },
  {
    id: 'safety',
    label: 'Safety',
    href: '/safety',
    icon: ShieldIcon,
    children: [
      {
        id: 'safety-overview',
        label: 'Safety Overview',
        href: '/safety/overview',
      },
      {
        id: 'safety-measures',
        label: 'Safety Measures',
        href: '/safety/measures',
      },
      {
        id: 'safety-research',
        label: 'Safety Research',
        href: '/safety/research',
      },
    ],
  },
  {
    id: 'documentation',
    label: 'Documentation',
    href: '/docs',
    icon: DocumentIcon,
    children: [
      {
        id: 'api-docs',
        label: 'API Reference',
        href: '/docs/api',
      },
      {
        id: 'guides',
        label: 'Guides',
        href: '/docs/guides',
      },
    ],
  },
  {
    id: 'settings',
    label: 'Settings',
    href: '/settings',
    icon: CogIcon,
  },
  {
    id: 'profile',
    label: 'Profile',
    href: '/profile',
    icon: UserIcon,
  },
  {
    id: 'theme',
    label: 'Theme',
    href: '/theme',
    icon: PaintBrushIcon,
  },
];