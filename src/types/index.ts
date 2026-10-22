export interface SchoolConfig {
  name: string;
  tagline: string;
  level: string;
  academicYear: string;
  whatsappNumber: string; // e.g. "6281234567890"
  phoneDisplay: string;
  email: string;
  address: string;
  city: string;
  registrationStatus: 'Buka' | 'Segera Dibuka' | 'Ditutup';
}

export interface CoreValue {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  highlights: string[];
  targetOutputs: string[];
}

export interface AdvantageItem {
  title: string;
  description: string;
  iconName: string;
}

export interface MethodItem {
  number: string;
  title: string;
  description: string;
  implementation: string;
  iconName: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'Semua' | 'Tahfidz' | 'Pembelajaran' | 'Coding & Robotik' | 'Kepemimpinan' | 'Kehidupan Santri';
  image: string;
  caption: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  requiresOfficialNotice?: boolean;
}

export interface RegistrationApplication {
  fullName: string;
  gender: 'Laki-laki' | 'Perempuan';
  birthPlaceDate: string;
  previousSchool: string;
  parentName: string;
  parentPhone: string;
  parentEmail: string;
  address: string;
  programChoice: string;
  notes?: string;
  registrationNumber?: string;
  submittedAt?: string;
}
