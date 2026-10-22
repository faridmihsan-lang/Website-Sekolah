import { Target, Boxes, Sparkles, UserCheck } from 'lucide-react';
import { learningMethods } from '../data/schoolData';

export default function Methods() {
  const getMethodIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-blue-900" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-blue-900" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-blue-900" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-blue-900" />;
      default:
        return <Target className="w-5 h-5 text-blue-900" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-slate-50/60 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
            <span>Pedagogi Pesantren</span>
            <span className="text-amber-500" aria-hidden="true">·</span>
            <span>Telaga Al Kautsar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Empat Pendekatan Metode Pembelajaran
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Pendekatan edukatif yang menggabungkan ketuntasan kurikulum, pembiasaan adab harian, dan eksplorasi minat santri secara terarah.
          </p>
        </div>

        {/* 4 Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningMethods.map((method) => (
            <div
              key={method.number}
              className="bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-blue-700/30 transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between group"
            >
              <div>
                {/* Method number badge and icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center group-hover:bg-sky-100/70 transition-colors">
                    {getMethodIcon(method.iconName)}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 group-hover:text-blue-900 transition-colors">
                    Langkah {method.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-950 transition-colors">
                  {method.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {method.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-blue-900 uppercase tracking-wider block mb-1">
                  Penerapan Nyata:
                </span>
                <p className="text-xs text-slate-500 italic">
                  {method.implementation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Banner with Photo */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-4 h-64 lg:h-full relative overflow-hidden bg-slate-900">
            <img
              src="/src/assets/images/pesantren_campus_life_1792630642572.jpg"
              alt="Santri berdiskusi dan berinteraksi di lingkungan asri pesantren"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2 block">
              Suasana Pembelajaran Seimbang
            </span>
            <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">
              Didampingi Asatidz yang Peduli Terhadap Tumbuh Kembang Santri
            </h4>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Kami menyadari bahwa masa SMP adalah fase keemasan pembentukan jati diri. Oleh karena itu, pendekatan pembiasaan karakter dan pendampingan personal dijalankan dengan penuh kesabaran, hikmah, dan keteladanan.
            </p>
            <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-700">
              <span className="font-medium">• Halaqah Al-Qur'an Pagi & Petang</span>
              <span className="font-medium">• Shalat Fardhu Berjamaah di Masjid</span>
              <span className="font-medium">• Praktik Laboratorium Sains & STEM</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
