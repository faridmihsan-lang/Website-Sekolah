import { Building2, BookOpen, Laptop, Moon, Sun, Trees, CheckCircle2 } from 'lucide-react';
import { facilities } from '../data/schoolData';

export default function Facilities() {
  const getFacilityIcon = (id: string) => {
    switch (id) {
      case 'masjid':
        return <Building2 className="w-5 h-5 text-blue-900" />;
      case 'asrama':
        return <Moon className="w-5 h-5 text-blue-900" />;
      case 'lab-coding':
        return <Laptop className="w-5 h-5 text-blue-900" />;
      case 'perpustakaan':
        return <BookOpen className="w-5 h-5 text-blue-900" />;
      case 'kelas-ac':
        return <Sun className="w-5 h-5 text-blue-900" />;
      case 'olahraga':
        return <Trees className="w-5 h-5 text-blue-900" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-blue-900" />;
    }
  };

  return (
    <section id="fasilitas" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
            <span>Fasilitas Terpadu</span>
            <span className="text-amber-500" aria-hidden="true">·</span>
            <span>Telaga Al Kautsar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Lingkungan Belajar Representatif & Nyaman
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Sarana dan prasarana dirancang untuk menjamin kenyamanan belajar santri, penjagaan kesehatan, serta suasana asrama yang tenang dan kondusif.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((fac) => (
            <div
              key={fac.id}
              className="p-7 rounded-2xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-700/30 hover:bg-white transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-200/70 flex items-center justify-center shadow-xs">
                    {getFacilityIcon(fac.id)}
                  </div>
                  <span className="text-xs font-medium text-sky-800 bg-sky-50 px-2.5 py-1 rounded-md">
                    {fac.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {fac.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {fac.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs text-slate-500">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span>Terawat dan beroperasi setiap hari</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
