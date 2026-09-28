import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ACADEMIC_PROGRAMS } from '../data/schoolData';
import { Check, Clock, BookOpen, Layers, ArrowUpRight, GraduationCap } from 'lucide-react';
import { CanvaBadge, CanvaRiseReveal } from './CanvaTextIntro';

interface AcademicsProps {
  onOpenAdmissions: () => void;
}

export function Academics({ onOpenAdmissions }: AcademicsProps) {
  const [selectedId, setSelectedId] = useState<string>('senior-secondary');

  const currentProgram = ACADEMIC_PROGRAMS.find((p) => p.id === selectedId) || ACADEMIC_PROGRAMS[4];

  return (
    <section id="academics" className="py-20 lg:py-28 bg-[#F4F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Canva Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <CanvaBadge
              number="02"
              title="Academic Excellence & Pathways"
              icon={GraduationCap}
              colorScheme="indigo"
              className="mb-4"
            />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#07152B] font-black tracking-tight mt-1 [text-wrap:balance]">
              <CanvaRiseReveal text="ACADEMIC PATHWAYS" delay={0.1} /> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
                <CanvaRiseReveal text="KINDERGARTEN TO GRADE XII." delay={0.25} />
              </span>
            </h2>
            <div className="mt-2.5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '70px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-1 rounded-full bg-gradient-to-r from-blue-600 via-sky-400 to-indigo-600"
              />
            </div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-700 text-base sm:text-lg font-semibold mt-3"
            >
              Affiliated with the Central Board of Secondary Education (CBSE), New Delhi. 
              Our curriculum blends structured board readiness with inquisitive learning and global competency.
            </motion.p>
          </div>

          <div className="shrink-0">
            <motion.button
              whileHover={{ scale: 1.07, y: -5 }}
              whileTap={{ scale: 0.96, y: -1 }}
              transition={{
                type: 'spring',
                stiffness: 110,
                damping: 15,
                mass: 0.8
              }}
              onClick={onOpenAdmissions}
              className="relative px-6 py-3.5 text-sm font-black text-white bg-gradient-to-r from-[#07152B] via-[#0F2752] to-[#1D4ED8] hover:from-[#0F2752] hover:via-[#163A7A] hover:to-[#2563EB] rounded-2xl shadow-depth-sm hover:shadow-[0_16px_32px_-4px_rgba(29,78,216,0.42)] flex items-center gap-2 border border-sky-400/30 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
              <span className="relative z-10">Download Prospectus</span>
              <ArrowUpRight className="w-4 h-4 text-sky-200 relative z-10" />
            </motion.button>
          </div>
        </div>

        {/* Geometric Program Selector Tabs with Depth */}
        <div className="flex items-center gap-2 p-2 bg-gradient-to-b from-white to-blue-50/30 rounded-2xl border-2 border-blue-100 shadow-depth-sm overflow-x-auto max-w-full no-scrollbar mb-10">
          {ACADEMIC_PROGRAMS.map((prog) => {
            const isSelected = prog.id === selectedId;
            return (
              <button
                key={prog.id}
                onClick={() => setSelectedId(prog.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-black transition-all duration-300 whitespace-nowrap shrink-0 flex items-center gap-2.5 hover:-translate-y-1 hover:scale-[1.03] active:scale-95 ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#07152B] via-[#0F2752] to-[#1D4ED8] text-white shadow-depth-sm border border-sky-400/30 hover:shadow-[0_8px_20px_-3px_rgba(29,78,216,0.3)]'
                    : 'text-slate-700 hover:text-blue-900 bg-transparent hover:bg-gradient-to-r hover:from-white hover:to-blue-50 hover:shadow-2xs'
                }`}
              >
                <span>{prog.stage}</span>
                <span className={`text-[11px] font-extrabold ${isSelected ? 'text-sky-300' : 'text-slate-400'}`}>
                  ({prog.grades})
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Program Stage Details Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProgram.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white rounded-3xl border-2 border-blue-100 shadow-depth-md p-6 sm:p-10 relative overflow-hidden"
          >
            {/* Top decorative shape strip */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-700 via-sky-400 to-[#07152B]" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Column: Stage Summary & Key Focus */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-black text-blue-900 uppercase tracking-wider mb-2">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 border border-blue-200">{currentProgram.stage}</span>
                    <span>·</span>
                    <span className="px-2.5 py-1 rounded-md bg-sky-50 border border-sky-200 text-sky-900">{currentProgram.grades}</span>
                    <span>·</span>
                    <span className="text-slate-500 font-bold">{currentProgram.ageGroup}</span>
                  </div>
                  
                  <h3 className="font-display text-3xl sm:text-4xl font-black text-[#07152B] leading-tight">
                    {currentProgram.tagline}
                  </h3>
                  
                  <p className="text-sm sm:text-base text-slate-700 font-semibold leading-relaxed mt-4">
                    {currentProgram.overview}
                  </p>
                </div>

                {/* Key Curriculum Highlights with bold check shapes */}
                <div className="pt-2">
                  <h4 className="text-xs uppercase tracking-widest font-black text-blue-950 mb-3.5 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600" />
                    <span>Curricular Pillars & Teaching Approach</span>
                  </h4>
                  <ul className="space-y-3">
                    {currentProgram.curriculumHighlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-slate-700">
                        <div className="w-5 h-5 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-slate-600 pt-3 border-t-2 border-slate-100">
                  <div className="flex items-center gap-1.5 text-blue-900">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span>School Hours: <strong className="font-black text-[#07152B]">{currentProgram.timing}</strong></span>
                  </div>
                  <span className="text-slate-300">·</span>
                  <span>Monday through Friday</span>
                </div>
              </div>

              {/* Right Column: Subject Architecture & Streams */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#F0F7FF] to-[#E0F2FE]/50 rounded-2xl p-6 sm:p-8 border-2 border-blue-200/80 shadow-depth-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-black text-blue-950 mb-4">
                    <BookOpen className="w-4 h-4 text-blue-700" />
                    <span>Key Discipline Strands</span>
                  </div>

                  <div className="space-y-2.5">
                    {currentProgram.keySubjects.map((subject, idx) => (
                      <div
                        key={subject}
                        className="p-3.5 bg-white rounded-xl border border-blue-200/90 text-xs sm:text-sm font-extrabold text-[#07152B] flex items-center justify-between shadow-2xs hover:border-blue-400 transition-colors"
                      >
                        <span>{subject}</span>
                        <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-800 font-mono font-black text-xs flex items-center justify-center">
                          0{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>

                  {currentProgram.id === 'senior-secondary' && (
                    <div className="mt-6 pt-5 border-t-2 border-blue-200/80 space-y-2.5">
                      <div className="text-xs font-black uppercase tracking-wider text-blue-950">
                        Senior Secondary Combinations:
                      </div>
                      <p className="text-xs font-bold text-slate-700 leading-relaxed bg-white/70 p-3.5 rounded-xl border border-blue-200/70">
                        • <strong className="text-blue-950">Science Track:</strong> Physics, Chemistry, Math/Bio with Computer Science or Physical Ed.<br/>
                        • <strong className="text-blue-950">Commerce Track:</strong> Accountancy, Business Studies, Economics with Informatics Practices or Physical Ed.
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 pt-6 border-t-2 border-blue-200/80">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.96, y: -1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 120,
                      damping: 15,
                      mass: 0.8
                    }}
                    onClick={onOpenAdmissions}
                    className="relative w-full py-4 px-5 bg-gradient-to-r from-[#07152B] via-[#0F2752] to-[#1D4ED8] hover:from-[#0F2752] hover:via-[#163A7A] hover:to-[#2563EB] text-white text-xs sm:text-sm font-black rounded-xl shadow-depth-sm flex items-center justify-center gap-2 border border-sky-400/30 hover:shadow-[0_16px_32px_-4px_rgba(29,78,216,0.42)] overflow-hidden cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                    <span className="relative z-10">Apply for {currentProgram.stage}</span>
                    <ArrowUpRight className="w-4 h-4 text-sky-200 relative z-10" />
                  </motion.button>
                  <p className="text-[11px] font-bold text-slate-500 text-center mt-2.5">
                    Merit-based admission for Academic Year 2026–27
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
