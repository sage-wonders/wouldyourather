import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SidePanelProps {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  image: string;
  Icon: LucideIcon;
  side: 'left' | 'right';
}

export function SidePanel({
  title,
  subtitle,
  description,
  color,
  image,
  Icon,
  side,
}: SidePanelProps) {
  return (
    <div 
      className={`w-1/2 hover:w-[55%] transition-all duration-500 ease-in-out 
        flex items-center justify-center cursor-pointer group relative overflow-hidden`}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Color Overlay */}
      <div 
        className={`absolute inset-0 ${color} opacity-70`}
      />

      {/* Content */}
      <div className="relative text-center text-white transform group-hover:scale-110 transition-transform">
        <Icon className="w-20 h-20 mx-auto mb-6 animate-pulse" />
        <h2 className="text-5xl font-bold mb-4">{title}</h2>
        <p className="text-xl opacity-80">{subtitle}</p>
        <p className="mt-4 text-sm opacity-60">{description}</p>
      </div>
    </div>
  );
}