import {
  SchoolConfig,
  CoreValue,
  ProgramItem,
  AdvantageItem,
  MethodItem,
  FacilityItem,
  GalleryPhoto,
  FAQItem
} from '../types';

export const defaultSchoolConfig: SchoolConfig = {
  name: 'Pesantren Tahfidz Telaga Al Kautsar',
  tagline: 'Menjadi Generasi Qur’ani, Pemimpin Masa Depan',
  level: 'Pendidikan Tingkat SMP Berbasis Pesantren Modern & Tahfidz',
  academicYear: '2025/2026',
  whatsappNumber: '6285295125156', // No WhatsApp Resmi Panitia PPDB: 085295125156
  phoneDisplay: '0852-9512-5156 (Panitia PPDB)',
  email: 'ppdb@telagaalkautsar.sch.id',
  address: 'Jl. Raya Pesantren Telaga Al Kautsar, Kawasan Pendidikan Asri',
  city: 'Jawa Barat, Indonesia',
  registrationStatus: 'Buka',
};

export const coreValues: CoreValue[] = [
  {
    id: 'qurani',
    title: 'Qur’ani',
    tagline: 'Kecintaan Terhadap Al-Qur’an',
    description: 'Menanamkan kecintaan, hafalan, pemahaman, dan pengamalan nilai-nilai Al-Qur’an dalam setiap helaan nafas kehidupan santri.',
    iconName: 'BookOpen',
  },
  {
    id: 'berkarakter',
    title: 'Berkarakter',
    tagline: 'Disiplin, Tanggung Jawab & Adab',
    description: 'Membangun akhlakul karimah, keteguhan integritas, adab santri, serta jiwa kepemimpinan mandiri yang siap menjadi teladan umat.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'adaptif',
    title: 'Adaptif',
    tagline: 'Keterampilan Abad ke-21 & Teknologi',
    description: 'Mengenalkan keterampilan teknologi masa depan, logika komputasi, dan kecakapan global agar santri berdaya saing tinggi.',
    iconName: 'Cpu',
  },
];

