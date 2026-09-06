import React from 'react';
import { MessageSquare, Sparkles, ArrowRight, ShieldCheck, ArrowDown } from 'lucide-react';
import { ADMIN_WHATSAPP } from '../config';

interface CtaSectionProps {
  onOpenRegister: () => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ onOpenRegister }) => {
  const whatsappUrl = `https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(
    'Halo Admin Inisiatif AMI, saya ingin bertanya seputar pendaftaran program dan pelatihan terdekat.'
  )}`;

  return (
    <section id="gabung" className="py-20 sm:py-28 bg-[#1B5E3A] text-white relative overflow-hidden scroll-mt-20">
      {/* Decorative Chevron/Arrow elements inspired by "A" and "M" */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg
          className="absolute -right-20 -bottom-20 w-96 h-96 sm:w-[500px] sm:h-[500px]"
          viewBox="0 0 300 300"
          fill="none"
        >
          <polygon points="150,20 280,280 20,280" stroke="white" strokeWidth="4" />
          <polygon points="150,70 250,260 50,260" stroke="#43C572" strokeWidth="3" strokeDasharray="8 8" />
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-bold text-emerald-200 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#43C572]" />
          <span>Tumbuh Bersama, Bergerak Bersama</span>
          <span className="text-white/40">•</span>
          <span className="text-white font-extrabold">100% Gratis Tanpa Pungutan</span>
        </div>

        {/* Big Inspiring Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Siap Mengambil Peran dan Menjadi Bagian dari Perubahan?
        </h2>

        {/* Persuasive Youth Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-emerald-100/90 leading-relaxed max-w-3xl mx-auto font-normal">
          Jangan biarkan gagasan besarmu terpendam sendirian. Daftarkan dirimu ke program pelatihan AMI, tuntaskan modul bersama mentor, dan jadilah <strong>Anggota Resmi AMI</strong> yang berdampak nyata di kotamu.
        </p>

        {/* Two Big CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Main Program Catalog Link / Register */}
          <a
            id="btn-cta-lihat-program"
            href="#program"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] active:bg-[#2fa057] shadow-xl shadow-emerald-950/30 transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[52px]"
          >
            <span>Lihat Program Terdekat</span>
            <ArrowDown className="w-4 h-4 stroke-[2.5]" />
          </a>

          {/* WhatsApp Admin CTA Button */}
          <a
            id="btn-cta-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full text-sm sm:text-base font-bold text-white bg-white/10 hover:bg-white/20 active:bg-white/25 border-2 border-white/60 transition-all cursor-pointer min-h-[52px]"
          >
            <MessageSquare className="w-4 h-4 text-[#43C572]" />
            <span>Chat Tanya Admin via WhatsApp</span>
          </a>
        </div>

        {/* Assurance Note */}
        <div className="mt-10 pt-6 border-t border-emerald-700/60 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-200">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#43C572]" />
            Data diri terlindungi dan terjamin kerahasiaannya
          </span>
          <span>•</span>
          <span>Pendaftaran langsung terhubung ke grup WhatsApp pelatihan</span>
          <span>•</span>
          <span>Status resmi Anggota AMI terbit usai kelulusan program</span>
        </div>
      </div>
    </section>
  );
};
