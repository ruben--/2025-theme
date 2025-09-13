import { useState } from 'react';
import { Layout } from './components/Layout';
import { HomeIcon, ShieldIcon, DocumentIcon, CogIcon, UserIcon, PaintBrushIcon } from './components/icons';
import type { NavigationItem } from './types/navigation';
import './globals.css';

const sampleNavigation: NavigationItem[] = [
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

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const handleNavigationClick = (item: NavigationItem) => {
    setActiveSection(item.id);
    console.log('Navigation clicked:', item.label);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div>
            <h1 className="text-4xl font-semibold text-content-primary dark:text-content-inverse mb-8">Safety Overview</h1>
            <div className="space-y-6">
              <p className="text-lg text-content-secondary dark:text-brand-300 leading-relaxed">
                Our mission is to ensure that artificial general intelligence (AGI)—by which we 
                mean highly autonomous systems that outperform humans at most economically valuable 
                work—benefits all of humanity.
              </p>
              <p className="text-base text-content-tertiary dark:text-brand-400 leading-relaxed">
                We will attempt to directly build safe and beneficial AGI, but will also consider 
                our mission fulfilled if our work aids others to achieve this outcome. To that end, 
                we commit to the following principles:
              </p>
              <div className="bg-surface dark:bg-brand-800 border border-brand-200 dark:border-brand-700 rounded-lg p-6 mt-8">
                <h2 className="text-xl font-semibold text-content-primary dark:text-content-inverse mb-4">Key Safety Principles</h2>
                <ul className="space-y-3 text-content-secondary dark:text-brand-300">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-brand-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Broadly distributed benefits and long-term safety</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-brand-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Technical leadership and cooperative orientation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-brand-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Fiduciary obligation to humanity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case 'safety':
        return (
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-8">AI Safety Research</h1>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-red-900 mb-3">Alignment Research</h2>
                  <p className="text-red-700 mb-4">
                    Ensuring AI systems understand and optimize for human values and intentions.
                  </p>
                  <ul className="space-y-2 text-red-600 text-sm">
                    <li>• Constitutional AI training methods</li>
                    <li>• Value learning from human feedback</li>
                    <li>• Interpretability research</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-orange-900 mb-3">Robustness</h2>
                  <p className="text-orange-700 mb-4">
                    Building AI systems that perform reliably across diverse conditions.
                  </p>
                  <ul className="space-y-2 text-orange-600 text-sm">
                    <li>• Adversarial training techniques</li>
                    <li>• Distribution shift handling</li>
                    <li>• Safety evaluation frameworks</li>
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Research Publications</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-semibold text-gray-900">Constitutional AI: Harmlessness from AI Feedback</h3>
                    <p className="text-gray-600 text-sm">Published in Nature Machine Intelligence, 2023</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900">Training Language Models to Follow Instructions</h3>
                    <p className="text-gray-600 text-sm">Published in NeurIPS, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'documentation':
        return (
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-8">Documentation</h1>
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-blue-900 mb-3">API Reference</h2>
                  <p className="text-blue-700 mb-4">Complete API documentation with examples and best practices.</p>
                  <div className="space-y-2 text-sm">
                    <div className="font-mono bg-blue-100 px-2 py-1 rounded">POST /v1/completions</div>
                    <div className="font-mono bg-blue-100 px-2 py-1 rounded">GET /v1/models</div>
                    <div className="font-mono bg-blue-100 px-2 py-1 rounded">POST /v1/chat/completions</div>
                  </div>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-green-900 mb-3">Quick Start</h2>
                  <p className="text-green-700 mb-4">Get up and running with our APIs in minutes.</p>
                  <div className="space-y-2 text-sm text-green-600">
                    <div>1. Create an API key</div>
                    <div>2. Install the SDK</div>
                    <div>3. Make your first request</div>
                    <div>4. Handle responses</div>
                  </div>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                  <h2 className="text-xl font-semibold text-purple-900 mb-3">SDKs</h2>
                  <p className="text-purple-700 mb-4">Official libraries for popular programming languages.</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Python</div>
                    <div className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Node.js</div>
                    <div className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>Go</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-900 text-gray-100 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Code Example</h2>
                <pre className="text-sm overflow-x-auto">
{`import openai

client = openai.OpenAI(api_key="your-api-key")

response = client.chat.completions.create(
  model="gpt-4",
  messages=[{"role": "user", "content": "Hello, world!"}]
)

print(response.choices[0].message.content)`}
                </pre>
              </div>
            </div>
          </div>
        );
      case 'settings':
        return (
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-8">Settings</h1>
            <div className="space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <h3 className="font-medium text-gray-900">Email Notifications</h3>
                      <p className="text-sm text-gray-600">Receive updates about your account</p>
                    </div>
                    <div className="bg-blue-500 w-12 h-6 rounded-full relative">
                      <div className="bg-white w-5 h-5 rounded-full absolute right-0.5 top-0.5"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div>
                      <h3 className="font-medium text-gray-900">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-600">Add an extra layer of security</p>
                    </div>
                    <div className="bg-gray-300 w-12 h-6 rounded-full relative">
                      <div className="bg-white w-5 h-5 rounded-full absolute left-0.5 top-0.5"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">API Configuration</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Rate Limit</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>1000 requests/minute</option>
                      <option>5000 requests/minute</option>
                      <option>10000 requests/minute</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Default Model</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                      <option>GPT-4</option>
                      <option>GPT-3.5 Turbo</option>
                      <option>Claude-3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-red-900 mb-4">Danger Zone</h2>
                <div className="space-y-4">
                  <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700">
                    Delete Account
                  </button>
                  <p className="text-sm text-red-600">This action cannot be undone.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'theme':
        return (
          <div>
            <h1 className="text-4xl font-semibold text-content-primary dark:text-content-inverse mb-8">Theme Showcase</h1>
            
            {/* Typography Showcase */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-content-primary dark:text-content-inverse mb-6">Typography</h2>
              <div className="space-y-4 bg-surface dark:bg-brand-900 border border-brand-200 dark:border-brand-700 rounded-lg p-6">
                <div className="text-6xl font-bold text-content-primary dark:text-content-inverse">Heading 6xl</div>
                <div className="text-5xl font-bold text-content-primary dark:text-content-inverse">Heading 5xl</div>
                <div className="text-4xl font-semibold text-content-primary dark:text-content-inverse">Heading 4xl</div>
                <div className="text-3xl font-semibold text-content-primary dark:text-content-inverse">Heading 3xl</div>
                <div className="text-2xl font-semibold text-content-primary dark:text-content-inverse">Heading 2xl</div>
                <div className="text-xl font-semibold text-content-primary dark:text-content-inverse">Heading xl</div>
                <div className="text-lg font-medium text-content-primary dark:text-content-inverse">Heading lg</div>
                <div className="text-base text-content-primary dark:text-content-inverse">Body text (base)</div>
                <div className="text-sm text-content-secondary dark:text-brand-300">Small text (sm)</div>
                <div className="text-xs text-content-tertiary dark:text-brand-400">Extra small text (xs)</div>
              </div>
            </div>
            
            {/* Color Palette */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-content-primary dark:text-content-inverse mb-6">Brand Color System</h2>
              
              {/* Brand Scale */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-content-primary dark:text-content-inverse mb-4">Brand Scale (50-950)</h3>
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
                <h3 className="text-lg font-semibold text-content-primary dark:text-content-inverse mb-4">Semantic Colors</h3>
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
              <h2 className="text-2xl font-semibold text-content-primary dark:text-content-inverse mb-6">12-Column Grid System</h2>
              
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
              <h2 className="text-2xl font-semibold text-content-primary dark:text-content-inverse mb-6">Component Classes</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-content-primary dark:text-content-inverse mb-2">Container</h3>
                  <code className="text-sm bg-brand-100 dark:bg-brand-800 px-2 py-1 rounded">.container-custom</code>
                  <p className="text-sm text-content-secondary dark:text-brand-300 mt-1">Max-width container with responsive padding</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-content-primary dark:text-content-inverse mb-2">Grid</h3>
                  <code className="text-sm bg-brand-100 dark:bg-brand-800 px-2 py-1 rounded">grid grid-cols-12</code>
                  <p className="text-sm text-content-secondary dark:text-brand-300 mt-1">12-column grid with standard gaps</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-content-primary dark:text-content-inverse mb-2">Layout</h3>
                  <code className="text-sm bg-brand-100 dark:bg-brand-800 px-2 py-1 rounded">.sidebar-layout</code>
                  <p className="text-sm text-content-secondary dark:text-brand-300 mt-1">Responsive sidebar layout grid</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'profile':
        return (
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-8">Profile</h1>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">JD</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-900">John Developer</h2>
                  <p className="text-gray-600">john@example.com</p>
                  <p className="text-sm text-gray-500 mt-1">Member since March 2023</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">API Usage</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">847K</div>
                  <p className="text-sm text-gray-600">Tokens used this month</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
                    <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Projects</h3>
                  <div className="text-3xl font-bold text-green-600 mb-1">12</div>
                  <p className="text-sm text-gray-600">Active integrations</p>
                  <div className="mt-3 space-y-1">
                    <div className="text-xs text-gray-500">• ChatBot Assistant</div>
                    <div className="text-xs text-gray-500">• Content Generator</div>
                    <div className="text-xs text-gray-500">• Code Helper</div>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Billing</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-1">$142</div>
                  <p className="text-sm text-gray-600">Current month usage</p>
                  <div className="mt-3">
                    <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Pro Plan
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">API key generated</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 pb-3 border-b border-gray-100">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Model upgraded to GPT-4</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">Billing plan updated</p>
                      <p className="text-xs text-gray-500">3 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div>
            <h1 className="text-4xl font-semibold text-gray-900 mb-8">Page Not Found</h1>
            <div className="text-center py-12">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-4xl">🔍</span>
              </div>
              <p className="text-lg text-gray-600 mb-4">
                The requested page could not be found.
              </p>
              <p className="text-gray-500 mb-8">
                Try navigating to one of the available sections using the sidebar.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
                Return Home
              </button>
            </div>
          </div>
        );
    }
  };

  return (
    <Layout navigation={sampleNavigation} onNavigationClick={handleNavigationClick}>
      {renderContent()}
    </Layout>
  );
}

export default App;