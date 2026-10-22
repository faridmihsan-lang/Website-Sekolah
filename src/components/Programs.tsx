import { useState } from 'react';
import { BookMarked, Users, Laptop, Languages, ArrowRight } from 'lucide-react';
import { programs } from '../data/schoolData';
import { ProgramItem } from '../types';
import ProgramDetailModal from './ProgramDetailModal';

interface ProgramsProps {
  onOpenPPDB: () => void;
}

export default function Programs({ onOpenPPDB }: ProgramsProps) {
  const [selectedProgram, setSelectedProgram] = useState<ProgramItem | null>(null);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookMarked':
        return <BookMarked className="w-5 h-5 text-blue-900" />;
      case 'Users':
        return <Users className="w-5 h-5 text-blue-900" />;
      case 'Laptop':
        return <Laptop className="w-5 h-5 text-blue-900" />;
      case 'Languages':
        return <Languages className="w-5 h-5 text-blue-900" />;
      default:
        return <BookMarked className="w-5 h-5 text-blue-900" />;
    }
  };

  return (
    <section id="program" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
            <span>Kurikulum Berkelanjutan</span>
            <span className="text-amber-500" aria-hidden="true">·</span>
            <span>Telaga Al Kautsar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Empat Program Unggulan
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Dirancang secara berimbang untuk membina kekuatan spiritual, kecakapan kepemimpinan, nalar teknologi, serta wawasan komunikasi global.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {programs.map((prog, index) => (
            <div
              key={prog.id}
              onClick={() => setSelectedProgram(prog)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-blue-700/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
            >
              {/* Image Frame with Aspect Ratio */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={prog.image}
                  alt={prog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Program Number index */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-blue-950 font-bold text-xs px-2.5 py-1 rounded-md shadow-xs">
                  0{index + 1}
                </div>

                {/* Floating icon badge */}
                <div className="absolute bottom-3 left-3 w-9 h-9 rounded-lg bg-white flex items-center justify-center shadow-md">
                  {getProgramIcon(prog.iconName)}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-900 transition-colors leading-snug">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {prog.shortDesc}
                  </p>
                </div>

                {/* Interactive Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-900 group-hover:text-sky-700">
                  <span>Pelajari Selengkapnya</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-white rounded-xl p-6 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-sky-500" />
            <p className="text-xs sm:text-sm text-slate-700">
              Setiap program terintegrasi dengan kurikulum dinas pendidikan dan pengawasan asatidz berpengalaman.
            </p>
          </div>
          <button
            onClick={onOpenPPDB}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-lg whitespace-nowrap transition-colors"
          >
            Daftar Seleksi Masuk
          </button>
        </div>

      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <ProgramDetailModal
          program={selectedProgram}
          onClose={() => setSelectedProgram(null)}
          onOpenPPDB={onOpenPPDB}
        />
      )}
    </section>
  );
}
