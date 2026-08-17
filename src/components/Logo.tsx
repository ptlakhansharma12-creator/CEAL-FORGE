import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'dark' | 'light' | 'purple';
}

export function Logo({ className = '', size = 'md', variant = 'purple' }: LogoProps) {
  // Ultra-crisp, compact height scaling for perfect navbar alignment
  const heights = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-9 sm:h-10',
    xl: 'h-12 sm:h-14',
  };

  return (
    <div className={`inline-flex items-center justify-center ${heights[size]} ${className} group cursor-pointer`}>
      {/* Official Cael Forge Transparent PNG Logo */}
      <img
        src="/cael-forge-logo.png"
        alt="Cael Forge Logo"
        className={`h-full w-auto object-contain max-h-full transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm ${
          variant === 'light' ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
  );
}
