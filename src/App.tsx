/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSchool } from './components/AboutSchool';
import { Academics } from './components/Academics';
import { CampusShowcase } from './components/CampusShowcase';
import { BoardingLife } from './components/BoardingLife';
import { Facilities } from './components/Facilities';
import { AdmissionsPortal } from './components/AdmissionsPortal';
import { NoticeBoard } from './components/NoticeBoard';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { Phone, ArrowUp, Instagram } from 'lucide-react';

export default function App() {
  const [isAdmissionsModalOpen, setIsAdmissionsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['overview', 'academics', 'boarding', 'campus', 'admissions', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F8FC] text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
      
      {/* Top Navigation */}
      <Navbar
        onOpenAdmissions={() => setIsAdmissionsModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenAdmissions={() => setIsAdmissionsModalOpen(true)}
          onExploreAcademics={() => scrollToSection('academics')}
        />

        <AboutSchool />

        <Academics
          onOpenAdmissions={() => setIsAdmissionsModalOpen(true)}
        />

        <CampusShowcase />

        <BoardingLife
          onOpenAdmissions={() => setIsAdmissionsModalOpen(true)}
        />

        <Facilities />

        <AdmissionsPortal />

        <NoticeBoard />

        <Testimonials />

        <ContactSection />
      </main>

      {/* Institutional Footer */}
      <Footer
        onOpenAdmissions={() => setIsAdmissionsModalOpen(true)}
      />

      {/* Quick Action Admission Modal */}
      <AdmissionModal
        isOpen={isAdmissionsModalOpen}
        onClose={() => setIsAdmissionsModalOpen(false)}
      />

      {/* Floating Action Group - Aesthetic Minimalist Capsule Dock */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-2.5">
        <a
          href="https://www.instagram.com/theoxfordkollam/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center gap-2.5 pl-2.5 pr-4 py-2 bg-gradient-to-b from-white/95 via-white/90 to-rose-50/40 hover:from-white hover:via-pink-50/70 hover:to-rose-100/60 backdrop-blur-xl border border-slate-200/90 hover:border-pink-300 rounded-full shadow-[0_4px_20px_-2px_rgba(7,21,43,0.12)] hover:shadow-[0_16px_32px_-3px_rgba(236,72,153,0.38)] transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.07] active:scale-95"
          title="Official Instagram @theoxfordkollam"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white shadow-sm shadow-pink-500/30 group-hover:scale-110 transition-transform duration-500">
            <Instagram className="w-4 h-4 stroke-[2.2]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] uppercase tracking-wider font-extrabold text-pink-600 leading-none">Instagram</span>
            <span className="text-xs font-bold text-slate-800 group-hover:text-slate-950 transition-colors tracking-tight">The Oxford Kollam</span>
          </div>
        </a>

        <a
          href="tel:+917593945949"
          className="hidden sm:flex group relative items-center gap-2.5 pl-2.5 pr-4 py-2 bg-gradient-to-b from-white/95 via-white/90 to-blue-50/40 hover:from-white hover:via-blue-50/70 hover:to-sky-100/60 backdrop-blur-xl border border-slate-200/90 hover:border-blue-300 rounded-full shadow-[0_4px_20px_-2px_rgba(7,21,43,0.12)] hover:shadow-[0_16px_32px_-3px_rgba(37,99,235,0.38)] transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-[1.07] active:scale-95"
          title="Direct Admissions Desk"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0F2752] via-[#1D4ED8] to-[#38BDF8] flex items-center justify-center text-white shadow-sm shadow-blue-500/30 group-hover:scale-110 transition-transform duration-500">
            <Phone className="w-3.5 h-3.5 stroke-[2.2]" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] uppercase tracking-wider font-extrabold text-blue-600 leading-none">Admissions</span>
            <span className="text-xs font-bold text-slate-800 group-hover:text-slate-950 transition-colors tracking-tight">+91 75939 45949</span>
          </div>
        </a>

        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 rounded-full bg-gradient-to-b from-[#07152B] via-[#0F2752] to-[#1D4ED8] hover:from-[#0F2752] hover:via-[#163A7A] hover:to-[#2563EB] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(7,21,43,0.2)] hover:shadow-[0_14px_28px_rgba(29,78,216,0.45)] transition-all duration-700 ease-out hover:-translate-y-2 hover:scale-115 active:scale-95 border border-sky-400/30 group"
            aria-label="Scroll to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5] group-hover:-translate-y-1 transition-transform duration-500" />
          </button>
        )}
      </div>

    </div>
  );
}
