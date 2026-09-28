import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, ShieldCheck, Award, Trophy, Compass, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';
import { CanvaRiseReveal, CanvaDynamicTagline, CanvaShimmerText } from './CanvaTextIntro';

interface HeroProps {
  onOpenAdmissions: () => void;
  onExploreAcademics: () => void;
}

export function Hero({ onOpenAdmissions, onExploreAcademics }: HeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="overview" className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-32 bg-gradient-to-b from-[#F4F8FC] via-white to-[#F0F7FF]">
      
      {/* Decorative Geometric Background Shapes & Depth */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-40 right-[-10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-sky-200/40 via-blue-200/30 to-transparent blur-3xl -z-10" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -left-40 w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-blue-300/30 via-sky-100/40 to-transparent blur-3xl -z-10" 
      />
      
      {/* Geometric concentric circular rings in top corner */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-8 right-12 w-96 h-96 rounded-full border border-blue-200/40 opacity-40 -z-10 hidden xl:block"
      >
        <div className="absolute inset-8 rounded-full border border-sky-300/30" />
        <div className="absolute inset-16 rounded-full border border-blue-400/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Editorial Top Kicker - Canva Badge & Micro-Intro */}
        <motion.div 
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm font-black tracking-wide text-blue-900 mb-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/80 border border-blue-300/80 text-blue-900 text-xs font-black shadow-sm">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="uppercase tracking-widest text-[11px]">ADMISSIONS 2026–27 OPEN</span>
          </span>
          <span className="text-slate-300 hidden sm:inline">•</span>
          <span className="uppercase tracking-widest text-slate-700">The Oxford School Kollam</span>
          <span className="text-slate-300 hidden md:inline">•</span>
          <span className="text-blue-700 font-extrabold hidden md:inline">CBSE Affiliation No. 930421</span>
        </motion.div>

        {/* Main Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Bold, Canva-Inspired Kinetic Typography & Clear CTAs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Canva Kinetic Title Intro with Masked Word Rise */}
            <div className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-[#07152B] leading-[1.06] tracking-tight [text-wrap:balance]">
              <div className="block">
                <CanvaRiseReveal 
                  text="ACADEMIC RIGOR." 
                  delay={0.15}
                  stagger={0.08}
                />
              </div>
              <div className="mt-1">
                <CanvaShimmerText text="SERENE LIVING." className="drop-shadow-sm" />
              </div>
            </div>

            {/* Canva Dynamic Cycling Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="pt-1 pb-1"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200/80 shadow-sm">
                <GraduationCap className="w-4 h-4 text-blue-600" />
                <CanvaDynamicTagline 
                  prefix="FOSTERING"
                  phrases={[
                    "GLOBAL CITIZENSHIP",
                    "ACADEMIC RIGOR",
                    "ATHLETIC PROWESS",
                    "HOLISTIC EXCELLENCE"
                  ]}
                  className="text-xs sm:text-sm"
                />
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-xl text-slate-700 leading-relaxed font-semibold max-w-2xl"
            >
              Nestled across 20 lush, tranquil acres in Umayanalloor, Kollam. 
              The Oxford School pairs the British EYFS foundation and CBSE Senior Secondary (+2) 
              curriculum with world-class residential boarding and KUFS football athletics.
            </motion.p>

            {/* Strategic highlights with geometric icons & strong contrast */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-white border border-blue-100 shadow-depth-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#07152B]">A/C Boarding</div>
                  <div className="text-[11px] font-bold text-slate-500">Boys & Girls Hostels</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-blue-100 shadow-depth-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#07152B]">Science & Commerce</div>
                  <div className="text-[11px] font-bold text-slate-500">+2 Senior Streams</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-blue-100 shadow-depth-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-black text-[#07152B]">KUFS Academy</div>
                  <div className="text-[11px] font-bold text-slate-500">Football & Swimming</div>
                </div>
              </div>
            </div>

            {/* Actions: Thicker, bolder buttons with slow luxurious zoom-in and minimalist gradients */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.07, y: -6 }}
                whileTap={{ scale: 0.96, y: -2 }}
                transition={{
                  type: 'spring',
                  stiffness: 110,
                  damping: 15,
                  mass: 0.8
                }}
                onClick={onOpenAdmissions}
                className="relative px-7 py-4 text-sm sm:text-base font-black text-white bg-gradient-to-r from-[#07152B] via-[#0F2752] to-[#1D4ED8] hover:from-[#0F2752] hover:via-[#163A7A] hover:to-[#2563EB] rounded-2xl shadow-depth-md hover:shadow-[0_20px_40px_-6px_rgba(29,78,216,0.45)] flex items-center gap-3 group border border-sky-400/30 overflow-hidden cursor-pointer"
              >
                {/* Minimalist radiant shimmer wave */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <span className="relative z-10">Enroll for Academic Year 2026–27</span>
                <ArrowRight className="w-4 h-4 text-sky-300 group-hover:translate-x-2 transition-transform duration-500 relative z-10" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.07, y: -6 }}
                whileTap={{ scale: 0.96, y: -2 }}
                transition={{
                  type: 'spring',
                  stiffness: 110,
                  damping: 15,
                  mass: 0.8
                }}
                onClick={onExploreAcademics}
                className="relative px-6 py-4 text-sm sm:text-base font-extrabold text-slate-800 bg-gradient-to-b from-white via-slate-50 to-blue-50/50 hover:from-white hover:via-blue-50/80 hover:to-sky-100/70 border-2 border-blue-200/90 hover:border-blue-400 rounded-2xl shadow-depth-sm hover:shadow-[0_16px_32px_-6px_rgba(37,99,235,0.28)] flex items-center gap-2 group overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                <BookOpen className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform duration-500 relative z-10" />
                <span className="relative z-10">Explore Curricula</span>
              </motion.button>
            </div>

            {/* Quiet institutional proof */}
            <div className="pt-3 text-xs sm:text-sm font-bold text-slate-500 flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 text-blue-900 font-extrabold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                Established 1999
              </span>
              <span>·</span>
              <span>Managed by Manarul Huda Trust</span>
              <span>·</span>
              <a href="#boarding" className="text-blue-700 hover:underline font-extrabold">
                Hostel Facilities Available
              </a>
            </div>

          </motion.div>

          {/* Right Column: High-Depth Geometric Framing using Website Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Background geometric colored depth cards */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-[2.5rem] opacity-25 blur-lg transform -rotate-1 pointer-events-none" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-700 to-sky-500 rounded-[2.2rem] opacity-30 transform rotate-1 pointer-events-none" />

            {/* Main Visual Frame */}
            <div className="relative rounded-[2rem] overflow-hidden bg-white border-2 border-blue-200 shadow-depth-lg group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#07152B] to-[#163A7A] relative">
                {!imageError ? (
                  <img
                    src="/images/campus-vision.jpg"
                    alt="The Oxford School Kollam Campus Architecture"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                ) : (
                  /* Resilient Geometric Visual Blueprint if external host blocks */
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
                    <div className="absolute inset-0 geometric-dots opacity-20" />
                    <div className="w-20 h-20 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center mb-4 shadow-depth-md">
                      <Compass className="w-10 h-10 text-sky-300" />
                    </div>
                    <h3 className="font-display text-2xl font-black text-center text-white">
                      The Oxford School Campus
                    </h3>
                    <p className="text-xs text-sky-200 text-center font-bold mt-2 max-w-xs">
                      20 Acres of Serene Educational Infrastructure · Umayanalloor, Kollam
                    </p>
                    <div className="mt-4 px-3 py-1 rounded-full bg-blue-600/40 border border-blue-400/30 text-[11px] font-black tracking-wider uppercase text-sky-200">
                      CBSE Affiliation 930421
                    </div>
                  </div>
                )}

                {/* Geometric badge in photo corner */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-xl bg-[#07152B]/90 backdrop-blur-md border border-white/20 text-white text-xs font-black shadow-depth-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Kollam Campus</span>
                </div>
              </div>

              {/* Subdued architectural photo caption with depth */}
              <div className="p-5 sm:p-6 bg-white border-t-2 border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-black text-[#07152B]">The Oxford School, Kollam</h4>
                  <p className="text-xs font-bold text-slate-500 mt-0.5">Mylapure P.O., Umayanalloor · 20-Acre Campus</p>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-xs font-black text-blue-900">
                  Est. 1999
                </div>
              </div>
            </div>

            {/* Floating geometric highlight pill */}
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-3.5 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl border-2 border-blue-200 shadow-depth-md">
              <div className="w-3.5 h-3.5 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <p className="text-xs font-black text-[#07152B]">Admissions 2026–27 Open</p>
                <p className="text-[11px] font-bold text-blue-700">Play Class to Grade XI · Registration Active</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Tabular Institutional Metrics Ribbon - Bolder & Thicker with Shapes */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-10 border-t-2 border-blue-100 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-depth-sm">
            <div className="font-display text-4xl sm:text-5xl font-black text-[#07152B] tracking-tight tabular-nums">
              1999
            </div>
            <div className="text-sm font-black text-blue-900 mt-1">
              Established in Kollam
            </div>
            <div className="text-xs font-bold text-slate-500 mt-0.5">
              Unit of NIMS Group UAE
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-depth-sm">
            <div className="font-display text-4xl sm:text-5xl font-black text-blue-600 tracking-tight tabular-nums">
              100%
            </div>
            <div className="text-sm font-black text-blue-900 mt-1">
              CBSE Pass Record
            </div>
            <div className="text-xs font-bold text-slate-500 mt-0.5">
              AISSE & AISSCE Distinctions
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-depth-sm">
            <div className="font-display text-4xl sm:text-5xl font-black text-[#07152B] tracking-tight tabular-nums">
              1:15
            </div>
            <div className="text-sm font-black text-blue-900 mt-1">
              Teacher-Scholar Ratio
            </div>
            <div className="text-xs font-bold text-slate-500 mt-0.5">
              Personalized Guidance
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-blue-100 shadow-depth-sm">
            <div className="font-display text-4xl sm:text-5xl font-black text-sky-600 tracking-tight tabular-nums">
              20+
            </div>
            <div className="text-sm font-black text-blue-900 mt-1">
              Acres Lush Campus
            </div>
            <div className="text-xs font-bold text-slate-500 mt-0.5">
              Safe & Eco-Friendly
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
