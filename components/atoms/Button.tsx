
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'dark' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  children: React.ReactNode;
}

const getButtonClassName = (
  variant: ButtonProps['variant'] = 'primary',
  size: ButtonProps['size'] = 'md',
  className = ''
) => {
  const baseStyles = "inline-flex items-center justify-center font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: "bg-cyan-500 text-slate-900 hover:bg-cyan-400 shadow-xl shadow-cyan-500/20",
    dark: "bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10",
    outline: "bg-transparent border-2 border-slate-200 text-slate-700 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-600 hover:text-cyan-600",
    glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10"
  };

  const sizes = {
    sm: "px-4 py-2 rounded-lg text-xs",
    md: "px-7 py-3 rounded-full text-sm",
    lg: "px-10 py-5 rounded-2xl text-base"
  };

  return `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
};

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={getButtonClassName(variant, size, className)} 
      {...props}
    >
      {children}
    </button>
  );
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}) => (
  <a className={getButtonClassName(variant, size, className)} {...props}>
    {children}
  </a>
);
