import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, QrCode, ArrowRight, Download, RefreshCw } from 'lucide-react';
import { AmiMemberRegistration } from '../types';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'card'>('form');
  const [formData, setFormData] = useState<AmiMemberRegistration>({
    fullName: '',
    email: '',
    whatsapp: '',
    city: '',
    province: 'Jawa Barat',
    campusOrCommunity: '',
    interestPillar: 'AMI Belajar',
    reasonToJoin: '',
  });

  const [generatedId, setGeneratedId] = useState('AMI-2026-1049');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `AMI-2026-${randomNum}`;
    setGeneratedId(newId);

    // Save locally
    try {
      const existing = JSON.parse(localStorage.getItem('ami_registered_members') || '[]');
      existing.push({
        ...formData,
        amiId: newId,
        joinedAt: new Date().toISOString(),
      });
      localStorage.setItem('ami_registered_members', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage save failed', err);
    }

    setStep('card');
  };

  const handleReset = () => {
    setStep('form');
    setFormData({
      fullName: '',
      email: '',
      whatsapp: '',
      city: '',
      province: 'Jawa Barat',
      campusOrCommunity: '',
      interestPillar: 'AMI Belajar',
      reasonToJoin: '',
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-700 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Tutup Pendaftaran"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1B5E3A] bg-emerald-50 border border-[#2E9E5B]/20 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#2E9E5B]" />
                <span>Pendaftaran Anggota Resmi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Bergabung Menjadi Anggota Inisiatif AMI
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Lengkapi data diri singkatmu. Kartu Anggota Digital (AMI ID) akan diterbitkan seketika dan gratis 100%.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-h-[62vh] overflow-y-auto pr-1">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Muhammad Ilham Pratama"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Aktif *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    No. WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="08123456789"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Kota / Kabupaten Asal *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Bandung"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Asal Kampus / Sekolah / Komunitas
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Universitas Indonesia"
                    value={formData.campusOrCommunity}
                    onChange={(e) => setFormData({ ...formData, campusOrCommunity: e.target.value })}
                    className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Pilar Gerak yang Paling Kamu Minati *
                </label>
                <select
                  value={formData.interestPillar}
                  onChange={(e) => setFormData({ ...formData, interestPillar: e.target.value })}
                  className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A] bg-white"
                >
                  <option value="AMI Belajar">AMI Belajar (Pelatihan, Edukasi & Literasi)</option>
                  <option value="AMI Peduli">AMI Peduli (Aksi Sosial, Relawan & Tanggap Bencana)</option>
                  <option value="AMI Berkarya">AMI Berkarya (Ekonomi Kreatif, Inovasi & UMKM)</option>
                  <option value="AMI Bersuara">AMI Bersuara (Advokasi Kebijakan & Opini Riset)</option>
                  <option value="AMI Bersama">AMI Bersama (Jejaring Komunitas & Event Tahunan)</option>
                </select>
              </div>

              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 cursor-pointer"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] transition-all flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <span>Terbitkan AMI ID Saya</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-2 animate-in fade-in duration-300">
            <div className="w-12 h-12 bg-emerald-100 text-[#1B5E3A] rounded-full flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-lg sm:text-xl font-black text-slate-900">
              Selamat Datang di Inisiatif AMI!
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-6">
              Kartu Anggota Digital resmimu telah aktif. Simpan nomor AMI ID untuk mengakses seluruh program.
            </p>

            {/* Generated Card Mockup */}
            <div className="max-w-md mx-auto bg-gradient-to-br from-slate-900 via-[#102d1d] to-[#1B5E3A] text-white rounded-3xl p-6 border-2 border-[#43C572]/40 shadow-2xl text-left relative overflow-hidden mb-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#43C572] text-[#1B5E3A] font-black flex items-center justify-center text-sm">
                    AMI
                  </div>
                  <div>
                    <div className="text-[10px] font-extrabold tracking-widest text-[#43C572] uppercase">
                      Kartu Anggota Digital
                    </div>
                    <div className="text-[9px] text-slate-300">Inisiatif Anak Muda Indonesia</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-[#E31E24] text-white">
                  TERVERIFIKASI
                </span>
              </div>

              <div className="my-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center font-bold text-xl text-emerald-300">
                  {formData.fullName.charAt(0).toUpperCase() || 'A'}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-extrabold text-base text-white truncate">
                    {formData.fullName || 'Nama Anggota'}
                  </h4>
                  <p className="text-xs text-emerald-200 truncate">
                    {formData.city || 'Indonesia'} • {formData.interestPillar}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#43C572] text-[#1B5E3A]">
                      Level: Anggota
                    </span>
                    <span className="text-[10px] text-slate-300 font-mono">
                      {generatedId}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
                <div className="flex items-center gap-2">
                  <QrCode className="w-6 h-6 text-emerald-300" />
                  <span>Scan verifikasi resmi di portal AMI</span>
                </div>
                <span className="font-mono text-emerald-400">Tahun 2026</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => alert(`Kartu AMI ID (${generatedId}) berhasil disimpan ke galeri kamu!`)}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#1B5E3A] hover:bg-[#14472c] transition-all cursor-pointer shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Simpan Kartu AMI ID</span>
              </button>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
              >
                Tutup & Mulai Eksplorasi
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
