import { motion } from 'motion/react';
import { 
  Trophy, 
  Waves, 
  Cpu, 
  Palette, 
  Bus, 
  Stethoscope, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { CanvaSectionHeader } from './CanvaTextIntro';

export function Facilities() {
  const facilitiesList = [
    {
      icon: Trophy,
      title: 'KUFS Football Academy',
      kicker: 'Kerala United Football School Partnership',
      description: 'Professional after-school and weekend football training conducted by AIFF-licensed coaches on our regulation grounds, cultivating tactical agility and discipline.',
      highlights: ['FIFA-standard training curriculum', 'Weekend match fixtures', 'Physical endurance conditioning'],
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200'
    },
    {
      icon: Waves,
      title: 'Aquatics Complex',
      kicker: 'Semi-Olympic Swimming Pool',
      description: 'Pristine, hygienic chlorinated swimming facility equipped with certified lifeguards and dedicated coaches for all grades, from water confidence to competitive stroke training.',
      highlights: ['Clean filtration systems', 'Separate junior training bay', 'Lifesaving & water safety training'],
      badgeColor: 'bg-sky-50 text-sky-800 border-sky-200'
    },
    {
      icon: Cpu,
      title: 'Robotics & STEM Labs',
      kicker: 'Future-Ready Technology Wing',
      description: 'Equipped with microcontrollers, sensor kits, 3D printing equipment, and programming suites where scholars engineer prototypes and participate in national hackathons.',
      highlights: ['Practical Arduino & Raspberry Pi kits', 'Algorithmic thinking classes', 'Annual science & innovation fair'],
      badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200'
    },
    {
      icon: Palette,
      title: 'Fine Arts & Performing Studio',
      kicker: 'Creative Expression & Culture',
      description: 'Dedicated acoustic music studio, classical and contemporary dance floors, and fine art workshops fostering aesthetic appreciation and creative confidence.',
      highlights: ['Vocal & instrumental music training', 'Traditional Kerala & global dance forms', 'Canvas painting & pottery'],
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200'
    },
    {
      icon: Bus,
      title: 'Safe Fleet Transportation',
      kicker: 'GPS & RFID Enabled Transit',
      description: 'Comprehensive network of modern school buses traversing major routes across Kollam district, with real-time GPS tracking accessible via the parent mobile app.',
      highlights: ['Female bus attendants in every vehicle', 'Speed governors & CCTV enabled', 'Covering Karunagappally, Kundara, Kottiyam'],
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-200'
    },
    {
      icon: Stethoscope,
      title: 'Health & Wellness Infirmary',
      kicker: 'On-Campus Medical Support',
      description: 'Fully equipped infirmary managed by qualified nursing staff for immediate first aid, regular student health checkups, and swift hospital tie-ups for emergencies.',
      highlights: ['Qualified on-duty nurse', 'Annual pediatric & dental screenings', 'Ergonomic health records'],
      badgeColor: 'bg-rose-50 text-rose-800 border-rose-200'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b-2 border-blue-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header with Canva Intro */}
        <div className="mb-14">
          <CanvaSectionHeader
            badgeNumber="05"
            badgeText="Enrichment & Student Life"
            badgeIcon={Sparkles}
            badgeColor="emerald"
            titlePrimary="ATHLETICS, ARTS"
            titleSecondary="& FUTURE TECHNOLOGY."
            description="Education at Oxford Kollam extends far beyond textbooks. We provide structured co-curricular opportunities that nurture confidence, teamwork, and resilience."
          />
        </div>

        {/* 6 Grid Cards with Geometric Shapes & Layered Depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilitiesList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#F4F8FC] to-white border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group shadow-depth-sm hover:shadow-depth-md hover:-translate-y-1 relative overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#07152B] to-[#1D4ED8] text-white group-hover:scale-105 transition-transform flex items-center justify-center shadow-depth-sm">
                      <Icon className="w-7 h-7 text-sky-300" />
                    </div>
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-blue-900 font-mono font-black text-xs flex items-center justify-center border border-blue-200">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className={`inline-block px-2.5 py-0.5 rounded-md text-[11px] font-black uppercase tracking-wider border mb-2 ${item.badgeColor}`}>
                    {item.kicker}
                  </span>
                  
                  <h3 className="font-display text-2xl font-black text-[#07152B] mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm font-semibold text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-slate-100 space-y-2">
                  {item.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-xs font-bold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
