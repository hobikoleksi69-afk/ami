import {
  CoreValueItem,
  PillarItem,
  YouthProgramItem,
  GrowthModuleItem,
  YouthJournalItem,
  YouthWorkItem,
  StatMetricItem,
  YouthTestimonialItem,
  YouthCertificateRecord,
} from './types';

export const coreValuesData: CoreValueItem[] = [
  {
    id: 'val-tumbuh',
    title: 'Tumbuh',
    subtitle: 'Pengembangan Berkelanjutan',
    description:
      'Kami percaya setiap anak muda berhak atas ruang eksplorasi diri, peningkatan keterampilan abad ke-21, dan pembentukan karakter kepemimpinan yang tangguh.',
    iconName: 'Sprout',
  },
  {
    id: 'val-inklusif',
    title: 'Inklusif',
    subtitle: 'Terbuka untuk Semua',
    description:
      'Ruang aman tanpa sekat sosial, geografis, gender, atau latar belakang pendidikan. Seluruh pemuda dari pelosok desa hingga kota metropolitan dirangkul setara.',
    iconName: 'Globe2',
  },
  {
    id: 'val-kolaboratif',
    title: 'Kolaboratif',
    subtitle: 'Sinergi Lintas Sektor',
    description:
      'Lompatan perubahan tidak terjadi sendirian. Kami menghubungkan pemuda dengan komunitas kampus, profesional industri, dan jejaring pembuat kebijakan.',
    iconName: 'Users2',
  },
  {
    id: 'val-berdampak',
    title: 'Berdampak',
    subtitle: 'Solusi Nyata & Konkret',
    description:
      'Bukan sekadar wacana atau euforia sesaat. Setiap program dan inisiatif AMI memiliki indikator capaian terukur yang menjawab persoalan riil masyarakat.',
    iconName: 'Zap',
  },
  {
    id: 'val-nasionalis',
    title: 'Nasionalis',
    subtitle: 'Berakar pada Kebangsaan',
    description:
      'Cinta tanah air yang diwujudkan lewat karya konkret, integritas moral, serta dedikasi untuk memperkuat persatuan dan kemajuan bangsa Indonesia.',
    iconName: 'Compass',
  },
];

