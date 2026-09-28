import { ArrowUpRight } from 'lucide-react';
import { OxfordLogo } from './OxfordLogo';

interface FooterProps {
  onOpenAdmissions: () => void;
}

export function Footer({ onOpenAdmissions }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-[#040C1A] to-[#02060E] text-slate-300 text-xs border-t-2 border-blue-900/60 relative">
      
      {/* Top Banner inside Footer */}
      <div className="border-b-2 border-blue-900/40 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <OxfordLogo size="lg" lightMode={true} />
            <p className="text-slate-400 text-xs sm:text-sm font-semibold max-w-xl mt-3">
              Nurturing intellectual clarity, ethical resilience, and global leadership in Kollam since 1999.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenAdmissions}
              className="px-6 py-3.5 text-xs sm:text-sm font-black text-[#040C1A] bg-gradient-to-r from-sky-400 to-blue-400 hover:from-sky-300 hover:to-blue-300 rounded-xl transition-all flex items-center gap-2 shadow-depth-sm"
            >
              <span>Admissions 2026–27</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </button>
            <a
              href="#contact"
              className="px-6 py-3.5 text-xs sm:text-sm font-black text-slate-200 bg-slate-900 hover:bg-slate-800 border-2 border-slate-700 rounded-xl transition-all"
            >
              Visit Campus
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns with Bold Typography */}
      <div className="py-14 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          
          {/* Col 1: About & Trust */}
          <div className="col-span-2 space-y-3.5">
            <h4 className="text-xs uppercase tracking-widest font-black text-sky-400">
              Institutional Heritage
            </h4>
            <p className="text-slate-400 leading-relaxed text-xs font-semibold max-w-sm">
              The Oxford School Kollam is established and managed under the auspices of the Manarul Huda Trust and operates as an esteemed unit of the New Indian Model School (NIMS) Group, UAE.
            </p>
            <div className="pt-2 text-[11px] font-bold text-slate-500 space-y-1">
              <div>CBSE Affiliation Number: 930421</div>
              <div>School Code: 75390</div>
              <div>Campus Area: 20+ Acres, Mylapure P.O., Umayanalloor</div>
            </div>
          </div>

          {/* Col 2: Academic Programs */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-black text-white">
              Academics
            </h4>
            <ul className="space-y-2 font-bold text-slate-400">
              <li><a href="#academics" className="hover:text-white transition-colors">Early Years EYFS</a></li>
              <li><a href="#academics" className="hover:text-white transition-colors">Primary School (I–V)</a></li>
              <li><a href="#academics" className="hover:text-white transition-colors">Middle School (VI–VIII)</a></li>
              <li><a href="#academics" className="hover:text-white transition-colors">Secondary CBSE (IX–X)</a></li>
              <li><a href="#academics" className="hover:text-white transition-colors">Senior Secondary (+2)</a></li>
            </ul>
          </div>

          {/* Col 3: Campus & Boarding */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-black text-white">
              Campus Life
            </h4>
            <ul className="space-y-2 font-bold text-slate-400">
              <li><a href="#boarding" className="hover:text-white transition-colors">Residential Boarding</a></li>
              <li><a href="#campus" className="hover:text-white transition-colors">KUFS Football School</a></li>
              <li><a href="#campus" className="hover:text-white transition-colors">Semi-Olympic Pool</a></li>
              <li><a href="#campus" className="hover:text-white transition-colors">Robotics & STEM Labs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">GPS Transport Fleet</a></li>
            </ul>
          </div>

          {/* Col 4: Admissions & Transparency */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-black text-white">
              Admissions
            </h4>
            <ul className="space-y-2 font-bold text-slate-400">
              <li><button onClick={onOpenAdmissions} className="hover:text-white transition-colors text-left">Online Application</button></li>
              <li><a href="https://oxfordkollam.edu.in" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition-colors text-left flex items-center gap-1"><span>oxfordkollam.edu.in</span><ArrowUpRight className="w-3 h-3" /></a></li>
              <li><a href="#admissions" className="hover:text-white transition-colors">Fee Structure 2026–27</a></li>
              <li><a href="#admissions" className="hover:text-white transition-colors">Eligibility Guidelines</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book Campus Tour</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">CBSE OASIS Disclosure</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* Sub-Footer: Legal & Copyright */}
      <div className="py-6 px-4 sm:px-8 border-t-2 border-slate-900 bg-[#02060E]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-bold text-slate-500">
          <div>
            © {new Date().getFullYear()} The Oxford School, Kollam. All rights reserved. Affiliated with CBSE.
          </div>
          <div className="flex items-center gap-4">
            <a href="#overview" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a href="#overview" className="hover:text-slate-300 transition-colors">Terms of Enrollment</a>
            <span aria-hidden="true">·</span>
            <a href="#overview" className="hover:text-slate-300 transition-colors">Mandatory Disclosure</a>
          </div>
        </div>

        {/* Attribution & Affiliation at the very end */}
        <div className="max-w-7xl mx-auto mt-4 pt-3 border-t border-slate-900/80 flex flex-col items-center justify-center gap-1 text-[11px] font-bold text-slate-500 text-center">
          <div>Affiliated with CBSE</div>
          <div>
            Created By{' '}
            <a
              href="https://www.instagram.com/okay.3han/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 hover:underline transition-colors font-extrabold"
            >
              okay.3han
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
