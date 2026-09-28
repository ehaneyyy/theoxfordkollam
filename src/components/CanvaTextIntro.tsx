import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Sparkles, Play, RotateCcw } from 'lucide-react';

interface CanvaRiseRevealProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

/**
 * Canva "Rise / Ascend" Text Intro:
 * Splits string into words, each masked by an overflow-hidden container,
 * sliding up smoothly with dynamic spring physics.
 */
export function CanvaRiseReveal({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.07,
  highlightWords = [],
  highlightClassName = 'text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-800'
}: CanvaRiseRevealProps) {
  const words = text.split(' ');

  return (
    <span className={`inline-flex flex-wrap gap-x-[0.28em] gap-y-[0.05em] ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const isHighlight = highlightWords.some(hw => hw.toLowerCase() === cleanWord.toLowerCase() || hw.toLowerCase() === word.toLowerCase());

        return (
          <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-top">
            <motion.span
              initial={{ y: '120%', opacity: 0, rotate: 2 }}
              whileInView={{ y: 0, opacity: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: delay + i * stagger,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`inline-block ${isHighlight ? highlightClassName : ''} ${wordClassName}`}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

/**
 * Canva Dynamic Rotating Tagline Intro:
 * Emulates Canva's dynamic title text transitions cycling through key campus identities.
 */
export function CanvaDynamicTagline({
  prefix = 'EMPOWERING',
  phrases = [
    'ACADEMIC RIGOR',
    'GLOBAL CITIZENSHIP',
    'HOLISTIC LEADERSHIP',
    'ATHLETIC EXCELLENCE'
  ],
  className = ''
}: {
  prefix?: string;
  phrases?: string[];
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [phrases.length]);

  return (
    <div className={`flex flex-wrap items-center gap-x-3 gap-y-1 ${className}`}>
      <span className="text-slate-900 font-black">{prefix}</span>
      <div className="relative inline-block min-w-[260px] sm:min-w-[340px] h-[1.25em] overflow-hidden align-middle">
        <motion.span
          key={index}
          initial={{ y: '100%', opacity: 0, filter: 'blur(4px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: '-100%', opacity: 0, filter: 'blur(4px)' }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="absolute inset-0 flex items-center font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700"
        >
          {phrases[index]}
        </motion.span>
      </div>
    </div>
  );
}

/**
 * Canva Shimmer Text:
 * Liquid light sweep effect continuously moving across title text.
 */
export function CanvaShimmerText({
  text,
  className = ''
}: {
  text: string;
  className?: string;
}) {
  return (
    <span
      className={`relative inline-block font-black bg-gradient-to-r from-[#0F2752] via-[#2563EB] via-sky-400 via-[#1D4ED8] to-[#07152B] bg-[length:250%_auto] animate-[canva-shimmer_5s_linear_infinite] bg-clip-text text-transparent ${className}`}
    >
      {text}
    </span>
  );
}

/**
 * Canva Badge:
 * Stamp-in intro with spring bounce and glowing ambient beacon.
 */
export function CanvaBadge({
  number,
  title,
  icon: Icon = Sparkles,
  colorScheme = 'blue',
  className = ''
}: {
  number?: string;
  title: string;
  icon?: React.ElementType;
  colorScheme?: 'blue' | 'indigo' | 'emerald' | 'rose';
  className?: string;
}) {
  const themes = {
    blue: {
      bg: 'bg-blue-50/90 hover:bg-blue-100/90',
      border: 'border-blue-200/90',
      text: 'text-blue-950',
      iconColor: 'text-blue-600',
      dot: 'bg-blue-600',
      shadow: 'shadow-blue-500/10'
    },
    indigo: {
      bg: 'bg-indigo-50/90 hover:bg-indigo-100/90',
      border: 'border-indigo-200/90',
      text: 'text-indigo-950',
      iconColor: 'text-indigo-600',
      dot: 'bg-indigo-600',
      shadow: 'shadow-indigo-500/10'
    },
    emerald: {
      bg: 'bg-emerald-50/90 hover:bg-emerald-100/90',
      border: 'border-emerald-200/90',
      text: 'text-emerald-950',
      iconColor: 'text-emerald-600',
      dot: 'bg-emerald-600',
      shadow: 'shadow-emerald-500/10'
    },
    rose: {
      bg: 'bg-rose-50/90 hover:bg-rose-100/90',
      border: 'border-rose-200/90',
      text: 'text-rose-950',
      iconColor: 'text-rose-600',
      dot: 'bg-rose-600',
      shadow: 'shadow-rose-500/10'
    }
  };

  const currentTheme = themes[colorScheme] || themes.blue;

  return (
    <motion.div
      initial={{ scale: 0.85, opacity: 0, y: -6 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 24,
        mass: 0.8
      }}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border backdrop-blur-md shadow-sm transition-all duration-300 ${currentTheme.bg} ${currentTheme.border} ${currentTheme.text} ${currentTheme.shadow} ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentTheme.dot} opacity-75`} />
        <span className={`relative inline-flex rounded-full h-2 w-2 ${currentTheme.dot}`} />
      </span>
      <Icon className={`w-3.5 h-3.5 ${currentTheme.iconColor}`} />
      {number && <span className="font-mono text-[11px] font-black text-slate-400">{number}</span>}
      <span className="text-xs font-black uppercase tracking-wider">{title}</span>
    </motion.div>
  );
}

/**
 * Full Canva-Style Section Header Component:
 * Unifies section introductions with Canva typography flair, kinetic word rise,
 * decorative animated underline bar, and smooth staggered description fade.
 */
export function CanvaSectionHeader({
  badgeNumber,
  badgeText,
  badgeIcon = Sparkles,
  badgeColor = 'blue',
  titlePrimary,
  titleSecondary,
  description,
  align = 'left',
  className = ''
}: {
  badgeNumber?: string;
  badgeText: string;
  badgeIcon?: React.ElementType;
  badgeColor?: 'blue' | 'indigo' | 'emerald' | 'rose';
  titlePrimary: string;
  titleSecondary?: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  const isCenter = align === 'center';

  return (
    <div className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : ''} ${className}`}>
      {/* 1. Canva Badge Intro */}
      <CanvaBadge
        number={badgeNumber}
        title={badgeText}
        icon={badgeIcon}
        colorScheme={badgeColor}
        className="mb-4"
      />

      {/* 2. Canva Kinetic Title with Masked Word Rise */}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl text-[#07152B] font-black tracking-tight leading-[1.12] [text-wrap:balance] ${isCenter ? 'flex flex-col items-center' : ''}`}>
        <CanvaRiseReveal
          text={titlePrimary}
          delay={0.1}
          stagger={0.06}
          className={isCenter ? 'justify-center' : ''}
        />
        {titleSecondary && (
          <div className="mt-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
              <CanvaRiseReveal
                text={titleSecondary}
                delay={0.25}
                stagger={0.06}
                className={isCenter ? 'justify-center' : ''}
              />
            </span>
          </div>
        )}
      </h2>

      {/* 3. Animated Canva Underline Wipe */}
      <div className={`mt-3 flex ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: '80px', opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="h-1 rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600"
        />
      </div>

      {/* 4. Smooth Description Fade */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="text-slate-700 text-base sm:text-lg leading-relaxed font-semibold mt-4"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