export const programs: ProgramItem[] = [
  {
    id: 'tahfidz',
    title: 'Tahfidz Al-Qur’an',
    shortDesc: 'Membimbing santri dalam menghafal, menjaga, dan mencintai Al-Qur\'an melalui pembelajaran yang terarah.',
    fullDesc: 'Program Tahfidz Al-Qur’an di Telaga Al Kautsar dirancang dengan metodologi terarah, mutqin, dan ramah anak. Santri dibimbing secara intensif oleh asatidz pembimbing dengan target hafalan bertahap, perbaikan tahsin/tajwid bersanad, serta penanaman adab hamilul Qur’an.',
    iconName: 'BookMarked',
    image: '/src/assets/images/tahfidz_quran_session_1792630641459.jpg',
    highlights: [
      'Bimbingan talaqqi & tahsin intensif setiap hari',
      'Target hafalan bertahap dengan evaluasi mutqin terukur',
      'Lingkungan asrama yang sarat lantunan ayat suci Al-Qur\'an',
      'Tasmi\' hafalan berkala disaksikan orang tua santri'
    ],
    targetOutputs: [
      'Memiliki hafalan Al-Qur\'an yang mutqin dan tajwid yang fasih',
      'Mencintai membaca dan mengamalkan nilai Al-Qur\'an',
      'Mencapai target hafalan minimal 5 juz mutqin selama jenjang SMP'
    ]
  },
  {
    id: 'kepemimpinan',
    title: 'Kurikulum Kepemimpinan',
    shortDesc: 'Mengembangkan kepercayaan diri, komunikasi, tanggung jawab, kerja sama, dan kemampuan mengambil keputusan.',
    fullDesc: 'Menjawab tantangan zaman, kurikulum kepemimpinan mengasah santri agar tidak hanya pandai beribadah tetapi juga cakap memimpin. Melalui simulasi organisasi santri, public speaking (muhadharah 3 bahasa), kemandirian asrama, dan outbound kepemimpinan.',
    iconName: 'Users',
    image: '/src/assets/images/santri_leadership_1792630642574.jpg',
    highlights: [
      'Latihan public speaking dan pidato berkala (Indonesia, Arab, Inggris)',
      'Organisasi Santri dan manajemen kepanitiaan mandiri',
      'Pendidikan adab kepemimpinan berlandaskan sirah nabawiyah',
      'Kemah ukhuwah dan character building di alam terbuka'
    ],
    targetOutputs: [
      'Memiliki kepercayaan diri tinggi di depan forum publik',
      'Mampu bekerja sama dan memimpin kelompok dengan bijaksana',
      'Mandiri dalam mengelola waktu, kebutuhan, dan tanggung jawab'
    ]
  },
  {
    id: 'coding-robotik',
    title: 'Pembelajaran Coding dan Robotik',
    shortDesc: 'Mengenalkan logika komputasi, pemrograman, kreativitas, dan pemecahan masalah melalui kegiatan teknologi yang menarik.',
    fullDesc: 'Kami membekali santri dengan literasi teknologi terkini. Santri mempelajari dasar pemrograman, logika algoritma komputasi, perakitan mikrokontroler robotik dasar, dan pemanfaatan teknologi secara beradab dan produktif.',
    iconName: 'Laptop',
    image: '/src/assets/images/coding_robotics_lab_1792630642402.jpg',
    highlights: [
      'Pengenalan computational thinking & visual block coding',
      'Praktik perakitan sensor dan robotik edukatif terarah',
      'Proyek aplikasi kreatif berbasis pemecahan masalah nyata',
      'Bimbingan etika digital Islami dalam pemanfaatan teknologi'
    ],
    targetOutputs: [
      'Memahami logika algoritma dan dasar pemrograman terstruktur',
      'Mampu merakit prototipe robotika sederhana',
      'Kreatif dan melek teknologi tanpa kehilangan jati diri santri'
    ]
  },
  {
    id: 'bahasa-inggris',
    title: 'Pembelajaran Bahasa Inggris Intensif',
    shortDesc: 'Mengembangkan kemampuan berkomunikasi dalam bahasa Inggris melalui latihan dan pembelajaran yang terstruktur.',
    fullDesc: 'Mengembangkan kemampuan berkomunikasi santri dalam bahasa internasional melalui pembiasaan harian, listening, speaking club, vocabulary building tematik, dan English Day terstruktur di lingkungan pesantren.',
    iconName: 'Languages',
    image: '/src/assets/images/pesantren_campus_life_1792630642572.jpg',
    highlights: [
      'Daily conversation & vocabulary habituation',
      'English Speech, Storytelling, and Drama contest',
      'Modul pembelajaran interaktif berstandar komunikatif',
      'Pendampingan tutor dan pembiasaan English Area di asrama'
    ],
    targetOutputs: [
      'Percaya diri bercakap-cakap dalam bahasa Inggris sehari-hari',
      'Memiliki perbendaharaan kata dan pemahaman bacaan yang kuat',
      'Siap menghadapi kompetisi akademik dan jenjang pendidikan global'
    ]
  }
];

export const advantages: AdvantageItem[] = [
  {
    title: 'Pendidikan Al-Qur\'an sebagai Fondasi Utama',
    description: 'Seluruh proses pendidikan, adab, dan pembentukan karakter santri berakar dari nilai-nilai luhur Al-Qur\'anul Karim.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Pengembangan Jiwa Kepemimpinan & Kemandirian',
    description: 'Santri dilatih bertanggung jawab atas diri sendiri, mengelola dinamika sosial asrama, dan memimpin kelompok secara santun.',
    iconName: 'Compass'
  },
  {
    title: 'Pengenalan Coding & Robotik Sejak Dini',
    description: 'Mempersiapkan santri sebagai talenta Muslim masa depan yang menguasai teknologi dan logika komputasi abad ke-21.',
    iconName: 'Binary'
  },
  {
    title: 'Pembelajaran Bahasa Inggris Secara Intensif',
    description: 'Membangun kepercayaan diri santri dalam berdialog dan berwawasan internasional melalui lingkungan berbahasa aktif.',
    iconName: 'Globe'
  },
  {
    title: 'Lingkungan Pendidikan Asri & Mendukung',
    description: 'Ekosistem pesantren yang tenang, asri, aman, dan penuh keteladanan ustaz-ustadzah yang mendampingi santri 24 jam.',
    iconName: 'Trees'
  }
];

