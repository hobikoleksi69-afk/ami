import React from 'react';
import { ArrowDown, Sparkles, MessageSquare, CheckCircle2, QrCode } from 'lucide-react';
import { motion } from 'motion/react';
import { WA_CHANNEL_LINK } from '../config';

interface HeroSectionProps {
  onOpenRegister?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-br from-[#1B5E3A] via-[#1e6b42] to-[#2E9E5B] text-white">
      {/* Decorative Geometric Elements inspired by Letters "A" and "M" */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-15">
        {/* Dynamic Stylized "A" Triangle Peaks */}
        <svg
          className="absolute -top-12 -right-16 w-96 h-96 sm:w-[540px] sm:h-[540px] text-white"
          viewBox="0 0 400 400"
          fill="none"
        >
          <polygon points="200,30 370,360 30,360" stroke="currentColor" strokeWidth="2.5" />
          <line x1="100" y1="240" x2="300" y2="240" stroke="currentColor" strokeWidth="2.5" />
          <polygon points="200,90 320,330 80,330" stroke="#43C572" strokeWidth="1.5" strokeDasharray="6 6" />
        </svg>

        {/* Dynamic Stylized "M" Peaks on the bottom left */}
        <svg
          className="absolute -bottom-24 -left-20 w-80 h-80 sm:w-[480px] sm:h-[480px] text-emerald-200"
          viewBox="0 0 400 400"
          fill="none"
        >
          <polyline
            points="30,370 30,80 200,280 370,80 370,370"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Floating Chevrons / Arrowheads */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 border-t-2 border-r-2 border-[#43C572] transform rotate-45 opacity-30" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-b-2 border-l-2 border-white transform rotate-45 opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            {/* Tagline / Positioning Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-emerald-100 mb-5 sm:mb-6">
              <span className="w-2 h-2 rounded-full bg-[#43C572] animate-pulse" />
              <span>Tumbuh Bersama, Bergerak Bersama</span>
              <span className="text-white/40">•</span>
              <span className="text-emerald-200 font-bold">Wadah Resmi Pemuda</span>
            </div>

            {/* Headline Besar */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-white">
              Wadah Tumbuh Anak Muda Indonesia
            </h1>

            {/* Subheadline Positioning Singkat */}
            <p className="mt-5 sm:mt-6 text-base sm:text-lg lg:text-xl text-emerald-50/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Temukan program dan pelatihan AMI, daftar langsung, dan bergabunglah bersama jejaring pemuda penggerak se-Indonesia.{' '}
              <strong className="text-white font-semibold">Status keanggotaan resmi</strong> didapatkan setelah kamu menyelesaikan program pertamamu.
            </p>

            {/* Dua Tombol CTA */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              {/* Solid Hijau Highlight (#43C572) - Primary CTA */}
              <a
                id="btn-hero-lihat-program"
                href="#program"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm sm:text-base font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] active:bg-[#2fa057] shadow-lg shadow-emerald-950/20 transition-all transform hover:-translate-y-0.5 cursor-pointer min-h-[48px]"
              >
                <span>Lihat Program Terdekat</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5]" />
              </a>

              {/* Outline Button - Secondary CTA: WhatsApp Channel */}
              <a
                id="btn-hero-saluran-wa"
                href={WA_CHANNEL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm sm:text-base font-bold text-white border-2 border-white/80 hover:bg-white/10 active:bg-white/20 transition-all cursor-pointer min-h-[48px]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ikuti Kabar AMI</span>
              </a>
            </div>

            {/* Value Trust Checkpoints */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-emerald-600/50 grid grid-cols-3 gap-2 sm:gap-4 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#43C572] shrink-0" />
                <span className="text-xs sm:text-sm text-emerald-100 font-medium">Bebas Biaya Masuk</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#43C572] shrink-0" />
                <span className="text-xs sm:text-sm text-emerald-100 font-medium">AMI ID Digital Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#43C572] shrink-0" />
                <span className="text-xs sm:text-sm text-emerald-100 font-medium">Jejaring 34 Provinsi</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Card - Digital AMI ID Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glow / Angle Backdrop */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-[#43C572] via-[#E31E24] to-emerald-200 opacity-30 blur-lg" />

              {/* Digital AMI ID Card */}
              <div className="relative bg-slate-900/90 text-white rounded-3xl p-6 sm:p-7 border border-white/15 shadow-2xl backdrop-blur-xl">
                {/* Card Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1B5E3A] to-[#2E9E5B] border border-[#43C572]/40 flex items-center justify-center font-black text-white text-lg">
                      AMI
                    </div>
                    <div>
                      <div className="text-xs font-black tracking-widest text-[#43C572] uppercase">
                        Kartu Anggota Digital
                      </div>
                      <div className="text-[11px] text-slate-300">Inisiatif Anak Muda Indonesia</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#E31E24]/20 border border-[#E31E24]/40 text-red-300">
                    RESMI
                  </span>
                </div>

                {/* Card Body */}
                <div className="my-5 flex items-center gap-4">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"
                      alt="Foto Profil Anggota"
                      className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border-2 border-[#43C572]"
                    />
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#43C572] rounded-full flex items-center justify-center text-[10px] text-[#1B5E3A] font-black">
                      ✓
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-extrabold text-base sm:text-lg text-white truncate">
                      Nadia Kirana Larasati
                    </h3>
                    <p className="text-xs text-slate-300 truncate">AMI Chapter D.I. Yogyakarta</p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-bold bg-[#43C572] text-[#1B5E3A]">
                        Level: Penggerak
                      </span>
                      <span className="text-[11px] text-slate-400">ID: AMI-2026-9821</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer with QR & Verification */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between bg-white/5 -mx-6 -mb-6 px-6 py-3.5 rounded-b-3xl">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-8 h-8 text-emerald-300 shrink-0" />
                    <div className="text-[10px] text-slate-300 leading-tight">
                      <span className="font-semibold text-white block">Tervalidasi Sistem AMI</span>
                      <span>Scan untuk cek rekam jejak</span>
                    </div>
                  </div>
                  <a
                    href="#program"
                    className="text-xs font-bold text-[#43C572] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Diberikan Usai Pelatihan</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
