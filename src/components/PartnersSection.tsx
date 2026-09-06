import React from 'react';
import { Handshake, Award, Shield, Users, BookOpen, Sparkles } from 'lucide-react';
import { partnersData } from '../data';

export const PartnersSection: React.FC = () => {
  const getPartnerIcon = (index: number) => {
    switch (index % 6) {
      case 0:
        return <Award className="w-5 h-5 text-[#2E9E5B]" />;
      case 1:
        return <BookOpen className="w-5 h-5 text-[#1B5E3A]" />;
      case 2:
        return <Sparkles className="w-5 h-5 text-[#43C572]" />;
      case 3:
        return <Users className="w-5 h-5 text-[#2E9E5B]" />;
      case 4:
        return <Shield className="w-5 h-5 text-[#1B5E3A]" />;
      default:
        return <Handshake className="w-5 h-5 text-[#2E9E5B]" />;
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-400">
            Didukung Oleh & Berkolaborasi Bersama
          </p>
          <h3 className="text-lg sm:text-xl font-black text-slate-900 mt-1">
            Ekosistem Kampus, Komunitas, dan Lembaga Kepemudaan
          </h3>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {partnersData.map((partner, index) => (
            <div
              key={partner.name}
              className="p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/80 hover:border-[#2E9E5B]/40 transition-all flex flex-col items-center justify-center text-center group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center mb-2 shadow-xs group-hover:scale-105 transition-transform">
                {getPartnerIcon(index)}
              </div>
              <span className="text-xs font-bold text-slate-800 group-hover:text-[#1B5E3A] transition-colors leading-tight">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5">
                {partner.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
