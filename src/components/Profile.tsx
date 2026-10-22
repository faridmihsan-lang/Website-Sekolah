import { BookOpen, ShieldCheck, Cpu, ArrowUpRight } from 'lucide-react';
import { coreValues } from '../data/schoolData';

interface ProfileProps {
  onLearnMore?: () => void;
}

export default function Profile({ onLearnMore }: ProfileProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-blue-900" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-blue-900" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-blue-900" />;
      default:
        return <BookOpen className="w-6 h-6 text-blue-900" />;
    }
  };

  return (
    <section id="profil" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
            <span>Profil Lembaga</span>
            <span className="text-amber-500" aria-hidden="true">·</span>
            <span>Nilai Dasar Pesantren</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6" style={{ textWrap: 'balance' }}>
            Membangun Generasi Berilmu, Berakhlak, dan Berdaya Saing.
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed" style={{ textWrap: 'balance' }}>
            Telaga Al Kautsar merupakan lembaga pendidikan pesantren yang berkomitmen membentuk generasi Muslim yang dekat dengan Al-Qur'an, berakhlak mulia, memiliki jiwa kepemimpinan, serta siap menghadapi perkembangan zaman.
          </p>
        </div>

        {/* 3 Core Values Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {coreValues.map((val, idx) => (
            <div
              key={val.id}
              className="relative p-8 rounded-2xl bg-slate-50/80 hover:bg-white border border-slate-200/80 hover:border-blue-700/30 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Card Index Marker */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-sky-50 border border-slate-200/60 group-hover:border-sky-200 flex items-center justify-center shadow-xs transition-colors">
                  {getIcon(val.iconName)}
                </div>
                <span className="text-xs font-semibold tracking-wider text-slate-400 group-hover:text-blue-900 transition-colors">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-950 transition-colors">
                {val.title}
              </h3>
              
              <p className="text-xs font-semibold text-amber-700 mb-3">
                {val.tagline}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {val.description}
              </p>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-blue-900 opacity-90 group-hover:translate-x-1 transition-transform">
                <span>Fondasi Pendidikan Utama</span>
              </div>
            </div>
          ))}
        </div>

        {/* Vision Narrative Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-blue-900 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-islamic-pattern pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold tracking-widest uppercase text-amber-400 mb-2 block">
                Sinergi Pesantren Abad ke-21
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
                Memadukan Khazanah Turats dan Kemajuan Sains Modern
              </h3>
              <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed">
                Di Pesantren Tahfidz Telaga Al Kautsar, kecintaan terhadap Al-Qur'an menjadi ruh utama yang menjiwai setiap ikhtiar santri. Kami percaya bahwa generasi Muslim masa kini harus berakar kokoh pada syariat sekaligus unggul dalam nalar komputasi, kepemimpinan publik, dan komunikasi dunia.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href="#program"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-sm rounded-xl transition-all shadow-sm"
              >
                <span>Lihat Program Pendidikan</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="#ppdb"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-xl transition-all border border-white/20"
              >
                <span>Informasi Pendaftaran</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
