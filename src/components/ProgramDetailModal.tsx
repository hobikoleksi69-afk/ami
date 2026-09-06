import React from 'react';
import { X, Clock, Users, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { YouthProgramItem } from '../types';

interface ProgramDetailModalProps {
  program: YouthProgramItem | null;
  onClose: () => void;
  onOpenRegister: (program: YouthProgramItem) => void;
}

export const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({
  program,
  onClose,
  onOpenRegister,
}) => {
  if (!program) return null;

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
          <div className="relative h-44 rounded-2xl overflow-hidden mb-5">
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#1B5E3A] text-white mr-2">
                {program.pillar}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#43C572] text-[#1B5E3A]">
                {program.badge}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-white mt-1 leading-tight">
                {program.title}
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 mb-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#2E9E5B]" />
              <span>Durasi: <strong>{program.duration}</strong></span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#2E9E5B]" />
              <span>Kuota: <strong>{program.participants}</strong></span>
            </div>
            <span>•</span>
            <span className="px-2 py-0.5 rounded bg-emerald-50 text-[#1B5E3A] font-bold">
              {program.format}
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Deskripsi Program:
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {program.description}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Rangkaian Kurikulum & Modul:
              </h4>
              <div className="space-y-2">
                {program.curriculum.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#2E9E5B] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-emerald-50/70 rounded-2xl p-3.5 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-[#2E9E5B] shrink-0" />
              <span>
                Peserta yang menuntaskan program akan memperoleh <strong>Sertifikat Tervalidasi Online</strong> dan
                kenaikan tingkatan ke <strong>Level Aktivis / Penggerak</strong>.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:bg-slate-50 cursor-pointer"
          >
            Tutup
          </button>
          <button
            onClick={() => {
              onClose();
              onOpenRegister(program);
            }}
            className="px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] transition-all flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <span>Daftar Ikuti Program Ini</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
