import React from 'react';
import { MetricCard, type MetricCardProps } from './MetricCard';

export interface MetricData {
  value: string;
  title: string;
  description: string;
  variant?: MetricCardProps['variant'];
  backgroundColor?: string;
  size?: MetricCardProps['size'];
}

export interface MetricsSectionProps {
  title: string;
  description: string;
  metrics: MetricData[];
  className?: string;
  containerClassName?: string;
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({
  title,
  description,
  metrics,
  className = '',
  containerClassName = '',
}) => {
  return (
    <div className={`bg-surface dark:bg-brand-900 py-24 sm:py-32 rounded-lg ${className}`}>
      <div className={`mx-auto max-w-container px-6 lg:px-8 ${containerClassName}`}>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-content-primary dark:text-content-inverse sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-base text-content-secondary dark:text-brand-300">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              title={metric.title}
              description={metric.description}
              variant={metric.variant}
              backgroundColor={metric.backgroundColor}
              size={metric.size}
              className={getCardLayoutClasses(index, metrics.length)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function getCardLayoutClasses(index: number, total: number): string {
  if (total === 3) {
    switch (index) {
      case 0:
        return 'sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start';
      case 1:
        return 'sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44';
      case 2:
        return 'sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28';
      default:
        return '';
    }
  }
  
  return 'sm:flex-row-reverse sm:items-end lg:flex-auto lg:flex-col lg:items-start';
}