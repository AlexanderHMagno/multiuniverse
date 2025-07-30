import React from 'react';

interface MoralityOrbProps {
  color: string;
  size?: 'sm' | 'md' | 'lg';
  showGlow?: boolean;
}

const sizeClasses = {
  sm: 'w-8 h-8',
  md: 'w-16 h-16',
  lg: 'w-24 h-24'
};

export const MoralityOrb: React.FC<MoralityOrbProps> = ({ 
  color, 
  size = 'lg',
  showGlow = true 
}) => {
  return (
    <div className="relative flex justify-center items-center">
      <div className={`${sizeClasses[size]} rounded-full ${color} shadow-lg relative overflow-hidden`}>
        {/* Inner glow effect */}
        <div className="absolute inset-0 opacity-75 mix-blend-soft-light">
          <div className="w-full h-full animate-pulse-slow rounded-full bg-gradient-to-br from-white/30 to-transparent" />
        </div>
        {/* Shine effect */}
        <div className="absolute -inset-1/2 animate-spin-slow">
          <div className="w-full h-full bg-gradient-to-tr from-white/10 to-transparent transform rotate-45" />
        </div>
      </div>
      {/* Outer glow */}
      {showGlow && (
        <div className={`absolute inset-0 ${color} blur-xl opacity-30 animate-pulse-slow`} />
      )}
    </div>
  );
}; 