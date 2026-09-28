import { motion } from 'motion/react';
import { Quote, Sparkles } from 'lucide-react';
import { CanvaSectionHeader } from './CanvaTextIntro';

export function Testimonials() {
  const testimonials = [
    {
      quote: "Living and working in Dubai, enrolling our son in The Oxford School Kollam's residential boarding was the best decision. The supervised evening prep with resident teachers ensured he secured 96% in his Class X CBSE boards without external tuition.",
      author: "Dr. Faisal Rahman & Dr. Zeenath",
      role: "Parents of Grade XI Scholar",
      location: "Sharjah & Kollam"
    },
    {
      quote: "The combination of rigorous STEM laboratories, KUFS football coaching, and a calm, values-oriented school environment helped me develop both academic clarity and leadership. Oxford Kollam laid the foundation for my engineering career.",
      author: "Sneha Nair",
      role: "Alumna, Class of 2023",
      location: "B.Tech Computer Science, NIT Calicut"
    },
    {
      quote: "The British EYFS method in kindergarten transformed our daughter's reading confidence. Her teachers are gentle, observant, and deeply communicative through the parent app. The campus is clean, green, and completely safe.",
      author: "Adv. Rajesh Kumar",
      role: "Parent of Grade II Scholar",
      location: "Kollam, Kerala"
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F4F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header with Canva Intro */}
        <div className="mb-14">
          <CanvaSectionHeader
            badgeNumber="08"
            badgeText="Voices of the Community"
            badgeIcon={Sparkles}
            badgeColor="blue"
            titlePrimary="TRUSTED BY FAMILIES"
            titleSecondary="ACROSS KERALA & THE GULF."
            description="Real experiences from parents, boarders, and alumni who have witnessed the transformative environment of The Oxford School."
          />
        </div>

        {/* Testimonials 3 Column Grid with Depth and Shapes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 sm:p-9 rounded-3xl bg-white border-2 border-blue-100 shadow-depth-sm hover:border-blue-400 hover:shadow-depth-md transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6 border border-blue-200 shadow-2xs">
                  <Quote className="w-6 h-6" />
                </div>
                <p className="font-semibold text-base sm:text-lg text-slate-800 leading-relaxed italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 border-t-2 border-slate-100">
                <div className="font-display font-black text-lg text-[#07152B]">
                  {t.author}
                </div>
                <div className="text-xs font-black text-blue-700 uppercase tracking-wider mt-0.5">
                  {t.role}
                </div>
                <div className="text-[11px] font-bold text-slate-400 mt-0.5">
                  {t.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
