import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Search, Info, MessageSquare } from 'lucide-react';
import { faqList } from '../data/schoolData';
import { SchoolConfig } from '../types';
import { createWhatsAppUrl } from '../utils/whatsapp';

interface FAQSectionProps {
  config: SchoolConfig;
  onOpenConfig: () => void;
}

export default function FAQSection({ config, onOpenConfig }: FAQSectionProps) {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((item) => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFAQs = faqList.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
            <span>Tanya Jawab</span>
            <span className="text-amber-500" aria-hidden="true">·</span>
            <span>Telaga Al Kautsar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Pertanyaan yang Sering Diajukan (FAQ)
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-xl mx-auto" style={{ textWrap: 'balance' }}>
            Informasi lengkap seputar program pendidikan, sistem tahfidz, pendaftaran, dan fasilitas pesantren.
          </p>
        </div>

        {/* Search Input for Quick Finding */}
        <div className="relative mb-8 max-w-lg mx-auto">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari pertanyaan (misal: tahfidz, coding, pendaftaran)..."
            className="w-full pl-10 pr-4 py-3 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-700/30 focus:border-blue-700"
          />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFAQs.map((item) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-blue-700/30 bg-sky-50/25 shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-blue-900"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-sky-50 text-blue-900 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-4 h-4" />
                    </span>
                    <span className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div className="shrink-0 text-slate-400">
                    {isOpen ? <ChevronUp className="w-5 h-5 text-blue-900" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100/80 animate-fadeIn">
                    <p>{item.answer}</p>

                    {item.requiresOfficialNotice && (
                      <div className="mt-4 p-3 bg-amber-50/80 rounded-xl border border-amber-200/80 flex items-start justify-between gap-3 text-xs text-amber-900">
                        <div className="flex items-start gap-2">
                          <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                          <span>
                            <strong>[Catatan Administrator]:</strong> Data resmi alamat, jadwal gelombang, dan nomor kontak dapat disesuaikan sewaktu-waktu oleh panitia PPDB.
                          </span>
                        </div>
                        <button
                          onClick={onOpenConfig}
                          className="font-semibold text-blue-900 hover:underline shrink-0"
                        >
                          Ubah
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          {filteredFAQs.length === 0 && (
            <div className="text-center py-12 text-slate-500 text-sm">
              Tidak ada pertanyaan yang sesuai dengan kata kunci "{searchQuery}".
            </div>
          )}
        </div>

        {/* FAQ Footer Card */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <MessageSquare className="w-5 h-5 text-blue-900 shrink-0" />
            <div>
              <p className="text-sm font-bold text-slate-900">Punya Pertanyaan yang Belum Terjawab?</p>
              <p className="text-xs text-slate-500">Tim panitia PPDB kami dengan senang hati membantu Anda.</p>
            </div>
          </div>
          <a
            href={createWhatsAppUrl(
              config.whatsappNumber,
              "Assalamu'alaikum, saya ingin bertanya lebih lanjut mengenai PPDB Pesantren Tahfidz Telaga Al Kautsar."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-blue-900 hover:bg-blue-950 text-white rounded-lg text-xs font-semibold whitespace-nowrap transition-colors"
          >
            Tanya via WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
