import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: typeof LucideIcon;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
};

export function Button({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  children,
  onClick,
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = "rounded-full font-medium flex items-center justify-center transition-all duration-300 ease-in-out";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:-translate-y-1 hover:from-purple-600 hover:to-pink-600",
    secondary: "bg-white text-gray-800 border border-gray-200 hover:border-purple-400 hover:text-purple-600 hover:shadow-md hover:-translate-y-1 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:border-purple-500",
    outline: "bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-700 dark:hover:bg-gray-800 dark:hover:border-purple-400",
  };
  
  const sizeStyles = {
    sm: "text-xs py-2 px-4 gap-1",
    md: "text-sm py-3 px-6 gap-2",
    lg: "text-base py-4 px-8 gap-3",
  };
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {Icon && <Icon className={size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6'} />}
      {children}
    </button>
  );
}