import { useState } from 'react';
import { Eye, X } from 'lucide-react';
import { galleryPhotos } from '../data/schoolData';
import { GalleryPhoto } from '../types';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const categories = [
    'Semua',
    'Tahfidz',
    'Pembelajaran',
    'Coding & Robotik',
    'Kepemimpinan',
    'Kehidupan Santri',
  ];

  const filteredPhotos =
    activeCategory === 'Semua'
      ? galleryPhotos
      : galleryPhotos.filter((p) => p.category === activeCategory);

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-widest mb-3">
            <span>Dokumentasi Kegiatan</span>
            <span className="text-amber-500" aria-hidden="true">·</span>
            <span>Telaga Al Kautsar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4" style={{ textWrap: 'balance' }}>
            Galeri Kehidupan & Pembelajaran Santri
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Mengabadikan momen berharga santri dalam menghafal Al-Qur'an, menuntut ilmu sains, bereksperimen teknologi, dan mengasah jiwa kepemimpinan.
          </p>
        </div>

        {/* Category Filter Tabs (Interactive Segmented Control) */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1.5 bg-slate-200/70 rounded-xl max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === cat
                    ? 'bg-white text-blue-950 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-transform">
                    <Eye className="w-5 h-5" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-slate-950/70 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                  {photo.category}
                </div>
              </div>

              <div className="p-5 flex-grow flex flex-col justify-between">
                <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-900 transition-colors mb-1.5">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
            role="dialog"
            aria-modal="true"
            onClick={() => setSelectedPhoto(null)}
          >
            <div
              className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
                aria-label="Tutup foto"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full max-h-[65vh] bg-slate-950 flex items-center justify-center overflow-hidden">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-auto max-h-[65vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-6 bg-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-100">
                <div>
                  <div className="text-xs font-semibold text-blue-900 uppercase tracking-wider mb-1">
                    {selectedPhoto.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedPhoto.title}
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
                    {selectedPhoto.caption}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-lg border border-slate-200 shrink-0"
                >
                  Tutup Tampilan
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
