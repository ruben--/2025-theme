import React from 'react';

export const OverviewPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-content-primary dark:text-content-inverse mb-8">
        Safety Overview
      </h1>
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
          <h2 className="text-xl font-semibold text-content-primary dark:text-content-inverse mb-4">
            Key Safety Principles
          </h2>
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
};