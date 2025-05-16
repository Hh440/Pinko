import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`
      bg-white dark:bg-gray-800 
      backdrop-blur-lg bg-opacity-90 dark:bg-opacity-90
      rounded-2xl 
      border border-gray-100 dark:border-gray-700
      shadow-xl 
      transition-all duration-300 
      hover:shadow-2xl hover:-translate-y-1
      ${className}
    `}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 border-b border-gray-100 dark:border-gray-700 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '' }: CardProps) {
  return (
    <div className={`p-6 border-t border-gray-100 dark:border-gray-700 flex items-center ${className}`}>
      {children}
    </div>
  );
}