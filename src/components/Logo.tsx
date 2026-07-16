import React from 'react';

interface LogoProps {
  className?: string;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  customIconSize?: number;
  showText?: boolean;
  light?: boolean;
  showTagline?: boolean;
}

export default function Logo({
  className = '',
  iconSize = 'md',
  customIconSize,
  showText = true,
  light = false,
  showTagline = true,
}: LogoProps) {
  // Determine icon size
  let size = 48;
  if (iconSize === 'sm') size = 32;
  else if (iconSize === 'md') size = 48;
  else if (iconSize === 'lg') size = 64;
  else if (iconSize === 'xl') size = 96;
  else if (iconSize === 'custom' && customIconSize) size = customIconSize;

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="golden-care-logo">
      {/* SVG Icon: Custom luxury emblem representing a supportive hand holding a heart leaf */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0 drop-shadow-sm transition-transform duration-500 hover:scale-105"
        aria-label="Golden Care Emblem"
      >
        <defs>
          <linearGradient id="gold-grad-logo" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5edd8" />
            <stop offset="35%" stopColor="#C8A548" />
            <stop offset="100%" stopColor="#9e7d30" />
          </linearGradient>
          <linearGradient id="light-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f4edd4" />
          </linearGradient>
          <filter id="subtle-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Elegant Circle Rim */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="url(#gold-grad-logo)"
          strokeWidth="1.5"
          strokeDasharray="4 2"
          opacity="0.6"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke="url(#gold-grad-logo)"
          strokeWidth="0.75"
          opacity="0.3"
        />

        {/* Caring Support Hand Element */}
        <path
          d="M25 65C30 75 42 78 50 78C62 78 72 70 75 62C76 59 74 56 71 56C67 56 65 59 63 61C58 66 50 68 44 64C38 60 41 52 46 48L65 30C68 27 72 27 75 30C78 33 78 38 75 41L61 55C59 57 59 60 62 61C65 62 67 60 69 58L81 44C87 38 87 28 81 22C75 16 66 16 60 22L41 41C31 51 21 57 25 65Z"
          fill="url(#gold-grad-logo)"
          opacity="0.9"
        />

        {/* Golden Floating Heart Leaf representing life & vitality */}
        <path
          d="M50 32C50 32 44 24 36 24C29.5 24 25 29 25 35.5C25 44 38 52 50 58C62 44 75 35.5 75 25.5C75 19 70.5 14 64 14C56 14 50 32 50 32Z"
          fill="url(#gold-grad-logo)"
          filter="url(#subtle-glow)"
        />

        {/* Inner core decorative spark */}
        <circle cx="50" cy="50" r="2.5" fill={light ? '#ffffff' : '#C8A548'} />
      </svg>

      {showText && (
        <div className="flex flex-col justify-center leading-none whitespace-nowrap select-none">
          <span
            className={`font-display tracking-[0.16em] font-bold whitespace-nowrap ${
              iconSize === 'lg' || iconSize === 'xl' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
            } ${light ? 'text-white' : 'text-slate-900'}`}
          >
            GOLDEN<span className="text-gold-500"> CARE</span>
          </span>
          {showTagline && (
            <span
              className={`font-sans tracking-[0.2em] font-medium uppercase mt-1 whitespace-nowrap ${
                iconSize === 'lg' || iconSize === 'xl' ? 'text-[11px] block' : 'text-[8.5px] hidden xl:block'
              } ${light ? 'text-gold-200/80' : 'text-slate-500'}`}
            >
              Njihova sigurnost • Vaš mir
            </span>
          )}
        </div>
      )}
    </div>
  );
}
