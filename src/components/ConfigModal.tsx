import { useState } from 'react';
import { X, Save, RefreshCw, CheckCircle, Info } from 'lucide-react';
import { SchoolConfig } from '../types';
import { defaultSchoolConfig } from '../data/schoolData';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SchoolConfig;
  onSaveConfig: (updated: SchoolConfig) => void;
}

export default function ConfigModal({ isOpen, onClose, config, onSaveConfig }: ConfigModalProps) {
  const [formData, setFormData] = useState<SchoolConfig>(config);
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setIsSaved(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    setIsSaved(true);
    setTimeout(() => {
      setIsSaved(false);
      onClose();
    }, 1200);
  };

  const handleResetToDefault = () => {
    setFormData(defaultSchoolConfig);
    onSaveConfig(defaultSchoolConfig);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-blue-950 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
              Panel Pengaturan Resmi
            </span>
            <h3 className="text-lg font-bold text-white">
              Konfigurasi Data Kontak & PPDB
            </h3>
            <p className="text-xs text-blue-200">
              Perbarui nomor WhatsApp resmi, alamat pesantren, dan tahun ajaran
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-blue-900 text-slate-300 transition-colors"
            aria-label="Tutup pengaturan"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          <div className="p-3.5 bg-sky-50 rounded-xl border border-sky-200 flex items-start gap-2.5 text-xs text-sky-950">
            <Info className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" />
            <p>
              Perubahan pada form ini akan langsung diterapkan ke seluruh tombol <strong>WhatsApp PPDB</strong>, nomor telepon, dan alamat di halaman website. Data tersimpan di peramban Anda.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Nomor WhatsApp Resmi Sekolah (Contoh: 085295125156 atau 6285295125156)
              </label>
              <input
                type="text"
                name="whatsappNumber"
                value={formData.whatsappNumber}
                onChange={handleChange}
                placeholder="085295125156"
                required
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
              />
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                Tombol "Hubungi Admin", "Daftar PPDB", dan "Konsultasi WhatsApp" akan otomatis terhubung ke nomor ini.
              </span>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Tampilan Nomor Telepon di Halaman
              </label>
              <input
                type="text"
                name="phoneDisplay"
                value={formData.phoneDisplay}
                onChange={handleChange}
                placeholder="0852-9512-5156 (Panitia PPDB)"
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Tahun Ajaran PPDB
                </label>
                <input
                  type="text"
                  name="academicYear"
                  value={formData.academicYear}
                  onChange={handleChange}
                  placeholder="2025/2026"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Status Pendaftaran
                </label>
                <select
                  name="registrationStatus"
                  value={formData.registrationStatus}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700 bg-white"
                >
                  <option value="Buka">Buka (Pendaftaran Aktif)</option>
                  <option value="Segera Dibuka">Segera Dibuka</option>
                  <option value="Ditutup">Ditutup</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Alamat Pesantren
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Jl. Raya Pesantren Telaga Al Kautsar, ..."
                className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kota / Wilayah
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Jawa Barat, Indonesia"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Email Resmi
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ppdb@telagaalkautsar.sch.id"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
                />
              </div>
            </div>

            {isSaved && (
              <div className="p-2.5 bg-sky-100 text-sky-900 text-xs rounded-lg flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-blue-700" />
                <span>Pengaturan berhasil disimpan!</span>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={handleResetToDefault}
                className="text-xs text-slate-500 hover:text-slate-800 flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reset Standar</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Tutup
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-lg shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
