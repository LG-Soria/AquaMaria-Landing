
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'white' | 'dark';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'cyan', icon }) => {
  const variants = {
    cyan: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
    white: "bg-white/5 backdrop-blur-xl border-white/10 text-cyan-400",
    dark: "bg-slate-900 text-cyan-400 border-slate-800"
  };

  return (
    <div className={`inline-flex items-center gap-2 border px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${variants[variant]}`}>
      {icon}
      {children}
    </div>
  );
};
