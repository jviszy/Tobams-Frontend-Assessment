interface TobamsLogoProps {
  className?: string;
  variant?: 'default' | 'white';
}

export function TobamsLogo({ className = '', variant = 'default' }: TobamsLogoProps) {
  const textColor = variant === 'white' ? 'text-white' : 'text-[#7C1E6B]';

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="12" r="7" fill="#9C2789" opacity="0.9" />
        <circle cx="18" cy="12" r="7" fill="#7C1E6B" opacity="0.9" />
        <circle cx="14" cy="20" r="7" fill="#5A154D" opacity="0.9" />
        <circle cx="22" cy="20" r="7" fill="#B53BA0" opacity="0.8" />
      </svg>
      <span className={`text-lg font-bold tracking-tight ${textColor}`}>
        TOBAMS GROUP
      </span>
    </div>
  );
}
