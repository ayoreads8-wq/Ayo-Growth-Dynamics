import React from 'react';

interface LogoProps {
  variant?: 'full' | 'horizontal' | 'emblem';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBackground?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  showBackground = false,
}) => {
  // Dimensions based on size
  const emblemSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
    xl: 'w-28 h-28',
  };

  const EmblemSVG = (
    <svg
      viewBox="0 0 220 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full drop-shadow-[0_2px_12px_rgba(34,197,94,0.3)]"
      aria-label="Ayo Growth Dynamics Logo"
    >
      <defs>
        {/* Gradient for Leftmost Bar (Bright Lime-Emerald) */}
        <linearGradient id="bar1Grad" x1="45" y1="140" x2="85" y2="55" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#16A36A" />
          <stop offset="60%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>

        {/* Gradient for Middle Bar */}
        <linearGradient id="bar2Grad" x1="75" y1="140" x2="110" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#15803D" />
          <stop offset="60%" stopColor="#16A36A" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>

        {/* Gradient for Inner Right Bar */}
        <linearGradient id="bar3Grad" x1="100" y1="140" x2="130" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0F5132" />
          <stop offset="60%" stopColor="#15803D" />
          <stop offset="100%" stopColor="#16A36A" />
        </linearGradient>

        {/* Gradient for Main Sweeping Arrow */}
        <linearGradient id="arrowArchGrad" x1="195" y1="140" x2="90" y2="15" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#14532D" />
          <stop offset="35%" stopColor="#15803D" />
          <stop offset="70%" stopColor="#16A36A" />
          <stop offset="100%" stopColor="#22C55E" />
        </linearGradient>

        {/* Gradient for Arrowhead */}
        <linearGradient id="arrowHeadGrad" x1="80" y1="50" x2="105" y2="10" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#16A36A" />
          <stop offset="50%" stopColor="#22C55E" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>
      </defs>

      {/* Bar 1: Leftmost Slanted Pillar */}
      <polygon
        points="48,140 70,140 92,86 78,56"
        fill="url(#bar1Grad)"
      />

      {/* Bar 2: Middle Slanted Pillar */}
      <polygon
        points="77,140 97,140 115,98 100,68"
        fill="url(#bar2Grad)"
      />

      {/* Bar 3: Rightmost Slanted Pillar */}
      <polygon
        points="104,140 128,140 137,120 120,86"
        fill="url(#bar3Grad)"
      />

      {/* Sweeping Arrow Body (Right leg of "A" curving to top apex) */}
      <path
        d="M 194 140 
           C 168 140, 142 120, 122 88
           C 112 72, 104 55, 100 44
           L 116 38
           C 124 55, 140 82, 162 108
           C 178 126, 188 135, 194 140
           Z"
        fill="url(#arrowArchGrad)"
      />

      {/* Arrowhead at Apex */}
      <polygon
        points="92,12 76,50 97,44 118,36"
        fill="url(#arrowHeadGrad)"
        stroke="url(#arrowHeadGrad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );

  if (variant === 'emblem') {
    return (
      <div className={`relative flex items-center justify-center shrink-0 ${emblemSizes[size]} ${className}`}>
        {EmblemSVG}
      </div>
    );
  }

  if (variant === 'full') {
    return (
      <div
        className={`flex flex-col items-center text-center select-none ${
          showBackground ? 'p-6 rounded-2xl bg-[#101828] border border-[#16A36A]/30 shadow-2xl' : ''
        } ${className}`}
      >
        <div className={emblemSizes[size] || 'w-24 h-24'}>
          {EmblemSVG}
        </div>
        <div className="mt-3.5 space-y-0.5">
          <div className="text-xl sm:text-2xl font-black tracking-wider text-[#22C55E] uppercase leading-none font-sans">
            AYO GROWTH
          </div>
          <div className="text-[10px] sm:text-xs font-bold tracking-[0.35em] text-[#86EFAC] uppercase leading-none pl-1">
            DYNAMICS
          </div>
        </div>
      </div>
    );
  }

  // Default 'horizontal' layout (for Navbar & Footer)
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <div className={`${emblemSizes[size]} shrink-0`}>
        {EmblemSVG}
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-base sm:text-lg font-black tracking-wider text-[#22C55E] uppercase leading-none font-sans">
          AYO GROWTH
        </div>
        <div className="text-[9px] sm:text-[10px] font-bold tracking-[0.32em] text-[#86EFAC] uppercase leading-tight mt-1 pl-0.5">
          DYNAMICS
        </div>
      </div>
    </div>
  );
};
