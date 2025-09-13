import React from 'react';

export const SettingsPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-content-primary dark:text-content-inverse mb-8">
        Settings
      </h1>
      <div className="space-y-8">
        <div className="bg-surface dark:bg-brand-900 border border-brand-200 dark:border-brand-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-content-primary dark:text-content-inverse mb-4">
            Account Settings
          </h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3 border-b border-brand-100 dark:border-brand-800">
              <div>
                <h3 className="font-medium text-content-primary dark:text-content-inverse">
                  Email Notifications
                </h3>
                <p className="text-sm text-content-tertiary dark:text-brand-400">
                  Receive updates about your account
                </p>
              </div>
              <div className="bg-blue-500 w-12 h-6 rounded-full relative">
                <div className="bg-white w-5 h-5 rounded-full absolute right-0.5 top-0.5"></div>
              </div>
            </div>
            <div className="flex items-center justify-between py-3 border-b border-brand-100 dark:border-brand-800">
              <div>
                <h3 className="font-medium text-content-primary dark:text-content-inverse">
                  Two-Factor Authentication
                </h3>
                <p className="text-sm text-content-tertiary dark:text-brand-400">
                  Add an extra layer of security
                </p>
              </div>
              <div className="bg-brand-300 dark:bg-brand-700 w-12 h-6 rounded-full relative">
                <div className="bg-white w-5 h-5 rounded-full absolute left-0.5 top-0.5"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface dark:bg-brand-900 border border-brand-200 dark:border-brand-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-content-primary dark:text-content-inverse mb-4">
            API Configuration
          </h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-content-secondary dark:text-brand-300 mb-2">
                Rate Limit
              </label>
              <select className="w-full px-3 py-2 border border-brand-300 dark:border-brand-600 rounded-md bg-surface dark:bg-brand-800 text-content-primary dark:text-content-inverse">
                <option>1000 requests/minute</option>
                <option>5000 requests/minute</option>
                <option>10000 requests/minute</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-content-secondary dark:text-brand-300 mb-2">
                Default Model
              </label>
              <select className="w-full px-3 py-2 border border-brand-300 dark:border-brand-600 rounded-md bg-surface dark:bg-brand-800 text-content-primary dark:text-content-inverse">
                <option>GPT-4</option>
                <option>GPT-3.5 Turbo</option>
                <option>Claude-3</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-4">
            Danger Zone
          </h2>
          <div className="space-y-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-colors">
              Delete Account
            </button>
            <p className="text-sm text-red-600 dark:text-red-400">
              This action cannot be undone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};