export const pillarsData: PillarItem[] = [
  {
    id: 'pilar-belajar',
    name: 'AMI Belajar',
    tagline: 'Edukasi, Pelatihan, dan Literasi Masa Depan',
    colorName: 'hijau-tua',
    badgeBg: '#1B5E3A',
    badgeText: '#FFFFFF',
    cardBg: '#1B5E3A',
    textColor: '#FFFFFF',
    borderColor: '#2E9E5B',
    iconName: 'GraduationCap',
    shortDesc: 'Edukasi, pelatihan kepemimpinan, dan literasi digital berjenjang.',
    fullDesc:
      'Pilar yang memfokuskan diri pada penguatan kapasitas intelegensi dan kompetensi praktis pemuda melalui bootcamp keahlian, kelas literasi finansial, workshop AI & teknologi, hingga kepemimpinan publik.',
    focusAreas: ['Literasi Digital & AI', 'Bootcamp Skill Praktis', 'Leadership Academy', 'Kecakapan Karir'],
    keyPrograms: ['AMI Future Leader Bootcamp', 'Akademi Talenta Digital', 'Kelas Literasi Finansial Muda'],
  },
  {
    id: 'pilar-peduli',
    name: 'AMI Peduli',
    tagline: 'Aksi Sosial, Relawan, dan Solidaritas Kebangsaan',
    colorName: 'hijau-sedang',
    badgeBg: '#2E9E5B',
    badgeText: '#FFFFFF',
    cardBg: '#2E9E5B',
    textColor: '#FFFFFF',
    borderColor: '#43C572',
    iconName: 'HandHeart',
    shortDesc: 'Aksi sosial kemanusiaan, kerelawanan, dan tanggap bencana.',
    fullDesc:
      'Mewadahi nurani dan kepedulian anak muda dalam merespons ketimpangan sosial di lingkungan sekitar, gerakan relawan mengajar di pelosok, renovasi taman baca desa, hingga aksi tanggap bencana cepat.',
    focusAreas: ['Relawan Nusantara Mengajar', 'Peduli Bencana Cepat', 'Konservasi & Aksi Iklim', 'Bantuan Sosial Edukasi'],
    keyPrograms: ['Ekspedisi Pemuda Mengabdi', 'Gerakan 10.000 Buku Pelosok', 'Aksi Bersih Pantai & Sungai'],
  },
  {
    id: 'pilar-berkarya',
    name: 'AMI Berkarya',
    tagline: 'Ekonomi Kreatif, Inovasi, dan Inkubasi UMKM Pemuda',
    colorName: 'hijau-terang',
    badgeBg: '#43C572',
    badgeText: '#1B5E3A',
    cardBg: '#43C572',
    textColor: '#1B5E3A',
    borderColor: '#2E9E5B',
    iconName: 'Lightbulb',
    shortDesc: 'Ekonomi kreatif, inovasi rintisan usaha, dan etalase karya UMKM muda.',
    fullDesc:
      'Mendorong kemandirian ekonomi generasi muda lewat inkubasi wirausaha sosial, pelatihan desain dan produk digital, etalase pameran karya, serta fasilitasi akses permodalan dan mentoring bisnis.',
    focusAreas: ['Inkubasi Wirausaha Muda', 'Etalase UMKM Kreatif', 'Karya Seni & Desain Digital', 'Akses Mentoring Bisnis'],
    keyPrograms: ['AMI Youth Preneur Accelerator', 'Pasar Karya Anak Muda', 'Klinik Desain & Branding UMKM'],
  },
  {
    id: 'pilar-bersuara',
    name: 'AMI Bersuara',
    tagline: 'Advokasi Kebijakan, Riset Kritis, dan Opini Kepemudaan',
    colorName: 'merah-aksen',
    badgeBg: '#E31E24',
    badgeText: '#FFFFFF',
    cardBg: '#E31E24',
    textColor: '#FFFFFF',
    borderColor: '#B91C1C',
    iconName: 'Megaphone',
    shortDesc: 'Advokasi kebijakan publik, riset kepemudaan, dan ruang dialog kritis.',
    fullDesc:
      'Wadah resmi anak muda untuk menyuarakan aspirasi berbasis data dan nalar sehat. Kami memfasilitasi riset kepemudaan, penyusunan kertas kebijakan (policy brief), dialog bersama pemangku kepentingan, dan penerbitan opini kritis.',
    focusAreas: ['Policy Brief Kepemudaan', 'Riset Isu Publik', 'Debat & Dialog Publik', 'Jurnal Pemikiran Muda'],
    keyPrograms: ['Youth Policy Fellowship', 'Mimbar Gagasan Pemuda', 'Survei Aspirasi Generasi Muda'],
  },
  {
    id: 'pilar-bersama',
    name: 'AMI Bersama',
    tagline: 'Jejaring Komunitas Daerah, Kolaborasi, dan Temu Tahunan',
    colorName: 'putih-netral',
    badgeBg: '#1B5E3A',
    badgeText: '#FFFFFF',
    cardBg: '#FFFFFF',
    textColor: '#1B5E3A',
    borderColor: '#2E9E5B',
    iconName: 'Users',
    shortDesc: 'Event nasional, temu komunitas regional, dan kolaborasi kepemudaan.',
    fullDesc:
      'Merajut simpul persahabatan antar pemuda lintas pulau. Menghidupkan chapter AMI di 84+ daerah, festival pemuda tahunan, pertukaran wawasan budaya, serta ruang berkumpul yang hangat dan penuh semangat.',
    focusAreas: ['Chapter AMI Daerah', 'Festival Pemuda Nusantara', 'Pertukaran Pemuda Antar-Pulau', 'Komunitas Minat & Hobi'],
    keyPrograms: ['Kongres Pemuda AMI Nusantara', 'AMI Regional Meetup', 'Festival Kreatif Pemuda'],
  },
];

