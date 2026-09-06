import React from 'react';
import { Sprout, Globe2, Users2, Zap, Compass, ArrowUpRight } from 'lucide-react';
import { coreValuesData } from '../data';

interface AboutSectionProps {
  onOpenRegister: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenRegister }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sprout':
        return <Sprout className="w-6 h-6 text-[#2E9E5B]" />;
      case 'Globe2':
        return <Globe2 className="w-6 h-6 text-[#2E9E5B]" />;
      case 'Users2':
        return <Users2 className="w-6 h-6 text-[#2E9E5B]" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#E31E24]" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-[#1B5E3A]" />;
      default:
        return <Sprout className="w-6 h-6 text-[#2E9E5B]" />;
    }
  };

  return (
    <section id="tentang" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1B5E3A] bg-emerald-50 border border-[#2E9E5B]/20 mb-3">
            <span>Tentang Inisiatif AMI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Bukan Sekadar Organisasi, Ini Rumah Bertumbuh Pemuda
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
            Inisiatif AMI (Anak Muda Indonesia) didirikan atas satu keresahan bersama: banyak anak muda punya energi besar
            dan gagasan cemerlang, namun minim wadah yang terstruktur, inklusif, dan memberikan pengakuan nyata. Kami hadir
            untuk merajut potensi itu menjadi gerakan konkret yang berdampak bagi masa depan bangsa.
          </p>
        </div>

        {/* 5 Nilai Inti Cards Grid */}
        <div className="mt-12 sm:mt-16">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              5 Nilai Inti yang Menjiwai Setiap Langkah Kami
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Prinsip dasar yang kami pegang teguh bersama seluruh anggota di penjuru negeri.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
            {coreValuesData.map((value, idx) => (
              <div
                key={value.id}
                id={`core-value-${value.id}`}
                className="group relative bg-slate-50/80 hover:bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 hover:border-[#2E9E5B]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Subtle top indicator for 10% red accent on 'Berdampak' */}
                <div
                  className={`absolute top-0 left-6 right-6 h-1 rounded-b-md ${
                    value.id === 'val-berdampak' ? 'bg-[#E31E24]' : 'bg-[#2E9E5B]'
                  } opacity-0 group-hover:opacity-100 transition-opacity`}
                />

                <div>
                  {/* Icon & Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-xs group-hover:scale-105 group-hover:border-[#2E9E5B]/50 transition-all">
                      {getIcon(value.iconName)}
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#1B5E3A] transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#2E9E5B] mt-0.5 mb-2.5">
                    {value.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Short Callout Bar */}
        <div className="mt-12 bg-gradient-to-r from-emerald-50 via-white to-emerald-50 rounded-2xl p-5 sm:p-6 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-extrabold text-[#1B5E3A]">
              Ingin menjadi bagian dari perubahan di daerahmu?
            </h4>
            <p className="text-xs text-slate-600 mt-0.5">
              Bergabung gratis tanpa biaya keanggotaan. Terhubung langsung dengan 84+ komunitas daerah.
            </p>
          </div>
          <button
            onClick={onOpenRegister}
            className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-extrabold text-white bg-[#1B5E3A] hover:bg-[#14472c] transition-all cursor-pointer shadow-xs"
          >
            <span>Daftar Sekarang</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
