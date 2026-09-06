import React from 'react';
import { Newspaper, Calendar, MapPin, ExternalLink, ArrowRight, MessageSquare } from 'lucide-react';
import { amiNewsData } from '../data';
import { WA_CHANNEL_LINK } from '../config';

export const NewsSection: React.FC = () => {
  return (
    <section id="kabar" className="py-16 sm:py-24 bg-white scroll-mt-20 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#1B5E3A] bg-emerald-50 border border-[#2E9E5B]/20 mb-3">
              <Newspaper className="w-3.5 h-3.5 text-[#2E9E5B]" />
              <span>Dokumentasi & Berita Terkini</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Kabar AMI: Jejak Aksi dan Langkah Nyata
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Ikuti kabar perkembangan program, liputan wisuda fellowship, riset advokasi kebijakan pemuda, dan kisah dari lapangan.
            </p>
          </div>

          <a
            href={WA_CHANNEL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-emerald-50 hover:bg-emerald-100/70 border border-[#2E9E5B]/30 transition-all shrink-0 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 text-[#2E9E5B]" />
            <span>Gabung Saluran WhatsApp AMI</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
          </a>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {amiNewsData.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-extrabold bg-[#1B5E3A] text-white">
                    {item.category}
                  </span>
                  {item.attendees && (
                    <span className="absolute bottom-3 left-3 text-[11px] font-semibold text-emerald-100 bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-xs">
                      {item.attendees}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-500 mb-2.5">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#2E9E5B]" />
                      {item.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#2E9E5B]" />
                      {item.location}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-[#1B5E3A] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href={WA_CHANNEL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B5E3A] hover:text-[#2E9E5B] transition-colors"
                >
                  <span>Baca Selengkapnya di Saluran AMI</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* WhatsApp Channel Promo Card */}
        <div className="mt-12 bg-gradient-to-r from-[#1B5E3A] to-[#2E9E5B] rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="max-w-xl text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-200 block mb-1">
              Jangan Ketinggalan Pelatihan Berikutnya
            </span>
            <h3 className="text-lg sm:text-2xl font-black text-white">
              Dapatkan Info Pembukaan Pendaftaran Program Tercepat
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 mt-1">
              Bergabung bersama 15.000+ pemuda di Saluran Resmi WhatsApp Inisiatif AMI untuk pengumuman batch pelatihan terbaru.
            </p>
          </div>

          <a
            href={WA_CHANNEL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] transition-all shadow-md shrink-0 cursor-pointer"
          >
            <span>Ikuti Saluran WhatsApp AMI</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
