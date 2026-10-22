import { ArrowRight, BookOpen, Compass, Cpu, CheckCircle } from 'lucide-react';
import { SchoolConfig } from '../types';

interface HeroProps {
  config: SchoolConfig;
  onOpenPPDB: () => void;
  onExplorePrograms: () => void;
}

export default function Hero({ config, onOpenPPDB, onExplorePrograms }: HeroProps) {
  return (
    <section id="beranda" className="relative pt-24 sm:pt-28 pb-16 lg:pb-24 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Small label (clean unboxed text kicker with separator, strictly per zero-pill rules) */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-blue-900 uppercase mb-4">
              <span>Pendidikan Al-Qur'an</span>
              <span className="text-amber-500" aria-hidden="true">•</span>
              <span>Kepemimpinan</span>
              <span className="text-amber-500" aria-hidden="true">•</span>
              <span>Teknologi</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6" style={{ textWrap: 'balance' }}>
              Menjadi Generasi Qur’ani, <span className="text-blue-950 underline decoration-amber-400 decoration-wavy decoration-2 underline-offset-8">Pemimpin Masa Depan.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Pesantren Tahfidz Telaga Al Kautsar menghadirkan pendidikan Islam yang memadukan kecintaan terhadap Al-Qur'an, pembentukan karakter kepemimpinan, serta keterampilan teknologi masa depan.
            </p>

            {/* Two Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenPPDB}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-900 hover:bg-blue-950 active:bg-slate-950 rounded-xl shadow-md hover:shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-blue-900 group"
              >
                <span>Daftar PPDB</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExplorePrograms}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-blue-950 bg-white hover:bg-sky-50/70 border border-blue-900/20 rounded-xl shadow-xs hover:border-blue-700/40 transition-all focus-visible:outline-2 focus-visible:outline-blue-900"
              >
                <span>Jelajahi Program</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-600 border-t border-slate-200/80 pt-6 w-full">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Pendidikan Tingkat SMP Berasrama</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Tahfidz Terbimbing Mutqin</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Lab Coding & Robotik Modern</span>
              </div>
            </div>

          </div>

          {/* Right Column: High Impact Photo Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-blue-950/10 bg-slate-100 group">
              <img
                src="/src/assets/images/hero_pesantren_campus_1792630643711.jpg"
                alt="Suasana asri dan modern kampus Pesantren Tahfidz Telaga Al Kautsar"
                className="w-full h-80 sm:h-96 lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Soft overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/20 to-transparent pointer-events-none" />

              {/* Overlay card info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white">
                <div className="flex items-center gap-2 text-xs font-medium text-amber-300 mb-1">
                  <span>Kawasan Pesantren Asri</span>
                  <span aria-hidden="true">·</span>
                  <span>Lingkungan Belajar Kondusif</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  Harmoni Iman, Adab, dan Kemajuan Teknologi
                </h3>
                <p className="text-xs text-sky-100 mt-1 line-clamp-2">
                  Membina santri mandiri yang mencintai kalamullah dan cakap menghadapi era digital.
                </p>
              </div>
            </div>

            {/* Decorative Islamic accent badge */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-xl border border-slate-100 items-center gap-3.5 max-w-xs">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-700 shrink-0">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900 leading-tight">Kurikulum Terintegrasi</p>
                <p className="text-[11px] text-slate-500">Tahfidz + Diniyah + Akademik SMP + Teknologi</p>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Column Proof & Highlights Strip below hero split */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 sm:p-6 bg-slate-50/75 rounded-2xl border border-slate-200/80">
          <div className="p-2 sm:p-3">
            <span className="block text-2xl sm:text-3xl font-extrabold text-blue-950 tabular-nums">5 Juz</span>
            <span className="text-xs sm:text-sm font-medium text-slate-700">Target & Bimbingan Tahfidz</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Metode talaqqi bertahap & mutqin tingkat SMP</p>
          </div>

          <div className="p-2 sm:p-3 border-l border-slate-200/70">
            <span className="block text-2xl sm:text-3xl font-extrabold text-blue-950 tabular-nums">100%</span>
            <span className="text-xs sm:text-sm font-medium text-slate-700">Asrama Terbina 24 Jam</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Pembiasaan adab & ibadah harian</p>
          </div>

          <div className="p-2 sm:p-3 border-l border-slate-200/70">
            <span className="block text-2xl sm:text-3xl font-extrabold text-blue-950 tabular-nums">STEM</span>
            <span className="text-xs sm:text-sm font-medium text-slate-700">Coding & Robotik Santri</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Logika komputasi sejak tingkat SMP</p>
          </div>

          <div className="p-2 sm:p-3 border-l border-slate-200/70">
            <span className="block text-2xl sm:text-3xl font-extrabold text-blue-950 tabular-nums">Global</span>
            <span className="text-xs sm:text-sm font-medium text-slate-700">English & Leadership</span>
            <p className="text-[11px] text-slate-500 mt-0.5">Komunikasi aktif & public speaking</p>
          </div>
        </div>

      </div>
    </section>
  );
}