export const youthProgramsData: YouthProgramItem[] = [
  {
    id: 'prog-1',
    title: 'AMI Future Leader Fellowship 2026',
    pillar: 'AMI Belajar',
    badge: 'Program Unggulan',
    duration: '8 Minggu Intensif',
    format: 'Bootcamp Daring',
    participants: '500 Pemuda Terpilih',
    description:
      'Program akselerasi kepemimpinan komprehensif yang membekali pemuda dengan kecakapan problem solving, komunikasi strategis, manajemen tim, dan etika kepemimpinan publik.',
    curriculum: [
      'Fondasi Kepemimpinan Adaptif di Era AI',
      'Desain Riset & Pemecahan Masalah Sosial (Design Thinking)',
      'Manajemen Proyek dan Eksekusi Tim Efektif',
      'Komunikasi Publik & Persuasi Berkelanjutan',
      'Penyusunan Proyek Aksi Nyata Komunitas (Capstone)',
    ],
    status: 'Pendaftaran Dibuka',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'prog-2',
    title: 'Ekspedisi Relawan Mengajar Pelosok',
    pillar: 'AMI Peduli',
    badge: 'Aksi Lapangan',
    duration: '14 Hari Aksi Nyata',
    format: 'Proyek Lapangan',
    participants: '120 Relawan Terjun',
    description:
      'Pengiriman relawan pemuda lintas disiplin untuk mengajar literasi digital, numerasi kreatif, dan renovasi perpustakaan sekolah dasar di 12 titik 3T nusantara.',
    curriculum: [
      'Pembekalan Budaya & Komunikasi Antar-Masyarakat Lokal',
      'Metode Pembelajaran Interaktif untuk Siswa Pelosok',
      'Protokol Keselamatan & Manajemen Logistik Relawan',
      'Pengelolaan Perpustakaan Komunitas Mandiri',
    ],
    status: 'Pendaftaran Dibuka',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'prog-3',
    title: 'YouthPreneur Accelerator Batch 4',
    pillar: 'AMI Berkarya',
    badge: 'Inkubasi Bisnis',
    duration: '6 Minggu Mentoring',
    format: 'Mentoring Intensif',
    participants: '60 Startup / UMKM Muda',
    description:
      'Inkubasi intensif bagi rintisan wirausaha muda kreatif dan wirausaha sosial dengan pendampingan mentor praktisi, validasi pasar, dan fasilitasi akses pendanaan awal.',
    curriculum: [
      'Validasi Nilai Produk & Analisis Pasar Nyata',
      'Penyusunan Model Keuangan dan Proyeksi Arus Kas',
      'Branding Visual & Digital Marketing Organik',
      'Persiapan Pitch Deck & Demo Day Investor',
    ],
    status: 'Segera Hadir',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'prog-4',
    title: 'Youth Policy & Advocacy Lab 2026',
    pillar: 'AMI Bersuara',
    badge: 'Advokasi Kebijakan',
    duration: '4 Minggu Workshop',
    format: 'Bootcamp Daring',
    participants: '200 Delegasi Pemuda',
    description:
      'Laboratorium advokasi anak muda untuk menganalisis kebijakan publik, menulis naskah rekomendasi (Policy Paper), dan mengawal isu ketenagakerjaan pemuda ke kementerian.',
    curriculum: [
      'Metodologi Riset Kebijakan Berbasis Bukti (Evidence-Based)',
      'Teknik Menulis Policy Brief yang Tajam & Solutif',
      'Strategi Lobi, Diplomasi, dan Kampanye Media Sosial',
      'Penyusunan Resolusi Pemuda Indonesia 2026',
    ],
    status: 'Pendaftaran Dibuka',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80',
  },
];

