import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { ConfirmDialog } from './ConfirmDialog';

interface GlassPanelProps {
  title: string;
  subtitle: string;
  Icon: LucideIcon;
  color: 'savage' | 'sage';
  position: 'left' | 'right';
}

export function GlassPanel({ title, subtitle, Icon, color, position }: GlassPanelProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const baseClasses = "transition-all duration-700 ease-in-out flex items-center justify-center cursor-pointer";
  const colorClasses = {
    savage: "bg-red-500/10 hover:bg-red-500/20 border-red-500/20",
    sage: "bg-blue-500/10 hover:bg-blue-500/20 border-blue-500/20"
  };

  const handleConfirm = () => {
    setIsDialogOpen(false);
    console.log(`${color} path chosen`);
  };

  return (
    <>
      <div 
        className={`${baseClasses} ${colorClasses[color]} border-[1px] backdrop-blur-md 
          h-1/2 md:h-auto md:w-1/2 group
          hover:h-[100%] md:hover:h-auto md:hover:w-[100%] 
          ${position === 'left' ? 'origin-top md:origin-left' : 'origin-bottom md:origin-right'}
          peer-hover:h-0 md:peer-hover:w-0 
          peer-hover:opacity-0 peer-hover:overflow-hidden
          ${position === 'right' ? 'peer' : ''}`}
        onClick={() => setIsDialogOpen(true)}
      >
        <div className={`text-center transform transition-all duration-700
          group-hover:scale-110 group-hover:opacity-100
          peer-hover:scale-0 peer-hover:opacity-0
          p-4 md:p-0`}
        >
          <Icon className={`w-12 h-12 md:w-20 md:h-20 mx-auto mb-3 md:mb-6 
            ${color === 'savage' ? 'text-red-500' : 'text-blue-500'}`} />
          <h2 className={`text-3xl md:text-5xl font-bold mb-2 md:mb-4 
            ${color === 'savage' ? 'text-red-500' : 'text-blue-500'}`}>
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/90">{subtitle}</p>
        </div>
      </div>
      
      <ConfirmDialog
        isOpen={isDialogOpen}
        onConfirm={handleConfirm}
        onCancel={() => setIsDialogOpen(false)}
        side={color}
      />
    </>
  );
}