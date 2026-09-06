import React from 'react';
import {
  CreditCard,
  ShieldCheck,
  Award,
  ChevronRight,
  Sparkles,
  QrCode,
  Search,
  CheckCircle2,
} from 'lucide-react';

interface MembershipAndCertSectionProps {
  onOpenCertCheck: () => void;
  onOpenRegister: () => void;
}

export const MembershipAndCertSection: React.FC<MembershipAndCertSectionProps> = ({
  onOpenCertCheck,
  onOpenRegister,
}) => {
  const levels = [
    {
      level: 'Level 1',
      title: 'Anggota',
      color: '#43C572',
      textColor: '#1B5E3A',
      desc: 'Tahap awal bergabung di ekosistem AMI. Mengakses seluruh Modul Tumbuh gratis, mengikuti webinar berkala, dan bergabung di grup jejaring regional.',
      criteria: ['Registrasi resmi data diri', 'Menerima AMI ID Digital', 'Akses Bank Modul Belajar'],
    },
    {
      level: 'Level 2',
      title: 'Aktivis',
      color: '#2E9E5B',
      textColor: '#FFFFFF',
      desc: 'Pemuda yang aktif terlibat nyata. Menyelesaikan minimal 1 program pelatihan bootcamp atau turun sebagai relawan dalam ekspedisi sosial AMI Peduli.',
      criteria: ['Menyelesaikan 1 Bootcamp/Aksi', 'Mendapatkan Sertifikat Terverifikasi', 'Hak suara dalam forum kepemudaan'],
    },
    {
      level: 'Level 3',
      title: 'Penggerak',
      color: '#1B5E3A',
      textColor: '#FFFFFF',
      desc: 'Tingkatan kepemimpinan tertinggi. Memimpin inisiatif di daerah, menjadi koordinator chapter, melahirkan karya/UMKM binaan, atau menjadi mentor sebaya.',
      criteria: ['Inisiator proyek berdampak', 'Rekomendasi Dewan Kurator AMI', 'Representatif Kongres Nasional'],
    },
  ];

  return (
    <section id="sertifikasi" className="py-16 sm:py-24 bg-slate-50 scroll-mt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1B5E3A] bg-white border border-[#2E9E5B]/30 mb-3 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2E9E5B]" />
            <span>Sistem Pengakuan & Sertifikasi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Rekam Jejak Jelas, Diakui, dan Terverifikasi Resmi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Di Inisiatif AMI, setiap waktu, tenaga, dan karya yang kamu dedikasikan memiliki sistem pengakuan yang jelas.
            Mulai dari kartu identitas digital hingga sertifikat ber-barcode yang bisa diuji keabsahannya.
          </p>
        </div>

        {/* 2 Feature Showcase Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Card 1: AMI ID Digital */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#1B5E3A] flex items-center justify-center">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    AMI ID — Kartu Anggota Digital
                  </h3>
                  <p className="text-xs text-slate-500">Paspor Resmi Kepemudaan Indonesia</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Setiap pemuda yang menyelesaikan program pelatihan pertamanya langsung memperoleh nomor anggota unik (contoh: <code>AMI-2026-XXXX</code>)
                berbentuk kartu digital. Dilengkapi QR Code dinamis yang memuat rekam jejak pelatihan, peran komunitas, dan
                tingkatan keaktifanmu.
              </p>

              <div className="space-y-2.5 mb-6">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                  <span>Diterbitkan resmi saat dinyatakan lulus dari program pelatihan AMI.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                  <span>Dapat diunduh dalam format gambar jernih untuk portofolio dan CV.</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                  <span>Kunci akses utama program lanjutan, forum regional, dan diskon mitra wirausaha.</span>
                </div>
              </div>
            </div>

            <a
              href="#program"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] transition-all cursor-pointer shadow-xs min-h-[44px]"
            >
              <span>Pilih Program untuk Dapatkan AMI ID</span>
              <Sparkles className="w-4 h-4 text-[#1B5E3A]" />
            </a>
          </div>

          {/* Card 2: Sertifikat Tervalidasi Online */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#2E9E5B] flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Sertifikat Tervalidasi Online
                  </h3>
                  <p className="text-xs text-slate-500">Legal, Akuntabel, dan Bebas Pemalsuan</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Selesaikan bootcamp, program kepemimpinan, atau proyek pengabdian masyarakat, dan dapatkan sertifikat resmi
                dengan nomor registrasi unik. Pihak universitas, perusahaan, atau sponsor dapat memverifikasi keasliannya
                dalam 3 detik di validator kami.
              </p>

              <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100 mb-6 flex items-center gap-3">
                <QrCode className="w-9 h-9 text-[#1B5E3A] shrink-0" />
                <div className="text-xs text-slate-700">
                  <strong className="text-[#1B5E3A] block">Punya Nomor Sertifikat AMI?</strong>
                  Coba masukkan nomor (contoh: <code>AMI-CERT-2026-001</code>) untuk mengecek langsung datanya.
                </div>
              </div>
            </div>

            <button
              id="btn-cek-sertifikat-section"
              onClick={onOpenCertCheck}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-[#1B5E3A] bg-emerald-100 hover:bg-emerald-200/80 transition-all cursor-pointer shadow-xs border border-emerald-300/60"
            >
              <Search className="w-4 h-4 text-[#2E9E5B]" />
              <span>Buka Validator: Cek Sertifikat</span>
            </button>
          </div>
        </div>

        {/* 3 Tingkatan Badge Berjenjang */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Badge Tingkatan Anggota: Anggota → Aktivis → Penggerak
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Jalur pertumbuhan yang transparan. Setiap kenaikan tingkat didasarkan pada komitmen dan dampak nyata.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {levels.map((lvl, index) => (
              <div
                key={lvl.level}
                className="bg-white rounded-3xl p-6 border-2 border-slate-200 hover:border-[#2E9E5B] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden"
              >
                {/* Accent Top Border */}
                <div
                  className="absolute top-0 left-0 right-0 h-1.5"
                  style={{ backgroundColor: lvl.color }}
                />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase"
                      style={{ backgroundColor: lvl.color, color: lvl.textColor }}
                    >
                      {lvl.title}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      Tingkat 0{index + 1}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {lvl.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Kriteria Capaian:
                    </span>
                    {lvl.criteria.map((crit, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E9E5B] shrink-0" />
                        <span>{crit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <span className="text-[11px] font-bold text-slate-400">
                    {index === 0 ? '🟢 Tingkat Masuk Gratis' : index === 1 ? '🟡 Tingkat Kontributor' : '⭐ Tingkat Pemimpin'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
