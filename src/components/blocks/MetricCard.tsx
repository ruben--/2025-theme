import React from 'react';

export interface MetricCardProps {
  value: string;
  title: string;
  description: string;
  variant?: 'light' | 'dark' | 'colored';
  backgroundColor?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  title,
  description,
  variant = 'light',
  backgroundColor,
  size = 'md',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'p-6',
    md: 'p-8',
    lg: 'p-8 sm:p-12',
  };

  const variantClasses = {
    light: 'bg-brand-50 dark:bg-brand-800',
    dark: 'bg-brand-900 dark:bg-brand-950',
    colored: backgroundColor || 'bg-indigo-600 dark:bg-indigo-700',
  };

  const textClasses = {
    light: {
      value: 'text-content-primary dark:text-content-inverse',
      title: 'text-content-primary dark:text-content-inverse',
      description: 'text-content-secondary dark:text-brand-300',
    },
    dark: {
      value: 'text-white',
      title: 'text-white',
      description: 'text-brand-400 dark:text-brand-300',
    },
    colored: {
      value: 'text-white',
      title: 'text-white',
      description: 'text-indigo-200 dark:text-indigo-300',
    },
  };

  const currentTextClasses = textClasses[variant];

  return (
    <div
      className={`flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      style={backgroundColor && variant === 'colored' ? { backgroundColor } : undefined}
    >
      <p className={`flex-none text-3xl font-bold tracking-tight ${currentTextClasses.value}`}>
        {value}
      </p>
      <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
        <p className={`text-lg font-semibold tracking-tight ${currentTextClasses.title}`}>
          {title}
        </p>
        <p className={`mt-2 text-base ${currentTextClasses.description}`}>
          {description}
        </p>
      </div>
    </div>
  );
};