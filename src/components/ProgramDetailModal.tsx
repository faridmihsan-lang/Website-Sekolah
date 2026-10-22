import { X, CheckCircle2, Award, Sparkles, BookOpen } from 'lucide-react';
import { ProgramItem } from '../types';

interface ProgramDetailModalProps {
  program: ProgramItem | null;
  onClose: () => void;
  onOpenPPDB: () => void;
}

export default function ProgramDetailModal({ program, onClose, onOpenPPDB }: ProgramDetailModalProps) {
  if (!program) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-48 sm:h-64 w-full bg-slate-900 overflow-hidden shrink-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors"
            aria-label="Tutup detail program"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300">
              Program Unggulan Pesantren
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wide mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Deskripsi Kurikulum</span>
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {program.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
            {/* Highlights */}
            <div className="bg-sky-50/60 p-5 rounded-xl border border-sky-100">
              <h5 className="text-sm font-bold text-blue-950 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-600" />
                <span>Aktivitas Pembelajaran</span>
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {program.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 mt-0.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Outputs */}
            <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-100">
              <h5 className="text-sm font-bold text-amber-950 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-700" />
                <span>Target Capaian Santri</span>
              </h5>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                {program.targetOutputs.map((out, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            Tertarik dengan program ini? Daftarkan putra/putri Anda melalui PPDB.
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenPPDB();
              }}
              className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-lg transition-colors shadow-xs"
            >
              Daftar Program Ini
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
