import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { AmiLogo } from './AmiLogo';

interface NavbarProps {
  onOpenRegister: () => void;
  onOpenCertCheck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenCertCheck }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Tentang', href: '#tentang' },
    { label: 'Pilar Gerak', href: '#pilar' },
    { label: 'Program', href: '#program' },
    { label: 'Karya', href: '#karya' },
    { label: 'Komunitas', href: '#komunitas' },
    { label: 'Kabar & Riset', href: '#jurnal' },
    { label: 'Gabung', href: '#gabung' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-xs py-3.5 sm:py-4 border-b border-slate-100/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform active:scale-95"
            aria-label="Inisiatif AMI Homepage"
          >
            <AmiLogo className="h-9 sm:h-10" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-[#1B5E3A] hover:bg-emerald-50/70 transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Quick Certificate Check */}
            <button
              id="btn-nav-cek-sertifikat"
              onClick={onOpenCertCheck}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-bold text-[#1B5E3A] bg-emerald-50 hover:bg-emerald-100/80 border border-[#2E9E5B]/30 transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#2E9E5B]" />
              <span>Cek Sertifikat</span>
            </button>

            {/* Main Join CTA Button - Hijau Terang (#43C572) with contrast text */}
            <button
              id="btn-nav-gabung-sekarang"
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold text-[#1B5E3A] bg-[#43C572] hover:bg-[#38b264] active:bg-[#2fa057] shadow-md hover:shadow-emerald-300/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Gabung Sekarang</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenRegister}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-[#1B5E3A] bg-[#43C572] active:bg-[#38b264]"
            >
              Gabung
            </button>
            <button
              id="btn-toggle-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#1B5E3A] hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:text-[#1B5E3A] hover:bg-emerald-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCertCheck();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold text-[#1B5E3A] bg-emerald-50 border border-emerald-200"
            >
              <ShieldCheck className="w-4 h-4 text-[#2E9E5B]" />
              <span>Cek Validasi Sertifikat AMI</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-extrabold text-[#1B5E3A] bg-[#43C572] shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Daftar Jadi Anggota AMI</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