export const learningMethods: MethodItem[] = [
  {
    number: '01',
    title: 'Pembelajaran Terarah',
    description: 'Materi pelajaran dan tahfidz disusun dengan silabus terstruktur, target capaian berkala, dan evaluasi berkelanjutan oleh dewan asatidz.',
    implementation: 'Bimbingan terfokus pada target hafalan & kurikulum nasional yang seimbang.',
    iconName: 'Target'
  },
  {
    number: '02',
    title: 'Praktik dan Proyek',
    description: 'Santri tidak hanya menerima teori di kelas, melainkan aktif terlibat dalam eksperimen coding, rakitan robotik, presentasi, dan karya nyata.',
    implementation: 'Laboratorium praktik langsung, studi kasus, serta unjuk karya santri.',
    iconName: 'Boxes'
  },
  {
    number: '03',
    title: 'Pembiasaan Karakter',
    description: 'Pendidikan karakter ditanamkan melalui pembiasaan hidup berjamaah, shalat tepat waktu, tilawah harian, adab sopan santun, dan gotong royong.',
    implementation: 'Pendampingan asrama 24 jam dengan atmosfer keteladanan islami.',
    iconName: 'Sparkles'
  },
  {
    number: '04',
    title: 'Pengembangan Potensi Individu',
    description: 'Setiap anak memiliki keunikan fitrah. Kami mendampingi minat bakat santri baik di bidang tahfidz, sains teknologi, kepemimpinan, maupun bahasa.',
    implementation: 'Konsultasi berkala perkembangan santri bersama wali santri.',
    iconName: 'UserCheck'
  }
];

export const facilities: FacilityItem[] = [
  {
    id: 'masjid',
    title: 'Masjid Jami’ Al Kautsar',
    description: 'Pusat spiritual, shalat fardhu berjamaah, halaqah tahfidz Al-Qur’an, dan kajian adab dengan kapasitas yang luas dan sejuk.',
    category: 'Spiritual'
  },
  {
    id: 'asrama',
    title: 'Asrama Santri Terbina',
    description: 'Hunian asrama yang bersih, ventilasi udara alami yang segar, tempat tidur individu, lemari pribadi, dan diawasi musyrif 24 jam.',
    category: 'Hunian'
  },
  {
    id: 'lab-coding',
    title: 'Laboratorium Coding & Robotik',
    description: 'Dilengkapi perangkat komputer modern, kit mikrokontroler edukasi, dan proyektor interaktif untuk eksplorasi teknologi.',
    category: 'Akademik'
  },
  {
    id: 'perpustakaan',
    title: 'Perpustakaan & Ruang Baca',
    description: 'Koleksi literatur Islam klasik, mushaf Al-Qur’an, buku sains teknologi, serta ruang tenang untuk membaca santri.',
    category: 'Literasi'
  },
  {
    id: 'kelas-ac',
    title: 'Ruang Kelas Multimedia Ber-AC',
    description: 'Ruang belajar nyaman dengan rasio santri ideal per kelas sehingga interaksi belajar mengajar berlangsung optimal.',
    category: 'Akademik'
  },
  {
    id: 'olahraga',
    title: 'Lapangan Olahraga & Area Terbuka',
    description: 'Fasilitas olahraga futsal, basket, bulutangkis, panahan, dan taman hijau untuk menjaga kebugaran jasmani santri.',
    category: 'Jasmani'
  }
];

