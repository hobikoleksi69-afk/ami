import React, { useState, useEffect } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, MessageSquare, Loader2, ExternalLink } from 'lucide-react';
import { YouthProgramItem, ProgramRegistrationFormData } from '../types';
import { youthProgramsData } from '../data';
import { FORMSPREE_ENDPOINT } from '../config';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProgram: YouthProgramItem | null;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  selectedProgram: initialProgram,
}) => {
  const [currentProgram, setCurrentProgram] = useState<YouthProgramItem>(
    initialProgram || youthProgramsData[0]
  );
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [formData, setFormData] = useState<ProgramRegistrationFormData>({
    nama: '',
    whatsapp: '',
    kota: '',
    nama_program: (initialProgram || youthProgramsData[0]).title,
  });

  useEffect(() => {
    if (initialProgram) {
      setCurrentProgram(initialProgram);
      setFormData((prev) => ({
        ...prev,
        nama_program: initialProgram.title,
      }));
    } else {
      setCurrentProgram(youthProgramsData[0]);
      setFormData((prev) => ({
        ...prev,
        nama_program: youthProgramsData[0].title,
      }));
    }
    // Reset state when opened
    if (isOpen) {
      setStep('form');
      setErrorMessage(null);
      setIsSubmitting(false);
    }
  }, [initialProgram, isOpen]);

  if (!isOpen) return null;

  const handleProgramChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const found = youthProgramsData.find((p) => p.id === e.target.value);
    if (found) {
      setCurrentProgram(found);
      setFormData((prev) => ({
        ...prev,
        nama_program: found.title,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      // If endpoint is still configured as placeholder, handle gracefully in preview
      const isPlaceholder = FORMSPREE_ENDPOINT.includes('GANTI_DENGAN_ID_FORM_ASLI');

      if (!isPlaceholder) {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            nama: formData.nama,
            whatsapp: formData.whatsapp,
            kota: formData.kota,
            nama_program: formData.nama_program,
            submitted_at: new Date().toISOString(),
          }),
        });

        if (!response.ok) {
          throw new Error('Gagal mengirim formulir ke server. Silakan coba lagi.');
        }
      } else {
        // Simulate network latency for realistic feel
        await new Promise((resolve) => setTimeout(resolve, 600));
      }

      // Save locally to show progress
      try {
        const savedList = JSON.parse(localStorage.getItem('ami_program_registrations') || '[]');
        savedList.push({
          ...formData,
          programId: currentProgram.id,
          registeredAt: new Date().toISOString(),
        });
        localStorage.setItem('ami_program_registrations', JSON.stringify(savedList));
      } catch (err) {
        console.warn('LocalStorage save failed', err);
      }

      setStep('success');
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Terjadi kesalahan saat memproses data.';
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep('form');
    setFormData({
      nama: '',
      whatsapp: '',
      kota: '',
      nama_program: currentProgram.title,
    });
    setErrorMessage(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
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
                <span>Pendaftaran Program Pelatihan</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                Daftar Pelatihan AMI
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                Isi data diri singkat untuk mendaftar. Setelah berhasil, kamu langsung mendapatkan akses ke grup WhatsApp resmi peserta.
              </p>
            </div>

            {errorMessage && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-700">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Program Selection / Display */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Program yang Dipilih
                </label>
                <div className="relative">
                  <select
                    value={currentProgram.id}
                    onChange={handleProgramChange}
                    className="w-full text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                  >
                    {youthProgramsData.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} ({p.pillar})
                      </option>
                    ))}
                  </select>
                </div>
                {/* Hidden Field for Formspree */}
                <input type="hidden" name="nama_program" value={formData.nama_program} />
              </div>

              {/* Nama Lengkap */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  name="nama"
                  required
                  placeholder="Contoh: Muhammad Ilham Pratama"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                />
              </div>

              {/* No WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  No. WhatsApp Aktif *
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="Contoh: 081234567890"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                />
                <span className="text-[11px] text-slate-400 mt-0.5 block">
                  Pastikan nomor WhatsApp aktif untuk pengiriman panduan dan grup pelatihan.
                </span>
              </div>

              {/* Kota Domisili */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Kota / Kabupaten Domisili *
                </label>
                <input
                  type="text"
                  name="kota"
                  required
                  placeholder="Contoh: Bandung / Surabaya / Medan"
                  value={formData.kota}
                  onChange={(e) => setFormData({ ...formData, kota: e.target.value })}
                  className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A]"
                />
              </div>

              {/* Note about Membership */}
              <div className="bg-emerald-50/70 p-3 rounded-xl border border-emerald-100 text-xs text-emerald-900 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Pelatihan ini <strong>100% Bebas Biaya</strong>. Status resmi <strong>Anggota AMI</strong> dan sertifikat digital akan disematkan otomatis setelah kamu menuntaskan program ini.
                </span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] active:bg-[#2fa057] shadow-md transition-all cursor-pointer disabled:opacity-50 min-h-[48px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Mengirim Pendaftaran...</span>
                  </>
                ) : (
                  <>
                    <span>Kirim Pendaftaran & Masuk Grup WA</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Post-Submit Success View */
          <div className="text-center py-4 sm:py-6 animate-in fade-in duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-[#1B5E3A] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-[#2E9E5B]" />
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-[#1B5E3A] border border-emerald-200 inline-block mb-2">
              Pendaftaran Berhasil Terkirim!
            </span>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
              Selamat Bergabung, {formData.nama || 'Kawan Muda'}!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed mb-6">
              Data pendaftaranmu untuk <strong>{currentProgram.title}</strong> telah kami terima.
              Langkah berikutnya adalah <strong>masuk ke grup WhatsApp peserta</strong> untuk mendapatkan jadwal, modul orientasi, dan koordinasi bersama fasilitator.
            </p>

            {/* Primary Action Button: Enter WhatsApp Group */}
            <div className="space-y-3 max-w-sm mx-auto mb-6">
              <a
                id="btn-masuk-grup-wa"
                href={currentProgram.whatsappGroupLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-full text-sm sm:text-base font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] shadow-lg shadow-emerald-900/10 transition-all cursor-pointer min-h-[50px]"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Masuk Grup WhatsApp Pelatihan</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleClose}
                className="w-full py-2.5 px-4 rounded-full text-xs font-bold text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Selesai & Kembali ke Halaman Utama
              </button>
            </div>

            <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 text-xs text-slate-500 max-w-md mx-auto">
              <span>
                💡 Link grup WhatsApp di atas juga dapat kamu simpan sewaktu-waktu. Admin AMI akan memandu sesi perkenalan sebelum jadwal pelatihan dimulai.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
