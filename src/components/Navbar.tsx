import { useState, useEffect } from 'react';
import { Menu, X, Settings } from 'lucide-react';
import { SchoolConfig } from '../types';

interface NavbarProps {
  config: SchoolConfig;
  onOpenPPDB: () => void;
  onOpenConfig: () => void;
}

export default function Navbar({ config, onOpenPPDB, onOpenConfig }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Profil', href: '#profil' },
    { label: 'Program Unggulan', href: '#program' },
    { label: 'Fasilitas', href: '#fasilitas' },
    { label: 'Galeri', href: '#galeri' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-blue-950/10 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#beranda"
            className="flex items-center gap-3 text-slate-900 group whitespace-nowrap shrink-0"
            onClick={(e) => handleNavClick(e, '#beranda')}
          >
            <div className="w-10 h-10 rounded-lg bg-blue-950 flex items-center justify-center text-amber-400 font-serif font-bold text-xl shadow-xs border border-amber-500/30">
              <span>ق</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-blue-950 text-base sm:text-lg tracking-tight leading-tight group-hover:text-blue-900 transition-colors">
                Telaga Al Kautsar
              </span>
              <span className="text-[11px] font-medium text-sky-700 tracking-wider uppercase">
                Pesantren Tahfidz & Sains
              </span>
            </div>
          </a>

          {/* Zone 2: 4-5 Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-blue-950 transition-colors whitespace-nowrap shrink-0 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-sky-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Admin settings */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenConfig}
              className="p-2 text-slate-400 hover:text-blue-950 rounded-lg transition-colors hover:bg-slate-100"
              title="Sesuaikan Data Panitia PPDB (Kontak/Alamat/Jadwal)"
              aria-label="Pengaturan data resmi sekolah"
            >
              <Settings className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenPPDB}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-blue-900 hover:bg-blue-950 active:bg-slate-950 rounded-lg shadow-xs hover:shadow transition-all whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900"
            >
              Daftar PPDB {config.academicYear}
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenPPDB}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-900 rounded-lg sm:hidden whitespace-nowrap"
            >
              PPDB
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-950 rounded-lg focus-visible:outline-2 focus-visible:outline-blue-700"
              aria-label="Buka menu navigasi"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-blue-950 hover:bg-sky-50/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPPDB();
                }}
                className="w-full py-3 text-center text-sm font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-lg shadow-sm"
              >
                Daftar PPDB Sekarang
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConfig();
                }}
                className="flex items-center justify-center gap-2 w-full py-2 text-xs font-medium text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg"
              >
                <Settings className="w-3.5 h-3.5 text-slate-500" />
                <span>Pengaturan Data Resmi Panitia</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
