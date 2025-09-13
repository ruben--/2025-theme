import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
}

const variantStyles = {
  default: 'bg-surface dark:bg-brand-900 border border-brand-200 dark:border-brand-700',
  outlined: 'bg-transparent border-2 border-brand-200 dark:border-brand-700',
  elevated: 'bg-surface dark:bg-brand-900 shadow-lg border border-brand-100 dark:border-brand-800',
};

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  variant = 'default',
  padding = 'md'
}) => {
  const baseClasses = 'rounded-lg transition-colors';
  const variantClass = variantStyles[variant];
  const paddingClass = paddingStyles[padding];
  
  return (
    <div className={`${baseClasses} ${variantClass} ${paddingClass} ${className}`}>
      {children}
    </div>
  );
};