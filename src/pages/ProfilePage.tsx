import React from 'react';

export const ProfilePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-content-primary dark:text-content-inverse mb-8">
        Profile
      </h1>
      <div className="space-y-8">
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">JD</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-content-primary dark:text-content-inverse">
              John Developer
            </h2>
            <p className="text-content-secondary dark:text-brand-300">john@example.com</p>
            <p className="text-sm text-content-tertiary dark:text-brand-400 mt-1">
              Member since March 2023
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-surface dark:bg-brand-900 border border-brand-200 dark:border-brand-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-content-primary dark:text-content-inverse mb-2">
              API Usage
            </h3>
            <div className="text-3xl font-bold text-blue-600 mb-1">847K</div>
            <p className="text-sm text-content-tertiary dark:text-brand-400">Tokens used this month</p>
            <div className="w-full bg-brand-200 dark:bg-brand-700 rounded-full h-2 mt-3">
              <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
            </div>
          </div>
          <div className="bg-surface dark:bg-brand-900 border border-brand-200 dark:border-brand-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-content-primary dark:text-content-inverse mb-2">
              Projects
            </h3>
            <div className="text-3xl font-bold text-green-600 mb-1">12</div>
            <p className="text-sm text-content-tertiary dark:text-brand-400">Active integrations</p>
            <div className="mt-3 space-y-1">
              <div className="text-xs text-content-tertiary dark:text-brand-400">• ChatBot Assistant</div>
              <div className="text-xs text-content-tertiary dark:text-brand-400">• Content Generator</div>
              <div className="text-xs text-content-tertiary dark:text-brand-400">• Code Helper</div>
            </div>
          </div>
          <div className="bg-surface dark:bg-brand-900 border border-brand-200 dark:border-brand-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-content-primary dark:text-content-inverse mb-2">
              Billing
            </h3>
            <div className="text-3xl font-bold text-purple-600 mb-1">$142</div>
            <p className="text-sm text-content-tertiary dark:text-brand-400">Current month usage</p>
            <div className="mt-3">
              <span className="inline-block bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded-full">
                Pro Plan
              </span>
            </div>
          </div>
        </div>
        <div className="bg-surface dark:bg-brand-900 border border-brand-200 dark:border-brand-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-content-primary dark:text-content-inverse mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 pb-3 border-b border-brand-100 dark:border-brand-800">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-content-primary dark:text-content-inverse">
                  API key generated
                </p>
                <p className="text-xs text-content-tertiary dark:text-brand-400">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 pb-3 border-b border-brand-100 dark:border-brand-800">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-content-primary dark:text-content-inverse">
                  Model upgraded to GPT-4
                </p>
                <p className="text-xs text-content-tertiary dark:text-brand-400">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/50 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-content-primary dark:text-content-inverse">
                  Billing plan updated
                </p>
                <p className="text-xs text-content-tertiary dark:text-brand-400">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};