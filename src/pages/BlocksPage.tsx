import React from 'react';
import { MetricsSection } from '../components/blocks/MetricsSection';

export const BlocksPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-content-primary dark:text-content-inverse mb-8">
        Blocks
      </h1>
      
      {/* Block Separator */}
      <div className="border-t-4 border-red-500 my-12"></div>
      
      {/* Tailwind CSS Metrics Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-content-primary dark:text-content-inverse mb-6">
          Metrics Section (from Tailwind Gallery)
        </h2>
        <MetricsSection
          title="We approach work as a place to make the world better"
          description="Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh."
          metrics={[
            {
              value: "250k",
              title: "Users on the platform",
              description: "Vel labore deleniti veniam consequuntur sunt nobis.",
              variant: "light"
            },
            {
              value: "$8.9 billion",
              title: "We're proud that our customers have made over $8 billion in total revenue.",
              description: "Eu duis porta aliquam ornare. Elementum eget magna egestas.",
              variant: "dark"
            },
            {
              value: "401,093",
              title: "Transactions this year",
              description: "Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu duis porta aliquam ornare.",
              variant: "colored",
              backgroundColor: "#4f46e5"
            }
          ]}
        />
      </div>
      
      {/* Block Separator */}
      <div className="border-t-4 border-red-500 my-12"></div>
    </div>
  );
};