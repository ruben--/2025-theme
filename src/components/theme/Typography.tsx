import React from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

interface TextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'inverse';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  className?: string;
}

const headingStyles = {
  1: 'text-4xl font-semibold',
  2: 'text-3xl font-semibold',
  3: 'text-2xl font-semibold',
  4: 'text-xl font-semibold',
  5: 'text-lg font-medium',
  6: 'text-base font-medium',
};

const textVariants = {
  primary: 'text-content-primary dark:text-content-inverse',
  secondary: 'text-content-secondary dark:text-brand-300',
  tertiary: 'text-content-tertiary dark:text-brand-400',
  inverse: 'text-content-inverse dark:text-content-primary',
};

const textSizes = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const textWeights = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

export const Heading: React.FC<HeadingProps> = ({ 
  children, 
  level, 
  className = '' 
}) => {
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  const baseClasses = `${headingStyles[level]} text-content-primary dark:text-content-inverse`;
  
  return (
    <Component className={`${baseClasses} ${className}`}>
      {children}
    </Component>
  );
};

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'primary',
  size = 'base',
  weight = 'normal',
  className = '',
}) => {
  const classes = [
    textVariants[variant],
    textSizes[size],
    textWeights[weight],
    className,
  ].join(' ');

  return (
    <span className={classes}>
      {children}
    </span>
  );
};