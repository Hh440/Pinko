import React from 'react';

type BadgeProps = {
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  children: React.ReactNode;
  className?: string;
};

export function Badge({ 
  variant = 'default', 
  children, 
  className = '' 
}: BadgeProps) {
  const variantStyles = {
    default: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200',
    success: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    warning: 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200',
    danger: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
  };

  return (
    <span className={`
      inline-flex items-center
      text-xs font-medium
      px-2.5 py-0.5
      rounded-full
      ${variantStyles[variant]}
      ${className}
    `}>
      {children}
    </span>
  );
}