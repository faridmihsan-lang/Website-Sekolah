import { useState } from 'react';
import { X, CheckCircle, Send, Phone, User, School, Mail, Calendar } from 'lucide-react';
import { SchoolConfig, RegistrationApplication } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SchoolConfig;
}

export default function RegistrationModal({ isOpen, onClose, config }: RegistrationModalProps) {
  const [formData, setFormData] = useState<RegistrationApplication>({
    fullName: '',
    gender: 'Laki-laki',
    birthPlaceDate: '',
    previousSchool: '',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    address: '',
    programChoice: 'Tahfidz Al-Qur’an & Akademik Terpadu',
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [registrationCode, setRegistrationCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.parentName.trim() || !formData.parentPhone.trim()) {
      setErrorMsg('Mohon lengkapi Nama Calon Santri, Nama Orang Tua, dan Nomor WhatsApp aktif.');
      return;
    }

    // Generate simulated registration code
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const code = `PPDB-ALKAUTSAR-${randomDigits}`;
    setRegistrationCode(code);
    setIsSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const message = `*PENDAFTARAN SANTRI BARU PPDB ${config.academicYear}*
*Pesantren Tahfidz Telaga Al Kautsar*
-----------------------------------------
*Kode Registrasi:* ${registrationCode}
*Nama Calon Santri:* ${formData.fullName}
*Jenis Kelamin:* ${formData.gender}
*Tempat/Tgl Lahir:* ${formData.birthPlaceDate || '-'}
*Asal Sekolah:* ${formData.previousSchool || '-'}
*Program Diminati:* ${formData.programChoice}

*Data Orang Tua / Wali:*
*Nama Wali:* ${formData.parentName}
*No. WhatsApp:* ${formData.parentPhone}
*Email:* ${formData.parentEmail || '-'}
*Alamat Domisili:* ${formData.address || '-'}

*Catatan Tambahan:*
${formData.notes || 'Mohon informasi jadwal tes dan tahapan seleksi berikutnya.'}
-----------------------------------------
Bismillah, kami bermaksud mendaftarkan putra/putri kami. Mohon verifikasi panitia PPDB. Terima kasih.`;

    const url = createWhatsAppUrl(config.whatsappNumber, message);
    window.open(url, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setRegistrationCode('');
    setFormData({
      fullName: '',
      gender: 'Laki-laki',
      birthPlaceDate: '',
      previousSchool: '',
      parentName: '',
      parentPhone: '',
      parentEmail: '',
      address: '',
      programChoice: 'Tahfidz Al-Qur’an & Akademik Terpadu',
      notes: '',
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={handleReset}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-blue-950 text-white flex items-center justify-between shrink-0">
          <div>
            <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
              Formulir Pendaftaran Online
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              PPDB Santri Baru {config.academicYear}
            </h3>
            <p className="text-xs text-sky-100 mt-0.5">
              Pesantren Tahfidz Telaga Al Kautsar
            </p>
          </div>
          <button
            onClick={handleReset}
            className="p-2 rounded-full hover:bg-blue-900 text-white transition-colors"
            aria-label="Tutup formulir"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Confirmation view */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-sky-100 text-blue-900 mx-auto flex items-center justify-center">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-slate-900 mb-1">
                  Pendaftaran Berhasil Dikirim!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  Data awal calon santri telah tersimpan. Silakan simpan kode registrasi Anda dan teruskan konfirmasi ke WhatsApp Panitia PPDB.
                </p>
              </div>

              <div className="p-4 bg-sky-50 rounded-xl border border-sky-200 inline-block text-left w-full max-w-md">
                <div className="text-xs text-blue-900 font-semibold mb-1">Kode Registrasi Sementara:</div>
                <div className="text-xl font-mono font-bold text-blue-950 tracking-wider">
                  {registrationCode}
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Calon Santri: <span className="font-semibold text-slate-800">{formData.fullName}</span> ({formData.gender})
                </div>
                <div className="text-xs text-slate-500">
                  Wali Santri: <span className="font-semibold text-slate-800">{formData.parentName}</span> ({formData.parentPhone})
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
                <button
                  onClick={handleSendToWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-900 hover:bg-blue-950 text-white font-semibold rounded-xl shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Data ke WhatsApp Panitia</span>
                </button>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-3.5 text-slate-600 hover:bg-slate-100 rounded-xl text-sm font-medium border border-slate-200"
                >
                  Selesai & Tutup
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                  {errorMsg}
                </div>
              )}

              {/* Data Calon Santri */}
              <div>
                <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-sky-600" />
                  <span>A. Data Calon Santri</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Nama Lengkap Santri <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Contoh: Muhammad Fatih"
                      required
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Jenis Kelamin <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700 bg-white"
                    >
                      <option value="Laki-laki">Laki-laki (Ikhwan)</option>
                      <option value="Perempuan">Perempuan (Akhwat)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Tempat & Tanggal Lahir
                    </label>
                    <input
                      type="text"
                      name="birthPlaceDate"
                      value={formData.birthPlaceDate}
                      onChange={handleChange}
                      placeholder="Contoh: Bandung, 12 Mei 2013"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Asal Sekolah (SD/MI)
                    </label>
                    <input
                      type="text"
                      name="previousSchool"
                      value={formData.previousSchool}
                      onChange={handleChange}
                      placeholder="Contoh: SD Islam Terpadu / MI Al-Hikmah"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
                    />
                  </div>
                </div>
              </div>

              {/* Data Orang Tua */}
              <div className="pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-blue-950 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>B. Data Orang Tua / Wali</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Nama Orang Tua / Wali <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Nama Ayah / Ibu / Wali"
                      required
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      placeholder="Contoh: 081234567890"
                      required
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Alamat Email (Opsional)
                    </label>
                    <input
                      type="email"
                      name="parentEmail"
                      value={formData.parentEmail}
                      onChange={handleChange}
                      placeholder="contoh@gmail.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Alamat Domisili
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Kota / Kabupaten, Provinsi"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
                    />
                  </div>
                </div>
              </div>

              {/* Pilihan Program & Catatan */}
              <div className="pt-4 border-t border-slate-100">
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Fokus Minat Program Santri
                    </label>
                    <select
                      name="programChoice"
                      value={formData.programChoice}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700 bg-white"
                    >
                      <option value="Tahfidz Al-Qur’an & Akademik Terpadu">Tahfidz Al-Qur’an & Akademik SMP</option>
                      <option value="Tahfidz & Minat Coding/Robotik">Tahfidz & Minat Coding / Robotik</option>
                      <option value="Tahfidz & Minat Bahasa Inggris">Tahfidz & Minat Bahasa Inggris Intensif</option>
                      <option value="Tahfidz & Program Kepemimpinan">Tahfidz & Program Kepemimpinan Santri</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Pertanyaan atau Catatan Khusus untuk Panitia (Opsional)
                    </label>
                    <textarea
                      name="notes"
                      rows={2}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Tuliskan jika ada riwayat kesehatan khusus, target hafalan sebelumnya, atau pertanyaan..."
                      className="w-full px-3.5 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700 resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2.5 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-900 hover:bg-blue-950 rounded-lg shadow-sm transition-colors"
                >
                  Simpan & Dapatkan Kode PPDB
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
