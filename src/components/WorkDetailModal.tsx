import React from 'react';
import { X, Sparkles, MapPin, ExternalLink, Heart } from 'lucide-react';
import { YouthWorkItem } from '../types';

interface WorkDetailModalProps {
  work: YouthWorkItem | null;
  onClose: () => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({ work, onClose }) => {
  if (!work) return null;

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
          <div className="h-48 rounded-2xl overflow-hidden mb-4 relative">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-[#1B5E3A] text-white">
              {work.category}
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight mb-1">
            {work.title}
          </h3>

          <p className="text-xs font-semibold text-emerald-800 flex items-center gap-1 mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Karya: {work.creator} • {work.city}</span>
          </p>

          <div className="p-3 bg-emerald-50 rounded-2xl border border-emerald-100 mb-4">
            <span className="text-xs font-bold text-[#1B5E3A] block">Capaian & Dampak:</span>
            <span className="text-xs text-slate-700">{work.impact}</span>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Tentang Inisiatif / Produk:
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {work.description}
            </p>
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
            onClick={() => alert(`Apresiasi untuk karya "${work.title}" berhasil dikirimkan!`)}
            className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#1B5E3A] bg-emerald-50 hover:bg-emerald-100 transition-all flex items-center gap-1.5 cursor-pointer border border-emerald-200"
          >
            <Heart className="w-3.5 h-3.5 text-[#E31E24] fill-current" />
            <span>Dukung Karya Ini</span>
          </button>
        </div>
      </div>
    </div>
  );
};
