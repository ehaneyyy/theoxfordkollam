import { useState } from 'react';
import { SCHOOL_FAQS } from '../data/schoolData';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ChevronDown, 
  ExternalLink,
  Globe,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { CanvaSectionHeader } from './CanvaTextIntro';

export function ContactSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t-2 border-blue-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header with Canva Intro */}
        <div className="mb-14">
          <CanvaSectionHeader
            badgeNumber="09"
            badgeText="Campus Location & Inquiries"
            badgeIcon={MessageSquare}
            badgeColor="blue"
            titlePrimary="CONNECT WITH"
            titleSecondary="THE OXFORD SCHOOL KOLLAM."
            description="We welcome parents and prospective scholars to visit our campus, observe classes in session, and discuss your child’s educational journey with our academic coordinators."
          />
        </div>

        {/* 2-Column Layout: Contact Details & Quick Callback with Rich Depth */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Left Column: Campus Information Depth Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#F4F8FC] rounded-3xl p-8 sm:p-9 border-2 border-blue-200 shadow-depth-sm space-y-6">
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-black text-[#07152B]">
                  The Oxford School, Kollam
                </h3>
                <p className="text-xs font-black uppercase tracking-wider text-blue-700 mt-1">
                  CBSE Senior Secondary & Boarding · Code 75390
                </p>
              </div>
              
              <div className="space-y-5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <MapPin className="w-5 h-5 text-sky-200" />
                  </div>
                  <div>
                    <strong className="text-[#07152B] block font-black text-sm">Campus Address</strong>
                    <span className="font-bold">Mylapure P.O., Umayanalloor, Kollam, Kerala – 691589, India</span>
                    <p className="text-xs font-bold text-slate-500 mt-1">Located 11 km from Kollam Junction (Quilon) Railway Station</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Phone className="w-5 h-5 text-sky-200" />
                  </div>
                  <div>
                    <strong className="text-[#07152B] block font-black text-sm">Admissions Helpline & Office</strong>
                    <div className="space-y-1 mt-0.5">
                      <div><a href="tel:+917593945949" className="hover:text-blue-700 font-black text-blue-900 text-sm sm:text-base">+91 75939 45949</a> (Primary Desk)</div>
                      <div className="font-bold text-slate-600"><a href="tel:+914742530041" className="hover:text-blue-700">+91 474 2530041</a> / <a href="tel:+914742530042" className="hover:text-blue-700">2530042</a></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Mail className="w-5 h-5 text-sky-200" />
                  </div>
                  <div>
                    <strong className="text-[#07152B] block font-black text-sm">Official Inquiries</strong>
                    <div className="mt-0.5">
                      <a href="mailto:info@oxfordkollam.edu.in" className="hover:text-blue-700 text-blue-950 font-black">info@oxfordkollam.edu.in</a>
                    </div>
                    <div>
                      <a href="mailto:admissions@oxfordkollam.edu.in" className="hover:text-blue-700 text-slate-600 font-bold">admissions@oxfordkollam.edu.in</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Clock className="w-5 h-5 text-sky-200" />
                  </div>
                  <div>
                    <strong className="text-[#07152B] block font-black text-sm">Office Timings</strong>
                    <span className="font-bold">Monday to Saturday: 8:30 AM – 4:30 PM (IST)</span>
                    <p className="text-xs font-bold text-slate-500 mt-1">Sundays & State Holidays: Closed</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t-2 border-slate-200 flex items-center justify-between text-xs font-black text-blue-900">
                <span>CBSE School Code: 75390</span>
                <span>Affiliation No: 930421</span>
              </div>
            </div>
          </div>

          {/* Right Column: Official Contact & Admissions Portal on oxfordkollam.edu.in */}
          <div className="lg:col-span-6 bg-gradient-to-br from-[#040C1A] via-[#07152B] to-[#0F2752] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-depth-lg border-2 border-blue-500/20 relative overflow-hidden">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-black uppercase tracking-wider border border-sky-400/30 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Official Admissions Portal</span>
              </div>
              
              <h3 className="font-display text-3xl font-black mb-3 text-white">
                Admissions Inquiries & Callback Request
              </h3>
              
              <p className="text-xs sm:text-sm font-semibold text-slate-300 leading-relaxed mb-6">
                For admissions callbacks, grade availability, boarding provisions, or fee clarifications, please contact our admissions office directly on our official institutional website at <strong className="text-sky-300 underline underline-offset-2">oxfordkollam.edu.in</strong>.
              </p>

              {/* Institutional Portal Gateway Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/90 border-2 border-sky-400/30 space-y-5 shadow-inner">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/30 border border-sky-400/40 text-sky-300 flex items-center justify-center shrink-0 shadow-sm">
                    <Globe className="w-6 h-6 stroke-[2.2]" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-sky-300 block">
                      Primary Institutional Domain
                    </span>
                    <h4 className="font-display font-black text-xl text-white tracking-tight">
                      oxfordkollam.edu.in
                    </h4>
                    <p className="text-xs font-semibold text-slate-300 mt-1">
                      Please reach out to the admissions office and submit your inquiries on the official website.
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-800 text-xs font-bold text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct contact with Academic Coordinators</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Official callback requests & fee schedule guidance</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Direct campus walkthrough appointments</span>
                  </div>
                </div>

                <div className="pt-2">
                  <motion.a
                    href="https://oxfordkollam.edu.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.96, y: -1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 120,
                      damping: 15,
                      mass: 0.8
                    }}
                    className="w-full py-4 px-6 bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 hover:from-white hover:via-sky-200 hover:to-sky-300 text-[#07152B] font-black text-sm rounded-xl flex items-center justify-center gap-2.5 shadow-depth-sm hover:shadow-[0_16px_32px_-4px_rgba(56,189,248,0.5)] cursor-pointer transition-all duration-500"
                  >
                    <Globe className="w-4 h-4 text-[#07152B]" />
                    <span>Contact on oxfordkollam.edu.in</span>
                    <ExternalLink className="w-4 h-4 text-[#07152B]" />
                  </motion.a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t-2 border-blue-900/60 text-[11px] font-bold text-slate-400 flex flex-wrap items-center justify-between gap-2 mt-6">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Helpline: +91 75939 45949</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <span>oxfordkollam@gmail.com</span>
              </span>
            </div>
          </div>

        </div>

        {/* Frequently Asked Questions with Bold Styling */}
        <div className="max-w-4xl mx-auto pt-10">
          <div className="text-center mb-8">
            <h3 className="font-display text-3xl sm:text-4xl font-black text-[#07152B]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">
              Essential clarity on curriculum, board affiliations, and admissions
            </p>
          </div>

          <div className="divide-y-2 divide-slate-100 border-t-2 border-b-2 border-slate-200">
            {SCHOOL_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className="py-5">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between text-left text-base sm:text-lg font-black text-[#07152B] hover:text-blue-700 transition-colors py-1 group"
                  >
                    <span>{faq.question}</span>
                    <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 ml-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed pr-6 animate-in fade-in duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
