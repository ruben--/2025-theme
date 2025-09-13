import React from 'react';

export const SafetyPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-content-primary dark:text-content-inverse mb-8">
        AI Safety Research
      </h1>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-red-900 dark:text-red-100 mb-3">
              Alignment Research
            </h2>
            <p className="text-red-700 dark:text-red-300 mb-4">
              Ensuring AI systems understand and optimize for human values and intentions.
            </p>
            <ul className="space-y-2 text-red-600 dark:text-red-400 text-sm">
              <li>• Constitutional AI training methods</li>
              <li>• Value learning from human feedback</li>
              <li>• Interpretability research</li>
            </ul>
          </div>
          <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-orange-900 dark:text-orange-100 mb-3">
              Robustness
            </h2>
            <p className="text-orange-700 dark:text-orange-300 mb-4">
              Building AI systems that perform reliably across diverse conditions.
            </p>
            <ul className="space-y-2 text-orange-600 dark:text-orange-400 text-sm">
              <li>• Adversarial training techniques</li>
              <li>• Distribution shift handling</li>
              <li>• Safety evaluation frameworks</li>
            </ul>
          </div>
        </div>
        <div className="bg-surface dark:bg-brand-800 border border-brand-200 dark:border-brand-700 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-content-primary dark:text-content-inverse mb-6">
            Research Publications
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-content-primary dark:text-content-inverse">
                Constitutional AI: Harmlessness from AI Feedback
              </h3>
              <p className="text-content-tertiary dark:text-brand-400 text-sm">
                Published in Nature Machine Intelligence, 2023
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-content-primary dark:text-content-inverse">
                Training Language Models to Follow Instructions
              </h3>
              <p className="text-content-tertiary dark:text-brand-400 text-sm">
                Published in NeurIPS, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};