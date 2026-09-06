import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Sparkles } from 'lucide-react';
import { GrowthModuleItem } from '../types';

interface ModuleDownloadModalProps {
  module: GrowthModuleItem | null;
  onClose: () => void;
}

export const ModuleDownloadModal: React.FC<ModuleDownloadModalProps> = ({
  module,
  onClose,
}) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!module) return null;

  const handleDownload = () => {
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-700 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto pr-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#1B5E3A] text-white">
              {module.category}
            </span>
            <span className="text-xs text-slate-500">Tahun Rilis: {module.publishedYear}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-2">
            {module.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {module.description}
          </p>

          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-5">
            <div className="flex justify-between text-xs text-slate-600 mb-3 pb-2 border-b border-slate-200">
              <span>Ukuran Berkas: <strong>{module.fileSize}</strong></span>
              <span>Jumlah Halaman: <strong>{module.pages} Halaman</strong></span>
            </div>

            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Daftar Isi & Topik Utama:
            </h4>
            <div className="space-y-1.5">
              {module.topics.map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>

          {downloaded ? (
            <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-center animate-in fade-in duration-200">
              <CheckCircle2 className="w-8 h-8 text-[#2E9E5B] mx-auto mb-2" />
              <h4 className="text-sm font-extrabold text-[#1B5E3A]">
                Berkas Berhasil Diunduh!
              </h4>
              <p className="text-xs text-emerald-800 mt-1">
                Modul Tumbuh ini 100% bebas digunakan dan disebarkan untuk keperluan belajar komunitasmu.
              </p>
            </div>
          ) : (
            <div className="bg-emerald-50/60 rounded-2xl p-3 border border-emerald-100 text-xs text-emerald-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#2E9E5B] shrink-0" />
              <span>Disediakan gratis oleh Tim Kurikulum Inisiatif AMI untuk seluruh anak muda Indonesia.</span>
            </div>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 cursor-pointer"
          >
            Tutup
          </button>
          {!downloaded && (
            <button
              onClick={handleDownload}
              className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#2E9E5B] hover:bg-[#237c47] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Mulai Unduh Modul (PDF)</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
