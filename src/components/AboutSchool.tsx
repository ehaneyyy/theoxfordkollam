import { motion } from 'motion/react';
import { Check, Globe2, HeartHandshake, Shield, Sparkles, Building2 } from 'lucide-react';
import { CanvaSectionHeader } from './CanvaTextIntro';

export function AboutSchool() {
  const pillars = [
    {
      title: 'Academic Distinction',
      description: 'Blending CBSE curriculum standards with international enquiry methods, ensuring top performance in board examinations and competitive entrances.',
      icon: Globe2,
      accent: 'from-blue-600 to-sky-500'
    },
    {
      title: 'Pastoral & Moral Mentorship',
      description: 'Cultivating integrity, empathy, and social responsibility in a supportive, multicultural environment where every child feels valued.',
      icon: HeartHandshake,
      accent: 'from-blue-700 to-indigo-600'
    },
    {
      title: 'Holistic Athletic Vitality',
      description: 'Equal emphasis on competitive athletics (KUFS football, swimming), robotics innovation, performing arts, and emotional mindfulness.',
      icon: Shield,
      accent: 'from-sky-600 to-blue-800'
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-y-2 border-blue-100 relative overflow-hidden">
      
      {/* Decorative background geometry */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-sky-100/50 via-blue-100/30 to-sky-100/50 rounded-full blur-3xl -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header - Canva-Inspired Typography & Masked Intros */}
        <CanvaSectionHeader
          badgeNumber="01"
          badgeText="Heritage & Educational Philosophy"
          badgeIcon={Sparkles}
          badgeColor="blue"
          titlePrimary="ROOTED IN VALUES."
          titleSecondary="EMPOWERED FOR THE WORLD."
          description="Established in 1999 as a premier unit of the acclaimed NIMS Group (UAE & India) under Manarul Huda Trust, The Oxford School Kollam provides an inspiring haven for young scholars from Play Class to Grade XII."
        />

        {/* 3 Pillars Grid with Geometric Shapes and Depth */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 rounded-3xl bg-gradient-to-b from-[#F4F8FC] to-white border-2 border-blue-100/80 hover:border-blue-300 shadow-depth-sm hover:shadow-depth-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Top Corner Geometric Accent */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${pillar.accent} opacity-10 rounded-bl-full pointer-events-none group-hover:opacity-20 transition-opacity`} />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#07152B] to-[#1D4ED8] text-white flex items-center justify-center mb-6 shadow-depth-sm group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-sky-300" />
                  </div>
                  <h3 className="font-display text-2xl font-black text-[#07152B] mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-black text-blue-700 uppercase tracking-wider">
                    Core Institutional Pillar
                  </span>
                  <span className="font-mono text-sm font-black text-slate-300">
                    0{idx + 1}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Authentic School Campus Photos from oxfordkollam.edu.in */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl overflow-hidden border-2 border-blue-100 shadow-depth-sm bg-slate-100 group">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/campus-mission.jpg"
                alt="The Oxford School Kollam Learning Environment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="text-xs font-black text-blue-900">Academic & Scholastic Spirit</div>
              <div className="text-[11px] font-bold text-slate-500">The Oxford School Kollam</div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border-2 border-blue-100 shadow-depth-sm bg-slate-100 group">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/campus-infrastructure.jpg"
                alt="The Oxford School Kollam Campus Infrastructure"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="text-xs font-black text-blue-900">Campus Facilities & Hostels</div>
              <div className="text-[11px] font-bold text-slate-500">20-Acre Umayanalloor Estate</div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border-2 border-blue-100 shadow-depth-sm bg-slate-100 group">
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src="/images/campus-event.jpg"
                alt="The Oxford School Kollam Cultural & Sports Events"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4 bg-white border-t border-slate-100">
              <div className="text-xs font-black text-blue-900">Cultural & Athletic Enrichment</div>
              <div className="text-[11px] font-bold text-slate-500">Holistic Student Growth</div>
            </div>
          </div>
        </div>

        {/* High-Depth Institutional Charter / NIMS Group Showcase */}
        <div className="mt-14 p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-br from-[#040C1A] via-[#07152B] to-[#0F2752] text-white relative overflow-hidden shadow-depth-lg border-2 border-blue-500/20">
          
          {/* Subtle concentric rings for visual depth */}
          <div 
            aria-hidden="true" 
            className="absolute -right-20 -top-20 w-96 h-96 rounded-full border-2 border-sky-400/20 pointer-events-none" 
          >
            <div className="absolute inset-8 rounded-full border border-blue-400/20" />
            <div className="absolute inset-16 rounded-full border border-sky-300/10" />
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-black uppercase tracking-wider border border-sky-400/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>Manarul Huda Trust · 40+ Years Educational Legacy</span>
              </div>
              
              <h3 className="font-display text-3xl sm:text-4xl text-white font-black leading-tight">
                "Our aim is not merely to instruct, but to awaken curiosity, strengthen character, and empower each child to lead with honor."
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 font-semibold max-w-2xl leading-relaxed">
                Operating premier CBSE & international educational institutions across Dubai, Sharjah, 
                and Kerala, the NIMS group brings over four decades of proven academic leadership to Kollam.
              </p>
            </div>

            <div className="lg:col-span-4 lg:border-l-2 lg:border-blue-900/60 lg:pl-8 space-y-3.5">
              <div className="text-xs uppercase tracking-widest font-black text-sky-400">
                Institutional Accreditations
              </div>
              <ul className="text-sm font-bold text-slate-200 space-y-2.5">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>CBSE Affiliation (No. 930421)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Senior Secondary (+2 Science & Commerce)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>British EYFS Kindergarten</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-300 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>Official KUFS Football Academy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
