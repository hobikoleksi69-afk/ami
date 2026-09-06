export interface CoreValueItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: 'Sprout' | 'Globe2' | 'Users2' | 'Zap' | 'Compass';
}

export interface PillarItem {
  id: string;
  name: string;
  tagline: string;
  colorName: 'hijau-tua' | 'hijau-sedang' | 'hijau-terang' | 'merah-aksen' | 'putih-netral';
  badgeBg: string;
  badgeText: string;
  cardBg: string;
  textColor: string;
  borderColor: string;
  iconName: 'GraduationCap' | 'HandHeart' | 'Lightbulb' | 'Megaphone' | 'Users';
  shortDesc: string;
  fullDesc: string;
  focusAreas: string[];
  keyPrograms: string[];
}

export interface YouthProgramItem {
  id: string;
  title: string;
  pillar: string;
  badge: string;
  duration: string;
  format: 'Bootcamp Daring' | 'Fellowship Tatap Muka' | 'Mentoring Intensif' | 'Proyek Lapangan';
  participants: string;
  description: string;
  curriculum: string[];
  status: 'Pendaftaran Dibuka' | 'Segera Hadir' | 'Sedang Berjalan';
  image: string;
}

export interface GrowthModuleItem {
  id: string;
  title: string;
  category: 'Kepemimpinan' | 'Proyek Sosial' | 'Ekonomi Kreatif' | 'Advokasi & Riset';
  pages: number;
  downloads: number;
  description: string;
  topics: string[];
  fileSize: string;
  publishedYear: string;
}

export interface YouthJournalItem {
  id: string;
  title: string;
  author: string;
  institution: string;
  category: 'Kebijakan Publik' | 'Inovasi Digital' | 'Pemberdayaan Pemuda' | 'Krisis Iklim';
  edition: string;
  date: string;
  abstract: string;
  downloads: number;
  doi: string;
}

export interface YouthWorkItem {
  id: string;
  title: string;
  creator: string;
  city: string;
  category: 'Startup Sosial' | 'UMKM Kreatif' | 'Media Edukasi' | 'Teknologi Komunitas';
  impact: string;
  description: string;
  image: string;
}

export interface StatMetricItem {
  id: string;
  label: string;
  targetValue: number;
  displayPrefix?: string;
  displaySuffix: string;
  sublabel: string;
}

export interface YouthTestimonialItem {
  id: string;
  name: string;
  role: string;
  organization: string;
  city: string;
  quote: string;
  avatar: string;
  level: 'Anggota' | 'Aktivis' | 'Penggerak';
}

export interface YouthCertificateRecord {
  certNumber: string;
  holderName: string;
  amiId: string;
  programTitle: string;
  level: 'Anggota' | 'Aktivis' | 'Penggerak';
  issueDate: string;
  status: 'Valid & Terverifikasi' | 'Tidak Ditemukan';
  skills: string[];
  organizer: string;
  verifiedHash: string;
}

export interface AmiMemberRegistration {
  fullName: string;
  email: string;
  whatsapp: string;
  city: string;
  province: string;
  campusOrCommunity: string;
  interestPillar: string;
  reasonToJoin: string;
}
