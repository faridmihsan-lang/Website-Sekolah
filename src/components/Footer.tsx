import { MapPin, Phone, Mail, MessageCircle, Settings, ShieldCheck, Heart } from 'lucide-react';
import { SchoolConfig } from '../types';
import { createWhatsAppUrl, formatWhatsAppNumber } from '../utils/whatsapp';

interface FooterProps {
  config: SchoolConfig;
  onOpenConfig: () => void;
  onOpenPPDB: () => void;
}

export default function Footer({ config, onOpenConfig, onOpenPPDB }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Mission (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900 flex items-center justify-center text-amber-400 font-serif font-bold text-xl border border-amber-500/20">
                <span>ق</span>
              </div>
              <div>
                <h3 className="font-bold text-white text-lg tracking-tight">
                  Telaga Al Kautsar
                </h3>
                <p className="text-xs text-sky-400 font-medium">
                  Pesantren Tahfidz & Kepemimpinan Islam
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Lembaga pendidikan Islam tingkat SMP yang memadukan kecintaan terhadap Al-Qur'an, pembentukan karakter kepemimpinan, dan keterampilan teknologi abad ke-21.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Penerimaan Santri Baru (PPDB) {config.academicYear} Terbuka</span>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#beranda"
                  onClick={(e) => handleNavClick(e, '#beranda')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Beranda
                </a>
              </li>
              <li>
                <a
                  href="#profil"
                  onClick={(e) => handleNavClick(e, '#profil')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Profil & Nilai Utama
                </a>
              </li>
              <li>
                <a
                  href="#program"
                  onClick={(e) => handleNavClick(e, '#program')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Program Unggulan
                </a>
              </li>
              <li>
                <a
                  href="#fasilitas"
                  onClick={(e) => handleNavClick(e, '#fasilitas')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Fasilitas Pesantren
                </a>
              </li>
              <li>
                <a
                  href="#galeri"
                  onClick={(e) => handleNavClick(e, '#galeri')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Galeri Dokumentasi
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  onClick={(e) => handleNavClick(e, '#faq')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Pertanyaan Sering Diajukan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Address (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                Kontak & Lokasi Resmi
              </h4>
              <button
                onClick={onOpenConfig}
                className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                title="Kelola Data Kontak Sekolah"
              >
                <Settings className="w-3 h-3" />
                <span>Sesuaikan Data</span>
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200">{config.address}</p>
                  <p className="text-xs text-slate-500">{config.city}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${formatWhatsAppNumber(config.whatsappNumber)}`}
                  className="text-slate-200 hover:text-amber-400 transition-colors"
                >
                  {config.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={createWhatsAppUrl(
                    config.whatsappNumber,
                    "Assalamu'alaikum, saya ingin berkonsultasi mengenai PPDB Pesantren Tahfidz Telaga Al Kautsar."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:underline"
                >
                  Layanan WhatsApp PPDB ({config.phoneDisplay.split(' ')[0] || config.whatsappNumber})
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-slate-300">{config.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenPPDB}
                className="w-full py-2.5 px-4 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs rounded-lg transition-colors shadow-xs"
              >
                Daftar Online Santri Baru
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} Pesantren Tahfidz Telaga Al Kautsar. Hak cipta dilindungi.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Pendidikan Karakter & Al-Qur'an</span>
            <button
              onClick={onOpenConfig}
              className="text-slate-500 hover:text-slate-300 transition-colors flex items-center gap-1.5"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Panel Data Sekolah</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
