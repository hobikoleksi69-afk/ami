import React from 'react';

interface AmiLogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export const AmiLogo: React.FC<AmiLogoProps> = ({ className = 'h-10', variant = 'light' }) => {
  const isDark = variant === 'dark';
  const greenDark = isDark ? '#43C572' : '#1B5E3A';
  const greenMid = isDark ? '#43C572' : '#2E9E5B';
  const textColor = isDark ? '#E2E8F0' : '#1B5E3A';
  const redAccent = '#E31E24';

  return (
    <div className={`flex items-center select-none font-sans ${className}`}>
      <div className="flex flex-col items-start leading-none">
        {/* Top Tagline */}
        <span 
          style={{ color: greenMid, letterSpacing: '0.24em' }} 
          className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest pl-[1px]"
        >
          INISIATIF
        </span>

        {/* Center Main Wordmark: AMI */}
        <div className="flex items-baseline font-black tracking-tight leading-none my-[1px]">
          {/* Stylized A */}
          <span 
            style={{ color: greenDark }} 
            className="text-2xl sm:text-[30px] font-black tracking-tighter"
          >
            A
          </span>
          {/* Stylized M in Red Accent */}
          <span 
            style={{ color: redAccent }} 
            className="text-2xl sm:text-[30px] font-black tracking-tighter mx-[0.5px]"
          >
            M
          </span>
          {/* Stylized I */}
          <span 
            style={{ color: greenDark }} 
            className="text-2xl sm:text-[30px] font-black tracking-tighter mx-[0.5px]"
          >
            I
          </span>
          {/* Exclamation point */}
          <span 
            style={{ color: '#43C572' }} 
            className="text-2xl sm:text-[30px] font-black ml-[1px]"
          >
            !
          </span>
        </div>

        {/* Subtitle */}
        <span 
          style={{ color: textColor }} 
          className="text-[8.5px] sm:text-[9.5px] font-semibold tracking-tight opacity-90"
        >
          Anak Muda Indonesia
        </span>
      </div>
    </div>
  );
};
