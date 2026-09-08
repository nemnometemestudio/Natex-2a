import React, { useId } from 'react';

export interface BrandLogoProps {
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
  stacked?: boolean;
}

/**
 * Official Natex 3D Interlocking Ribbon 'X' Vector Symbol
 */
export const NatexSymbol: React.FC<{ className?: string; title?: string }> = ({
  className = 'w-9 h-9',
  title = 'Símbolo Natex',
}) => {
  const rawId = useId();
  const id = `natex-sym-${rawId.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} overflow-visible shrink-0`}
      aria-label={title}
      role="img"
    >
      <title>{title}</title>
      <defs>
        {/* Ribbon 1 Upper: Orange-Red to Magenta */}
        <linearGradient id={`${id}-r1-upper`} x1="120" y1="48" x2="256" y2="256" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF3B14" />
          <stop offset="28%" stopColor="#FF5722" />
          <stop offset="65%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#A81594" />
        </linearGradient>

        {/* Ribbon 1 Lower: Crimson to Bright Golden Amber */}
        <linearGradient id={`${id}-r1-lower`} x1="256" y1="300" x2="424" y2="464" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#B7094C" />
          <stop offset="22%" stopColor="#D00000" />
          <stop offset="58%" stopColor="#FF4800" />
          <stop offset="82%" stopColor="#FF7900" />
          <stop offset="100%" stopColor="#FFAA00" />
        </linearGradient>

        {/* Ribbon 2: White-Violet to Royal Purple to Electric Cyan */}
        <linearGradient id={`${id}-r2`} x1="390" y1="48" x2="110" y2="464" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="18%" stopColor="#7C3AED" />
          <stop offset="42%" stopColor="#5B21B6" />
          <stop offset="62%" stopColor="#3B18A5" />
          <stop offset="82%" stopColor="#0284C7" />
          <stop offset="95%" stopColor="#00A8FF" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>

        {/* Translucent Diamond Overlap (Optical Fusion) */}
        <linearGradient id={`${id}-diamond`} x1="204" y1="256" x2="308" y2="256" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C026D3" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#D946EF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#9333EA" stopOpacity="0.95" />
        </linearGradient>

        {/* Top-Right Specular White Gloss Sheen */}
        <linearGradient id={`${id}-gloss`} x1="320" y1="48" x2="424" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="45%" stopColor="#E9D5FF" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0" />
        </linearGradient>

        {/* Soft Depth Drop-Shadow under Ribbon 2 onto Ribbon 1 */}
        <linearGradient id={`${id}-shadow`} x1="256" y1="349" x2="280" y2="385" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3B0764" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#3B0764" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Layer 1: Ribbon 1 Upper Arm (Top-Left into Center) */}
      <path
        d="M 135.68 48 L 192 48 L 256 163 L 204 256 L 111.22 89.64 A 28 28 0 0 1 135.68 48 Z"
        fill={`url(#${id}-r1-upper)`}
      />

      {/* Layer 2: Ribbon 1 Lower Arm (Emerging from Center to Bottom-Right) */}
      <path
        d="M 256 349 L 308 256 L 400.78 422.36 A 28 28 0 0 1 376.32 464 L 320 464 Z"
        fill={`url(#${id}-r1-lower)`}
      />

      {/* Layer 3: Ribbon 2 (Full Diagonal Band: Top-Right to Bottom-Left) */}
      <path
        d="M 320 48 L 376.32 48 A 28 28 0 0 1 400.78 89.64 L 192 464 L 135.68 464 A 28 28 0 0 1 111.22 422.36 Z"
        fill={`url(#${id}-r2)`}
      />

      {/* Layer 4: Translucent Glowing Diamond Overlap */}
      <polygon
        points="256,163 308,256 256,349 204,256"
        fill={`url(#${id}-diamond)`}
        style={{ mixBlendMode: 'screen' }}
      />

      {/* Layer 5: Soft Depth Drop-Shadow on Ribbon 1 under Ribbon 2 */}
      <polygon
        points="256,349 308,256 322,282 270,375"
        fill={`url(#${id}-shadow)`}
      />

      {/* Layer 6: Specular White Gloss Sheen on Upper-Right Ribbon */}
      <path
        d="M 320 48 L 376.32 48 A 28 28 0 0 1 400.78 89.64 L 370 78 L 320 48 Z"
        fill={`url(#${id}-gloss)`}
      />
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  showTagline = false,
  className = '',
  stacked = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-20 h-20',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-4xl',
  };

  const subTextSizes = {
    sm: 'text-[8.5px]',
    md: 'text-[10px]',
    lg: 'text-[11px]',
    xl: 'text-sm',
  };

  const isLightText = variant === 'white' || variant === 'light';
  const mainTextColor = isLightText ? 'text-white' : 'text-[#0F172A]';
  const subTextColor = isLightText ? 'text-slate-400' : 'text-slate-500';
  const accentColorClass = 'bg-[#FF6B00]';

  return (
    <div className={`flex ${stacked ? 'flex-col items-center text-center' : 'items-center'} gap-3 select-none ${className}`}>
      {/* Official Natex 3D Vector Emblem */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <NatexSymbol className="w-full h-full drop-shadow-sm" />
      </div>

      {/* Typography Wordmark */}
      <div className={`flex flex-col ${stacked ? 'items-center text-center' : ''}`}>
        <div className="flex items-center font-heading font-black leading-none tracking-tight">
          {/* 'NAT' */}
          <span className={`${mainTextColor} uppercase ${textSizes[size]} font-black tracking-wider`}>
            NAT
          </span>

          {/* 'E' with Official Diagonal Accent on Lower-Right */}
          <span className={`relative inline-block ${mainTextColor} uppercase ${textSizes[size]} font-black tracking-wider`}>
            E
            {/* Custom orange diagonal geometric accent on bottom arm */}
            <span
              className={`absolute bottom-0 right-0 ${accentColorClass} rounded-xs shadow-xs`}
              style={{
                width: size === 'xl' ? '12px' : size === 'lg' ? '8px' : size === 'md' ? '6px' : '5px',
                height: size === 'xl' ? '8px' : size === 'lg' ? '5px' : size === 'md' ? '4px' : '3px',
                clipPath: 'polygon(0 100%, 100% 0, 100% 100%)',
                bottom: '1px',
                right: '0.5px',
              }}
              title="Detalhe oficial da marca Natex"
            />
          </span>

          {/* 'X' */}
          <span className={`${mainTextColor} uppercase ${textSizes[size]} font-black tracking-wider`}>
            X
          </span>
        </div>

        {/* Subtitle CONFECÇÕES */}
        <span className={`${subTextColor} font-bold uppercase tracking-widest leading-tight mt-0.5 ${subTextSizes[size]}`}>
          CONFECÇÕES
        </span>

        {/* Secondary Tagline */}
        {showTagline && (
          <span className="text-[9px] text-[#FF6B00] font-semibold tracking-normal mt-0.5 hidden sm:block whitespace-nowrap">
            Soluções Têxteis em Escala
          </span>
        )}
      </div>
    </div>
  );
};
