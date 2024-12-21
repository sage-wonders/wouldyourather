import React from 'react';

export function Title() {
  return (
    <div className="absolute top-4 md:top-8 left-0 right-0 text-center z-20">
      <div className="inline-block px-4 md:px-8 py-2 md:py-4 rounded-xl backdrop-blur-lg bg-white/5 border border-white/10">
        <h1 className="text-3xl md:text-6xl font-bold text-white">
          Would You Rather?
        </h1>
      </div>
    </div>
  );
}