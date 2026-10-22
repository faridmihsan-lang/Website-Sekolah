import { MessageCircle } from 'lucide-react';
import { SchoolConfig } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface FloatingWhatsAppProps {
  config: SchoolConfig;
}

export default function FloatingWhatsApp({ config }: FloatingWhatsAppProps) {
  const handleClick = () => {
    const message = `Assalamu'alaikum Warahmatullahi Wabarakatuh.
Halo Panitia PPDB Pesantren Tahfidz Telaga Al Kautsar, saya ingin berkonsultasi mengenai pendaftaran santri baru tahun ajaran ${config.academicYear}.`;
    const url = createWhatsAppUrl(config.whatsappNumber, message);
    window.open(url, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-30 group">
      <button
        onClick={handleClick}
        className="flex items-center gap-2.5 px-4 py-3 bg-blue-950 hover:bg-blue-900 active:bg-blue-950 text-white rounded-full shadow-xl hover:shadow-2xl border border-amber-400/40 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-900 cursor-pointer group"
        aria-label="Konsultasi WhatsApp PPDB"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline text-xs font-semibold tracking-wide text-white">
          Konsultasi PPDB
        </span>
      </button>
    </div>
  );
}
