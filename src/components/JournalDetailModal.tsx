import React from 'react';
import { X, BookOpen, Download, Calendar, ArrowRight } from 'lucide-react';
import { YouthJournalItem } from '../types';

interface JournalDetailModalProps {
  journal: YouthJournalItem | null;
  onClose: () => void;
}

export const JournalDetailModal: React.FC<JournalDetailModalProps> = ({
  journal,
  onClose,
}) => {
  if (!journal) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-700 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto pr-1">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#E31E24] text-white">
              {journal.category}
            </span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-600 font-medium">
              {journal.edition} ({journal.date})
            </span>
          </div>

          <h3 className="text-lg sm:text-2xl font-black text-slate-900 leading-tight mb-2">
            {journal.title}
          </h3>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 mb-4 text-xs">
            <span className="font-bold text-slate-800 block">Penulis: {journal.author}</span>
            <span className="text-slate-500">{journal.institution}</span>
            <span className="text-emerald-700 block font-mono mt-1 text-[11px]">
              DOI: {journal.doi}
            </span>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Abstrak & Temuan Kunci Riset:
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-emerald-50/30 p-4 rounded-2xl border border-emerald-100">
              {journal.abstract}
            </p>
          </div>

          <div className="mt-4 p-3 bg-slate-50 rounded-xl text-xs text-slate-500 flex justify-between items-center">
            <span>Telah diunduh {journal.downloads.toLocaleString()} kali</span>
            <span className="text-emerald-800 font-semibold">Dewan Redaksi Jurnal Muda AMI</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 cursor-pointer"
          >
            Tutup
          </button>
          <button
            onClick={() => alert(`Naskah riset "${journal.title}" berhasil diunduh.`)}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#E31E24] hover:bg-[#c4141a] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Download className="w-4 h-4" />
            <span>Unduh Naskah Lengkap (PDF)</span>
          </button>
        </div>
      </div>
    </div>
  );
};
