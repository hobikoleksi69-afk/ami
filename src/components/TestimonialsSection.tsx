import React from 'react';
import { Quote, MapPin, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../data';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="komunitas" className="py-16 sm:py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1B5E3A] bg-emerald-50 border border-[#2E9E5B]/20 mb-3">
            <span>Cerita Teman Muda AMI</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Tumbuh Bersama, Bergerak Bersama dari Sabang sampai Merauke
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Dengarkan langsung cerita mereka yang telah mengawali langkah, menemukan mentor sebaya, dan mewujudkan proyek
            berdampak di komunitasnya.
          </p>
        </div>

        {/* Testimonials Grid (3-4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((testi) => (
            <div
              key={testi.id}
              id={`testi-card-${testi.id}`}
              className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200 hover:border-[#2E9E5B]/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Quote Icon & Level Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/70 text-[#1B5E3A] flex items-center justify-center">
                    <Quote className="w-4 h-4 fill-current" />
                  </div>
                  <span
                    className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                      testi.level === 'Penggerak'
                        ? 'bg-[#1B5E3A] text-white'
                        : testi.level === 'Aktivis'
                        ? 'bg-[#2E9E5B] text-white'
                        : 'bg-[#43C572] text-[#1B5E3A]'
                    }`}
                  >
                    Level: {testi.level}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{testi.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center gap-3">
                <img
                  src={testi.avatar}
                  alt={testi.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#2E9E5B] shrink-0"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-1">
                    <h4 className="text-sm font-extrabold text-slate-900 truncate">
                      {testi.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2E9E5B] shrink-0" />
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium truncate">
                    {testi.role}
                  </p>
                  <p className="text-[10px] text-emerald-800 font-semibold flex items-center gap-0.5">
                    <MapPin className="w-2.5 h-2.5" />
                    <span>{testi.city}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
