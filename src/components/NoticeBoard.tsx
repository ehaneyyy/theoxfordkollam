import { useState } from 'react';
import { SCHOOL_NOTICES, SchoolNotice } from '../data/schoolData';
import { Bell, Download, ChevronRight, Sparkles } from 'lucide-react';
import { CanvaBadge, CanvaRiseReveal } from './CanvaTextIntro';

export function NoticeBoard() {
  const [filter, setFilter] = useState<string>('All');
  const [activeNotice, setActiveNotice] = useState<SchoolNotice | null>(null);

  const categories = ['All', 'Admissions', 'Academics', 'Events', 'Circular'];

  const filteredNotices = filter === 'All' 
    ? SCHOOL_NOTICES 
    : SCHOOL_NOTICES.filter((n) => n.category === filter);

  return (
    <section className="py-20 bg-white border-y-2 border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header with Canva Intro */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <CanvaBadge
              number="07"
              title="Institutional Bulletin & Circulars"
              icon={Bell}
              colorScheme="indigo"
              className="mb-3.5"
            />
            <h2 className="font-display text-4xl sm:text-5xl text-[#07152B] font-black tracking-tight mt-1 [text-wrap:balance]">
              <CanvaRiseReveal text="OFFICIAL NOTICES & ANNOUNCEMENTS" delay={0.1} />
            </h2>
            <p className="text-slate-700 text-base font-semibold mt-2 max-w-2xl">
              Stay updated with academic circulars, CBSE notifications, co-curricular fixtures, and campus events.
            </p>
          </div>

          {/* Filter segment tabs with depth */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-black rounded-xl transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-[#07152B] to-[#1D4ED8] text-white shadow-depth-sm'
                    : 'text-slate-700 hover:text-blue-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notices Rows with Shapes & Depth */}
        <div className="divide-y-2 divide-slate-100 border-t-2 border-b-2 border-slate-200">
          {filteredNotices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => setActiveNotice(notice)}
              className="py-6 px-4 -mx-4 sm:mx-0 sm:px-5 rounded-2xl hover:bg-blue-50/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group hover:shadow-2xs"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-[#07152B] group-hover:text-sky-300 transition-colors border border-blue-200">
                  <Bell className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-slate-500 mb-1">
                    <span className="font-black text-blue-900 uppercase">{notice.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{notice.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[10px] font-black">{notice.badge}</span>
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-black text-[#07152B] group-hover:text-blue-700 transition-colors">
                    {notice.title}
                  </h3>
                  <p className="text-xs font-semibold text-slate-600 mt-1 max-w-2xl line-clamp-1">
                    {notice.summary}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                <span className="text-xs font-black text-blue-700 group-hover:text-blue-900 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-blue-200 shadow-2xs group-hover:border-blue-400">
                  Read Circular
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Notice Detail Modal */}
        {activeNotice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
            <div className="bg-white rounded-3xl max-w-lg w-full p-7 sm:p-9 shadow-2xl border-2 border-blue-200 space-y-5">
              <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b-2 border-slate-100">
                <span className="font-black text-blue-900 uppercase tracking-wider">{activeNotice.category} Circular</span>
                <span className="font-bold">{activeNotice.date}</span>
              </div>

              <h3 className="font-display text-2xl text-[#07152B] font-black">
                {activeNotice.title}
              </h3>

              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                {activeNotice.summary}
              </p>

              <div className="bg-blue-50/70 p-5 rounded-2xl text-xs font-bold text-slate-700 border border-blue-200 space-y-1.5">
                <div className="font-black text-blue-950">Circular Verification:</div>
                <div>Authorized by: Office of the Principal, The Oxford School Kollam</div>
                <div>Reference Code: CBSE-KLM-CIR-2026-930421</div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveNotice(null)}
                  className="px-4 py-2.5 text-xs font-black text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    alert(`Official PDF copy of "${activeNotice.title}" has been prepared for download.`);
                  }}
                  className="px-5 py-2.5 text-xs font-black text-white bg-gradient-to-r from-[#07152B] to-[#1D4ED8] hover:from-[#0F2752] hover:to-[#2563EB] rounded-xl transition-colors flex items-center gap-1.5 shadow-depth-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Circular PDF</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
