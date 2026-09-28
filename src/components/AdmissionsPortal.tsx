import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  Calculator, 
  ShieldCheck, 
  Sparkles,
  ClipboardList,
  Globe,
  ExternalLink,
  ArrowUpRight,
  Phone,
  Mail,
  GraduationCap,
  CalendarCheck,
  FileText
} from 'lucide-react';
import { CanvaSectionHeader } from './CanvaTextIntro';

interface AdmissionsPortalProps {
  initialGrade?: string;
}

export function AdmissionsPortal({ initialGrade = 'senior-science' }: AdmissionsPortalProps) {
  // Calculator State
  const [selectedGrade, setSelectedGrade] = useState<string>(initialGrade);
  const [enrollmentType, setEnrollmentType] = useState<'day' | 'boarding'>('day');
  const [needsTransport, setNeedsTransport] = useState<boolean>(true);

  const calculateFeeEstimate = () => {
    let baseTuition = 48000;
    let label = 'Play Class & Kindergarten (EYFS)';

    if (selectedGrade.startsWith('primary')) {
      baseTuition = 58000;
      label = 'Primary School (Grades I – V)';
    } else if (selectedGrade.startsWith('middle')) {
      baseTuition = 66000;
      label = 'Middle School (Grades VI – VIII)';
    } else if (selectedGrade.startsWith('secondary')) {
      baseTuition = 76000;
      label = 'Secondary CBSE (Grades IX & X)';
    } else if (selectedGrade.startsWith('senior')) {
      baseTuition = 88000;
      label = 'Senior Secondary CBSE (Grades XI – XII)';
    }

    const boardingAddon = enrollmentType === 'boarding' ? 85000 : 0;
    const transportAddon = (enrollmentType === 'day' && needsTransport) ? 18000 : 0;
    const totalEstimate = baseTuition + boardingAddon + transportAddon;

    return {
      label,
      baseTuition,
      boardingAddon,
      transportAddon,
      totalEstimate
    };
  };

  const feeData = calculateFeeEstimate();

  return (
    <section id="admissions" className="py-20 lg:py-28 bg-[#F4F8FC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header with Canva Intro */}
        <div className="mb-14">
          <CanvaSectionHeader
            badgeNumber="06"
            badgeText="Admissions Portal & Fee Transparency"
            badgeIcon={ClipboardList}
            badgeColor="indigo"
            titlePrimary="ADMISSIONS 2026–27"
            titleSecondary="ENROLLMENT & FEE ESTIMATOR."
            description="Admissions are merit-based and open to students from Play Class through Grade XI. Explore indicative annual schedules or register directly online."
          />
        </div>

        {/* 4 Step Admission Roadmap with Geometric Shape Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { step: '01', title: 'Submit Application', desc: 'Fill the online form or visit our Umayanalloor admissions office.' },
            { step: '02', title: 'Campus Tour', desc: 'Walk through learning studios, swimming pool, and hostel wings.' },
            { step: '03', title: 'Diagnostic Interaction', desc: 'Age-appropriate readiness check with faculty mentors.' },
            { step: '04', title: 'Formal Enrollment', desc: 'Document verification and welcome kit presentation.' },
          ].map((item) => (
            <div 
              key={item.step} 
              className="p-7 rounded-3xl bg-white border-2 border-blue-100 shadow-depth-sm hover:border-blue-400 hover:shadow-depth-md transition-all duration-300 relative group"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-mono font-black text-sm flex items-center justify-center shadow-2xs mb-4 group-hover:scale-105 transition-transform">
                {item.step}
              </div>
              <h3 className="font-display text-lg font-black text-[#07152B] mb-2">{item.title}</h3>
              <p className="text-xs font-semibold text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* 2-Column Split: Interactive Fee Estimator & Online Application */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Estimator with Rich Depth */}
          <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-blue-200/90 p-7 sm:p-9 shadow-depth-md space-y-6">
            <div className="flex items-center gap-3 pb-5 border-b-2 border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#07152B] to-[#1D4ED8] text-white flex items-center justify-center shadow-depth-sm">
                <Calculator className="w-6 h-6 text-sky-300" />
              </div>
              <div>
                <h3 className="font-display text-xl font-black text-[#07152B]">
                  Tuition & Schedule Estimator
                </h3>
                <p className="text-xs font-bold text-slate-500">Indicative fee structure for 2026–27</p>
              </div>
            </div>

            {/* Stage Selector */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                Select Academic Grade
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full text-xs sm:text-sm px-4 py-3.5 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-extrabold focus:outline-none focus:border-blue-600 shadow-2xs"
              >
                <option value="kindergarten">Kindergarten (Play Class, LKG, UKG - EYFS)</option>
                <option value="primary">Primary School (Grades I to V)</option>
                <option value="middle">Middle School (Grades VI to VIII)</option>
                <option value="secondary">Secondary CBSE (Grades IX & X)</option>
                <option value="senior-science">Senior Secondary (+2) - Science Stream</option>
                <option value="senior-commerce">Senior Secondary (+2) - Commerce Stream</option>
              </select>
            </div>

            {/* Enrollment Type Switcher (Buttons) */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase tracking-wider text-slate-700 block">
                Enrollment Format
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setEnrollmentType('day')}
                  className={`py-3 px-4 text-xs font-black rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] active:scale-95 ${
                    enrollmentType === 'day'
                      ? 'bg-gradient-to-r from-[#07152B] via-[#0F2752] to-[#1D4ED8] text-white border-blue-600 shadow-depth-sm hover:shadow-[0_8px_20px_-3px_rgba(29,78,216,0.35)]'
                      : 'bg-gradient-to-b from-white via-slate-50 to-blue-50/20 hover:from-white hover:to-blue-50/50 text-slate-700 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  Day Scholar
                </button>
                <button
                  type="button"
                  onClick={() => setEnrollmentType('boarding')}
                  className={`py-3 px-4 text-xs font-black rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] active:scale-95 ${
                    enrollmentType === 'boarding'
                      ? 'bg-gradient-to-r from-[#07152B] via-[#0F2752] to-[#1D4ED8] text-white border-blue-600 shadow-depth-sm hover:shadow-[0_8px_20px_-3px_rgba(29,78,216,0.35)]'
                      : 'bg-gradient-to-b from-white via-slate-50 to-blue-50/20 hover:from-white hover:to-blue-50/50 text-slate-700 border-slate-200 hover:border-blue-300'
                  }`}
                >
                  Full Boarding (Hostel)
                </button>
              </div>
            </div>

            {/* Optional Transport Toggle */}
            {enrollmentType === 'day' && (
              <div className="flex items-center justify-between text-xs font-black text-slate-800 bg-blue-50/70 p-4 rounded-xl border border-blue-200">
                <span>School Bus Fleet Transit</span>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needsTransport}
                    onChange={(e) => setNeedsTransport(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="relative w-11 h-6 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            )}

            {/* Calculated Breakdown Display with Depth */}
            <div className="bg-gradient-to-br from-[#F0F7FF] to-[#E0F2FE] rounded-2xl p-6 border-2 border-blue-200 space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>Tuition & Smart Learning Labs</span>
                <span className="font-mono font-black tabular-nums text-slate-900 text-sm">
                  ₹{feeData.baseTuition.toLocaleString('en-IN')}
                </span>
              </div>

              {enrollmentType === 'boarding' && (
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Hostel, Dining & Supervised Prep</span>
                  <span className="font-mono font-black tabular-nums text-slate-900 text-sm">
                    ₹{feeData.boardingAddon.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              {enrollmentType === 'day' && needsTransport && (
                <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>GPS Bus Transportation</span>
                  <span className="font-mono font-black tabular-nums text-slate-900 text-sm">
                    ₹{feeData.transportAddon.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              <div className="pt-4 border-t-2 border-blue-300 flex items-baseline justify-between">
                <div>
                  <div className="text-xs font-black uppercase text-blue-950">Indicative Annual Total</div>
                  <div className="text-[11px] font-bold text-slate-500">Payable across 3 term installments</div>
                </div>
                <div className="font-display text-3xl font-black text-[#07152B] font-mono tabular-nums">
                  ₹{feeData.totalEstimate.toLocaleString('en-IN')}
                </div>
              </div>
            </div>

            <div className="text-[11px] font-bold text-slate-500 space-y-1">
              <p>• Includes CBSE syllabus books, smart class repository, and sports access.</p>
              <p>• Sibling concessions and merit scholarships applicable for meritorious scholars.</p>
            </div>
          </div>

          {/* Right Column: Online Admission Application Gateway on oxfordkollam.edu.in */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-blue-200/90 p-7 sm:p-9 shadow-depth-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b-2 border-slate-100 mb-6">
                <div>
                  <h3 className="font-display text-2xl font-black text-[#07152B]">
                    Online Admission Application
                  </h3>
                  <p className="text-xs font-bold text-slate-500 mt-0.5">
                    Official Admissions Gateway for Academic Year 2026–27
                  </p>
                </div>
                <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Official Portal</span>
                </span>
              </div>

              {/* Notice Banner */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/80 via-sky-50/60 to-indigo-50/80 border-2 border-blue-200 mb-6">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                    <Globe className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-sm sm:text-base">
                      Apply Directly on Oxford School Kollam Portal
                    </h4>
                    <p className="text-xs font-semibold text-slate-600 mt-1 leading-relaxed">
                      All online admission applications, candidate registration, and academic document uploads are processed through our central institutional website at <strong className="text-blue-900 underline underline-offset-2">oxfordkollam.edu.in</strong>.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Step Guidance */}
              <div className="space-y-3.5 mb-8">
                <div className="p-4 rounded-xl border-2 border-slate-100 bg-slate-50/70 flex items-start gap-3.5 hover:border-blue-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 font-mono font-black text-xs flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-slate-900">Visit Official Admissions Portal</h5>
                    <p className="text-[11px] font-bold text-slate-500 mt-0.5">
                      Navigate to the Admissions & Registration section on <strong className="text-blue-900">oxfordkollam.edu.in</strong>.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border-2 border-slate-100 bg-slate-50/70 flex items-start gap-3.5 hover:border-blue-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 font-mono font-black text-xs flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-slate-900">Select Grade & Enrollment Preference</h5>
                    <p className="text-[11px] font-bold text-slate-500 mt-0.5">
                      Register student details for Kindergarten (EYFS), Primary, Secondary, or Senior Secondary (+2 Science PCMB/PCMC & Commerce), Day Scholar or Residential Boarding.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border-2 border-slate-100 bg-slate-50/70 flex items-start gap-3.5 hover:border-blue-300 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 font-mono font-black text-xs flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div>
                    <h5 className="text-xs font-black text-slate-900">Book Campus Interaction & Walkthrough</h5>
                    <p className="text-[11px] font-bold text-slate-500 mt-0.5">
                      Confirm an appointment for student assessment and guided tour with our admissions counselors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button: slow luxurious hover zoom */}
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
                  <span>Apply on oxfordkollam.edu.in</span>
                  <ExternalLink className="w-4 h-4 text-sky-300 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </motion.a>
              </div>
            </div>

            {/* Footer Trust Ribbon */}
            <div className="pt-6 border-t-2 border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] font-bold text-slate-500 mt-6">
              <span className="flex items-center gap-1.5 text-blue-950 font-black">
                <ShieldCheck className="w-4 h-4 text-blue-700" />
                <span>CBSE Affiliation No: 930421</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                <span>Admissions Desk: +91 75939 45949</span>
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
