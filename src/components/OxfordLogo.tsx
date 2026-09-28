interface OxfordLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lightMode?: boolean;
  className?: string;
}

export function OxfordLogo({ 
  size = 'md', 
  lightMode = false,
  className = '' 
}: OxfordLogoProps) {
  
  const heightClasses = {
    sm: 'h-10 sm:h-11',
    md: 'h-12 sm:h-14',
    lg: 'h-16 sm:h-20',
    xl: 'h-20 sm:h-24',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Exact Photo from the website without altering a single pixel */}
      <div 
        className={`inline-flex items-center rounded-xl transition-transform duration-200 ${
          lightMode 
            ? 'bg-white p-2.5 shadow-sm border border-slate-200/40' 
            : 'bg-transparent'
        }`}
      >
        <img
          src="/images/school-logo.png"
          alt="The Oxford School Kollam"
          className={`${heightClasses[size]} w-auto object-contain max-w-full`}
        />
      </div>
    </div>
  );
}
