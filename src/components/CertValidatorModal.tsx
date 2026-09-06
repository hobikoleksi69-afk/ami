import React, { useState } from 'react';
import {
  X,
  Search,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  QrCode,
  Download,
  Printer,
  Sparkles,
} from 'lucide-react';
import { certificatesDatabase } from '../data';
import { YouthCertificateRecord } from '../types';

interface CertValidatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CertValidatorModal: React.FC<CertValidatorModalProps> = ({ isOpen, onClose }) => {
  const [certInput, setCertInput] = useState('');
  const [searchResult, setSearchResult] = useState<YouthCertificateRecord | null>(
    certificatesDatabase['AMI-CERT-2026-001']
  );
  const [hasSearched, setHasSearched] = useState(true);

  if (!isOpen) return null;

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanKey = certInput.trim().toUpperCase();
    if (!cleanKey) return;

    if (certificatesDatabase[cleanKey]) {
      setSearchResult(certificatesDatabase[cleanKey]);
    } else {
      setSearchResult(null);
    }
    setHasSearched(true);
  };

  const selectSample = (code: string) => {
    setCertInput(code);
    setSearchResult(certificatesDatabase[code]);
    setHasSearched(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-700 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Tutup Validator"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6 pr-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1B5E3A] bg-emerald-50 border border-[#2E9E5B]/20 mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2E9E5B]" />
            <span>Sistem Validasi Sertifikat Online</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Verifikasi Keaslian Sertifikat Inisiatif AMI
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Masukkan nomor sertifikat resmi untuk mengonfirmasi keaslian data, peserta, program pelatihan, dan tanggal terbit.
          </p>
        </div>

        {/* Search Bar & Sample Chips */}
        <div className="mb-6">
          <form onSubmit={handleSearch} className="flex gap-2 mb-3">
            <div className="relative flex-1">
              <input
                type="text"
                value={certInput}
                onChange={(e) => setCertInput(e.target.value)}
                placeholder="Contoh: AMI-CERT-2026-001"
                className="w-full text-xs sm:text-sm border border-slate-200 rounded-xl pl-9 pr-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#1B5E3A] uppercase font-mono"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#1B5E3A] hover:bg-[#14472c] transition-all cursor-pointer shrink-0 shadow-xs"
            >
              Verifikasi
            </button>
          </form>

          {/* Quick Click Sample Chips */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-400 font-medium">Contoh nomor tes:</span>
            <button
              onClick={() => selectSample('AMI-CERT-2026-001')}
              className="px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-[#1B5E3A] font-mono font-bold text-[11px] transition-colors cursor-pointer border border-emerald-200"
            >
              AMI-CERT-2026-001
            </button>
            <button
              onClick={() => selectSample('AMI-CERT-2026-088')}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-bold text-[11px] transition-colors cursor-pointer"
            >
              AMI-CERT-2026-088
            </button>
            <button
              onClick={() => selectSample('AMI-CERT-2026-142')}
              className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-mono font-bold text-[11px] transition-colors cursor-pointer"
            >
              AMI-CERT-2026-142
            </button>
          </div>
        </div>

        {/* Search Results Area */}
        <div className="overflow-y-auto max-h-[50vh] pr-1">
          {searchResult ? (
            <div className="bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 border-2 border-[#2E9E5B]/40 rounded-3xl p-6 shadow-sm">
              {/* Validation Status Banner */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-sm sm:text-base">
                  <CheckCircle2 className="w-5 h-5 text-[#2E9E5B] shrink-0" />
                  <span>Sertifikat Asli & Terverifikasi Sistem</span>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#1B5E3A] text-white">
                  Resmi AMI
                </span>
              </div>

              {/* Certificate Details */}
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="text-slate-400 text-[11px] block uppercase font-bold">
                      Nomor Sertifikat:
                    </span>
                    <span className="font-mono font-extrabold text-slate-900 text-sm sm:text-base text-[#1B5E3A]">
                      {searchResult.certNumber}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block uppercase font-bold">
                      Nomor AMI ID Pemegang:
                    </span>
                    <span className="font-mono font-bold text-slate-800">
                      {searchResult.amiId}
                    </span>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 text-[11px] block uppercase font-bold">
                    Nama Lengkap Penerima:
                  </span>
                  <span className="font-black text-slate-900 text-base sm:text-lg">
                    {searchResult.holderName}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 text-[11px] block uppercase font-bold">
                    Program / Kegiatan yang Diselesaikan:
                  </span>
                  <span className="font-bold text-slate-800">
                    {searchResult.programTitle}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <span className="text-slate-400 text-[11px] block uppercase font-bold">
                      Tingkat Capaian:
                    </span>
                    <span className="inline-block px-2.5 py-0.5 rounded text-xs font-extrabold bg-[#43C572] text-[#1B5E3A]">
                      Level: {searchResult.level}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[11px] block uppercase font-bold">
                      Tanggal Diterbitkan:
                    </span>
                    <span className="font-medium text-slate-700">
                      {searchResult.issueDate}
                    </span>
                  </div>
                </div>

                {/* Skills Certified */}
                <div className="pt-2">
                  <span className="text-slate-400 text-[11px] block uppercase font-bold mb-1">
                    Kompetensi yang Disahkan:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {searchResult.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[11px] text-slate-700 font-medium"
                      >
                        ✓ {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Security Hash & Signer */}
                <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-2">
                    <QrCode className="w-8 h-8 text-slate-700" />
                    <div>
                      <span className="font-semibold text-slate-700 block">
                        Dikeluarkan Oleh:
                      </span>
                      <span>{searchResult.organizer}</span>
                    </div>
                  </div>
                  <div className="text-right font-mono text-[10px] text-slate-400">
                    <div>Hash Keamanan:</div>
                    <div className="text-emerald-700 font-bold">{searchResult.verifiedHash}</div>
                  </div>
                </div>
              </div>
            </div>
          ) : hasSearched ? (
            <div className="text-center py-8 bg-slate-50 rounded-2xl border border-slate-200 p-6">
              <AlertCircle className="w-10 h-10 text-[#E31E24] mx-auto mb-2" />
              <h4 className="text-base font-bold text-slate-900">
                Sertifikat Tidak Ditemukan
              </h4>
              <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                Nomor sertifikat tidak terdaftar di pangkalan data kami. Pastikan nomor yang dimasukkan tepat sesuai yang
                tertera pada dokumen fisik atau digital.
              </p>
              <button
                onClick={() => selectSample('AMI-CERT-2026-001')}
                className="mt-4 px-4 py-1.5 rounded-xl bg-emerald-50 text-[#1B5E3A] text-xs font-bold border border-emerald-200 cursor-pointer"
              >
                Coba Contoh Valid
              </button>
            </div>
          ) : null}
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            Pusat Validasi Digital AMI © 2026
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