export const galleryPhotos: GalleryPhoto[] = [
  {
    id: 'g1',
    title: 'Halaqah Tahfidz Pagi',
    category: 'Tahfidz',
    image: '/src/assets/images/tahfidz_quran_session_1792630641459.jpg',
    caption: 'Santri menyimak dan menyetorkan hafalan Al-Qur\'an secara tartil dalam halaqah pagi penuh berkah.'
  },
  {
    id: 'g2',
    title: 'Praktik Perakitan Robotik Edukasi',
    category: 'Coding & Robotik',
    image: '/src/assets/images/coding_robotics_lab_1792630642402.jpg',
    caption: 'Kolaborasi santri memprogram sensor gerak dan mikrokontroler di lab teknologi masa depan.'
  },
  {
    id: 'g3',
    title: 'Latihan Muhadharah & Pidato Santri',
    category: 'Kepemimpinan',
    image: '/src/assets/images/santri_leadership_1792630642574.jpg',
    caption: 'Membangun ketangguhan mental, adab bicara, dan retorika kepemimpinan santri di forum terbuka.'
  },
  {
    id: 'g4',
    title: 'Kawasan Kampus Hijau & Tenang',
    category: 'Kehidupan Santri',
    image: '/src/assets/images/hero_pesantren_campus_1792630643711.jpg',
    caption: 'Lingkungan pesantren yang asri dan sejuk mendukung konsentrasi belajar serta ketenangan hati santri.'
  },
  {
    id: 'g5',
    title: 'Aktivitas Belajar & Berdiskusi',
    category: 'Pembelajaran',
    image: '/src/assets/images/pesantren_campus_life_1792630642572.jpg',
    caption: 'Suasana santri berjalan bersama mendiskusikan materi pelajaran menuju ruang kelas multimedia.'
  },
  {
    id: 'g6',
    title: 'Mudzakarah Hafalan Al-Qur\'an',
    category: 'Tahfidz',
    image: '/src/assets/images/tahfidz_quran_session_1792630641459.jpg',
    caption: 'Muroja\'ah mandiri berpasangan santri untuk memperkuat kelancaran hafalan surat Al-Qur\'an.'
  }
];

export const faqList: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Apa saja program unggulan Telaga Al Kautsar?',
    answer: 'Telaga Al Kautsar memiliki empat program unggulan utama: (1) Tahfidz Al-Qur\'an dengan metode terarah dan bimbingan mutqin, (2) Kurikulum Kepemimpinan untuk melatih karakter dan public speaking, (3) Pembelajaran Coding dan Robotik untuk membekali santri keterampilan abad 21, dan (4) Pembelajaran Bahasa Inggris intensif melalui pembiasaan dialog harian.'
  },
  {
    id: 'faq-2',
    question: 'Bagaimana sistem pembelajaran tahfidz di Telaga Al Kautsar?',
    answer: 'Pembelajaran tahfidz dilaksanakan secara terarah dengan rasio santri per halaqah yang proporsional. Santri mendapatkan pembinaan tahsin makharijul huruf, setoran hafalan baru (ziyadah) di pagi hari, serta muroja\'ah mutqin berkala di sore dan malam hari dengan monitoring buku saku tahfidz santri.'
  },
  {
    id: 'faq-3',
    question: 'Apakah santri belajar coding dan robotik?',
    answer: 'Ya, seluruh santri mendapatkan pembelajaran coding dan robotik secara terstruktur di laboratorium komputer. Materi disesuaikan dengan tingkat usia santri SMP, mulai dari computational thinking, pemrograman visual/blok, perakitan dasar robotik edukatif, hingga perancangan proyek kreatif.'
  },
  {
    id: 'faq-4',
    question: 'Bagaimana pembelajaran bahasa Inggris dilaksanakan?',
    answer: 'Pembelajaran bahasa Inggris dilaksanakan terstruktur melalui kelas formal, kelas percakapan (speaking club), English Day berkala di asrama, serta pembiasaan kosakata harian tematik agar santri terbiasa dan percaya diri berbicara dalam bahasa Inggris.'
  },
  {
    id: 'faq-5',
    question: 'Bagaimana cara mendaftar sebagai santri baru (PPDB)?',
    answer: 'Pendaftaran dapat dilakukan secara online melalui tombol "Daftar PPDB" di website ini atau langsung menghubungi nomor WhatsApp resmi panitia PPDB. Alur pendaftaran mencakup pengisian formulir, penyerahan berkas persyaratan, tes seleksi (tahsin, baca Al-Qur\'an, & wawancara), serta konfirmasi kelulusan.',
    requiresOfficialNotice: true
  },
  {
    id: 'faq-6',
    question: 'Di mana lokasi pesantren?',
    answer: 'Pesantren Tahfidz Telaga Al Kautsar berada di kawasan pendidikan yang tenang, asri, dan representatif untuk iklim belajar santri. Informasi alamat lengkap, rute transportasi, dan jadwal kunjungan survei pesantren (open house) dapat dikonfirmasi langsung ke kontak sekretariat panitia.',
    requiresOfficialNotice: true
  },
  {
    id: 'faq-7',
    question: 'Bagaimana cara menghubungi panitia PPDB?',
    answer: 'Bapak/Ibu calon wali santri dapat menghubungi panitia PPDB melalui WhatsApp resmi yang tertera di tombol kontak website, telepon sekretariat, maupun melalui formulir pesan cepat yang tersedia pada halaman pendaftaran.',
    requiresOfficialNotice: true
  }
];

