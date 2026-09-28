import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CAMPUS_FACILITIES, CampusFacility } from '../data/schoolData';
import { Maximize2, X, Check, MapPin, Compass, Building, Sparkles } from 'lucide-react';
import { CanvaSectionHeader } from './CanvaTextIntro';

export function CampusShowcase() {
  const [activeFacility, setActiveFacility] = useState<CampusFacility | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="campus" className="py-20 lg:py-28 bg-white border-y-2 border-blue-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Canva Intro */}
        <div className="mb-14">
          <CanvaSectionHeader
            badgeNumber="03"
            badgeText="Purpose-Built Campus & Infrastructure"
            badgeIcon={Building}
            badgeColor="blue"
            titlePrimary="CAMPUS & FACILITIES"
            titleSecondary="20-ACRE ENCLAVE IN KOLLAM."
            description="Situated in Umayanalloor, Kollam, our campus merges serene natural surroundings with contemporary educational architecture, smart classrooms, science labs, and athletic fields."
          />
        </div>

        {/* 4 Architectural Cards Grid with Geometric Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CAMPUS_FACILITIES.map((facility, idx) => {
            const hasError = failedImages[facility.id];

            return (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group rounded-3xl overflow-hidden border-2 border-blue-100/90 bg-[#F4F8FC] flex flex-col hover:border-blue-400 transition-all duration-300 shadow-depth-sm hover:shadow-depth-lg hover:-translate-y-1"
              >
                {/* Image Frame with Website Image URL */}
                <div 
                  className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-[#07152B] via-[#0F2752] to-[#163A7A] cursor-pointer"
                  onClick={() => setActiveFacility(facility)}
                >
                  {!hasError ? (
                    <img
                      src={facility.imagePath}
                      alt={facility.name}
                      referrerPolicy="no-referrer"
                      onError={() => handleImageError(facility.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  ) : (
                    /* High-Depth Geometric Architectural Fallback */
                    <div className="w-full h-full flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
                      <div className="absolute inset-0 geometric-dots opacity-20" />
                      <div className="w-16 h-16 rounded-2xl bg-sky-400/20 border border-sky-300/40 flex items-center justify-center mb-3 shadow-depth-sm">
                        <Compass className="w-8 h-8 text-sky-300" />
                      </div>
                      <h4 className="font-display text-xl font-black text-white text-center">
                        {facility.name}
                      </h4>
                      <p className="text-xs text-sky-200 text-center font-bold mt-1">
                        The Oxford School Campus · Umayanalloor, Kollam
                      </p>
                    </div>
                  )}
                  
                  {/* Subtle geometric overlay badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-xl bg-[#07152B]/90 backdrop-blur-md border border-white/20 text-white text-xs font-black shadow-depth-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>Facility 0{idx + 1}</span>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#07152B]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                    <span className="text-xs font-black text-white flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/20">
                      <Maximize2 className="w-3.5 h-3.5 text-sky-300" />
                      <span>Inspect Facility</span>
                    </span>
                  </div>
                </div>

                {/* Card Content with Bold Typography & Shapes */}
                <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <div className="text-xs font-black uppercase tracking-wider text-blue-700 mb-1">
                      {facility.tagline}
                    </div>
                    <h3 className="font-display text-2xl font-black text-[#07152B] mb-2.5">
                      {facility.name}
                    </h3>
                    <p className="text-sm font-semibold text-slate-600 leading-relaxed mb-5">
                      {facility.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t-2 border-slate-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-700">
                      {facility.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Lightbox / Facility Detail Modal */}
      <AnimatePresence>
        {activeFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border-2 border-blue-200 relative flex flex-col max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveFacility(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition-colors shadow-depth-sm"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] bg-gradient-to-br from-[#07152B] to-[#163A7A] w-full overflow-hidden shrink-0">
                {!failedImages[activeFacility.id] ? (
                  <img
                    src={activeFacility.imagePath}
                    alt={activeFacility.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-white">
                    <Compass className="w-12 h-12 text-sky-400 mb-2" />
                    <h3 className="font-display text-2xl font-black">{activeFacility.name}</h3>
                    <p className="text-xs text-sky-200 mt-1 font-bold">The Oxford School Kollam Campus Infrastructure</p>
                  </div>
                )}
              </div>

              <div className="p-7 sm:p-9 overflow-y-auto space-y-4">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-700">
                  <Compass className="w-4 h-4" />
                  <span>{activeFacility.tagline}</span>
                </div>
                <h3 className="font-display text-3xl text-[#07152B] font-black">
                  {activeFacility.name}
                </h3>
                <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                  {activeFacility.description}
                </p>

                <div className="pt-4 border-t-2 border-slate-100">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#07152B] mb-3">
                    Architectural & Infrastructure Highlights:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeFacility.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-700">
                        <Check className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span className="flex items-center gap-1.5 text-blue-900">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    Umayanalloor Campus · Kollam, Kerala
                  </span>
                  <button
                    onClick={() => setActiveFacility(null)}
                    className="px-5 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-900 font-extrabold rounded-xl transition-colors"
                  >
                    Close Preview
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