export const growthModulesData: GrowthModuleItem[] = [
  {
    id: 'mod-1',
    title: 'Panduan Memulai Gerakan Sosial dari Nol (Zero to Impact)',
    category: 'Proyek Sosial',
    pages: 48,
    downloads: 4820,
    description:
      'Buku saku praktis langkah demi langkah mendirikan inisiatif komunitas, mencari relawan, menggalang dana transparan, dan mengukur dampak sosial.',
    topics: ['Riset Masalah di Sekitar', 'Membentuk Tim Inti Tanpa Modal', 'Crowdfunding Legal & Transparan', 'Dokumentasi & Media Sosial'],
    fileSize: '4.2 MB (PDF)',
    publishedYear: '2026',
  },
  {
    id: 'mod-2',
    title: 'Toolkit Pitch Deck & Validasi Bisnis Pemuda',
    category: 'Ekonomi Kreatif',
    pages: 36,
    downloads: 3690,
    description:
      'Template siap pakai beserta panduan menyusun rencana usaha, riset kompetitor, penentuan harga, dan presentasi meyakinkan di depan mitra.',
    topics: ['Struktur 10 Slide Pitch Deck', 'Kalkulasi HPP & Margin Produk', 'Strategi Validasi 100 Pembeli Pertama'],
    fileSize: '3.8 MB (PDF + PPTX)',
    publishedYear: '2026',
  },
  {
    id: 'mod-3',
    title: 'Kecakapan Diplomasi & Negosiasi Pemimpin Muda',
    category: 'Kepemimpinan',
    pages: 52,
    downloads: 5110,
    description:
      'Panduan taktis memimpin rapat, menyelesaikan konflik internal kelompok, negosiasi kemitraan sponsor, dan berbicara meyakinkan di depan publik.',
    topics: ['Active Listening & Resolusi Konflik', 'Public Speaking Tanpa Gugup', 'Penyusunan MoU & Proposal Sponsor'],
    fileSize: '5.1 MB (PDF)',
    publishedYear: '2026',
  },
  {
    id: 'mod-4',
    title: 'Metode Menulis Opini Media Massa & Policy Brief',
    category: 'Advokasi & Riset',
    pages: 40,
    downloads: 2980,
    description:
      'Pedoman teknis mengubah keresahan pribadi menjadi tulisan opini berbobot yang layak tembus koran nasional atau media digital ternama.',
    topics: ['Struktur Esai Argumen Kuat', 'Teknik Membaca Data Statistik', 'Etika Jurnalistik & Pemeriksaan Fakta'],
    fileSize: '3.5 MB (PDF)',
    publishedYear: '2026',
  },
];

export const youthJournalData: YouthJournalItem[] = [
  {
    id: 'jurnal-1',
    title: 'Kesiapan Pemuda Daerah Menghadapi Disrupsi AI Generatif di Sektor Informal',
    author: 'Dimas Satria & Tim Riset AMI Chapter Surabaya',
    institution: 'Pusat Studi Pemuda Inisiatif AMI',
    category: 'Inovasi Digital',
    edition: 'Vol. 4 No. 1 (2026)',
    date: 'Agustus 2026',
    abstract:
      'Riset empiris yang meneliti adopsi alat bantu kecerdasan buatan pada 350 pelaku usaha mikro usia 18-25 tahun di Jawa Timur, serta rumusan kurikulum literasi digital yang relevan.',
    downloads: 1420,
    doi: '10.5281/zenodo.ami.2026.0801',
  },
  {
    id: 'jurnal-2',
    title: 'Model Kolaborasi Komunitas Pemuda dalam Pengelolaan Sampah Pesisir Berbasis Insentif Sirkular',
    author: 'Ni Putu Ayu Lestari',
    institution: 'Inisiator AMI Peduli Bali & NTB',
    category: 'Krisis Iklim',
    edition: 'Vol. 3 No. 2 (2026)',
    date: 'Juli 2026',
    abstract:
      'Studi lapangan tentang implementasi bank sampah pemuda yang mengonversi sampah plastik menjadi poin beasiswa kursus keahlian bagi anak nelayan lokal.',
    downloads: 1890,
    doi: '10.5281/zenodo.ami.2026.0702',
  },
  {
    id: 'jurnal-3',
    title: 'Analisis Kebijakan Akses Modal Usaha bagi Pelaku Ekonomi Kreatif Usia Gen Z',
    author: 'Farhan Alatas & Nabila Wardani',
    institution: 'Departemen Riset Kebijakan AMI Bersuara',
    category: 'Kebijakan Publik',
    edition: 'Vol. 3 No. 1 (2026)',
    date: 'Mei 2026',
    abstract:
      'Telaah kritis terhadap syarat agunan pinjaman perbankan untuk startup rintisan pemuda, disertai rekomendasi skema pembiayaan berbasis revenue-share untuk pembuat kebijakan.',
    downloads: 2130,
    doi: '10.5281/zenodo.ami.2026.0501',
  },
];

