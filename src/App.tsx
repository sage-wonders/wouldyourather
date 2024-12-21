import React from 'react';
import { Sword, Lightbulb } from 'lucide-react';
import { GlassPanel } from './components/GlassPanel';
import { Background } from './components/Background';
import { Title } from './components/Title';

export default function App() {
  return (
    <div className="h-screen flex bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      <Background />
      
      <div className="flex flex-col md:flex-row w-full relative z-10">
        <GlassPanel
          title="SAVAGE"
          subtitle="Vices"
          Icon={Sword}
          color="savage"
          position="left"
        />
        
        <GlassPanel
          title="SAGE"
          subtitle="Virtues"
          Icon={Lightbulb}
          color="sage"
          position="right"
        />
      </div>

      <Title />
    </div>
  );
}