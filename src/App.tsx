import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import Programs from './components/Programs';
import Advantages from './components/Advantages';
import Methods from './components/Methods';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import PPDBSection from './components/PPDBSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';
import ConfigModal from './components/ConfigModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import { defaultSchoolConfig } from './data/schoolData';
import { SchoolConfig } from './types';

const STORAGE_KEY = 'telaga_alkautsar_config';

export default function App() {
  const [config, setConfig] = useState<SchoolConfig>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Automatically upgrade if holding previous dummy placeholder
        if (!parsed.whatsappNumber || parsed.whatsappNumber === '6281234567890' || parsed.whatsappNumber.includes('1234567890')) {
          parsed.whatsappNumber = defaultSchoolConfig.whatsappNumber;
          parsed.phoneDisplay = defaultSchoolConfig.phoneDisplay;
        }
        return { ...defaultSchoolConfig, ...parsed };
      }
    } catch {
      // ignore
    }
    return defaultSchoolConfig;
  });

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);

  const handleSaveConfig = (updated: SchoolConfig) => {
    setConfig(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const handleExplorePrograms = () => {
    const el = document.getElementById('program');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPPDB = () => {
    setIsRegisterModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans">
      {/* Sticky Top Navigation */}
      <Navbar
        config={config}
        onOpenPPDB={handleOpenPPDB}
        onOpenConfig={() => setIsConfigModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* A. Hero Section */}
        <Hero
          config={config}
          onOpenPPDB={handleOpenPPDB}
          onExplorePrograms={handleExplorePrograms}
        />

        {/* B. Profil Pesantren & 3 Nilai Utama */}
        <Profile onLearnMore={handleExplorePrograms} />

        {/* C. Program Unggulan */}
        <Programs onOpenPPDB={handleOpenPPDB} />

        {/* D. Keunggulan Pesantren (Mengapa Memilih Telaga Al Kautsar) */}
        <Advantages />

        {/* E. Empat Pendekatan Metode Pembelajaran */}
        <Methods />

        {/* F. Fasilitas Pesantren */}
        <Facilities />

        {/* G. Galeri Kegiatan Santri */}
        <Gallery />

        {/* H. Penerimaan Santri Baru (PPDB Section) */}
        <PPDBSection
          config={config}
          onOpenRegisterModal={handleOpenPPDB}
          onOpenConfig={() => setIsConfigModalOpen(true)}
        />

        {/* I. Pertanyaan yang Sering Diajukan (FAQ Accordion) */}
        <FAQSection
          config={config}
          onOpenConfig={() => setIsConfigModalOpen(true)}
        />
      </main>

      {/* J. Footer */}
      <Footer
        config={config}
        onOpenConfig={() => setIsConfigModalOpen(true)}
        onOpenPPDB={handleOpenPPDB}
      />

      {/* Modals & Floating Direct Contact */}
      <RegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        config={config}
      />

      <ConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />

      <FloatingWhatsApp config={config} />
    </div>
  );
}