export const youthWorksData: YouthWorkItem[] = [
  {
    id: 'karya-1',
    title: 'LenteraDesa.id',
    creator: 'Ahmad Fauzi & Rombongan Pemuda Banyuwangi',
    city: 'Banyuwangi, Jawa Timur',
    category: 'Startup Sosial',
    impact: 'Edukasi 1.400+ Siswa Desa',
    description:
      'Platform luring-daring yang mendistribusikan materi belajar interaktif ke sekolah dasar tanpa koneksi internet stabil menggunakan server mini lokal bertenaga surya.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'karya-2',
    title: 'Kopi Sambas Lestari',
    creator: 'Hendra Gunawan (Alumni AMI Berkarya)',
    city: 'Sambas, Kalimantan Barat',
    category: 'UMKM Kreatif',
    impact: 'Bermitra dengan 45 Petani Lokal',
    description:
      'Inovasi hilirisasi biji kopi liberika gambut yang dikemas ramah lingkungan oleh komunitas pemuda desa, kini telah menembus pasar kafe di 5 kota besar nusantara.',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&auto=format&fit=crop&q=80',
  },
  {
    id: 'karya-3',
    title: 'Suara Tuli: Aplikasi Belajar Isyarat Interaktif',
    creator: 'Clara Sitorus & Tim Dev AMI Tech Medan',
    city: 'Medan, Sumatera Utara',
    category: 'Teknologi Komunitas',
    impact: 'Digunakan oleh 3.200+ Pemuda Dengar & Tuli',
    description:
      'Aplikasi ponsel ringan berbasis kamera untuk mempraktikkan BISINDO secara menyenangkan dengan gamifikasi dan kuis interaktif yang ramah pengguna pemula.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
  },
];

export const statsMetricsData: StatMetricItem[] = [
  {
    id: 'stat-anggota',
    label: 'Anggota Terdaftar',
    targetValue: 28540,
    displaySuffix: '+',
    sublabel: 'Pemuda aktif ber-AMI ID di seluruh penjuru Indonesia',
  },
  {
    id: 'stat-program',
    label: 'Program Terlaksana',
    targetValue: 142,
    displaySuffix: '+',
    sublabel: 'Bootcamp, aksi sosial, lokakarya, dan fellowship',
  },
  {
    id: 'stat-komunitas',
    label: 'Komunitas Daerah',
    targetValue: 84,
    displaySuffix: ' Kota/Kab',
    sublabel: 'Tersebar aktif di 34 provinsi dari Aceh hingga Papua',
  },
  {
    id: 'stat-karya',
    label: 'Karya Diterbitkan',
    targetValue: 520,
    displaySuffix: '+',
    sublabel: 'Riset pemuda, rintisan UMKM, dan inisiatif berdampak',
  },
];

