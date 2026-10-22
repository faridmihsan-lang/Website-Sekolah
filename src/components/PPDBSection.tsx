import { useState } from 'react';
import {
  Calendar,
  FileText,
  Phone,
  MessageCircle,
  HelpCircle,
  Clock,
  ArrowRight,
  Info,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { SchoolConfig } from '../types';
import { ppdbSteps, ppdbRequirements, ppdbScheduleNote } from '../data/schoolData';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface PPDBSectionProps {
  config: SchoolConfig;
  onOpenRegisterModal: () => void;
  onOpenConfig: () => void;
}

export default function PPDBSection({ config, onOpenRegisterModal, onOpenConfig }: PPDBSectionProps) {
  const [activeTab, setActiveTab] = useState<'alur' | 'jadwal' | 'syarat' | 'biaya'>('alur');

  const handleWhatsAppContact = () => {
    const message = `Assalamu'alaikum Warahmatullahi Wabarakatuh.
Panitia PPDB Pesantren Tahfidz Telaga Al Kautsar, mohon informasi mengenai Penerimaan Santri Baru untuk Tahun Ajaran ${config.academicYear}. Terima kasih.`;
    const url = createWhatsAppUrl(config.whatsappNumber, message);
    window.open(url, '_blank');
  };

  return (
    <section id="ppdb" className="py-20 lg:py-28 bg-blue-950 text-white relative overflow-hidden">
      {/* Background Islamic Subtle Pattern */}
      <div className="absolute inset-0 bg-islamic-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headline */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Penerimaan Santri Baru (PPDB)</span>
            <span aria-hidden="true">•</span>
            <span>Tahun Ajaran {config.academicYear}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5" style={{ textWrap: 'balance' }}>
            Langkah Pertama Menuju Masa Depan yang Lebih Bermakna.
          </h2>

          <p className="text-base sm:text-lg text-sky-100/90 leading-relaxed max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Bergabunglah bersama Telaga Al Kautsar dan tumbuh menjadi generasi Qur'ani yang berakhlak, berjiwa pemimpin, serta siap menghadapi tantangan masa depan.
          </p>

          {/* Dual Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenRegisterModal}
              className="px-7 py-3.5 bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold rounded-xl shadow-lg transition-all focus-visible:outline-2 focus-visible:outline-amber-400 inline-flex items-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <span>Daftar Sekarang (Online)</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleWhatsAppContact}
              className="px-6 py-3.5 bg-blue-900/90 hover:bg-blue-900 text-white font-semibold rounded-xl border border-blue-700/60 shadow-md transition-all focus-visible:outline-2 focus-visible:outline-blue-500 inline-flex items-center gap-2 text-sm sm:text-base cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 text-sky-300" />
              <span>Hubungi Admin (WhatsApp)</span>
            </button>
          </div>
        </div>

        {/* Interactive Tabs Strip (Allowed interactive filter/segmented controls per design constitution) */}
        <div className="flex items-center justify-center mb-8 overflow-x-auto pb-2">
          <div className="inline-flex p-1 bg-blue-900/80 rounded-xl border border-blue-800/70">
            <button
              onClick={() => setActiveTab('alur')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'alur'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                  : 'text-sky-200 hover:text-white'
              }`}
            >
              Alur Pendaftaran
            </button>
            <button
              onClick={() => setActiveTab('jadwal')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'jadwal'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                  : 'text-sky-200 hover:text-white'
              }`}
            >
              Jadwal & Gelombang
            </button>
            <button
              onClick={() => setActiveTab('syarat')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'syarat'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                  : 'text-sky-200 hover:text-white'
              }`}
            >
              Persyaratan Berkas
            </button>
            <button
              onClick={() => setActiveTab('biaya')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                activeTab === 'biaya'
                  ? 'bg-amber-400 text-slate-950 font-bold shadow-xs'
                  : 'text-sky-200 hover:text-white'
              }`}
            >
              Investasi Pendidikan
            </button>
          </div>
        </div>

        {/* Tab 1: Alur Pendaftaran */}
        {activeTab === 'alur' && (
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  5 Langkah Alur Pendaftaran Santri Baru
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Proses seleksi transparan dan terarah untuk memastikan kesiapan belajar ananda di pesantren.
                </p>
              </div>
              <button
                onClick={onOpenRegisterModal}
                className="px-4 py-2 text-xs font-semibold text-blue-950 bg-sky-100 hover:bg-sky-200 rounded-lg transition-colors whitespace-nowrap shrink-0"
              >
                Mulai Langkah 1 Sekarang
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 relative">
              {ppdbSteps.map((s, idx) => (
                <div
                  key={s.step}
                  className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between relative group hover:border-blue-700/40 hover:bg-sky-50/30 transition-all"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-blue-950 text-white font-bold flex items-center justify-center text-sm mb-3">
                      {s.step}
                    </div>
                    <h4 className="font-bold text-slate-900 text-sm mb-2 leading-snug">
                      {s.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-medium text-blue-900">
                    Tahap 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 2: Jadwal & Gelombang */}
        {activeTab === 'jadwal' && (
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200 animate-fadeIn">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Jadwal & Gelombang Pendaftaran
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran {config.academicYear}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Gelombang 1 */}
              <div className="p-6 rounded-xl bg-sky-50/60 border border-sky-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-blue-950 uppercase tracking-wider">
                    {ppdbScheduleNote.wave1.name}
                  </span>
                  <span className="text-xs font-semibold text-blue-900 bg-sky-100 px-2.5 py-1 rounded-md">
                    {ppdbScheduleNote.wave1.status}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Periode: {ppdbScheduleNote.wave1.period}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  Prioritas penempatan kamar asrama, fitting seragam perdana, dan observasi awal santri.
                </p>
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-sky-700" />
                  <span>{ppdbScheduleNote.wave1.quota}</span>
                </div>
              </div>

              {/* Gelombang 2 */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    {ppdbScheduleNote.wave2.name}
                  </span>
                  <span className="text-xs font-medium text-slate-600 bg-slate-200 px-2.5 py-1 rounded-md">
                    Tahap Lanjutan
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Periode: {ppdbScheduleNote.wave2.period}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 mb-4">
                  {ppdbScheduleNote.wave2.status}. Seleksi berkas dan tes wawancara gelombang kedua.
                </p>
                <div className="text-xs text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-600" />
                  <span>{ppdbScheduleNote.wave2.quota}</span>
                </div>
              </div>
            </div>

            {/* Designated marker for administrator personalization */}
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 flex items-start gap-3">
              <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-900">
                <span className="font-semibold block mb-0.5">[Penanda Resmi Panitia PPDB]:</span>
                Jadwal gelombang, tanggal tes seleksi, dan kuota penerimaan dapat berubah sewaktu-waktu sesuai keputusan dewan pesantren. Silakan konfirmasi update tanggal terkini via WhatsApp panitia.
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Persyaratan Berkas */}
        {activeTab === 'syarat' && (
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200 animate-fadeIn">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Persyaratan Calon Santri Baru
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Dokumen dan kriteria administrasi yang perlu disiapkan oleh calon wali santri.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ppdbRequirements.map((req, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 leading-snug">
                    {req}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-slate-500">
                Berkas fisik diserahkan saat pelaksanaan tes observasi langsung di pesantren.
              </p>
              <button
                onClick={onOpenRegisterModal}
                className="w-full sm:w-auto px-5 py-2.5 bg-blue-900 text-white rounded-lg text-xs font-semibold hover:bg-blue-950 transition-colors"
              >
                Isi Formulir Berkas Awal
              </button>
            </div>
          </div>
        )}

        {/* Tab 4: Investasi Pendidikan / Biaya */}
        {activeTab === 'biaya' && (
          <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  Investasi Pendidikan & Transparansi Biaya
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Komponen pembiayaan pendidikan santri untuk operasional asrama dan sarana belajar.
                </p>
              </div>
              <button
                onClick={handleWhatsAppContact}
                className="px-4 py-2 text-xs font-semibold text-blue-950 bg-sky-100 hover:bg-sky-200 rounded-lg transition-colors whitespace-nowrap"
              >
                Konsultasi Rincian Biaya
              </button>
            </div>

            {/* Designated notice for official pricing */}
            <div className="p-4 bg-sky-50/80 rounded-xl border border-sky-200 mb-6 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
              <div className="text-xs text-blue-950 leading-relaxed">
                <span className="font-semibold block mb-0.5">[Informasi Resmi Biaya Pendidikan]:</span>
                Sesuai ketentuan transparansi sekolah, rincian biaya resmi (Infaq Pengembangan Pendidikan, SPP Bulanan berasrama, buku ajar, dan seragam) diberikan dalam bentuk surat rincian resmi oleh panitia PPDB melalui WhatsApp atau saat kunjungan pesantren. Tidak ada pungutan tersembunyi.
              </div>
            </div>

            {/* Transparent breakdown overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Komponen 01</span>
                <h4 className="font-bold text-slate-900 text-base mb-2">Biaya Pendaftaran & Seleksi</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Meliputi formulir pendaftaran online, pelaksanaan tes tahsin Al-Qur'an, tes potensi akademik, dan wawancara orang tua.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Komponen 02</span>
                <h4 className="font-bold text-slate-900 text-base mb-2">Daftar Ulang & Fasilitas Santri</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Infaq sarana prasarana, perlengkapan asrama, paket seragam lengkap santri, modul tahfidz, dan kartu santri.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-xs font-semibold text-slate-500 block mb-1">Komponen 03</span>
                <h4 className="font-bold text-slate-900 text-base mb-2">Iuran Bulanan (SPP & Asrama)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Mencakup makan 3x sehari bergizi higienis, laundry pakaian seragam, pembinaan tahfidz 24 jam, dan kurikulum SMP.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Banner Bar */}
        <div className="mt-10 p-6 sm:p-8 bg-blue-900/70 rounded-2xl border border-blue-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-950 flex items-center justify-center text-amber-400 shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Butuh Bantuan atau Informasi Terperinci?</h4>
              <p className="text-xs sm:text-sm text-sky-200">
                Sekretariat PPDB kami siap melayani pertanyaan seputar kurikulum, survei lokasi, dan kuota.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={handleWhatsAppContact}
              className="w-full md:w-auto px-5 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-blue-950" />
              <span>Chat WhatsApp Panitia</span>
            </button>
            <button
              onClick={onOpenConfig}
              className="p-3 text-sky-300 hover:text-white hover:bg-blue-800 rounded-xl transition-colors shrink-0"
              title="Sesuaikan Nomor Kontak Panitia"
              aria-label="Pengaturan nomor panitia"
            >
              <span className="text-xs font-semibold underline">Ubah Kontak</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
