import React from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { PillarItem } from '../types';

interface PillarDetailModalProps {
  pillar: PillarItem | null;
  onClose: () => void;
  onOpenRegister: () => void;
}

export const PillarDetailModal: React.FC<PillarDetailModalProps> = ({
  pillar,
  onClose,
  onOpenRegister,
}) => {
  if (!pillar) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[92vh] flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-slate-700 w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 pr-8">
          <div className="flex items-center gap-2 mb-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-black uppercase"
              style={{
                backgroundColor: pillar.colorName === 'merah-aksen' ? '#E31E24' : '#1B5E3A',
                color: '#FFFFFF',
              }}
            >
              {pillar.name}
            </span>
            <span className="text-xs text-slate-400">Pilar Gerak AMI</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
            {pillar.tagline}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {pillar.fullDesc}
          </p>
        </div>

        <div className="overflow-y-auto pr-1 space-y-5">
          {/* Focus Areas */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              Bidang Fokus Gerakan:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {pillar.focusAreas.map((area, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Programs */}
          <div>
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
              Inisiatif & Program Kunci:
            </h4>
            <div className="space-y-2">
              {pillar.keyPrograms.map((prog, i) => (
                <div
                  key={i}
                  className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100 flex items-center justify-between text-xs"
                >
                  <span className="font-bold text-[#1B5E3A]">{prog}</span>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-white px-2 py-0.5 rounded-md border border-emerald-200">
                    Aktif 2026
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 cursor-pointer"
          >
            Tutup
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenRegister();
            }}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <Sparkles className="w-4 h-4" />
            <span>Gabung di Pilar Ini</span>
          </button>
        </div>
      </div>
    </div>
  );
};
