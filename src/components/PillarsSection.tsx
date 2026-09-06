import React from 'react';
import {
  GraduationCap,
  HandHeart,
  Lightbulb,
  Megaphone,
  Users,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { pillarsData } from '../data';
import { PillarItem } from '../types';

interface PillarsSectionProps {
  onSelectPillar: (pillar: PillarItem) => void;
  onOpenRegister: () => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({
  onSelectPillar,
  onOpenRegister,
}) => {
  const getIcon = (iconName: string, isLightBg: boolean) => {
    const iconClass = isLightBg ? 'text-[#1B5E3A]' : 'text-white';
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className={`w-6 h-6 ${iconClass}`} />;
      case 'HandHeart':
        return <HandHeart className={`w-6 h-6 ${iconClass}`} />;
      case 'Lightbulb':
        return <Lightbulb className={`w-6 h-6 ${iconClass}`} />;
      case 'Megaphone':
        return <Megaphone className={`w-6 h-6 ${iconClass}`} />;
      case 'Users':
        return <Users className={`w-6 h-6 ${iconClass}`} />;
      default:
        return <Sparkles className={`w-6 h-6 ${iconClass}`} />;
    }
  };

  return (
    <section id="pilar" className="py-16 sm:py-24 bg-slate-50/60 scroll-mt-20 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1B5E3A] bg-white border border-[#2E9E5B]/30 shadow-xs mb-3">
            <span>5 Pilar Gerak</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ruang Gerak dan Aksi Nyata Pemuda
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Kami mengelompokkan inisiatif ke dalam 5 pilar terarah. Setiap pilar memiliki kurikulum, tim kerja, dan
            agenda berdampak yang bisa kamu ikuti sesuai minat dan panggilan hatimu.
          </p>
        </div>

        {/* 5 Pillars Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {pillarsData.map((pillar) => {
            const isWhitePillar = pillar.colorName === 'putih-netral';
            const isBrightGreen = pillar.colorName === 'hijau-terang';
            const isRedPillar = pillar.colorName === 'merah-aksen';

            return (
              <div
                key={pillar.id}
                id={`pillar-${pillar.id}`}
                onClick={() => onSelectPillar(pillar)}
                className={`relative group rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5 shadow-md hover:shadow-xl ${
                  isWhitePillar
                    ? 'bg-white text-slate-900 border-2 border-slate-200 hover:border-[#2E9E5B]'
                    : isBrightGreen
                    ? 'bg-[#43C572] text-[#1B5E3A] border-2 border-[#2E9E5B]'
                    : isRedPillar
                    ? 'bg-[#E31E24] text-white border-2 border-red-700'
                    : pillar.colorName === 'hijau-sedang'
                    ? 'bg-[#2E9E5B] text-white border-2 border-emerald-600'
                    : 'bg-[#1B5E3A] text-white border-2 border-emerald-800'
                }`}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 ${
                        isWhitePillar
                          ? 'bg-emerald-50 border border-emerald-200'
                          : isBrightGreen
                          ? 'bg-white/90 border border-white'
                          : 'bg-white/20 backdrop-blur-xs border border-white/30'
                      }`}
                    >
                      {getIcon(pillar.iconName, isWhitePillar || isBrightGreen)}
                    </div>

                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        isWhitePillar
                          ? 'bg-emerald-100 text-[#1B5E3A]'
                          : isBrightGreen
                          ? 'bg-[#1B5E3A] text-white'
                          : 'bg-white/20 text-white'
                      }`}
                    >
                      Pilar 0{pillarsData.indexOf(pillar) + 1}
                    </span>
                  </div>

                  {/* Pillar Title */}
                  <h3 className="text-xl font-black tracking-tight mb-2 leading-tight">
                    {pillar.name}
                  </h3>

                  {/* Tagline / Subtitle */}
                  <p
                    className={`text-xs font-semibold mb-3 ${
                      isWhitePillar
                        ? 'text-[#2E9E5B]'
                        : isBrightGreen
                        ? 'text-[#1B5E3A]/90'
                        : 'text-emerald-100/90'
                    }`}
                  >
                    {pillar.tagline}
                  </p>

                  {/* Short Description */}
                  <p
                    className={`text-xs leading-relaxed mb-4 ${
                      isWhitePillar
                        ? 'text-slate-600'
                        : isBrightGreen
                        ? 'text-[#1B5E3A]/85'
                        : 'text-white/80'
                    }`}
                  >
                    {pillar.shortDesc}
                  </p>
                </div>

                {/* Footer Action */}
                <div
                  className={`pt-4 border-t flex items-center justify-between text-xs font-bold transition-all ${
                    isWhitePillar
                      ? 'border-slate-100 text-[#1B5E3A] group-hover:text-[#2E9E5B]'
                      : isBrightGreen
                      ? 'border-[#1B5E3A]/20 text-[#1B5E3A]'
                      : 'border-white/20 text-white group-hover:text-emerald-200'
                  }`}
                >
                  <span>Lihat Program Pilar</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Transition Banner between Pillars and Programs */}
        <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#1B5E3A] flex items-center justify-center shrink-0 border border-[#2E9E5B]/20">
              <Sparkles className="w-5 h-5 text-[#2E9E5B]" />
            </div>
            <div>
              <span className="text-xs font-bold text-[#2E9E5B] uppercase tracking-wider block mb-1">
                Langkah Nyata Berikutnya
              </span>
              <p className="text-sm sm:text-base font-bold text-slate-800 leading-snug">
                Dari pilar-pilar pergerakan di atas, kami mewujudkannya dalam bentuk pelatihan dan program nyata yang bisa kamu ikuti di bawah ini.
              </p>
            </div>
          </div>

          <a
            href="#program"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] transition-all shrink-0 cursor-pointer shadow-xs min-h-[44px]"
          >
            <span>Telusuri Katalog Program</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
