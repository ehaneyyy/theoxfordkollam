import { AnimatePresence, motion } from 'motion/react';
import { X, Globe, ExternalLink, ShieldCheck, CheckCircle2, Phone, Sparkles } from 'lucide-react';
import { OxfordLogo } from './OxfordLogo';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AdmissionModal({ isOpen, onClose }: AdmissionModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop with smooth opacity fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/75 backdrop-blur-md cursor-pointer"
          />

          {/* Modal card with slow, luxurious spring opening */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 32 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{
              type: 'spring',
              damping: 24,
              stiffness: 220,
              mass: 0.8
            }}
            className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border-2 border-blue-200 shadow-2xl relative z-10 my-auto"
          >
            {/* Header with Depth & Colors */}
            <div className="p-7 bg-gradient-to-r from-[#040C1A] via-[#07152B] to-[#0F2752] text-white flex items-start justify-between border-b-2 border-blue-900/60">
              <div>
                <div className="mb-3">
                  <OxfordLogo size="sm" lightMode={true} />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-black">
                  Online Admission Application 2026–27
                </h3>
                <p className="text-xs font-bold text-slate-300 mt-1">
                  Play Class to Grade XI · CBSE Affiliation No. 930421
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-2xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-7 sm:p-9 space-y-6">
              
              {/* Official Gateway Notification */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/90 via-sky-50/70 to-indigo-50/90 border-2 border-blue-200">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Globe className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-blue-800 bg-blue-100/90 px-2 py-0.5 rounded border border-blue-200 inline-block mb-1">
                      Official Institutional Portal
                    </span>
                    <h4 className="font-display font-black text-slate-900 text-base">
                      Apply Directly on oxfordkollam.edu.in
                    </h4>
                    <p className="text-xs font-semibold text-slate-600 mt-1 leading-relaxed">
                      All online admission registrations, enrollment applications, and document submissions are hosted directly on our official institutional portal at <strong className="text-blue-950 underline underline-offset-2">oxfordkollam.edu.in</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Application Details Summary */}
              <div className="space-y-3 text-xs font-bold text-slate-700">
                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Admissions open for Play Class, Kindergarten (EYFS), Grades I – XI</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Day Scholar & Full Boarding (Residential Hostel) choices</span>
                </div>
                <div className="p-3.5 rounded-xl border border-slate-200/80 bg-slate-50/60 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Senior Secondary Science (PCMB / PCMC) & Commerce Streams</span>
                </div>
              </div>

              {/* Main Action Button with slow luxury zoom */}
              <div className="pt-2">
                <motion.a
                  href="https://oxfordkollam.edu.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.04, y: -4 }}
                  whileTap={{ scale: 0.96, y: -1 }}
                  transition={{
                    type: 'spring',
                    stiffness: 110,
                    damping: 15,
                    mass: 0.8
                  }}
                  className="w-full py-4.5 px-6 text-sm font-black text-white bg-gradient-to-r from-[#07152B] via-[#0F2752] to-[#1D4ED8] hover:from-[#0F2752] hover:via-[#163A7A] hover:to-[#2563EB] rounded-2xl shadow-depth-md hover:shadow-[0_20px_40px_-6px_rgba(29,78,216,0.45)] flex items-center justify-center gap-3 border border-sky-400/30 overflow-hidden cursor-pointer group transition-all duration-500"
                >
                  <Globe className="w-4 h-4 text-sky-300" />
                  <span>Proceed to Apply on oxfordkollam.edu.in</span>
                  <ExternalLink className="w-4 h-4 text-sky-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>

              {/* Direct Telephone Helpline */}
              <div className="pt-4 border-t-2 border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1.5 text-blue-950 font-black">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  <span>Verified Institutional Portal</span>
                </span>
                <a 
                  href="tel:+917593945949" 
                  className="flex items-center gap-1.5 text-blue-900 font-black hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Desk: +91 75939 45949</span>
                </a>
              </div>

            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
