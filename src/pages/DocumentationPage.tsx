import React from 'react';

export const DocumentationPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-content-primary dark:text-content-inverse mb-8">
        Documentation
      </h1>
      <div className="space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100 mb-3">
              API Reference
            </h2>
            <p className="text-blue-700 dark:text-blue-300 mb-4">
              Complete API documentation with examples and best practices.
            </p>
            <div className="space-y-2 text-sm">
              <div className="font-mono bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
                POST /v1/completions
              </div>
              <div className="font-mono bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
                GET /v1/models
              </div>
              <div className="font-mono bg-blue-100 dark:bg-blue-800 px-2 py-1 rounded">
                POST /v1/chat/completions
              </div>
            </div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-900 dark:text-green-100 mb-3">
              Quick Start
            </h2>
            <p className="text-green-700 dark:text-green-300 mb-4">
              Get up and running with our APIs in minutes.
            </p>
            <div className="space-y-2 text-sm text-green-600 dark:text-green-400">
              <div>1. Create an API key</div>
              <div>2. Install the SDK</div>
              <div>3. Make your first request</div>
              <div>4. Handle responses</div>
            </div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-100 mb-3">
              SDKs
            </h2>
            <p className="text-purple-700 dark:text-purple-300 mb-4">
              Official libraries for popular programming languages.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Python
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Node.js
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Go
              </div>
            </div>
          </div>
        </div>
        <div className="bg-brand-900 dark:bg-brand-950 text-brand-100 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Code Example</h2>
          <pre className="text-sm overflow-x-auto">
            <code>{`import openai

client = openai.OpenAI(api_key="your-api-key")

response = client.chat.completions.create(
  model="gpt-4",
  messages=[{"role": "user", "content": "Hello, world!"}]
)

print(response.choices[0].message.content)`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};