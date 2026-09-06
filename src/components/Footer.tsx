import React from 'react';
import { Mail, Phone, MapPin, Instagram, Youtube, Facebook, ArrowUp } from 'lucide-react';
import { AmiLogo } from './AmiLogo';

interface FooterProps {
  onOpenCertCheck: () => void;
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCertCheck, onOpenRegister }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Tentang AMI', href: '#tentang' },
    { label: '5 Pilar Gerak', href: '#pilar' },
    { label: 'Program Pelatihan', href: '#program' },
    { label: 'Bank Modul Tumbuh', href: '#program' },
    { label: 'Jurnal Riset Muda', href: '#jurnal' },
    { label: 'Etalase Karya Pemuda', href: '#karya' },
    { label: 'Cerita Komunitas', href: '#komunitas' },
    { label: 'Gabung Anggota', href: '#gabung' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="inline-block">
              <AmiLogo variant="dark" className="h-10" />
            </a>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              <strong>"Tumbuh Bersama, Bergerak Bersama"</strong>
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Wadah resmi pengembangan anak muda Indonesia dengan program terstruktur, sistem pengakuan yang jelas, dan
              jejak nyata yang bisa kamu pertanggungjawabkan.
            </p>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Inisiatif AMI"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#1B5E3A] text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok Inisiatif AMI"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#1B5E3A] text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors font-bold text-xs"
              >
                <span>TT</span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Inisiatif AMI"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#E31E24] text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Inisiatif AMI"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-[#1B5E3A] text-slate-300 hover:text-white flex items-center justify-center border border-slate-800 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navigasi Halaman
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="py-1 text-slate-400 hover:text-[#43C572] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-slate-800/60 flex flex-wrap gap-2">
              <button
                onClick={onOpenCertCheck}
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline cursor-pointer"
              >
                Portal Cek Sertifikat Online →
              </button>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Kontak Layanan
            </h4>

            <div className="flex items-start gap-3 text-xs text-slate-400">
              <Mail className="w-4 h-4 text-[#43C572] shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-300 font-semibold block">Email Resmi:</span>
                <a href="mailto:halo@inisiatifami.id" className="hover:text-white transition-colors">
                  halo@inisiatifami.id
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-400">
              <Phone className="w-4 h-4 text-[#43C572] shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-300 font-semibold block">WhatsApp Pengurus:</span>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +62 812-3456-7890 (Admin Pusat)
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-[#43C572] shrink-0 mt-0.5" />
              <div>
                <span className="text-slate-300 font-semibold block">Sekretariat Nasional:</span>
                <span>Gedung Pemuda Kolaboratif, Jakarta Selatan, D.K.I. Jakarta 12950</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Inisiatif AMI (Anak Muda Indonesia). Seluruh Hak Cipta Dilindungi.
          </div>

          <div className="flex items-center gap-4">
            <span>Pedoman Privasi</span>
            <span>•</span>
            <span>Kode Etik Anggota</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
