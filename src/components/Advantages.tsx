import { HeartHandshake, Compass, Binary, Globe, Trees, Check } from 'lucide-react';
import { advantages } from '../data/schoolData';

export default function Advantages() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-blue-900" />;
      case 'Compass':
        return <Compass className="w-5 h-5 text-blue-900" />;
      case 'Binary':
        return <Binary className="w-5 h-5 text-blue-900" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-blue-900" />;
      case 'Trees':
        return <Trees className="w-5 h-5 text-blue-900" />;
      default:
        return <Check className="w-5 h-5 text-blue-900" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
            <span>Keunggulan Kompetitif</span>
            <span className="text-amber-500" aria-hidden="true">·</span>
            <span>Telaga Al Kautsar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Mengapa Memilih Telaga Al Kautsar?
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Komitmen kami menghadirkan ekosistem pesantren yang aman, terarah, dan menumbuhkan seluruh potensi fitrah anak menuju kematangan akidah dan intelektual.
          </p>
        </div>

        {/* Asymmetric 5-Advantages Bento-style Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Main Feature (col-span-2 on tablet/desktop if highlighted or first two) */}
          {advantages.map((adv, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                idx === 0
                  ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-blue-50/70 via-sky-50/20 to-white border-blue-200/90 shadow-xs'
                  : 'bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/70 flex items-center justify-center shadow-xs">
                    {getIcon(adv.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className={`font-bold text-slate-900 mb-2.5 ${idx === 0 ? 'text-xl' : 'text-lg'}`}>
                  {adv.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-blue-900 font-medium">
                <Check className="w-3.5 h-3.5 text-sky-600" />
                <span>Standar mutu pendidikan terverifikasi</span>
              </div>
            </div>
          ))}

          {/* Complementary Value Metric Card */}
          <div className="p-7 rounded-2xl bg-blue-950 text-white flex flex-col justify-between shadow-lg">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block mb-2">
                Komitmen Kami
              </span>
              <h3 className="text-xl font-bold mb-3 leading-snug">
                Pendidikan Holistik untuk Masa Depan Berkah
              </h3>
              <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed">
                Kami memastikan santri tidak sekadar menghafal dan belajar, namun memahami esensi adab, cinta ilmu, dan kepedulian terhadap sesama.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-900/80 flex items-center justify-between text-xs text-amber-200">
              <span>Kurikulum Terpadu</span>
              <span className="font-semibold">SMP Tahfidz Al Kautsar</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
