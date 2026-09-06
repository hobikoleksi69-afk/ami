import React, { useState } from 'react';
import { Users, MapPin, Sparkles, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import { communityChaptersData } from '../data';

export const CommunitySection: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('Semua');

  const regions = ['Semua', 'Jawa', 'Sumatera', 'Sulawesi & Bali', 'Kalimantan'];

  const filteredChapters = communityChaptersData.filter((ch) => {
    if (selectedRegion === 'Semua') return true;
    if (selectedRegion === 'Jawa') {
      return ['DKI Jakarta', 'Jawa Barat', 'DI Yogyakarta', 'Jawa Timur'].includes(ch.province);
    }
    if (selectedRegion === 'Sumatera') {
      return ch.province.includes('Sumatera');
    }
    if (selectedRegion === 'Sulawesi & Bali') {
      return ['Sulawesi Selatan', 'Bali'].includes(ch.province);
    }
    if (selectedRegion === 'Kalimantan') {
      return ch.province.includes('Kalimantan');
    }
    return true;
  });

  return (
    <section id="komunitas" className="py-16 sm:py-24 bg-slate-50/70 scroll-mt-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1B5E3A] bg-emerald-50 border border-[#2E9E5B]/20 mb-3">
            <Users className="w-3.5 h-3.5 text-[#2E9E5B]" />
            <span>Jejaring Komunitas Daerah</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Komunitas AMI di Seluruh Pelosok Nusantara
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Status <strong className="text-[#1B5E3A]">Anggota Resmi AMI</strong> diraih sebagai hasil setelah kamu menuntaskan
            program pelatihan pertamamu. Kamu akan langsung terhubung ke simpul jejaring pemuda di kotamu!
          </p>
        </div>

        {/* 3 Step Onboarding Narrative */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm mb-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold text-[#2E9E5B] uppercase tracking-wider block mb-1">
                Alur Bergabung ke Komunitas
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Dari Peserta Program Menjadi Penggerak Bangsa
              </h3>
            </div>
            <a
              href="#program"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] transition-all shrink-0 cursor-pointer shadow-xs"
            >
              <span>Pilih Program Pelatihan</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#1B5E3A] font-black text-base flex items-center justify-center shrink-0 border border-emerald-200">
                1
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Daftar Program Terbuka</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pilih salah satu program di katalog AMI sesuai minatmu. Formulir pendaftaran mudah dan langsung terhubung ke grup WhatsApp pelatihan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-[#1B5E3A] font-black text-base flex items-center justify-center shrink-0 border border-emerald-200">
                2
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Ikuti Sesi & Proyek</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Belajar bersama fasilitator praktisi, berjejaring dengan kawan baru, dan kerjakan inisiatif nyata di lapangan atau proyek digital.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-2xl bg-[#43C572]/20 text-[#1B5E3A] font-black text-base flex items-center justify-center shrink-0 border border-[#43C572]/40">
                3
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">Raih AMI ID & Kartu Anggota</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kelulusan program otomatis menerbitkan sertifikat terverifikasi dan menyematkan status anggota resmi di chapter daerahmu.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Region Filter Bar */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedRegion === region
                  ? 'bg-[#1B5E3A] text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredChapters.map((chapter) => (
            <div
              key={chapter.id}
              className="bg-white rounded-3xl p-5 border border-slate-200 hover:border-[#2E9E5B]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100">
                    <MapPin className="w-3 h-3" />
                    {chapter.city}
                  </span>
                  <span
                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                      chapter.status === 'Aktif'
                        ? 'bg-[#1B5E3A] text-white'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {chapter.status}
                  </span>
                </div>

                <h4 className="text-base font-extrabold text-slate-900 mb-1.5 leading-snug">
                  {chapter.chapterName}
                </h4>

                <p className="text-xs text-slate-500 mb-4">
                  Koordinator: <strong className="text-slate-700">{chapter.coordinator}</strong>
                </p>

                <div className="grid grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center">
                  <div>
                    <span className="text-[11px] text-slate-500 block">Anggota</span>
                    <span className="text-xs font-black text-[#1B5E3A]">
                      {chapter.activeMembers.toLocaleString('id-ID')}+
                    </span>
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block">Aksi Terlaksana</span>
                    <span className="text-xs font-black text-slate-900">
                      {chapter.programsHeld} Kegiatan
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span>Berdiri sejak {chapter.establishedYear}</span>
                <span className="font-semibold text-[#2E9E5B] flex items-center gap-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> Terdaftar
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
