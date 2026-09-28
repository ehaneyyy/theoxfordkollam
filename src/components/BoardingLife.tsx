import { motion } from 'motion/react';
import { BOARDING_HIGHLIGHTS } from '../data/schoolData';
import { Clock, Shield, Utensils, HeartHandshake, Home, ArrowUpRight, Bed } from 'lucide-react';
import { CanvaBadge, CanvaRiseReveal } from './CanvaTextIntro';

interface BoardingLifeProps {
  onOpenAdmissions: () => void;
}

export function BoardingLife({ onOpenAdmissions }: BoardingLifeProps) {
  const dailySchedule = [
    { time: '6:00 AM', title: 'Gentle Wake-Up & Morning Fitness', note: 'Calisthenics, jogging, or yoga in campus grounds' },
    { time: '7:15 AM', title: 'Wholesome Breakfast', note: 'Fresh South Indian & continental nutritious dining' },
    { time: '8:15 AM', title: 'Academic School Day', note: 'Engaging classroom instruction, labs & library hours' },
    { time: '3:45 PM', title: 'Evening Refreshment & Athletics', note: 'KUFS football, swimming pool sessions, sports' },
    { time: '5:45 PM', title: 'Supervised Academic Prep', note: 'Subject faculty mentorship and homework guidance' },
    { time: '8:00 PM', title: 'Nutritious Dinner & Socialization', note: 'Community dining and recreational discussion' },
    { time: '9:30 PM', title: 'Quiet Reading & Restful Retirement', note: 'Secure, quiet air-conditioned boarding wings' },
  ];

  return (
    <section id="boarding" className="py-20 lg:py-28 bg-gradient-to-b from-[#F0F7FF] via-[#E8F3FD] to-[#F4F8FC] border-b-2 border-blue-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Canva Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <CanvaBadge
              number="04"
              title="Residential Boarding & Pastoral Care"
              icon={Bed}
              colorScheme="blue"
              className="mb-4"
            />
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#07152B] font-black tracking-tight mt-1 [text-wrap:balance]">
              <CanvaRiseReveal text="HOME AWAY FROM HOME" delay={0.1} /> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-sky-600 to-indigo-700">
                <CanvaRiseReveal text="A/C HOSTELS & SUPERVISED PREP." delay={0.25} />
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
              Designed especially for outstation scholars and children of expatriate families in the UAE and Gulf, 
              our residential boarding wings offer separate air-conditioned accommodations for boys and girls from Grade III to XII.
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
              <span className="relative z-10">Inquire for Boarding</span>
              <ArrowUpRight className="w-4 h-4 text-sky-200 relative z-10" />
            </motion.button>
          </div>
        </div>

        {/* 4 Core Pillars of Boarding with Geometric Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BOARDING_HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-7 rounded-3xl bg-white border-2 border-blue-100 shadow-depth-sm hover:border-blue-400 hover:shadow-depth-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-sky-100 text-blue-900 border border-blue-200 flex items-center justify-center mb-5 font-black text-base shadow-2xs">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-xl font-black text-[#07152B] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs font-black text-blue-700 uppercase tracking-wider mb-3">
                  {item.description}
                </p>
                <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Daily Cadence Timeline & Resident Pastoral Assurance with Shapes */}
        <div className="bg-white rounded-[2.5rem] border-2 border-blue-200 p-8 sm:p-12 shadow-depth-md relative overflow-hidden">
          
          {/* Subtle geometric circle */}
          <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-blue-50/50 -z-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Timeline Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-800 mb-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>The Boarder's Daily Cadence</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black text-[#07152B] mb-6">
                Structured discipline balanced with joyful rest.
              </h3>

              <div className="space-y-4">
                {dailySchedule.map((slot) => (
                  <div 
                    key={slot.time}
                    className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b-2 border-slate-100 text-xs sm:text-sm gap-1 hover:bg-blue-50/40 px-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono font-black text-blue-800 w-20 shrink-0 tabular-nums text-xs sm:text-sm px-2 py-0.5 rounded bg-blue-50">
                        {slot.time}
                      </span>
                      <span className="font-black text-[#07152B]">
                        {slot.title}
                      </span>
                    </div>
                    <span className="text-xs font-bold text-slate-500 sm:text-right pl-7 sm:pl-0">
                      {slot.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pastoral Care & Assurance Depth Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#040C1A] via-[#07152B] to-[#0F2752] text-white rounded-3xl p-7 sm:p-9 space-y-5 shadow-depth-lg border-2 border-blue-500/20 relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center shadow-depth-sm">
                <Home className="w-6 h-6" />
              </div>
              <h4 className="font-display text-2xl font-black">
                Caring Mentorship in Every Wing
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-slate-300 leading-relaxed">
                Resident wardens, healthcare nurses, and subject tutors live on premises. 
                Regular weekend excursions, swimming drills, and continuous parent video updates ensure peace of mind for families living overseas.
              </p>

              <div className="pt-4 border-t-2 border-blue-900/60 space-y-2.5 text-xs font-bold text-slate-200">
                <div className="flex items-center gap-2.5">
                  <Shield className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>24/7 CCTV surveillance & biometric access control</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Utensils className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Fresh vegetarian & non-vegetarian culinary options</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Scheduled weekly parent-child video conferences</span>
                </div>
              </div>

              <div className="pt-3">
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
                  className="relative w-full py-3.5 bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 hover:from-white hover:via-sky-200 hover:to-sky-300 text-[#07152B] font-black text-xs sm:text-sm rounded-xl shadow-depth-sm hover:shadow-[0_16px_32px_-4px_rgba(56,189,248,0.5)] overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
                  <span className="relative z-10">Schedule Residential Campus Tour</span>
                </motion.button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