export const testimonialsData: YouthTestimonialItem[] = [
  {
    id: 'testi-1',
    name: 'Rizky Maulana',
    role: 'Koordinator AMI Chapter Jawa Barat',
    organization: 'Mahasiswa Teknik Lingkungan ITB',
    city: 'Bandung',
    quote:
      'Di Inisiatif AMI, kami tidak cuma diajak berteori di ruang seminar. Ide proyek edukasi sanitasi desa kami dibimbing intensif sampai tembus pendanaan dan memiliki sistem sertifikasi yang diakui kampus.',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=80',
    level: 'Penggerak',
  },
  {
    id: 'testi-2',
    name: 'Sarah Paramitha',
    role: 'Inisiator Bali Youth Eco Action',
    organization: 'Aktivis Lingkungan Muda',
    city: 'Denpasar',
    quote:
      'Sistem tingkatan berjenjang AMI ID dari Anggota, Aktivis, hingga Penggerak memberi kami kejelasan rekam jejak. Lembaga ini transparan, gerakannya nyata, dan atmosfernya sangat merangkul anak muda.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    level: 'Aktivis',
  },
  {
    id: 'testi-3',
    name: 'Fajar Triyanto',
    role: 'Founder Kopi Pemuda Flores',
    organization: 'Pegiat UMKM Kreatif',
    city: 'Manggarai Barat',
    quote:
      'Pilar AMI Berkarya membuka wawasan kami tentang branding dan packaging. Melalui jejaring AMI di Jakarta dan Surabaya, produk kopi petani muda desa kami akhirnya punya pasar nasional!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    level: 'Penggerak',
  },
  {
    id: 'testi-4',
    name: 'Nabila Zahra',
    role: 'Pegiat Literasi Digital Pemuda',
    organization: 'Mahasiswi Ilmu Komunikasi USU',
    city: 'Medan',
    quote:
      'Modul Tumbuh yang disediakan gratis sangat membantu komunitas kami menyusun kurikulum mengajar di panti asuhan. AMI benar-benar rumah bertumbuh yang konkret bagi anak muda.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    level: 'Anggota',
  },
];

export const certificatesDatabase: Record<string, YouthCertificateRecord> = {
  'AMI-CERT-2026-001': {
    certNumber: 'AMI-CERT-2026-001',
    holderName: 'Bima Arya Nugraha',
    amiId: 'AMI-ID-9821',
    programTitle: 'AMI Future Leader Fellowship 2026 (Angkatan IV)',
    level: 'Penggerak',
    issueDate: '15 Agustus 2026',
    status: 'Valid & Terverifikasi',
    skills: ['Strategic Problem Solving', 'Community Mobilization', 'Design Thinking', 'Public Speaking'],
    organizer: 'Lembaga Kepemudaan Inisiatif AMI (Anak Muda Indonesia)',
    verifiedHash: 'a7f92026bima8912c4',
  },
  'AMI-CERT-2026-088': {
    certNumber: 'AMI-CERT-2026-088',
    holderName: 'Annisa Putri Maharani',
    amiId: 'AMI-ID-7742',
    programTitle: 'Youth Policy & Advocacy Lab 2026',
    level: 'Aktivis',
    issueDate: '28 Juli 2026',
    status: 'Valid & Terverifikasi',
    skills: ['Policy Brief Writing', 'Evidence-Based Advocacy', 'Public Debate', 'Stakeholder Analysis'],
    organizer: 'Lembaga Kepemudaan Inisiatif AMI (Anak Muda Indonesia)',
    verifiedHash: 'c891annisa2026d321',
  },
  'AMI-CERT-2026-142': {
    certNumber: 'AMI-CERT-2026-142',
    holderName: 'Rian Hidayatulloh',
    amiId: 'AMI-ID-6109',
    programTitle: 'YouthPreneur Accelerator Batch 4',
    level: 'Aktivis',
    issueDate: '10 Juni 2026',
    status: 'Valid & Terverifikasi',
    skills: ['Business Model Canvas', 'Digital Growth Marketing', 'Unit Economics', 'Pitching'],
    organizer: 'Lembaga Kepemudaan Inisiatif AMI (Anak Muda Indonesia)',
    verifiedHash: 'f412rian2026e981k0',
  },
};

export const partnersData = [
  { name: 'BEM Nusantara Sinergi', category: 'Kampus & Mahasiswa' },
  { name: 'Yayasan Pemuda Bangun Negeri', category: 'Lembaga Edukasi' },
  { name: 'Inovasi Digital Pemuda', category: 'Inkubator Kreatif' },
  { name: 'Ruang Volunteer Indonesia', category: 'Kerelawanan Nasional' },
  { name: 'Forum Wirausaha Muda', category: 'Ekosistem Bisnis' },
  { name: 'Gerakan Literasi Nusantara', category: 'Komunitas Literasi' },
];
