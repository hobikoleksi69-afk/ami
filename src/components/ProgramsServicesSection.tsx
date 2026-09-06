import React, { useState } from 'react';
import {
  GraduationCap,
  Download,
  BookOpen,
  Sparkles,
  ArrowRight,
  Clock,
  Users,
  FileText,
  Building,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import {
  youthProgramsData,
  growthModulesData,
  youthJournalData,
  youthWorksData,
} from '../data';
import {
  YouthProgramItem,
  GrowthModuleItem,
  YouthJournalItem,
  YouthWorkItem,
} from '../types';

interface ProgramsServicesSectionProps {
  onSelectProgram: (program: YouthProgramItem) => void;
  onSelectModule: (module: GrowthModuleItem) => void;
  onSelectJournal: (journal: YouthJournalItem) => void;
  onSelectWork: (work: YouthWorkItem) => void;
  onOpenRegister: (program?: YouthProgramItem) => void;
}

export const ProgramsServicesSection: React.FC<ProgramsServicesSectionProps> = ({
  onSelectProgram,
  onSelectModule,
  onSelectJournal,
  onSelectWork,
  onOpenRegister,
}) => {
  const [activeTab, setActiveTab] = useState<'programs' | 'modules' | 'journals' | 'works'>('programs');

  const mainServices = [
    {
      id: 'programs',
      tabKey: 'programs' as const,
      title: 'Program AMI',
      badge: 'Pelatihan & Bootcamp',
      icon: GraduationCap,
      color: '#1B5E3A',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-[#1B5E3A]/20',
      description:
        'Kelas akselerasi kepemimpinan, digital bootcamp, dan fellowship terstruktur dengan kurikulum praktis dan mentor berpengalaman.',
      actionText: 'Lihat Detail Program',
      count: '4 Program Aktif',
    },
    {
      id: 'modules',
      tabKey: 'modules' as const,
      title: 'Modul Tumbuh',
      badge: 'Materi Unduh Gratis',
      icon: Download,
      color: '#2E9E5B',
      bgColor: 'bg-emerald-50/70',
      borderColor: 'border-[#2E9E5B]/20',
      description:
        'Kumpulan toolkit praktis, panduan menginisiasi proyek sosial, pitch deck UMKM pemuda, dan materi kepemimpinan siap pakai.',
      actionText: 'Lihat Detail & Unduh',
      count: '12+ Modul Rilis',
    },
    {
      id: 'journals',
      tabKey: 'journals' as const,
      title: 'Jurnal Muda',
      badge: 'Publikasi Opini & Riset',
      icon: BookOpen,
      color: '#E31E24',
      bgColor: 'bg-red-50/50',
      borderColor: 'border-[#E31E24]/20',
      description:
        'Wadah resmi kurasi esai pemikiran kritis, riset kebijakan publik, dan gagasan inovatif generasi muda yang terbit berkala.',
      actionText: 'Lihat Detail Riset',
      count: 'Edisi 2026',
    },
    {
      id: 'works',
      tabKey: 'works' as const,
      title: 'Karya AMI',
      badge: 'Etalase Karya & UMKM',
      icon: Sparkles,
      color: '#2E9E5B',
      bgColor: 'bg-emerald-50/50',
      borderColor: 'border-[#43C572]/40',
      description:
        'Showcase rintisan startup sosial, produk kreatif lokal binaan, dan inovasi teknologi karya anak muda Indonesia.',
      actionText: 'Lihat Detail Karya',
      count: '520+ Karya Terdaftar',
    },
  ];

  return (
    <section id="program" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1B5E3A] bg-emerald-50 border border-[#2E9E5B]/20 mb-3">
            <span>Program & Layanan Utama</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ekosistem Nyata untuk Mendukung Pertumbuhanmu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Dari pelatihan intensif, materi belajar gratis, panggung riset kritis, hingga etalase karya nyata —
            semuanya dirancang agar kamu siap berkarya dan diakui.
          </p>
        </div>

        {/* 4 Layanan Utama Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {mainServices.map((service) => {
            const Icon = service.icon;
            const isCurrentActive = activeTab === service.tabKey;
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => setActiveTab(service.tabKey)}
                className={`relative rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer border-2 ${
                  isCurrentActive
                    ? 'border-[#1B5E3A] bg-emerald-50/40 shadow-xl shadow-emerald-900/5 -translate-y-1'
                    : 'border-slate-200/90 bg-white hover:border-[#2E9E5B]/50 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs"
                      style={{ backgroundColor: `${service.color}15`, color: service.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span
                      className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: service.id === 'journals' ? '#E31E2415' : '#1B5E3A15',
                        color: service.id === 'journals' ? '#E31E24' : '#1B5E3A',
                      }}
                    >
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500">
                    {service.count}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveTab(service.tabKey);
                    }}
                    className={`text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                      isCurrentActive ? 'text-[#1B5E3A]' : 'text-[#2E9E5B] hover:text-[#1B5E3A]'
                    }`}
                  >
                    <span>{service.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tab Selection Filter Bar */}
        <div className="flex items-center justify-center border-b border-slate-200 mb-8 overflow-x-auto pb-2">
          <div className="inline-flex p-1 bg-slate-100 rounded-2xl gap-1">
            <button
              onClick={() => setActiveTab('programs')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'programs'
                  ? 'bg-white text-[#1B5E3A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Katalog Program AMI
            </button>
            <button
              onClick={() => setActiveTab('modules')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'modules'
                  ? 'bg-white text-[#1B5E3A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Bank Modul Tumbuh
            </button>
            <button
              id="jurnal"
              onClick={() => setActiveTab('journals')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'journals'
                  ? 'bg-white text-[#E31E24] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Jurnal Riset Muda
            </button>
            <button
              id="karya"
              onClick={() => setActiveTab('works')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'works'
                  ? 'bg-white text-[#1B5E3A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Etalase Karya AMI
            </button>
          </div>
        </div>

        {/* Dynamic Content Views */}
        {activeTab === 'programs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {youthProgramsData.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={prog.image}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-[#1B5E3A] text-white">
                        {prog.pillar}
                      </span>
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#43C572] text-[#1B5E3A]">
                        {prog.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <div className="flex items-center gap-3 text-xs text-emerald-100">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {prog.duration}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5" />
                          {prog.participants}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6">
                    <h4 className="text-lg sm:text-xl font-extrabold text-slate-900 mb-2 leading-tight">
                      {prog.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
                      {prog.description}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                        Fokus Pembelajaran:
                      </span>
                      {prog.curriculum.slice(0, 3).map((curr, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2E9E5B] shrink-0" />
                          <span className="truncate">{curr}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 mt-auto">
                  <span className="text-xs font-bold text-[#2E9E5B] bg-emerald-50 px-2.5 py-1 rounded-lg">
                    {prog.status}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectProgram(prog)}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-[#1B5E3A] hover:bg-slate-100 border border-slate-200 transition-all cursor-pointer"
                    >
                      Detail
                    </button>
                    <button
                      onClick={() => onOpenRegister(prog)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] transition-all cursor-pointer shadow-xs"
                    >
                      <span>Daftar Program</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'modules' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
            {growthModulesData.map((mod) => (
              <div
                key={mod.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-extrabold text-[#1B5E3A] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      {mod.category}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {mod.pages} Halaman • {mod.fileSize}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    {mod.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {mod.description}
                  </p>

                  <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 mb-4">
                    <span className="text-[11px] font-bold text-slate-500 uppercase block mb-1.5">
                      Topik yang Dibahas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {mod.topics.map((t, idx) => (
                        <span key={idx} className="text-[11px] bg-white px-2 py-0.5 rounded-md border border-slate-200 text-slate-700">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    📥 {mod.downloads.toLocaleString()} pemuda telah mengunduh
                  </span>
                  <button
                    onClick={() => onSelectModule(mod)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#2E9E5B] hover:bg-[#237c47] transition-all cursor-pointer shadow-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh Gratis</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'journals' && (
          <div className="space-y-4 animate-in fade-in duration-300">
            {youthJournalData.map((journal) => (
              <div
                key={journal.id}
                className="bg-white rounded-3xl border border-slate-200 p-6 hover:border-[#E31E24]/40 hover:shadow-lg transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-red-50 text-[#E31E24] border border-red-200">
                      {journal.category}
                    </span>
                    <span className="text-xs text-slate-400">•</span>
                    <span className="text-xs text-slate-500 font-medium">
                      {journal.edition} — {journal.date}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-xl font-black text-slate-900 mb-1.5">
                    {journal.title}
                  </h4>
                  <p className="text-xs font-semibold text-emerald-800 mb-2">
                    Oleh: {journal.author} ({journal.institution})
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {journal.abstract}
                  </p>
                </div>

                <div className="shrink-0 flex md:flex-col items-center justify-between gap-3 border-t md:border-t-0 md:border-l border-slate-100 pt-3 md:pt-0 md:pl-6">
                  <span className="text-[11px] text-slate-400 font-mono">
                    DOI: {journal.doi}
                  </span>
                  <button
                    onClick={() => onSelectJournal(journal)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#E31E24] hover:bg-[#c4141a] transition-all cursor-pointer shadow-xs"
                  >
                    <span>Baca Abstrak & Riset</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'works' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {youthWorksData.map((work) => (
              <div
                key={work.id}
                className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#1B5E3A] text-white">
                      {work.category}
                    </span>
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-black text-slate-900 mb-1">
                      {work.title}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-700 mb-2">
                      Karya: {work.creator} • {work.city}
                    </p>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {work.description}
                    </p>
                    <div className="inline-block px-2.5 py-1 rounded-lg bg-emerald-50 text-[11px] font-bold text-[#1B5E3A]">
                      Dampak: {work.impact}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onSelectWork(work)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold text-[#1B5E3A] bg-emerald-50 hover:bg-emerald-100/80 transition-all cursor-pointer"
                  >
                    <span>Lihat Detail Karya</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
