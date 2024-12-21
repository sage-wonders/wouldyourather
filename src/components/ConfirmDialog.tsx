import React from 'react';

interface ConfirmDialogProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  side: 'savage' | 'sage';
}

export function ConfirmDialog({ isOpen, onConfirm, onCancel, side }: ConfirmDialogProps) {
  if (!isOpen) return null;

  const colorClasses = {
    savage: "bg-red-500/20 border-red-500/30",
    sage: "bg-blue-500/20 border-blue-500/30"
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onCancel} />
      <div className={`${colorClasses[side]} relative p-4 md:p-8 rounded-2xl backdrop-blur-md border w-full max-w-sm`}>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 text-center">
          Is this the path you choose?
        </h2>
        <div className="flex gap-4 justify-center">
          <button
            onClick={onConfirm}
            className="px-6 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold transition-colors"
          >
            Yes
          </button>
          <button
            onClick={onCancel}
            className="px-6 py-2 rounded-lg bg-black/30 hover:bg-black/40 text-white font-semibold transition-colors"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}