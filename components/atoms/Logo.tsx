
import React from 'react';
import { Droplets } from 'lucide-react';

interface LogoProps {
  className?: string;
  isScrolled?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", isScrolled = false }) => (
  <div className={`flex items-center gap-2.5 ${className}`}>
    <div className="bg-slate-900 p-2 rounded-lg">
      <Droplets className="text-cyan-400 w-5 h-5" />
    </div>
    <span className={`text-lg md:text-xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
      Aqua<span className="text-cyan-500">maría</span>
    </span>
  </div>
);