export const ppdbSteps = [
  {
    step: '1',
    title: 'Pendaftaran & Formulir',
    desc: 'Mengisi formulir pendaftaran santri baru secara online melalui website ini atau melalui layanan WhatsApp panitia.'
  },
  {
    step: '2',
    title: 'Verifikasi Berkas',
    desc: 'Melengkapi berkas administrasi: fotokopi akta kelahiran, kartu keluarga, rapor kelas 4-6 SD/MI, serta pasfoto calon santri.'
  },
  {
    step: '3',
    title: 'Observasi & Tes Seleksi',
    desc: 'Mengikuti tes kemampuan baca Al-Qur\'an dasar/tahsin, tes potensi akademik, serta wawancara komitmen calon santri dan orang tua.'
  },
  {
    step: '4',
    title: 'Pengumuman Kelulusan',
    desc: 'Pengumuman hasil seleksi disampaikan secara resmi melalui WhatsApp dan surat elektronik kepada orang tua santri.'
  },
  {
    step: '5',
    title: 'Daftar Ulang & Orientasi',
    desc: 'Penyelesaian administrasi daftar ulang, fitting seragam santri, dan menghadiri pertemuan silaturahmi orientasi santri baru.'
  }
];

export const ppdbRequirements = [
  'Lulusan SD / MI / sederajat atau siswa tingkat akhir kelas 6',
  'Mengisi formulir pendaftaran online secara lengkap dan benar',
  'Salinan Akta Kelahiran dan Kartu Keluarga (KK) calon santri (2 lembar)',
  'Salinan Ijazah SD/MI atau Surat Keterangan Lulus dari sekolah asal (menyusul jika belum terbit)',
  'Salinan Rapor SD/MI kelas 4, 5, dan 6 (semester 1)',
  'Pasfoto santri ukuran 3x4 berwarna dengan latar belakang merah/biru (4 lembar)',
  'Surat keterangan sehat dari dokter / puskesmas',
  'Memiliki tekad kuat dan kesediaan belajar Al-Qur\'an serta mentaati tata tertib pesantren'
];

export const ppdbScheduleNote = {
  badge: 'PPDB Resmi',
  academicYear: '2025/2026',
  wave1: {
    name: 'Gelombang I',
    period: 'Oktober — Desember',
    status: 'Sedang Berlangsung',
    quota: 'Kuota Terbatas'
  },
  wave2: {
    name: 'Gelombang II',
    period: 'Januari — Maret',
    status: 'Dibuka jika kuota masih tersedia',
    quota: 'Sisa Kuota'
  },
  note: '*Jadwal resmi, kuota gelombang, dan penyesuaian tanggal pendaftaran dapat dikonfirmasi langsung kepada panitia PPDB.'
};
