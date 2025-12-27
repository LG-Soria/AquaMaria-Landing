
import React from 'react';

interface FeatureCardProps {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ title, desc, icon }) => (
  <div className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-500 hover:-translate-y-2">
    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-500">
      {/* Cast to React.ReactElement<any> to resolve the 'className' property check error in cloneElement */}
      {React.cloneElement(icon as React.ReactElement<any>, { className: "w-8 h-8 transition-colors duration-500" })}
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium">{desc}</p>
  </div>
);
