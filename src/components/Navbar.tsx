import { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Menu, X, ArrowUpRight, Phone, Mail, Sparkles } from 'lucide-react';
import { OxfordLogo } from './OxfordLogo';

interface NavbarProps {
  onOpenAdmissions: () => void;
  activeSection: string;
}

export function Navbar({ onOpenAdmissions, activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Academics', href: '#academics' },
    { label: 'Boarding', href: '#boarding' },
    { label: 'Campus Life', href: '#campus' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top Utility Ribbon with Geometric Depth */}
      <div className="bg-gradient-to-r from-[#040C1A] via-[#0B1E3D] to-[#07152B] text-slate-200 text-xs py-2.5 px-4 sm:px-8 border-b border-blue-900/50 relative overflow-hidden">
        {/* Subtle decorative geometry */}
        <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-blue-500/10 blur-xl pointer-events-none" />
        <div className="absolute top-0 left-1/3 w-40 h-full bg-gradient-to-r from-transparent via-sky-400/5 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 relative z-10">
          <div className="flex items-center gap-2.5 font-bold">
            <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-400/30 text-[11px] font-black uppercase">
              CBSE Affiliation 930421
            </span>
            <span className="text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300">Umayanalloor, Kollam</span>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="hidden md:inline text-slate-400">NIMS Group UAE & Manarul Huda Trust</span>
          </div>

          <div className="flex items-center gap-4 font-semibold text-slate-200">
            <a 
              href="tel:+917593945949" 
              className="flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-extrabold">+91 75939 45949</span>
            </a>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a 
              href="mailto:info@oxfordkollam.edu.in" 
              className="hidden lg:flex items-center gap-1.5 hover:text-sky-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>info@oxfordkollam.edu.in</span>
            </a>
            <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[11px] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1" />
              Admissions 2026–27 Open
            </span>
          </div>
        </div>
      </div>

      {/* Main Top Bar Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-depth-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 sm:h-22 flex items-center justify-between gap-6">
          
          {/* Zone 1: Wordmark & Logo */}
          <a 
            href="#overview" 
            onClick={(e) => handleNavClick(e, '#overview')}
            className="focus-visible:outline-none hover:opacity-95 transition-opacity"
          >
            <OxfordLogo size="md" />
          </a>

          {/* Zone 2: Navigation Links with Gliding Spring Pill */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-extrabold text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1.5 px-1 transition-all duration-300 hover:text-blue-600 ${
                    isActive ? 'text-blue-900 font-black' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span 
                      layoutId="navbar-active-pill"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 rounded-full shadow-sm shadow-blue-500/30"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 32
                      }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.07, y: -4 }}
              whileTap={{ scale: 0.96, y: -1 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 15,
                mass: 0.8
              }}
              onClick={onOpenAdmissions}
              className="relative px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-black text-white bg-gradient-to-r from-[#07152B] via-[#0F2752] to-[#1D4ED8] hover:from-[#0F2752] hover:via-[#163A7A] hover:to-[#2563EB] rounded-xl shadow-depth-md hover:shadow-[0_16px_32px_-4px_rgba(29,78,216,0.45)] flex items-center gap-2 border border-blue-400/30 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              <Sparkles className="w-4 h-4 text-sky-300 relative z-10" />
              <span className="relative z-10">Apply for 2026–27</span>
              <ArrowUpRight className="w-4 h-4 text-sky-200 relative z-10" />
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-blue-900 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Smooth Scrolling / Page Reading Progress Indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600 origin-left"
          style={{ scaleX }}
        />

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-blue-100 px-6 py-6 shadow-depth-lg space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleNavClick(e, link.href);
                  }}
                  className="text-base font-extrabold text-slate-800 hover:text-blue-700 py-1 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissions();
                }}
                className="w-full py-3.5 text-center text-sm font-black text-white bg-gradient-to-r from-[#07152B] via-[#0F2752] to-[#1D4ED8] hover:from-[#0F2752] hover:to-[#2563EB] rounded-xl shadow-depth-md transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                Start Online Admission (2026–27)
              </button>
              <div className="text-xs text-slate-500 text-center font-bold">
                Helpline: <a href="tel:+917593945949" className="text-blue-700 font-black">+91 75939 45949</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
