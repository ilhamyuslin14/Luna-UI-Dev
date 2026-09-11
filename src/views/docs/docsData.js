// ==========================================
// 1. NAVIGASI PANDUAN PRODUK (PRODUCT GUIDE - V2.0)
// ==========================================
export const productNavigation = [
  {
    category: '1. Pendahuluan & Overview',
    items: [
      { id: 'pengenalan', title: 'Apa itu LUNA?', icon: 'Sparkles' },
      { id: 'cara-kerja', title: 'Cara Kerja & Kapabilitas', icon: 'Cpu' },
      { id: 'whats-new-v2', title: 'LUNA V2.0 — Apa yang Baru?', icon: 'Zap' },
    ],
  },
  {
    category: '2. Registrasi & Onboarding',
    items: [
      { id: 'registrasi-alur', title: 'Alur Registrasi (HR vs Pelamar)', icon: 'UserCheck' },
      { id: 'verifikasi-otp', title: 'Verifikasi OTP & Profil Perusahaan', icon: 'Key' },
      { id: 'product-tour', title: 'Akses Gratis & Tur Interaktif', icon: 'Compass' },
    ],
  },
  {
    category: '3. Manajemen Lowongan & Sebar',
    items: [
      { id: 'buat-lowongan', title: 'Membuat Lowongan & Auto-Fill JD', icon: 'PlusCircle' },
      { id: 'kriteria-penilaian', title: 'Kriteria Penilaian AI', icon: 'Sliders' },
      { id: 'status-siklus-lowongan', title: 'Siklus Hidup & Status Lowongan', icon: 'Archive' },
      { id: 'laman-karir', title: 'Publikasi ke Laman Karier', icon: 'Globe' },
      { id: 'menu-sebar', title: 'Menu Sebar (Akun Sendiri & Mitra)', icon: 'Share2' },
    ],
  },
  {
    category: '4. Candidate Warehouse',
    items: [
      { id: 'candidate-warehouse', title: 'Gudang Data Pelamar (Warehouse)', icon: 'Database' },
      { id: 'unggah-cv', title: 'Unggah CV & Spesifikasi File', icon: 'UploadCloud' },
      { id: 'riwayat-aktivitas', title: 'Tab Riwayat & Log Pelamar', icon: 'Clock' },
      { id: 'data-parsing', title: 'Data Hasil Ekstraksi Otomatis', icon: 'FileText' },
    ],
  },
  {
    category: '5. AI Matching & Scoring',
    items: [
      { id: 'ai-scoring', title: 'Skala Skor & Kategori Fit', icon: 'Award' },
      { id: 'hasil-penilaian', title: 'Halaman Hasil Evaluasi AI', icon: 'Eye' },
      { id: 'penilaian-ulang', title: 'Penilaian Ulang (Reevaluate)', icon: 'RefreshCw' },
    ],
  },
  {
    category: '6. Pipeline Management',
    items: [
      { id: 'alur-pipeline', title: 'Papan Kerja Pipeline (Board & List)', icon: 'GitBranch' },
      { id: 'tahapan-seleksi', title: '10 Tahap Alur Rekrutmen', icon: 'Layers' },
      { id: 'kandidat-tidak-sesuai', title: 'Menandai Kandidat Tidak Sesuai', icon: 'XCircle' },
    ],
  },
  {
    category: '7. Pengaturan Akun & Profil',
    items: [
      { id: 'profil-perusahaan', title: 'Profil Perusahaan & Video Profil', icon: 'Building' },
      { id: 'media-sosial', title: 'Lokasi, Kontak & Media Sosial', icon: 'MapPin' },
      { id: 'keamanan-akun', title: 'Profil Pengguna & Ubah Password', icon: 'Lock' },
    ],
  },
  {
    category: '8. Dasbor & Bantuan',
    items: [
      { id: 'dashboard-beranda', title: 'Dasbor Beranda & Metrik', icon: 'Layout' },
      { id: 'quick-action-notif', title: 'Quick Action & Notifikasi', icon: 'Bell' },
      { id: 'bantuan-hani', title: 'Pusat Bantuan & Chat AI Hani', icon: 'HelpCircle' },
      { id: 'pencarian-global', title: 'Fitur Pencarian Global', icon: 'Search' },
    ],
  },
  {
    category: '9. Panduan Pemecahan Masalah',
    items: [
      { id: 'troubleshooting-login-otp', title: 'Kendala Login & OTP Email', icon: 'AlertTriangle' },
      { id: 'troubleshooting-cv-scoring', title: 'Kendala Unggah CV & AI Scoring', icon: 'FileX' },
      { id: 'troubleshooting-teknis', title: 'Error Teknis & Eskalasi Support', icon: 'LifeBuoy' },
    ],
  },
  {
    category: '10. FAQ (Tanya Jawab)',
    items: [
      { id: 'faq-umum', title: 'Pertanyaan yang Sering Diajukan', icon: 'MessageCircle' },
    ],
  },
];

// ===============================================
// 2. NAVIGASI TEKNIS DEVELOPER (ENGINEERING DOCS)
// ===============================================
export const developerNavigation = [
  {
    category: 'Arsitektur & Desain Sistem',
    items: [
      { id: 'arsitektur-sistem', title: 'Ikhtisar Arsitektur Sistem', icon: 'Layers' },
      { id: 'multi-tenancy-database', title: 'Multi-Tenancy & Data Model', icon: 'Database' },
      { id: 'security-secrets', title: 'Isolasi Kredensial & Edge Functions', icon: 'Shield' },
    ],
  },
  {
    category: 'Rekayasa AI (AI Engineering)',
    items: [
      { id: 'pipeline-ekstraksi-cv', title: 'Pipeline Parsing CV & Hemat Token', icon: 'Cpu' },
      { id: 'multi-provider-ai', title: 'Multi-Provider: Gemini & OpenAI', icon: 'GitMerge' },
      { id: 'algoritma-skoring', title: 'Algoritma Skoring Terbobot', icon: 'Sliders' },
      { id: 'fault-tolerance-sanitizer', title: 'Null-Byte Sanitizer & Resilience', icon: 'Bug' },
    ],
  },
  {
    category: 'Frontend Architecture',
    items: [
      { id: 'state-routing-history', title: 'Routing State & History Sync', icon: 'Compass' },
      { id: 'virtualisasi-performa', title: 'Performa & Virtualized Lists', icon: 'Zap' },
      { id: 'client-side-zip-pdf', title: 'Client-Side ZIP & PDF Rendering', icon: 'Archive' },
      { id: 'design-tokens', title: 'Design Guidelines & Theme Tokens', icon: 'Palette' },
    ],
  },
  {
    category: 'Panduan Setup Developer',
    items: [
      { id: 'local-setup', title: 'Menjalankan Project Lokal', icon: 'Terminal' },
      { id: 'deploy-edge-functions', title: 'Deploy Supabase Edge Functions', icon: 'Cloud' },
      { id: 'env-konfigurasi', title: 'Environment & Sandbox Settings', icon: 'Key' },
    ],
  },
];

// ==========================================
// 3. KONTEN DOKUMENTASI (COMBINED DICTIONARY)
// ==========================================
export const docsContent = {
  // ----------------------------------------------------
  // PRODUCT GUIDE ARTICLES
  // ----------------------------------------------------
  // ----------------------------------------------------
  // 1. PENDAHULUAN & OVERVIEW
  // ----------------------------------------------------
  'pengenalan': {
    title: 'Apa itu LUNA?',
    category: '1. Pendahuluan & Overview',
    mode: 'product',
    description: 'Portal Karier Mandiri pertama di Indonesia yang dilengkapi dengan Applicant Tracking System (ATS) bertenaga AI — gratis sepenuhnya untuk seluruh pelaku usaha.',
    lastUpdated: '1 September 2026',
    screenshots: [
      { src: '/assets/docs/beranda.png', alt: 'Dasbor Beranda LUNA dengan panduan 3 langkah dan ringkasan metrik', ratio: '16:9' },
    ],
    sections: [
      {
        id: 'definisi-luna',
        title: 'Mengenal Platform LUNA',
        content: `**LUNA** adalah Portal Karier Mandiri pertama yang dibangun khusus untuk pelaku usaha di Indonesia — mulai dari usaha kecil, rintisan (startup), hingga perusahaan menengah — yang ingin membuka lowongan kerja resmi atas nama perusahaan sendiri tanpa biaya apapun.

Di balik portal ini, LUNA membawa mesin **Applicant Tracking System (ATS) berbasis AI**: setiap CV pelamar yang masuk otomatis dibaca, diekstrak datanya, dinilai kesesuaiannya, dan diurutkan skornya secara instan. Tim rekrutmen tidak perlu lagi menyaring ratusan berkas CV satu per satu secara manual.`,
      },
      {
        id: 'perbedaan-job-portal',
        title: 'Perbedaan dengan Job Portal Konvensional',
        callout: {
          type: 'info',
          title: 'Portal Mandiri atas Nama Perusahaan Sendiri',
          text: 'Berbeda dari job portal publik yang menumpang nama platform, LUNA memberikan halaman lowongan resmi berformat karir.lunasys.ai/[nama-perusahaan] yang bisa dibagikan langsung ke WhatsApp, LinkedIn, Instagram, dan terindeks di mesin pencari Google.',
        },
        content: `Keunggulan utama LUNA dibanding job portal konvensional:
- **Brand Milik Sendiri:** Halaman karir eksklusif menampilkan logo, profil, video, dan identitas perusahaan Anda.
- **Pelamar Tanpa Perlu Buat Akun:** Calon kandidat dapat melamar langsung dalam hitungan detik tanpa hambatan registrasi akun yang rumit.
- **Data Kandidat Tidak Dikunci:** Seluruh berkas CV dan database pelamar adalah aset perusahaan Anda yang dapat diunduh kapan saja tanpa biaya tebusan.
- **Sepenuhnya Gratis:** Berdiri sebagai brand independen di bawah PT Arkademi Daya Indonesia, dirancang khusus dengan antarmuka Bahasa Indonesia tanpa biaya berlangganan.`,
      },
      {
        id: 'perbandingan-cara-lama',
        title: 'Dibanding Google Form & Job Portal Biasa',
        content: `Google Form tidak punya alur seleksi, dan job portal publik mengunci data pelamar Anda di balik nama platform mereka. LUNA menggabungkan kelebihan keduanya jadi satu:

| Parameter | LUNA | Job Portal | Google Form |
|---|---|---|---|
| Halaman atas nama perusahaan sendiri | ✅ | ❌ | ❌ |
| Pelamar melamar tanpa buat akun | ✅ | ❌ | ✅ |
| Semua CV bisa diunduh, data milik Anda | ✅ | ❌ | ✅ |
| CV dibaca otomatis jadi teks terstruktur | ✅ | ❌ | ❌ |
| Pelamar dinilai & diurutkan otomatis oleh AI | ✅ | ❌ | ❌ |
| Alur pipeline dari lamaran sampai diterima | ✅ | ❌ | ❌ |
| Bisa ditemukan lewat pencarian Google | ✅ | ✅ | ❌ |
| Pelamar & CV tersimpan tanpa batas, gratis | ✅ | ❌ | ✅ |`,
      },
    ],
  },

  'cara-kerja': {
    title: 'Cara Kerja & Kapabilitas',
    category: '1. Pendahuluan & Overview',
    mode: 'product',
    description: 'Alur kerja 5 langkah rekrutmen cerdas di LUNA dan ringkasan fitur utama yang tersedia.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'alur-5-langkah',
        title: '5 Langkah Rekrutmen di LUNA',
        content: `Proses rekrutmen di LUNA berjalan secara otomatis dan efisien:

1. **Buat Lowongan (Perusahaan):** Isi detail posisi, kriteria kualifikasi, atau unggah file Job Description (JD). Halaman lowongan langsung terbit seketika.
2. **Sebarkan Link (Perusahaan):** Bagikan tautan lowongan ke WhatsApp, LinkedIn, Instagram, Facebook, Telegram, atau manfaatkan direktori akun mitra.
3. **Pelamar Melamar (Otomatis):** Pencari kerja mengisi data diri singkat dan mengunggah CV langsung di laman lowongan tanpa perlu mendaftar akun.
4. **Kandidat Terskor (Otomatis):** AI membaca isi CV, mengevaluasi kesesuaian terhadap kriteria pekerjaan (< 30 detik), dan mengurutkan ranking pelamar.
5. **Proses via Pipeline (Perusahaan):** Kelola tahapan seleksi kandidat dari status Baru hingga Diterima dalam satu papan kerja terpadu.`,
      },
      {
        id: 'ringkasan-kapabilitas',
        title: 'Ringkasan Kapabilitas Fitur',
        content: `Fitur-fitur unggulan LUNA meliputi:
- **Portal Karier Publik:** Halaman lowongan dan profil perusahaan yang siap dibagikan ke berbagai kanal media sosial.
- **AI Matching & Scoring:** Penilaian otomatis berbasis bukti (*evidence*) dengan pemeringkatan skor 0–100.
- **Candidate Warehouse:** Tempat penyimpanan terpusat seluruh data CV pelamar yang bebas diakses dan diunduh kapan saja.
- **Pipeline Management:** Papan pemantauan progres kandidat dengan 10 tahap seleksi terstruktur.
- **Menu Sebar:** Draf copywriting siap salin untuk media sosial internal maupun direktori akun mitra lowongan kerja terverifikasi.`,
      },
    ],
  },

  'whats-new-v2': {
    title: 'LUNA V2.0 — Apa yang Baru?',
    category: '1. Pendahuluan & Overview',
    mode: 'product',
    description: 'Rangkuman pembaruan besar pada LUNA Versi 2.0: reposisi produk, akses gratis permanen, dan antarmuka baru.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'perubahan-utama-v2',
        title: 'Pembaruan Utama di Versi 2.0',
        content: `LUNA V2.0 menghadirkan transformasi menyeluruh:
- **Reposisi Produk:** Bertransformasi dari sekadar ATS internal menjadi **Portal Karier Mandiri** dengan mesin AI ATS terintegrasi.
- **Portal Lowongan & Laman Perusahaan Publik:** Setiap perusahaan mendapatkan halaman karir publik mandiri yang dapat ditemukan di Google dan dibagikan ke mana saja.
- **Lamar Lowongan Dengan Mudah:** Pelamar dapat langsung mengunggah CV dan mengirim lamaran tanpa hambatan membuat akun.
- **Pembaruan Desain & Alur:** Desain visual baru yang lebih bersih, alur pembuatan lowongan dengan auto-fill file JD, batas unggah CV naik menjadi **10 MB**, tab **Riwayat Aktivitas**, dan 10 tahap alur pipeline seleksi.`,
      },
    ],
  },

  // ----------------------------------------------------
  // 2. REGISTRASI & ONBOARDING
  // ----------------------------------------------------
  'registrasi-alur': {
    title: 'Alur Registrasi (HR vs Pelamar)',
    category: '2. Registrasi & Onboarding',
    mode: 'product',
    description: 'Panduan pendaftaran akun perusahaan dan penjelasan mengapa pencari kerja tidak membutuhkan akun di LUNA.',
    lastUpdated: '1 September 2026',
    screenshots: [
      { src: '/assets/docs/registrasi-pilih-peran.png', alt: 'Layar pemilihan peran saat pendaftaran' },
    ],
    sections: [
      {
        id: 'pemilihan-peran',
        title: 'Pemilihan Peran Saat Pendaftaran',
        callout: {
          type: 'info',
          title: 'Kenapa Ada Langkah Pemilihan Peran Ini?',
          text: 'Langkah ini jadi penyaring pertama supaya pencari kerja yang tidak sengaja mendarat di halaman ini tidak salah daftar jadi HR dan malah membuat lowongan. Begitu pilih "Pencari Kerja", mereka langsung diarahkan ke penjelasan yang tepat — bukan ke formulir pendaftaran perusahaan.',
        },
        content: `Saat pertama kali membuka halaman registrasi LUNA (\`https://lunasys.ai/register\`), pengguna akan disambut dengan pilihan peran:
1. **Saya HR / Perusahaan:** Membuka formulir pendaftaran akun rekruter untuk mulai memasang lowongan dan mengelola pelamar.
2. **Saya Pencari Kerja:** Menampilkan modal penjelasan bahwa pencari kerja tidak memerlukan akun di LUNA. Pelamar cukup membuka link lowongan yang dibagikan oleh perusahaan untuk langsung melamar pekerjaan.`,
      },
      {
        id: 'formulir-hr',
        title: 'Formulir Registrasi Perusahaan',
        content: `Bagi HR / Perusahaan, lengkapi data registrasi berikut:
- **Nama Lengkap:** Nama penanggung jawab rekrutmen.
- **Nama Perusahaan:** Nama resmi entitas usaha Anda.
- **Email Kerja:** Alamat email aktif untuk menerima kode verifikasi OTP dan notifikasi.
- **Kata Sandi:** Minimal 8 karakter, wajib kombinasi huruf dan angka.`,
      },
    ],
  },

  'verifikasi-otp': {
    title: 'Verifikasi OTP & Profil Perusahaan',
    category: '2. Registrasi & Onboarding',
    mode: 'product',
    description: 'Aktivasi akun via kode OTP email dan pengisian data dasar organisasi.',
    lastUpdated: '1 September 2026',
    screenshots: [
      { src: '/assets/docs/otp.png', alt: 'Layar verifikasi kode OTP 6 digit', ratio: '16:9' },
    ],
    sections: [
      {
        id: 'kode-otp',
        title: 'Verifikasi Kode OTP',
        content: `Setelah menekan tombol "Buat Akun", sistem akan mengirimkan **6 digit kode OTP** ke email kerja yang didaftarkan:
- Masukkan 6 digit kode pada formulir verifikasi.
- Jika email belum masuk dalam 1 menit, periksa folder *Spam/Junk* atau klik tombol "Kirim Ulang Kode".`,
      },
      {
        id: 'lengkapi-profil',
        title: 'Modal Lengkapi Profil Perusahaan',
        content: `Setelah OTP berhasil diverifikasi, lengkapi data profil dasar:
- **Nomor WhatsApp:** Nomor kontak resmi perusahaan (opsional).
- **Industri Perusahaan:** Sektor bisnis (misal: Teknologi, Ritel, F&B, dsb.).
- **Jumlah Karyawan:** Pilihan skala tim (Hanya saya, 2-3, 4-7, 8-10, 11-20, 21-50, 50+ orang).
- **Lokasi Perusahaan:** Kota/kabupaten domisili kantor utama.`,
      },
    ],
  },

  'product-tour': {
    title: 'Akses Gratis & Tur Interaktif',
    category: '2. Registrasi & Onboarding',
    mode: 'product',
    description: 'Panduan onboarding interaktif dasbor dan komitmen akses gratis permanen.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'tur-interaktif',
        title: 'Tur Panduan Dasbor',
        content: `Saat pertama kali masuk ke dasbor, LUNA menampilkan **Tur Panduan interaktif** yang memperkenalkan area navigasi utama secara berurutan:
- **Beranda:** Panduan 3 langkah dan ringkasan metrik lowongan.
- **Lowongan:** Daftar lowongan dan manajemen kandidat per posisi.
- **Sebar:** Draf copywriting medsos dan direktori akun mitra.
- **Kandidat:** Gudang penyimpanan seluruh berkas CV pelamar.
- **Akun dan Profil:** Pengaturan identitas dan laman karir publik.
- **Bantuan:** Pusat tiket dukungan dan AI Assistant Hani.

Tur ini dapat dilewati (*skip*) kapan saja dan dapat diputar ulang melalui tombol **"Mulai Tur Interaktif"** di menu Bantuan.`,
      },
    ],
  },

  // ----------------------------------------------------
  // 3. MANAJEMEN LOWONGAN & SEBAR
  // ----------------------------------------------------
  'buat-lowongan': {
    title: 'Membuat Lowongan & Auto-Fill JD',
    category: '3. Manajemen Lowongan & Sebar',
    mode: 'product',
    description: 'Panduan komprehensif membuat lowongan kerja di LUNA: mulai dari panduan percakapan interaktif dengan AI, pengisian formulir mandiri, auto-fill dokumen Job Description (JD), hingga auto-generasi kriteria penilaian.',
    lastUpdated: '1 September 2026',
    screenshots: [
      { src: '/assets/docs/9. Buat lowongan baru.png', alt: 'Modal pilihan metode pembuatan lowongan: Bantuan Luna atau Form', ratio: '16:9' },
      { src: '/assets/docs/10. Buat lowongan dengan bantuan Luna - First Question.png', alt: 'AI Wizard: pertanyaan pertama dari 8 pertanyaan terpandu', ratio: '16:9' },
      { src: '/assets/docs/11. Buat lowongan dengan bantuan Luna - AI Final 2.png', alt: 'Draf deskripsi lowongan hasil rangkuman otomatis AI Wizard', ratio: '16:9' },
      { src: '/assets/docs/13. Buat lowongan dengan form.png', alt: 'Formulir lengkap pembuatan lowongan dengan auto-fill JD', ratio: '16:9' },
    ],
    sections: [
      {
        id: 'pilihan-metode-buat',
        title: 'Pilihan Metode Pembuatan Lowongan',
        callout: {
          type: 'info',
          title: 'Akses Cepat Pembuatan Lowongan',
          text: 'Anda dapat memulai pembuatan lowongan melalui tombol "+ Buat Lowongan" di menu Lowongan, tombol Quick Action di bilah navigasi atas, atau tombol "Mulai Buat" pada kartu panduan di Beranda.',
        },
        content: `Saat mengklik **+ Buat Lowongan**, LUNA menampilkan modal pilihan dengan dua cara yang dirancang sesuai kebutuhan Anda:

1. **Buat dengan Bantuan Luna (Panduan AI Wizard):**
   - *Cocok untuk:* HR atau pengusaha yang belum memiliki draf Deskripsi Pekerjaan (JD) lengkap atau ingin menyusun kualifikasi posisi baru yang terstruktur secara cepat dan profesional.
   - *Mekanisme:* Cukup jawab beberapa pertanyaan singkat dalam format obrolan terpandu, AI LUNA akan merumuskan deskripsi pekerjaan, tanggung jawab harian, kualifikasi ideal, hingga kriteria penilaian secara otomatis.

2. **Buat dengan Formulir (Formulir Lengkap & Auto-Fill JD):**
   - *Cocok untuk:* HR yang sudah memiliki dokumen Job Description siap pakai atau ingin mengisi seluruh detail parameter posisi secara langsung.
   - *Mekanisme:* Pengisian formulir terstruktur dengan dukungan **Auto-Fill Dokumen JD** (PDF, DOCX, TXT) yang otomatis memetakan teks dokumen ke seluruh kolom formulir.`,
      },
      {
        id: 'panduan-ai-wizard',
        title: 'Metode 1: Buat dengan Bantuan Luna (AI Wizard)',
        content: `Mode ini memanfaatkan kecerdasan buatan multi-turn untuk memandu Anda menyusun lowongan pekerjaan dari nol melalui percakapan langkah demi langkah:

### Alur Pertanyaan Adaptif

1. *Nama Posisi & Departemen:* Menentukan judul pekerjaan (misal: "Frontend Developer", "Staff Akunting", "Barista").
2. *Level Jabatan & Penempatan:* Menentukan tingkatan peran (*Intern, Junior, Mid, Senior, Lead, Manager, Director, C-Level*) serta kota/kabupaten domisili kantor.
3. *Tanggung Jawab Utama:* Memilih atau menuliskan cakupan tugas harian posisi tersebut.
4. *Kualifikasi & Keahlian:* Menentukan keterampilan teknis, latar belakang pendidikan, dan pengalaman minimal.
5. *Kompensasi & Ikatan Kerja:* Menentukan rentang gaji (otomatis berformat Rupiah), siklus upah, dan status kerja (*Full-time, Part-time, Kontrak, Freelance, Magang*).

### Fitur Interaktif Selama Percakapan

- **Quick Options Pills:** Opsi pilihan cepat yang relevan dapat langsung diklik untuk mempercepat jawaban.
- **Textarea Fleksibel (Auto-Resize):** Kolom jawaban bebas yang memanjang otomatis (1 hingga 6 baris) jika Anda ingin mengetik jawaban kustom.
- **Tombol "Coba Lagi / Regenerasi":** Meminta variasi opsi pertanyaan atau draf alternatif jika rekomendasi awal belum sesuai.
- **Tombol "Perbaiki Draf":** Memberikan instruksi koreksi tambahan ke AI (misal: *"Tolong tambahkan syarat wajib menguasai Figma dan portofolio desain"*).
- **Pratinjau Draf & Penerbitan:** Menampilkan ringkasan menyeluruh sebelum Anda menekan tombol *"Terbitkan Lowongan"*. Begitu diterbitkan, URL portal karir publik langsung aktif seketika.`,
      },
      {
        id: 'buat-dengan-form',
        title: 'Metode 2: Buat dengan Form & Auto-Fill Dokumen JD',
        content: `Formulir pembuatan lowongan mandiri menyediakan kontrol penuh atas setiap parameter posisi:

### Fitur Unggah & Auto-Fill Berkas JD

- Mendukung file **PDF, DOC, DOCX, dan TXT** dengan ukuran hingga **10 MB**.
- Saat file diunggah, parser lokal dan AI membaca struktur isi dokumen lalu otomatis mengisi kolom Nama Jabatan, Level, Departemen, Syarat Pendidikan, Pengalaman, dan Deskripsi Pekerjaan.
- *Privasi Berkas:* Dokumen JD yang diunggah hanya diproses satu kali di memori untuk pengisian formulir dan tidak disimpan di storage permanen.

### Daftar Field & Spesifikasi Formulir

- **Nama Jabatan:** Nama posisi resmi pekerjaan.
- **Level Jabatan:** Pilihan terstruktur (*Intern / Magang, Junior, Mid-Level / Intermediate, Senior, Lead, Manager, Director, C-Level*).
- **Departemen:** Pilih dari departemen yang sudah ada, atau klik **"+ Buat Departemen Baru"** langsung dari dropdown tanpa perlu meninggalkan formulir (*Inline Department Creation*).
- **Lokasi Penempatan:** Autocomplete cerdas mencakup 500+ kota/kabupaten dan provinsi di seluruh Indonesia (\`ID_REGIONS\`).
- **Status Rekrutmen:** *Rencana* (draf internal yang belum dipublikasikan) atau *Aktif* (langsung tayang dan dapat dilamar di laman karir).
- **Jumlah Kebutuhan (Headcount):** Target kuota jumlah orang yang akan diterima.
- **Ikatan Kerja:** Pilihan *Penuh Waktu (Full-time), Paruh Waktu (Part-time), Kontrak, Freelance,* atau *Magang (Internship)*.
- **Rentang Upah:** Kolom Upah Minimum dan Upah Maksimum otomatis terformat rapi dengan mata uang Rupiah (\`Rp XX.XXX.XXX\`).
- **Siklus Upah:** *Bulanan, Mingguan, Harian,* atau *Per Proyek*.
- **Jadwal Rekrutmen:** Tanggal Mulai Buka Lowongan dan Estimasi Tanggal Onboarding karyawan.
- **Kualifikasi Pendidikan & Pengalaman:** Minimal jenjang pendidikan (SMA/SMK, D3, S1, S2, dsb.) dan minimal tahun pengalaman kerja relevan.
- **Rich-Text Editor Deskripsi Pekerjaan:** Editor WYSIWYG lengkap dengan toolbar format: Heading, Bold, Italic, Underline, Bulleted List, Numbered List, dan Perataan Teks (Kiri, Tengah, Kanan, Rata Kanan-Kiri).`,
      },
      {
        id: 'pemulihan-draft-otomatis',
        title: 'Fitur Pemulihan Draf Otomatis (Auto-Save)',
        callout: {
          type: 'tip',
          title: 'Tidak Perlu Takut Data Hilang',
          text: 'Setiap ketikan dan pilihan pada formulir otomatis disimpan ke memori sesi peramban (Session Storage). Jika peramban Anda tidak sengaja tertutup atau Anda berpindah halaman, isian formulir akan langsung kembali saat halaman dibuka ulang.',
        },
        content: `LUNA menjaga kenyamanan kerja Anda dengan fitur sinkronisasi draf otomatis di latar belakang. Isian akan tersimpan hingga lowongan resmi diterbitkan atau Anda secara sengaja menekan tombol batal / hapus draf.`,
      },
      {
        id: 'generasi-kriteria-ai',
        title: 'Generasi Kriteria Penilaian AI Pasca-Submit',
        content: `Begitu tombol **"Terbitkan Lowongan"** diklik:
1. Data lowongan langsung tersimpan di database dan status portal karir berubah menjadi aktif.
2. Secara bersamaan, sistem secara *asynchronous* (*fire-and-forget*) mengirimkan teks deskripsi pekerjaan ke model AI.
3. AI menganalisis kebutuhan posisi dan secara otomatis menyusun **Kriteria Penilaian Terbobot** (Kriteria Wajib & Nilai Tambah).
4. Hasil kriteria ini siap digunakan untuk mengevaluasi setiap berkas CV yang masuk, dan dapat Anda sesuaikan kembali kapan saja melalui tab *Setup Penilaian*.`,
      },
    ],
  },

  'kriteria-penilaian': {
    title: 'Kriteria Penilaian AI',
    category: '3. Manajemen Lowongan & Sebar',
    mode: 'product',
    description: 'Penyusunan kriteria evaluasi terbobot otomatis oleh AI untuk menyaring pelamar secara akurat.',
    lastUpdated: '1 September 2026',
    screenshots: [
      { src: '/assets/docs/Kriteria Penilaian.png', alt: 'Daftar Kriteria Wajib dan Nilai Tambah dengan bobot Tinggi/Sedang/Rendah', ratio: '4:3' },
    ],
    sections: [
      {
        id: 'kategori-bobot',
        title: 'Kategori Kriteria & Pembobotan',
        content: `Setelah deskripsi lowongan disimpan, AI secara otomatis menghasilkan draf kriteria penilaian yang dibagi menjadi dua jenis:
- **Kriteria Wajib:** Kualifikasi mutlak yang langsung mempengaruhi skor akhir (0–100) berdasarkan bobot *Tinggi*, *Sedang*, atau *Rendah*.
- **Nilai Tambah:** Kualifikasi pendukung yang memberikan poin plus namun tidak menggugurkan kandidat jika belum terpenuhi.

HR dapat meninjau, mengubah kalimat kriteria, menyesuaikan bobot, atau menambah kriteria baru sebelum lowongan digunakan untuk menilai pelamar.`,
      },
    ],
  },

  'status-siklus-lowongan': {
    title: 'Siklus Hidup & Status Lowongan',
    category: '3. Manajemen Lowongan & Sebar',
    mode: 'product',
    description: 'Panduan pengelolaan 5 status lowongan kerja, fitur duplikasi posisi (clone), dan pengarsipan lowongan secara rapi.',
    lastUpdated: '2 September 2026',
    sections: [
      {
        id: 'lima-status-lowongan',
        title: '5 Siklus Status Lowongan Kerja',
        content: `Setiap lowongan di LUNA memiliki status siklus hidup yang dapat diubah kapan saja melalui dropdown status di header halaman detail lowongan:

### 1. Rencana (Draf Internal)
Posisi yang masih dalam tahap perumusan atau perencanaan internal. Lowongan berstatus *Rencana* belum dapat dilihat atau dilamar oleh publik di portal karir.

### 2. Aktif (Tayang & Menerima Pelamar)
Lowongan resmi dipublikasikan ke Laman Karier perusahaan. Pencari kerja dapat menemukan tautan dan mengirimkan berkas lamaran mereka secara langsung.

### 3. Ditahan (Jeda Sementara)
Proses rekrutmen dihentikan sementara (misal: peninjauan anggaran atau evaluasi internal). Pendaftaran di laman karir akan ditutup sementara hingga status diaktifkan kembali.

### 4. Selesai (Kebutuhan Terpenuhi)
Kandidat yang dibutuhkan telah berhasil direkrut. Laman lowongan ditutup dan pelamar tidak dapat lagi mengirimkan berkas baru.

### 5. Dibatalkan
Posisi resmi dibatalkan atau ditutup permanen tanpa pengangkatan kandidat.`,
      },
      {
        id: 'duplikasi-dan-arsip',
        title: 'Fitur Duplikasi Lowongan (Clone) & Pengarsipan',
        content: `Pada header halaman detail lowongan tersedia beberapa aksi cepat penting:

### Duplikasi Lowongan (Clone)
Klik tombol **"Duplikasi Lowongan"** untuk membuat salinan posisi baru yang identik. Seluruh parameter jabatan, departemen, lokasi penempatan, rentang upah, kualifikasi, deskripsi pekerjaan, hingga bobot kriteria AI akan disalin otomatis sehingga Anda tidak perlu mengetik ulang dari awal.

### Mengarsipkan Lowongan
Klik tombol **"Arsipkan Lowongan"** untuk memindahkan posisi yang telah selesai atau dibatalkan ke daftar arsip. Pengarsipan menjaga tabel lowongan utama tetap bersih dan fokus pada posisi aktif, tanpa menghapus riwayat pelamar yang pernah masuk.`,
      },
    ],
  },

  'laman-karir': {
    title: 'Publikasi ke Laman Karier',
    category: '3. Manajemen Lowongan & Sebar',
    mode: 'product',
    description: 'Mekanisme penerbitan otomatis ke portal karir publik perusahaan, fitur QR Code instan, dan pembagian tautan multi-kanal.',
    lastUpdated: '2 September 2026',
    screenshots: [
      { src: '/assets/docs/Status lowongan aktif.png', alt: 'Badge status lowongan Aktif', ratio: '4:3' },
    ],
    sections: [
      {
        id: 'portal-otomatis',
        title: 'Publikasi Otomatis & URL Eksklusif',
        content: `Begitu status lowongan disetel ke **Aktif**, LUNA otomatis menerbitkan halaman lowongan publik di alamat:
\`https://karir.lunasys.ai/[nama-perusahaan]/[slug-lowongan]\`

### Fitur Peninjauan & Pembagian Multi-Platform

Pada halaman detail lowongan tersedia alat publikasi terpadu:
- **Tombol "Buka Halaman":** Membuka tampilan laman karir persis seperti yang dilihat oleh calon pelamar.
- **Salin Tautan Cepat:** Menyalin URL lowongan ke papan klip komputer/ponsel.
- **Kode QR Instan (QR Code):** Menampilkan barcode QR yang dapat diunduh atau dipindai langsung menggunakan kamera smartphone — sangat praktis untuk dicetak pada poster lowongan fisik, banner bursa kerja (*job fair*), atau brosur toko.
- **Berbagi ke Media Sosial & Pesan:** Tombol berbagi instan satu klik ke **WhatsApp**, **LinkedIn**, **Instagram**, **Facebook**, **X (Twitter)**, dan **Telegram**.`,
      },
    ],
  },

  'menu-sebar': {
    title: 'Menu Sebar (Akun Sendiri & Mitra)',
    category: '3. Manajemen Lowongan & Sebar',
    mode: 'product',
    description: 'Fitur pengelolaan draf copywriting media sosial dan direktori komunitas lowongan kerja mitra terverifikasi.',
    lastUpdated: '1 September 2026',
    screenshots: [
      { src: '/assets/docs/menu sebar.png', alt: 'Halaman Sebar dengan draf copywriting siap salin per lowongan', ratio: '16:9' },
    ],
    sections: [
      {
        id: 'tab-akun-sendiri',
        title: 'Tab 1: Akun Sendiri',
        content: `LUNA menyiapkan **draf copywriting siap pakai** untuk setiap lowongan aktif yang disesuaikan formatnya untuk berbagai platform:
- **WhatsApp & Telegram:** Pesan teks rapi dengan poin kualifikasi dan link pendaftaran.
- **Instagram & Facebook:** Draf caption promosi lowongan lengkap dengan tagar relevan.
- **LinkedIn:** Format pengumuman profesional yang siap ditempel ke postingan profil perusahaan.
Cukup klik tombol **"Salin Teks"** dan tempelkan ke media sosial milik perusahaan Anda.`,
      },
      {
        id: 'tab-akun-mitra',
        title: 'Tab 2: Akun Mitra Terkurasi',
        content: `Direktori akun media sosial dan grup komunitas lowongan kerja publik (grup Facebook, channel Telegram, akun media sosial mitra) yang telah dikurasi oleh tim LUNA:
- Dilengkapi **template pesan Direct Message (DM)** perkenalan resmi ke admin akun mitra.
- Klik **"Buka Akun"** untuk mengirim DM langsung ke pengelola komunitas mitra agar lowongan Anda disebarkan secara gratis dengan jangkauan pencari kerja yang lebih luas.`,
      },
    ],
  },

  // ----------------------------------------------------
  // 4. CANDIDATE WAREHOUSE
  // ----------------------------------------------------
  'candidate-warehouse': {
    title: 'Gudang Data Pelamar (Warehouse)',
    category: '4. Candidate Warehouse',
    mode: 'product',
    description: 'Pusat penyimpanan terpadu seluruh data pelamar dari lamaran mandiri portal karir maupun unggahan manual HR, lengkap dengan pencarian cerdas, filter status alur seleksi, serta pengunduhan berkas satuan dan massal.',
    lastUpdated: '2 September 2026',
    sections: [
      {
        id: 'master-talent-pool',
        title: 'Konsep Master Talent Pool & 2 Jalur Masuk',
        callout: {
          type: 'info',
          title: 'Database Talenta Tanpa Batasan Kuota',
          text: 'Seluruh berkas CV dan profil pelamar yang pernah masuk tersimpan permanen di Candidate Warehouse perusahaan Anda. Data ini tidak akan dihapus otomatis dan dapat diakses, disaring, serta diunduh kapan saja tanpa batasan kuota.',
        },
        content: `Candidate Warehouse di LUNA mengumpulkan seluruh berkas pelamar melalui **2 jalur utama**:
1. **Lamaran Mandiri via Portal Karier Publik:** Pencari kerja membuka link lowongan resmi perusahaan Anda (\`karir.lunasys.ai/[nama-perusahaan]\`), mengisi data diri singkat, dan mengunggah resume tanpa perlu mendaftar akun.
2. **Unggah Manual oleh Tim HR:** Rekruter mengunggah berkas CV secara langsung — baik berkas tunggal maupun ratusan berkas sekaligus (*Bulk Batch Unggah*) — dari dalam dasbor.

Kedua jalur ini otomatis bermuara ke database talenta yang sama dan langsung dievaluasi oleh sistem AI Scoring ke lowongan terkait dalam hitungan detik.`,
      },
      {
        id: 'tabel-pencarian-filter',
        title: 'Tabel Master, Pencarian Universal & Filter Multidimensi',
        content: `Halaman utama menu **Kandidat** menyajikan tabel master talenta yang dilengkapi fitur penyaringan tingkat lanjut:

### Pencarian & Pengurutan

- **Pencarian Universal:** Temukan kandidat secara instan dengan mengetikkan nama pelamar, tag keahlian (*skills*), nama universitas, jurusan pendidikan, perusahaan tempat bekerja sebelumnya, atau lokasi domisili.
- **Pengurutan (Sorting):** Urutkan data berdasarkan *Nama (A-Z)*, *Nama (Z-A)*, *Terbaru (tanggal melamar terbaru)*, atau *Terlama*.

### Filter Multidimensi

- **Filter Lowongan:** Menampilkan kandidat yang melamar pada posisi tertentu saja.
- **Filter Status Pipeline (10 Tahap):** Saring kandidat berdasarkan posisi tahapan seleksi aktif (*Kandidat Baru, Terseleksi, Diajukan, Penjadwalan Wawancara, Wawancara HR, Wawancara Akhir, Penawaran Kerja, Diterima, Onboarding, Lolos Masa Percobaan,* atau *Tidak Sesuai*).
- **Filter Status Arsip:** Beralih antara daftar kandidat aktif atau kandidat yang sedang diarsipkan.`,
      },
      {
        id: 'unduh-cv-satuan-massal',
        title: 'Fitur Unduh CV (Satuan & Massal via ZIP)',
        callout: {
          type: 'tip',
          title: 'Unduh Massal Otomatis Menjadi File .ZIP',
          text: 'Anda tidak perlu mengunduh CV satu per satu jika ada puluhan kandidat yang ingin ditinjau bersama tim offline. Cukup centang nama-nama kandidat, klik Aksi Massal, dan pilih "Unduh CV Terpilih" untuk menerima seluruh berkas dalam 1 file .zip.',
        },
        content: `LUNA memberikan kebebasan penuh dalam mengelola aset dokumen pelamar Anda:

### Unduh CV Satuan

Klik ikon unduh langsung pada baris kandidat di tabel untuk mengunduh dokumen PDF atau Word asli milik kandidat tersebut ke komputer Anda.

### Unduh CV Massal via ZIP

1. Centang kotak seleksi di sebelah kiri nama kandidat yang diinginkan (atau centang kotak di header tabel untuk memilih seluruh kandidat di halaman tersebut).
2. Klik tombol menu **Aksi Massal** yang muncul di toolbar atas.
3. Pilih opsi **"Unduh CV Terpilih"**.
4. Sistem akan mengumpulkan seluruh dokumen terpilih di latar belakang dengan indikator status *"Mengemas CV..."* dan langsung mengunduhnya sebagai satu file arsip **\`.zip\`**.`,
      },
      {
        id: 'aksi-massal-lainnya',
        title: 'Aksi Massal Lainnya (Bulk Assign & Archive)',
        content: `Selain pengunduhan massal, tombol Aksi Massal juga menyediakan fungsionalitas:

- **Tambahkan ke Lowongan (Bulk Assign):** Mendaftarkan puluhan kandidat terpilih sekaligus ke lowongan pekerjaan baru tanpa perlu mengunggah ulang berkas CV mereka.
- **Arsipkan / Tampilkan Massal:** Memindahkan kandidat yang belum terpilih ke daftar arsip agar tabel utama tetap fokus pada rekrutmen aktif, atau memulihkan kembali kandidat dari arsip kapan saja.`,
      },
    ],
  },

  'unggah-cv': {
    title: 'Unggah CV & Spesifikasi File',
    category: '4. Candidate Warehouse',
    mode: 'product',
    description: 'Panduan teknis pengunggahan berkas resume: format yang didukung, batasan ukuran 10 MB, antrean status berkas, dan fitur retry individual.',
    lastUpdated: '2 September 2026',
    screenshots: [
      { src: '/assets/docs/Tambah kandidat.png', alt: 'Halaman Tambah Kandidat — unggah CV untuk posisi terpilih', ratio: '16:9' },
    ],
    sections: [
      {
        id: 'spesifikasi-unggah',
        title: 'Ketentuan Dokumen & Batasan Berkas',
        content: `Saat mengunggah berkas kandidat di tab **Unggah CV**:
- **Format yang Didukung:** File dokumen **PDF (\`.pdf\`)** dan **Microsoft Word (\`.docx\`)**.
- **Ukuran Maksimal:** Hingga **10 MB** per berkas (sangat leluasa untuk CV dengan portofolio visual).
- **Kapasitas Batch:** Bebas mengunggah banyak berkas sekaligus (*unggah massal*) dengan menarik file (*drag-and-drop*) atau memilih lewat file explorer.
- **Pemilihan Posisi Tujuan:** Anda dapat memilih lowongan kerja aktif tujuan sebelum mengunggah, atau memilih opsi *"Tanpa Posisi / Simpan ke Warehouse Saja"* jika ingin menyimpan profil pelamar ke talent pool umum terlebih dahulu.`,
      },
      {
        id: 'antrean-status-unggah',
        title: 'Manajemen Status Antrean & Fitur "Coba Lagi" (Retry)',
        content: `Setiap berkas yang diunggah akan menampilkan indikator status pemrosesan secara real-time:

- **Proses Unggah:** Sistem sedang mengirimkan dan membedah isi teks berkas.
- **Menunggu:** Berkas berada dalam antrean giliran pemrosesan batch.
- **Berhasil:** Berkas sukses diunggah, data berhasil diekstrak oleh AI, dan kandidat masuk ke database.
- **Gagal Unggah:** Berkas mengalami kendala (misal: koneksi terputus, dokumen dikunci password, atau format tidak valid). Dilengkapi tooltip penjelasan penyebab kegagalan.

### Fitur "Coba Lagi" (Individual Retry)

Anda dapat menekan tombol **Coba Lagi** pada baris berkas yang gagal secara mandiri tanpa perlu mengunggah ulang file-file lain yang sudah berstatus sukses.`,
      },
    ],
  },

  'riwayat-aktivitas': {
    title: 'Tab Riwayat & Log Pelamar',
    category: '4. Candidate Warehouse',
    mode: 'product',
    description: 'Audit trail transparansi seluruh aktivitas unggah CV manual oleh HR maupun pelamar yang melamar mandiri lewat portal karir publik.',
    lastUpdated: '2 September 2026',
    sections: [
      {
        id: 'log-riwayat',
        title: 'Audit Trail Riwayat Aktivitas Rekrutmen',
        content: `Tab **Riwayat** pada menu Tambah Kandidat mencatat seluruh log pemrosesan dokumen secara terperinci untuk menjamin transparansi operasional tim rekrutmen:

### Kolom Informasi Riwayat

- **Tanggal & Waktu:** Waktu pelaksanaan batch atau waktu pelamar mengirim lamaran.
- **Sumber Aktivitas:** Membedakan secara tegas apakah berkas masuk melalui Portal Karir (pelamar mandiri) atau diunggah oleh Nama Pengguna HR.
- **Nama Posisi:** Lowongan pekerjaan yang dituju.
- **Jumlah Berkas:** Rincian total berkas, jumlah berkas yang berhasil diproses, dan jumlah berkas yang gagal.
- **Status Pengerjaan:** Indikator badge Selesai, Sebagian Gagal, Gagal Total, atau Sedang Diproses.

### Penyaringan Log Riwayat

Anda dapat memfilter riwayat berdasarkan Sumber Aktivitas, Nama Posisi Lowongan, Status Pengerjaan, serta menentukan rentang waktu pelaksanaan (Dari Tanggal hingga Sampai Tanggal).

### Fitur "Lihat Detail Batch"

Menekan tombol aksi pada baris riwayat akan membuka kembali rincian daftar file pada tab unggah, memungkinkan Anda memeriksa status per berkas atau menjalankan retry pada berkas yang sebelumnya gagal.`,
      },
    ],
  },

  'data-parsing': {
    title: 'Data Hasil Ekstraksi Otomatis',
    category: '4. Candidate Warehouse',
    mode: 'product',
    description: 'Rincian data profil kandidat yang diekstrak secara otomatis oleh AI, kapabilitas Inline Edit, in-app PDF Viewer, dan pengelolaan multi-posisi.',
    lastUpdated: '2 September 2026',
    sections: [
      {
        id: 'tiga-tab-detail',
        title: '3 Tab Utama pada Halaman Detail Kandidat',
        content: `Saat Anda membuka profil seorang kandidat di Candidate Warehouse, halaman terbagi menjadi 3 tab navigasi terpadu:
1. **Tab Ringkasan:** Pusat data profil terstruktur, riwayat karir, pendidikan, keahlian, dan ringkasan skor AI.
2. **Tab Resume:** Penampil dokumen CV asli (*In-App PDF Viewer*) dengan fitur visual interaktif.
3. **Tab Lowongan Terkait:** Rekam jejak seluruh lowongan kerja yang dilamar oleh kandidat beserta tahapan seleksinya masing-masing.`,
      },
      {
        id: 'kelengkapan-profil',
        title: 'Struktur Data Profil & Fitur Inline-Edit',
        content: `AI LUNA membedah dan mengekstrak data CV menjadi struktur profil yang rapi. Seluruh data ini mendukung **Inline Edit** (klik pada teks atau tombol pensil untuk mengedit dan menyimpan perubahan seketika):

### Data Personal & Kontak

- **ID Unik Kandidat:** Dibuat otomatis oleh sistem (bersifat read-only).
- **Nama Lengkap & Gender:** Nama pelamar dan jenis kelamin (Pria / Wanita).
- **Pendidikan Terakhir:** Jurusan pendidikan dan nama universitas / institusi.
- **Pekerjaan Terakhir:** Perusahaan saat ini dan jabatan saat ini.
- **Total Pengalaman:** Total lama pengalaman kerja dalam hitungan tahun.
- **Tanggal Lahir:** Dilengkapi native date picker.
- **Lokasi Domisili:** Autocomplete cerdas 500+ kota/kabupaten di Indonesia (\`ID_REGIONS\`).
- **Kontak:** Alamat email aktif dan nomor telepon / WhatsApp.
- **Tautan Online:** Tautan profil LinkedIn dan link portofolio digital.

### Detail Kompensasi & Karir

- **Sektor Industri:** Bidang industri pengalaman kandidat.
- **Tahun Terakhir Bekerja:** Tahun terakhir kandidat aktif bekerja.
- **Harapan Upah:** Ekspektasi gaji yang otomatis diformat ke mata uang Rupiah (\`Rp XX.XXX.XXX\`).
- **Harapan Benefit:** Tunjangan, asuransi, atau fleksibilitas kerja yang diharapkan.

### Keahlian (Interactive Skills Tagging)

- Tag keahlian teknis dan non-teknis hasil ekstraksi AI.
- Anda dapat menambahkan skill baru secara instan (ketik dan tekan Enter), mengedit nama tag secara langsung di tempat (inline), atau menghapus tag yang tidak relevan.

### Riwayat Pengalaman Kerja & Pendidikan

- **Pengalaman Kerja:** Nama jabatan, nama perusahaan, periode masa kerja (atau status Masih Bekerja), serta rincian tanggung jawab dan pencapaian dengan fitur *Lihat Lebih Banyak / Sedikit*.
- **Pendidikan:** Jenjang pendidikan (SMA/SMK, D3, S1, S2, dsb.), nama institusi, jurusan, nilai/IPK (GPA), dan rincian prestasi.
- **Sertifikasi:** Judul lisensi atau sertifikasi profesional, badan penerbit, dan masa berlaku.`,
      },
      {
        id: 'in-app-pdf-viewer',
        title: 'In-App Resume / CV Viewer Interaktif',
        content: `Pada tab **Resume**, Anda dapat memeriksa dokumen fisik CV kandidat secara langsung di dalam aplikasi tanpa perlu mengunduh file ke komputer terlebih dahulu:
- **Kontrol Zoom:** Perbesar (*Zoom In*) dan perkecil (*Zoom Out*) teks dokumen untuk kenyamanan membaca.
- **Navigasi Halaman:** Pindah antar halaman CV dengan tombol panah atau pemilih nomor halaman.
- **Mode Layar Penuh (Maximize):** Membuka dokumen dalam ukuran penuh untuk peninjauan mendalam.
- **Bilah Sisi Thumbnail:** Menampilkan pratinjau seluruh lembar halaman dokumen di panel samping.
- **Tombol Unduh Dokumen:** Mengunduh salinan berkas asli kapan saja dibutuhkan.`,
      },
      {
        id: 'multi-posisi-tambah',
        title: 'Pengelolaan Multi-Posisi & Tombol "+ Tambah ke Posisi"',
        content: `Satu kandidat dapat diproses di beberapa lowongan kerja secara simultan tanpa duplikasi berkas:
- Pada header profil kandidat, klik tombol **"+ Tambah ke Posisi"**.
- Pilih lowongan kerja aktif lain yang tersedia di perusahaan Anda.
- Sistem akan langsung menjalankan evaluasi **AI Scoring instan** terhadap kriteria posisi baru tersebut.
- Setiap lowongan memiliki status pipeline yang mandiri — misalnya: kandidat berstatus *Wawancara HR* di posisi Desainer Grafis, namun berstatus *Terseleksi* di posisi UI/UX Designer.`,
      },
    ],
  },

  // ----------------------------------------------------
  // 5. AI MATCHING & SCORING
  // ----------------------------------------------------
  'ai-scoring': {
    title: 'Skala Skor & Kategori Fit',
    category: '5. AI Matching & Scoring',
    mode: 'product',
    description: 'Penjelasan mekanisme evaluasi AI, rentang skor 0–100, dan klasifikasi kecocokan kandidat.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'skala-fit-v2',
        title: 'Skala Skor Kesesuaian LUNA V2.0',
        callout: {
          type: 'info',
          title: 'Paket Free Tidak Termasuk AI Scoring',
          text: 'Skoring AI (termasuk penilaian ulang) hanya tersedia untuk paket berbayar. Di paket Free, kandidat tetap tersimpan dan ter-link ke lowongan, tapi kolom skornya dibiarkan kosong — upgrade paket untuk mengaktifkan penilaian otomatis.',
        },
        content: `Evaluasi AI membandingkan isi CV terhadap kriteria pekerjaan dalam waktu kurang dari 30 detik. Hasil skor diklasifikasikan ke dalam 4 kategori resmi:

- **Sangat Fit (≥ 80):** Kandidat sangat sesuai dengan kriteria yang disyaratkan. Prioritaskan untuk tahap wawancara lanjutan.
- **Fit (60 – 79):** Kandidat sesuai dengan sebagian besar kriteria utama.
- **Cukup Fit (40 – 59):** Kandidat cukup sesuai, namun terdapat beberapa kriteria yang belum sepenuhnya terpenuhi.
- **Kurang Fit (< 40):** Kandidat kurang memenuhi syarat kualifikasi dasar lowongan.`,
      },
      {
        id: 'skor-bukan-keputusan-final',
        title: 'Skor AI Adalah Rekomendasi, Bukan Keputusan Final',
        content: `Skor dihitung murni dari kecocokan isi CV terhadap kriteria yang Anda tulis sendiri di lowongan — AI tidak pernah menggugurkan atau meloloskan kandidat secara otomatis.

Fungsi skor ini adalah membantu Anda memprioritaskan siapa yang ditinjau lebih dulu dari tumpukan pelamar, bukan menggantikan penilaian Anda. Anda tetap yang memutuskan siapa lanjut ke tahap wawancara, siapa yang tidak sesuai, dan kapan memindahkan kandidat ke tahap berikutnya di pipeline.`,
      },
    ],
  },

  'hasil-penilaian': {
    title: 'Halaman Hasil Evaluasi AI',
    category: '5. AI Matching & Scoring',
    mode: 'product',
    description: 'Membaca radial gauge skor, narasi rangkuman AI, dan bukti kutipan nyata dari CV pelamar.',
    lastUpdated: '1 September 2026',
    screenshots: [
      { src: '/assets/docs/skoring.png', alt: 'Halaman Hasil Penilaian AI tampilan mobile dengan radial gauge skor', ratio: '3:4' },
      { src: '/assets/docs/Skoring 2.png', alt: 'Halaman Hasil Penilaian AI tampilan desktop dengan tabel kriteria dan bukti', ratio: '3:4' },
    ],
    sections: [
      {
        id: 'tampilan-evaluasi',
        title: 'Komponen Halaman Detail Penilaian',
        content: `Dibuka melalui tombol **"Detail Penilaian"** pada baris kandidat:
- **Radial Gauge:** Indikator visual nilai total (0–100) beserta rincian jumlah kriteria yang tercapai (Tinggi / Sedang / Rendah).
- **Rangkuman AI:** Paragraf kesimpulan objektif mengenai profil kandidat terhadap posisi yang dilamar.
- **Tabel Penilaian per Kriteria:** Setiap kriteria dilengkapi badge status warna dan kutipan bukti nyata (*evidence*) yang ditemukan langsung dari teks CV pelamar.
- **Aksi Cepat:** Dropdown untuk langsung mengubah tahap pipeline kandidat atau tombol menandai kandidat sebagai *Tidak Sesuai*.`,
      },
    ],
  },

  'penilaian-ulang': {
    title: 'Penilaian Ulang (Reevaluate)',
    category: '5. AI Matching & Scoring',
    mode: 'product',
    description: 'Prosedur menghitung ulang skor AI saat kriteria lowongan atau data kandidat mengalami revisi.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'prosedur-rescore',
        title: 'Kapan Melakukan Penilaian Ulang?',
        content: `Lakukan penilaian ulang jika:
1. Anda memperbarui bobot atau deskripsi kriteria pada lowongan.
2. Anda melengkapi atau memperbaiki riwayat pengalaman/keahlian kandidat secara manual.

Klik tombol **"Penilaian Ulang"** pada halaman detail evaluasi kandidat. Sistem akan menjalankan AI Scoring ulang dalam waktu singkat tanpa mengubah alur seleksi yang sudah berjalan.`,
      },
    ],
  },

  // ----------------------------------------------------
  // 6. PIPELINE MANAGEMENT
  // ----------------------------------------------------
  'alur-pipeline': {
    title: 'Papan Kerja Pipeline (Board & List)',
    category: '6. Pipeline Management',
    mode: 'product',
    description: 'Panduan lengkap papan seleksi kandidat per lowongan: navigasi Tampilan Papan Kanban (Board View), Tampilan Daftar (List View), interaksi drag-and-drop, kolom lipat, dan kartu kandidat pintar.',
    lastUpdated: '2 September 2026',
    sections: [
      {
        id: 'konsep-papan-pipeline',
        title: 'Papan Kerja Seleksi Terpadu per Lowongan',
        callout: {
          type: 'info',
          title: 'Lokasi Fitur Pipeline',
          text: 'Papan Pipeline terletak di dalam Tab "Kandidat" pada setiap halaman detail lowongan. Fitur ini secara eksklusif memuat seluruh kandidat yang melamar pada posisi tersebut dan otomatis tersinkronisasi dengan skor AI.',
        },
        content: `Di dalam halaman detail lowongan, LUNA menyediakan dua mode tampilan kerja yang fleksibel:

### 1. Tampilan Papan Kanban (Board View)

Tampilan visual interaktif berbentuk kolom-kolom tahapan rekrutmen. Mode ini dirancang khusus untuk kenyamanan pemantauan progres kandidat di layar desktop:
- **Interaksi Drag-and-Drop:** Tarik kartu kandidat dan lepaskan ke kolom tahapan berikutnya untuk memindahkan status alur secara instan.
- **Kolom Lipat (Collapsible / Accordion Column):** Setiap kolom tahapan dapat dilipat/dikecilkan dengan mengklik tombol panah di header kolom. Sangat berguna untuk menyembunyikan kolom yang kosong atau melipat kolom *Tidak Sesuai* agar ruang kerja tetap lega.
- **Kartu Pelamar Pintar:** Menampilkan nama, jabatan terakhir, perusahaan asal, total tahun pengalaman, dan badge skor kesesuaian AI.
- **Hover Visual Donut Score:** Arahkan kursor (*hover*) ke badge skor pada kartu untuk memunculkan popover grafik donat lingkaran skor AI beserta tingkat kecocokan kandidat tanpa harus membuka halaman baru.
- **Aksi Cepat Menu Kartu:** Klik tombol titik tiga di pojok kartu untuk menandai kandidat sebagai *Tidak Sesuai* dengan cepat.

### 2. Tampilan Daftar (List View)

Tampilan tabel terstruktur yang ideal untuk penyaringan data bervolume besar:
- **Kolom Informasi Lengkap:** Memuat nama lengkap, jabatan dan perusahaan saat ini, lama pengalaman kerja, tautan profil LinkedIn langsung, kota domisili, badge skor AI, dan tombol aksi.
- **Dropdown Ubah Alur Langsung:** Klik badge alur pada baris tabel untuk memindahkan tahapan kandidat secara instan melalui menu dropdown.
- **Penyaringan & Pengurutan:** Saring pelamar berdasarkan rentang skor AI (*Tinggi, Sedang, Rendah*) atau tahapan alur tertentu, serta urutkan berdasarkan skor tertinggi/terendah maupun nama A-Z.
- **Aksi Massal (Bulk Action):** Centang beberapa kandidat sekaligus untuk menerapkan tindakan massal seperti diskualifikasi atau pengarsipan.`,
      },
      {
        id: 'slideover-penilaian',
        title: 'Panel Slide-Over Evaluasi Cepat',
        content: `Dari Tampilan Papan maupun Tampilan Daftar, Anda dapat mengklik tombol **"Detail Penilaian"** atau mengklik badge skor kandidat untuk membuka panel evaluasi samping (*slide-over panel*):

### Fungsionalitas Panel Penilaian

- **Rangkuman Evaluasi AI:** Ringkasan naratif alasan mengapa kandidat cocok atau kurang cocok untuk posisi ini.
- **Bukti Kutipan CV (Evidence Matching):** Teks kutipan nyata dari berkas CV pelamar yang membuktikan pemenuhan kualifikasi wajib dan nilai tambah.
- **Ubah Alur dari Panel:** Pindahkan tahapan seleksi kandidat langsung dari bagian bawah panel tanpa harus menutup tampilan evaluasi.`,
      },
    ],
  },

  'tahapan-seleksi': {
    title: '10 Tahap Alur Rekrutmen',
    category: '6. Pipeline Management',
    mode: 'product',
    description: 'Rincian fungsi dan tata cara operasional 10 tahapan seleksi resmi di LUNA dari tahap awal hingga karyawan tetap.',
    lastUpdated: '2 September 2026',
    sections: [
      {
        id: 'daftar-10-tahap',
        title: 'Alur 10 Tahap Rekrutmen Resmi LUNA',
        content: `Pipeline rekrutmen di LUNA dirancang mengikuti alur seleksi standar industri yang mencakup 10 tahapan:

### 1. Kandidat Baru
Tahap penampungan awal bagi pelamar yang baru saja mengirimkan lamaran via portal karir publik atau berkas CV yang baru diunggah oleh tim HR.

### 2. Terseleksi
Kandidat yang telah ditinjau hasil skor AI-nya dan dinilai layak oleh HR untuk masuk ke proses pertimbangan lebih lanjut.

### 3. Diajukan
Kandidat yang profil dan resume-nya diajukan ke *Hiring Manager*, Kepala Departemen, atau User terkait untuk mendapatkan persetujuan wawancara.

### 4. Penjadwalan Wawancara
Tahap koordinasi pencocokan jadwal wawancara antara pihak penilai perusahaan dengan kandidat.

### 5. Wawancara HR
Sesi wawancara awal dengan tim HR untuk mendalami kepribadian, latar belakang profesional, ekspektasi kompensasi, dan kesesuaian budaya kerja.

### 6. Wawancara Akhir
Sesi wawancara teknis/lanjutan dengan User, *Head of Department*, atau jajaran Direksi.

### 7. Penawaran Kerja
Tahap pengiriman surat penawaran resmi (*Offering Letter*) serta proses negosiasi benefit dan tanggal mulai bekerja.

### 8. Diterima
Kandidat telah resmi menandatangani penawaran dan dinyatakan bergabung dengan perusahaan.

### 9. Onboarding
Proses pengenalan, pengurusan administrasi internal, penyerahan fasilitas kerja, dan orientasi peran baru.

### 10. Lolos Masa Percobaan
Karyawan telah berhasil menyelesaikan masa evaluasi percobaan kerja (*probation*) dan resmi menjadi karyawan tetap.`,
      },
    ],
  },

  'kandidat-tidak-sesuai': {
    title: 'Menandai Kandidat Tidak Sesuai',
    category: '6. Pipeline Management',
    mode: 'product',
    description: 'Prosedur diskualifikasi pelamar dengan pencatatan 7 alasan penolakan terstruktur dan isolasi data per lowongan.',
    lastUpdated: '2 September 2026',
    sections: [
      {
        id: 'modal-alasan',
        title: 'Mekanisme & 7 Opsi Alasan Diskualifikasi',
        callout: {
          type: 'info',
          title: 'Cara Memicu Modal Tidak Sesuai',
          text: 'Anda dapat mendiskualifikasi kandidat dengan cara: (1) Menarik kartu ke kolom "Tidak Sesuai" pada Tampilan Papan, (2) Memilih "Tidak Sesuai" dari menu titik tiga kartu, atau (3) Menekan tombol diskualifikasi di panel detail penilaian.',
        },
        content: `Saat menandai kandidat sebagai **"Tidak Sesuai"**, LUNA menampilkan modal konfirmasi dengan 7 pilihan alasan terstruktur:

### 7 Pilihan Alasan Standar
- *Di atas budget* (ekspektasi gaji melebihi batas anggaran posisi).
- *Menerima tawaran lain* (kandidat sudah menerima tawaran dari perusahaan lain).
- *Tidak cocok budaya perusahaan* (tidak selaras dengan nilai-nilai organisasi).
- *Tidak hadir wawancara* (*no-show* saat jadwal wawancara berlangsung).
- *Tidak tersedia* (kandidat batal mencari kerja atau tidak dapat dihubungi).
- *Tidak memenuhi syarat* (kualifikasi mutlak tidak terpenuhi).
- *Lainnya* (disertai kolom isian catatan bebas opsional).

### Logika Penyaringan di Tampilan Kerja
- **Di Tampilan Daftar (List View):** Kandidat yang berstatus *Tidak Sesuai* otomatis disembunyikan dari tabel agar tim HR dapat fokus mengelola pelamar aktif.
- **Di Tampilan Papan (Board View):** Kandidat yang berstatus *Tidak Sesuai* dikelompokkan ke kolom paling kanan (*kolom Tidak Sesuai*) yang dapat dilipat agar tidak mengganggu pandangan.

### Keamanan Data di Candidate Warehouse
Pemberian status *Tidak Sesuai* hanya berlaku untuk posisi lowongan yang sedang diproses. Profil dan dokumen CV kandidat **tetap aman tersimpan** di Master Candidate Warehouse dan tetap dapat dipertimbangkan atau didaftarkan ke lowongan lain di masa depan.`,
      },
    ],
  },

  // ----------------------------------------------------
  // 7. PENGATURAN AKUN & PROFIL
  // ----------------------------------------------------
  'profil-perusahaan': {
    title: 'Profil Perusahaan & Video Profil',
    category: '7. Pengaturan Akun & Profil',
    mode: 'product',
    description: 'Pengaturan identitas organisasi, logo, jenis badan usaha, deskripsi, dan tautan video profil YouTube.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'branding-perusahaan',
        title: 'Identitas Organisasi di Portal Karir',
        content: `Informasi yang diatur di menu **Akun dan Profil** akan tampil langsung pada Laman Perusahaan publik:
- **Logo & Banner:** Foto representatif perusahaan.
- **Nama & Industri:** Identitas dan sektor bisnis.
- **Ukuran & Tahun Didirikan:** Skala headcount dan tahun berdiri.
- **Jenis Badan Usaha:** Bentuk entitas (PT, CV, Koperasi, Perorangan, dsb.).
- **Deskripsi Perusahaan:** Narasi mengenai visi, budaya kerja, dan profil bisnis.
- **Video Profil:** Tautan video YouTube pengenalan kantor atau suasana kerja yang otomatis tersemat di portal publik.`,
      },
    ],
  },

  'media-sosial': {
    title: 'Lokasi, Kontak & Media Sosial',
    category: '7. Pengaturan Akun & Profil',
    mode: 'product',
    description: 'Pengaturan alamat kantor resmi, website, email, nomor telepon, dan tautan Instagram, LinkedIn, TikTok.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'kontak-medsos',
        title: 'Kontak & Tautan Sosial Resmi',
        content: `Lengkapi informasi kontak agar pelamar dapat mengenal kredibilitas perusahaan Anda:
- **Lokasi & Alamat Lengkap:** Alamat fisik kantor utama.
- **Website & Email Resmi:** Kanal komunikasi resmi perusahaan.
- **Media Sosial:** Tautan akun Instagram, LinkedIn, dan TikTok resmi perusahaan yang ditampilkan di footer laman karir publik.`,
      },
    ],
  },

  'keamanan-akun': {
    title: 'Profil Pengguna & Ubah Password',
    category: '7. Pengaturan Akun & Profil',
    mode: 'product',
    description: 'Kelola nama tampilan penanggung jawab, email akun, dan pembaruan kata sandi berkala.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'ubah-password',
        title: 'Pengaturan Kata Sandi & Profil Pengguna',
        content: `Di tab Keamanan Akun:
- **Nama Tampilan:** Nama penanggung jawab akun HR (role saat ini bertindak sebagai Owner).
- **Ubah Kata Sandi:** Masukkan Kata Sandi Lama, Kata Sandi Baru (minimal 8 karakter kombinasi huruf & angka), lalu konfirmasi ulang untuk memperbarui kredensial login Anda.`,
      },
    ],
  },

  // ----------------------------------------------------
  // 8. DASBOR & BANTUAN
  // ----------------------------------------------------
  'dashboard-beranda': {
    title: 'Dasbor Beranda & Metrik',
    category: '8. Dasbor & Bantuan',
    mode: 'product',
    description: 'Navigasi beranda baru: panduan 3 langkah onboarding, metrik rekrutmen, dan kartu lowongan terbaru.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'beranda-overview',
        title: 'Fitur Dasbor Utama',
        content: `Saat login, dasbor menampilkan:
- **Sapaan Personal & Panduan 3 Langkah:** Tombol cepat *"Mulai Buat"* lowongan, *"Sebarkan Sekarang"*, dan *"Kelola Kandidat"*.
- **Ringkasan Metrik:** Kartu ringkas jumlah Lowongan Aktif dan Total Kandidat tersimpan.
- **Daftar Lowongan Terbaru:** Kartu interaktif berisi status posisi, distribusi kandidat per tahap (*Baru / Wawancara / Diterima*), tombol bagikan cepat, dan tautan kelola posisi.`,
      },
    ],
  },

  'quick-action-notif': {
    title: 'Quick Action & Notifikasi',
    category: '8. Dasbor & Bantuan',
    mode: 'product',
    description: 'Akses cepat pembuatan lowongan atau penambahan kandidat di bilah navigasi atas dan pemantauan aktivitas rekrutmen real-time.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'quick-action-fitur',
        title: 'Navigasi Cepat Navbar',
        content: `Pada bar atas navigasi tersedia dua utilitas penting:

### Quick Action

Akses instan satu klik untuk membuat lowongan baru, menambahkan kandidat, mengelola database kandidat, atau melihat seluruh lowongan aktif langsung dari header aplikasi.

### Notifikasi Real-Time

Pusat pemantauan aktivitas rekrutmen terkini (kandidat baru saja dinilai oleh AI, berkas CV berhasil diimpor, atau ada pelamar baru yang melamar via portal karir) lengkap dengan penanda waktu kejadian.`,
      },
    ],
  },

  'bantuan-hani': {
    title: 'Pusat Bantuan & Chat AI Hani',
    category: '8. Dasbor & Bantuan',
    mode: 'product',
    description: 'Kirim tiket pertanyaan teknis, mulai tur interaktif, atau konsultasi instan dengan AI Hani via WhatsApp.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'bantuan-support',
        title: 'Kanal Layanan Bantuan LUNA',
        content: `Jika Anda membutuhkan panduan atau mengalami kendala:
1. **Formulir Bantuan Resmi:** Data profil terisi otomatis. Pilih subjek kendala, jelaskan detail pertanyaan, dan tim support akan merespons melalui email/kontak Anda.
2. **Mulai Tur Interaktif:** Putar ulang panduan antarmuka produk kapan saja.
3. **Chat AI Hani via WhatsApp:** Widget chat mengambang yang siap menjawab pertanyaan seputar penggunaan fitur LUNA secara instan 24/7.`,
      },
    ],
  },

  'pencarian-global': {
    title: 'Fitur Pencarian Global',
    category: '8. Dasbor & Bantuan',
    mode: 'product',
    description: 'Pencarian universal cepat melintasi data Kandidat, Lowongan, dan Departemen menggunakan shortcut Ctrl + K.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'global-search',
        title: 'Pencarian Lintas Entitas',
        content: `Tekan tombol **Ctrl + K** (atau **Cmd + K** di Mac) untuk membuka modal pencarian global:
- **Kandidat:** Cari berdasarkan nama pelamar, keahlian (*skills*), riwayat perusahaan, atau domisili.
- **Lowongan:** Cari berdasarkan nama jabatan atau status seleksi.
- **Departemen:** Temukan seluruh lowongan yang berada di bawah departemen tertentu secara instan.`,
      },
    ],
  },

  // ----------------------------------------------------
  // 9. PANDUAN PEMECAHAN MASALAH
  // ----------------------------------------------------
  'troubleshooting-login-otp': {
    title: 'Kendala Login & OTP Email',
    category: '9. Panduan Pemecahan Masalah',
    mode: 'product',
    description: 'Solusi saat mengalami kesulitan login ke dasbor atau kode OTP pendaftaran tidak kunjung diterima.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'solusi-login',
        title: 'Kasus 1: Gagal Login ke Akun',
        content: `Jika halaman login menampilkan pesan kesalahan:
- Pastikan tombol *Caps Lock* pada keyboard tidak aktif.
- Gunakan fitur **"Lupa Kata Sandi"** untuk mereset password melalui tautan yang dikirimkan ke email Anda.
- Jika akun belum terverifikasi OTP saat registrasi, hubungi tim support LUNA.`,
      },
      {
        id: 'solusi-otp',
        title: 'Kasus 2: Kode OTP Email Tidak Masuk',
        content: `Jika kode OTP 6 digit belum muncul di kotak masuk:
- Tunggu maksimal 1 menit dan periksa folder **Spam**, **Junk**, atau tab **Promotions**.
- Pastikan tidak ada kesalahan penulisan alamat email kerja.
- Klik tombol **"Kirim Ulang Kode"** setelah hitung mundur selesai.`,
      },
    ],
  },

  'troubleshooting-cv-scoring': {
    title: 'Kendala Unggah CV & AI Scoring',
    category: '9. Panduan Pemecahan Masalah',
    mode: 'product',
    description: 'Solusi ketika berkas CV gagal diunggah, format tidak terbaca, atau skor AI belum muncul.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'solusi-unggah-cv',
        title: 'Kasus 3: Berkas CV Gagal Diunggah',
        content: `Penyebab umum dan solusinya:
- **Ukuran File Melebihi 10 MB:** Kompres dokumen PDF/DOCX sebelum diunggah.
- **Format File:** Pastikan file berekstensi \`.pdf\` atau \`.docx\` dan bukan file yang dikunci kata sandi (*password-protected*).
- **CV Terindikasi Duplikat:** Jika kandidat sudah ada di database, gunakan fitur *"Tambahkan ke Posisi"* tanpa perlu mengunggah ulang file.`,
      },
      {
        id: 'solusi-scoring-ai',
        title: 'Kasus 4 & 5: AI Scoring Belum Muncul / Kurang Sesuai',
        content: `Jika skor AI belum muncul setelah 30 detik:
- Pastikan Deskripsi Pekerjaan (JD) terisi minimal 300 karakter dan kriteria penilaian telah tersimpan.
- Lakukan refresh halaman atau klik tombol **"Penilaian Ulang"** pada halaman evaluasi kandidat.
- Jika ada keahlian kandidat yang belum terdeteksi sempurna, edit profil kandidat secara manual lalu jalankan *Penilaian Ulang*.`,
      },
    ],
  },

  'troubleshooting-teknis': {
    title: 'Error Teknis & Eskalasi Support',
    category: '9. Panduan Pemecahan Masalah',
    mode: 'product',
    description: 'Penanganan kendala teknis antarmuka dan prosedur eskalasi prioritas ke tim teknis LUNA.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'solusi-bug-teknis',
        title: 'Penanganan Kendala Antarmuka (Browser)',
        content: `Jika tampilan tidak merespons atau mengalami kendala render:
1. Lakukan *Hard Refresh* browser (\`Ctrl + Shift + R\` di Windows atau \`Cmd + Shift + R\` di Mac).
2. Bersihkan cache browser atau coba buka melalui jendela *Incognito / Private Window*.
3. Pastikan menggunakan browser versi terbaru (Google Chrome, Microsoft Edge, Mozilla Firefox, atau Safari).`,
      },
      {
        id: 'tabel-eskalasi',
        title: 'Matriks Prioritas Eskalasi Dukungan',
        content: `Tingkatan prioritas penanganan oleh tim LUNA:
- **Prioritas Tinggi (Akun terkunci / Fitur utama tidak berjalan):** Laporkan via Menu Bantuan dengan menyertakan email akun, tangkapan layar (*screenshot*), dan langkah reproduksi.
- **Prioritas Sedang (CV gagal diunggah berulang / Scoring kendala):** Sertakan nama file, format, dan nama lowongan terkait.
- **Prioritas Normal (Pertanyaan umum / Saran fitur):** Hubungi via formulir bantuan atau chat langsung dengan AI Hani di WhatsApp.`,
      },
    ],
  },

  // ----------------------------------------------------
  // 10. FAQ (TANYA JAWAB)
  // ----------------------------------------------------
  'faq-umum': {
    title: 'Pertanyaan yang Sering Diajukan',
    category: '10. FAQ (Tanya Jawab)',
    mode: 'product',
    description: 'Jawaban atas pertanyaan umum seputar biaya, privasi data, pencari kerja, dan kebebasan akses di LUNA.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'faq-list',
        title: 'FAQ Seputar Platform LUNA',
        content: `Berikut adalah rangkuman tanya jawab yang sering diajukan pengguna:

- **Q: Apakah LUNA benar-benar gratis?**
  *A:* Ya, paket Free berlaku permanen tanpa biaya berlangganan dan tanpa batasan jumlah kandidat yang melamar/tersimpan. Paket Free membatasi **1 lowongan Aktif** dalam satu waktu dan **belum termasuk AI Scoring otomatis** (kandidat tetap masuk ke Candidate Warehouse, skornya baru aktif setelah upgrade ke paket berbayar).

- **Q: Apa bedanya LUNA dengan job portal biasa atau Google Form?**
  *A:* LUNA memberikan halaman portal karir resmi atas nama perusahaan sendiri, pelamar dapat melamar tanpa perlu membuat akun, seluruh CV dapat diunduh kapan saja tanpa dikunci, setiap CV otomatis dinilai dan diranking oleh AI, serta dilengkapi alur pipeline seleksi dalam satu tempat terpadu.

- **Q: Saya seorang pencari kerja, apakah saya perlu membuat akun di LUNA?**
  *A:* Tidak perlu. Akun LUNA hanya diperuntukkan bagi tim HR/perusahaan. Pencari kerja cukup membuka tautan lowongan yang dibagikan perusahaan untuk langsung melamar pekerjaan.

- **Q: Apakah data kandidat dan lowongan perusahaan saya aman?**
  *A:* Sangat aman. Seluruh dokumen dan data relasional tersimpan di server terenkripsi dengan isolasi akses ketat per organisasi (*Multi-Tenant Isolation* via Row Level Security). Data CV Anda tidak pernah digunakan untuk melatih model AI publik.

- **Q: Bisakah satu kandidat didaftarkan ke lebih dari satu lowongan pekerjaan?**
  *A:* Ya. Anda dapat menambahkan kandidat ke berbagai posisi lowongan melalui tab Rekrutmen di profil kandidat (*"+ Tambah ke Posisi"*) tanpa perlu mengunggah ulang berkas CV.

- **Q: Apakah saya bisa mengundang anggota tim lain ke akun LUNA perusahaan?**
  *A:* Pada LUNA V2.0 saat ini, setiap akun perusahaan beroperasi dengan hak akses penanggung jawab utama (*Owner*). Fitur penambahan multi-user anggota tim dengan pembagian role bertingkat sedang disiapkan untuk pembaruan berikutnya.`,
      },
    ],
  },

  // ----------------------------------------------------
  // DEVELOPER & ENGINEERING ARTICLES
  // ----------------------------------------------------
  'arsitektur-sistem': {
    title: 'Ikhtisar Arsitektur Sistem',
    category: 'Arsitektur & Desain Sistem',
    mode: 'developer',
    description: 'Gambaran umum arsitektur full-stack Luna: integrasi React 19 Frontend, Supabase Backend-as-a-Service, Deno Edge Functions, dan Multimodal AI Pipelines.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'tech-stack-overview',
        title: 'Core Tech Stack',
        content: `Arsitektur Luna dirancang dengan fokus pada skalabilitas, latensi rendah, serta efisiensi konsumsi token AI:

- **Frontend Core:** React 19, Vite 8, Tailwind CSS v4, React Router v7.
- **Client-side Parsing Engine:** Mammoth.js (DOCX), PDF.js & react-pdftotext (PDF), JSZip (Batch archive).
- **Backend & Database:** Supabase (PostgreSQL with Row Level Security, Storage Buckets, Auth GoTrue).
- **Serverless Compute:** Supabase Edge Functions (Deno TypeScript) untuk isolasi rahasia API key & eksekusi AI.
- **AI Models:** Google Gemini 2.5 Flash / Lite & OpenAI Responses API (GPT-5 series, reasoning models).`,
      },
      {
        id: 'topologi-sistem',
        title: 'Topologi & Alur Data',
        callout: {
          type: 'info',
          title: 'Prinsip Desain: Zero API Key Exposure',
          text: 'Browser pengguna dan pelamar umum pada Laman Karir publik tidak pernah menerima API key model AI secara langsung. Seluruh orkestrasi AI dimediasi oleh Edge Function dengan Supabase Service Role.',
        },
        content: `Komunikasi data di dalam sistem Luna berjalan dalam 3 tier:
1. **Tier 1 (Client / UI):** Menangani interaksi pengguna, ekstraksi teks lokal dari dokumen untuk memotong token payload, dan sinkronisasi state routing browser.
2. **Tier 2 (Serverless Gateway):** Memvalidasi fingerprint berkas SHA-256, mengeksekusi prompt terstruktur ke LLM provider, dan membersihkan payload respon.
3. **Tier 3 (PostgreSQL Persistence):** Menyimpan entitas data terisolasi per company tenant dengan RLS enabled.`,
      },
    ],
  },

  'multi-tenancy-database': {
    title: 'Multi-Tenancy & Data Model',
    category: 'Arsitektur & Desain Sistem',
    mode: 'developer',
    description: 'Desain skema PostgreSQL, isolasi data antar organisasi via company_id, dan aturan Row Level Security (RLS).',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'prinsip-multi-tenancy',
        title: 'Isolasi Data Organisasi (Multi-Tenant)',
        content: `Setiap data relasional di Luna terikat pada entitas \`companies.id\`. 

Tabel-tabel utama yang menerapkan pemisahan tenant meliputi:
- **\`companies\`:** Entitas profil organisasi, paket langganan (*Free, Basic, Pro*), dan limit kuota.
- **\`company_users\`:** Relasi user terhadap perusahaan dengan role-based authorization (\`admin\`, \`recruiter\`, \`interviewer\`).
- **\`seleksi\` (Lowongan):** Lowongan kerja, struktur departemen, dan kriteria penilaian terbobot (JSONB).
- **\`kandidat\`:** Profil terstruktur hasil ekstraksi AI, riwayat pekerjaan, pendidikan, keahlian, dan hash berkas.
- **\`scoring\`:** Relasi junction antara lowongan dan kandidat berisi skor kalkulasi, evidence, dan status alur pipeline.`,
      },
    ],
  },

  'security-secrets': {
    title: 'Isolasi Kredensial & Edge Functions',
    category: 'Arsitektur & Desain Sistem',
    mode: 'developer',
    description: 'Arsitektur keamanan tanpa eksposur API key di browser dan autentikasi aman untuk alur anonim.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'secure-edge-functions',
        title: 'Arsitektur Edge Functions (Deno Runtime)',
        content: `Seluruh pemanggilan LLM (Gemini / OpenAI) dilakukan di serverless edge function:
- **\`parse-cv\`:** Ekstraksi data identitas pelamar, pengalaman kerja, keahlian, dan deteksi validitas CV.
- **\`run-scoring\`:** Evaluasi kecocokan kandidat terhadap kriteria lowongan dan ekstraksi bukti (*evidence*).
- **\`generate-kriteria\`:** Pembuatan kriteria terstruktur (*Wajib* vs *Nilai Tambah*) berbasis deskripsi kerja.
- **\`buat-lowongan-draft\`:** Pembuatan draf lowongan kerja otomatis dari brief singkat.

Keuntungan utama: Pengunjung anonim di Laman Karir publik dapat melamar pekerjaan tanpa risiko membocorkan API key AI atau prompt internal perusahaan.`,
      },
    ],
  },

  'pipeline-ekstraksi-cv': {
    title: 'Pipeline Parsing CV & Hemat Token',
    category: 'Rekayasa AI (AI Engineering)',
    mode: 'developer',
    description: 'Strategi optimasi biaya: Ekstraksi teks lokal di browser, reduksi token hingga 70%, dan fallback multimodal OCR.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'client-side-extraction',
        title: '1. Client-Side Pre-Extraction',
        callout: {
          type: 'info',
          title: 'Penghematan Biaya Operasional (Cost Optimization)',
          text: 'Mengirimkan raw binary file PDF/DOCX (rata-rata 2-8 MB) langsung ke LLM multimodal mengonsumsi ribuan input tokens gambar per halaman. Ekstraksi teks lokal memangkas 70% konsumsi token dan mempercepat response time hingga 3x.',
        },
        content: `Sebelum berkas diunggah, modul \`extractTextFromFile.js\` mengekstrak teks langsung di browser pengguna:
- **DOCX / DOC:** Diekstrak menggunakan \`mammoth.js\` menjadi plain text terstruktur.
- **PDF Digital:** Diekstrak menggunakan \`pdfjs-dist\` dan \`react-pdftotext\`.
- **Batch ZIP:** Diekstrak per file menggunakan \`jszip\`.`,
      },
      {
        id: 'fallback-ocr',
        title: '2. Fallback AI Multimodal OCR',
        content: `Jika ekstraksi teks lokal menghasilkan string kosong (misal karena dokumen berupa hasil scan kamera atau gambar JPG/PNG), sistem secara mulus beralih ke mode **Multimodal OCR**:
1. Berkas diambil dari storage bucket \`cv_documents\`.
2. Dikonversi menjadi base64 inline data di Edge Function.
3. Dikirim ke model multimodal (Gemini / OpenAI Vision) dengan instruksi OCR khusus.`,
      },
    ],
  },

  'multi-provider-ai': {
    title: 'Multi-Provider: Gemini & OpenAI',
    category: 'Rekayasa AI (AI Engineering)',
    mode: 'developer',
    description: 'Arsitektur AI yang mendukung model Google Gemini dan OpenAI Responses API dengan Structured Outputs.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'provider-agnostic',
        title: 'Dukungan Multi-Provider Fleksibel',
        content: `Luna dirancang agnostik terhadap penyedia AI melalui tabel konfigurasi \`sandbox_configs\`:
- **Google Gemini API:** Mendukung \`gemini-2.5-flash\`, \`gemini-2.5-flash-lite\`, dan \`gemini-2.5-pro\` dengan parameter \`responseSchema\` native.
- **OpenAI Responses API:** Mendukung \`gpt-5-nano\`, \`gpt-4.1\`, serta model reasoning (\`o1\`, \`o3\`) menggunakan mode **Strict JSON Schema** (\`additionalProperties: false\`).

Sistem secara otomatis mendeteksi model reasoning dan menyesuaikan parameter (misal: menonaktifkan \`temperature\` yang tidak didukung pada model reasoning dan menggantinya dengan \`reasoning.effort\`).`,
      },
    ],
  },

  'algoritma-skoring': {
    title: 'Algoritma Skoring Terbobot',
    category: 'Rekayasa AI (AI Engineering)',
    mode: 'developer',
    description: 'Formulasi matematis penghitungan skor kecocokan kandidat (Weighted Match Score) dan klasifikasi kategori fit.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'formula-matematis',
        title: 'Formula Penghitungan Skor Terbobot',
        content: `Skor akhir kecocokan (0–100) dihitung secara matematis menggunakan persamaan rata-rata terbobot (*Weighted Average*) pada seluruh kriteria bertipe **Wajib**:

$$\\text{Total Score} = \\text{Round}\\left( \\frac{\\sum (\\text{score\\_evaluate}_i \\times \\text{weight}_i)}{\\sum \\text{weight}_i} \\right)$$

Di mana:
- **\`score_evaluate\`:** Nilai kecocokan kandidat pada kriteria $i$ (skala 0–100) yang dievaluasi oleh AI.
- **\`weight\`:** Bobot kepentingan kriteria (1 = Rendah, 2 = Sedang, 3 = Tinggi / Mutlak).`,
      },
      {
        id: 'klasifikasi-threshold',
        title: 'Threshold Kategori Fit',
        content: `Nilai akhir dipetakan ke dalam 4 kuadran klasifikasi:
- **Sangat Fit:** $\\ge 80$ poin.
- **Fit:** $60 - 79$ poin.
- **Cukup Fit:** $40 - 59$ poin.
- **Kurang Fit:** $< 40$ poin.`,
      },
    ],
  },

  'fault-tolerance-sanitizer': {
    title: 'Null-Byte Sanitizer & Resilience',
    category: 'Rekayasa AI (AI Engineering)',
    mode: 'developer',
    description: 'Penanganan edge-case PostgreSQL Null Byte (\\u0000) dari output LLM dan mekanisme deteksi duplikat SHA-256 fallback.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'null-byte-sanitizer',
        title: 'Deep Null-Byte Sanitizer',
        callout: {
          type: 'info',
          title: 'Tantangan PostgreSQL Encoding',
          text: 'Model LLM sesekali mengembalikan karakter null byte (\\u0000) yang tersembunyi di dalam array string atau JSON bersarang. PostgreSQL secara eksplisit menolak null byte pada tipe data teks/jsonb.',
        },
        content: `Untuk menjamin 100% database write resilience, Luna menerapkan **Deep Payload Sanitizer** di Edge Function:

\`\`\`javascript
// Konversi payload ke string, bersihkan null-byte escape sequence, lalu re-parse
const safePayload = JSON.parse(
  JSON.stringify(rawRecord).replace(/\\\\u0000/g, '').replace(/\\0/g, '')
);
\`\`\`

Dengan teknik ini, tidak ada operasi database yang gagal akibat anomali karakter dari keluaran AI.`,
      },
      {
        id: 'sha256-pure-js',
        title: 'SHA-256 Pure JS Fallback Hashing',
        content: `Fitur deteksi duplikasi berkas memanfaatkan Web Crypto API (\`crypto.subtle.digest\`). Namun, saat aplikasi diuji di lingkungan lokal non-HTTPS (misal pengujian mobile via IP lokal \`http://192.168.x.x\`), Web Crypto API dinonaktifkan oleh browser.
        
Luna mengimplementasikan algoritma **FIPS 180-4 SHA-256 murni JavaScript** sebagai fallback, menjamin hasil hash sidik jari berkas selalu identik di semua context jaringan.`,
      },
    ],
  },

  'state-routing-history': {
    title: 'Routing State & History Sync',
    category: 'Frontend Architecture',
    mode: 'developer',
    description: 'Pola sinkronisasi URL search params dengan location.state React Router untuk navigasi browser yang mulus.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'history-state-sync',
        title: 'Sinkronisasi URL & Browser History',
        content: `Di dalam \`App.jsx\`, navigasi dikelola secara reaktif:
- Menggunakan query parameters (\`?view=...\`, \`&seleksiId=...\`, \`&kandidat=...\`) yang disinkronkan dengan \`location.state\`.
- Tombol Back browser fisik dan gestur swipe mobile otomatis memulihkan tab terakhir dan overlay yang aktif tanpa merusak tumpukan riwayat.`,
      },
    ],
  },

  'virtualisasi-performa': {
    title: 'Performa & Virtualized Lists',
    category: 'Frontend Architecture',
    mode: 'developer',
    description: 'Penerapan @tanstack/react-virtual untuk rendering database ribuan kandidat tanpa lag pada DOM.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'tanstack-virtual',
        title: 'Optimasi Virtual List',
        content: `Ketika sebuah lowongan menerima ratusan atau ribuan CV, rendering seluruh elemen DOM akan menurunkan frame rate UI. 
        
Dengan integrasi custom hook \`useVirtualizedList.js\` berbasis \`@tanstack/react-virtual\`, browser hanya me-render elemen yang terlihat di viewport, menjaga penggunaan memori tetap konstan pada 60 FPS.`,
      },
    ],
  },

  'client-side-zip-pdf': {
    title: 'Client-Side ZIP & PDF Rendering',
    category: 'Frontend Architecture',
    mode: 'developer',
    description: 'Arsitektur pengemasan berkas massal (.zip) berbasis memori browser dan rendering PDF multi-halaman interaktif dengan Web Worker.',
    lastUpdated: '2 September 2026',
    sections: [
      {
        id: 'client-side-zip',
        title: 'Parallel Fetching & Zero-Server ZIP Packaging',
        callout: {
          type: 'info',
          title: 'Efisiensi Bandwidth & Beban Server',
          text: 'Mengemas puluhan berkas berukuran besar di serverless function dapat menyebabkan timeout (504) dan lonjakan konsumsi memori. Luna mengalihkan seluruh proses pengemasan arsip .zip ke browser pengguna (Client-Side).',
        },
        content: `Pada fitur **Unduh CV Terpilih** (\`handleBulkDownloadCv\` di \`useKandidatData.js\`):
1. **Parallel Blob Fetch:** Browser meminta berkas PDF/DOCX secara paralel dari Supabase Storage Signed URLs dengan pembatasan *concurrency* agar tidak memicu throttling jaringan.
2. **In-Memory Archive Generation:** Setiap blob biner dimasukkan ke struktur folder virtual arsip zip langsung di memori RAM browser menggunakan pustaka kompresi JavaScript tanpa menyentuh disk lokal.
3. **Instant Browser Download Trigger:** Setelah seluruh file terkumpul, blob zip di-generate dan otomatis diunduh melalui \`URL.createObjectURL(zipBlob)\`, lalu URL sementara segera dibersihkan (\`URL.revokeObjectURL\`) untuk mencegah kebocoran memori (*memory leak*).`,
      },
      {
        id: 'pdf-canvas-rendering',
        title: 'In-App PDF Rendering & Web Worker',
        content: `Tab Resume (\`Kandidat-Resume_001.jsx\`) mengintegrasikan engine rendering PDF berbasis HTML5 Canvas:
- **Off-Thread Decoding:** Pemrosesan parsing biner dokumen PDF dieksekusi di background thread menggunakan Web Worker (\`pdf.worker.min.mjs\`), menjaga antarmuka pengguna tetap responsif pada 60 FPS saat memuat dokumen multi-halaman.
- **Dynamic Scale Transform:** Fitur Zoom In dan Zoom Out menghitung ulang *viewport scale* dan me-render ulang layer canvas dengan resolusi piksel layar perangkat (*devicePixelRatio*) untuk mempertahankan ketajaman teks tanpa blur.`,
      },
      {
        id: 'cache-invalidation-pattern',
        title: 'Granular Cache Invalidation (`dataCache.js`)',
        content: `Saat pengguna mengedit data profil kandidat secara *inline* (seperti mengubah domisili, ekspektasi upah, atau tag keahlian):
- Fungsi \`updateKandidat()\` mengeksekusi mutasi ke database Supabase dan secara langsung memanggil \`invalidate('kandidat')\`.
- Subscriber tabel kandidat menerima sinyal invalidasi dan memperbarui state lokal secara reaktif tanpa perlu melakukan re-fetching database secara menyeluruh (*zero stale data*).`,
      },
    ],
  },

  'design-tokens': {
    title: 'Design Guidelines & Theme Tokens',
    category: 'Frontend Architecture',
    mode: 'developer',
    description: 'Sistem token desain Luna UI, palet Luna Orange (#FF8D21), skala Ink Neutral, dan tipografi Plus Jakarta Sans.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'design-tokens-summary',
        title: 'Aturan Tipografi & Warna',
        content: `Sesuai pedoman \`design-guidelines.md\`:
- **Heading:** *Plus Jakarta Sans* (SemiBold 600, tight letter-spacing).
- **Body & UI:** *Inter Tight* (Regular 400 & Medium 500).
- **Code & IDs:** *JetBrains Mono*.
- **Aksen Utama:** Luna Orange (\`#FF8D21\`) untuk CTA kunci dan indikator aktif.
- **Skala Netral:** Warm Ink (\`#0A0908\` s/d \`#F7F7F6\`).`,
      },
    ],
  },

  'local-setup': {
    title: 'Menjalankan Project Lokal',
    category: 'Panduan Setup Developer',
    mode: 'developer',
    description: 'Panduan instalasi dependensi, konfigurasi environment variables, dan menjalankan dev server.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'prerequisites',
        title: 'Prasyarat Lingkungan (Prerequisites)',
        content: `Pastikan perangkat Anda telah terpasang:
- **Node.js:** Versi 18+ atau 20+ LTS
- **Package Manager:** npm atau yarn
- **Supabase CLI:** (Opsional untuk pengujian Edge Functions lokal)`,
      },
      {
        id: 'langkah-instalasi',
        title: 'Langkah Menjalankan Proyek',
        content: `1. Clone repositori Luna UI.
2. Jalankan perintah instalasi dependensi:
   \`npm install\`
3. Jalankan server pengembangan:
   \`npm run dev\`
4. Buka peramban di \`http://localhost:5173\` atau \`http://localhost:5173/docs\`.`,
      },
    ],
  },

  'deploy-edge-functions': {
    title: 'Deploy Supabase Edge Functions',
    category: 'Panduan Setup Developer',
    mode: 'developer',
    description: 'Panduan deployment serverless edge functions ke project Supabase.',
    lastUpdated: '1 September 2026',
    sections: [
      {
        id: 'deploy-command',
        title: 'Deployment Command',
        content: `Untuk men-deploy Edge Functions ke Supabase:

\`\`\`bash
# Deploy fungsi parsing CV
supabase functions deploy parse-cv --no-verify-jwt

# Deploy fungsi AI Scoring
supabase functions deploy run-scoring --no-verify-jwt

# Deploy generator kriteria
supabase functions deploy generate-kriteria --no-verify-jwt
\`\`\``,
      },
    ],
  },

  'env-konfigurasi': {
    title: 'Environment & AI Sandbox Playground',
    category: 'Panduan Setup Developer',
    mode: 'developer',
    description: 'Panduan komprehensif lingkungan pengujian AI terisolasi (/sandbox): konfigurasi multi-provider API, 5 pipeline LLM, playground ekstraksi & skoring, hingga benchmarking latensi.',
    lastUpdated: '2 September 2026',
    sections: [
      {
        id: 'konsep-sandbox',
        title: 'Konsep & Akses Luna AI Sandbox',
        callout: {
          type: 'info',
          title: 'Lingkungan Pengujian Terisolasi (Zero Production Impact)',
          text: 'Sandbox berjalan secara terpisah dari alur rekrutmen utama. Seluruh pengujian ekstraksi berkas, modifikasi prompt, dan kalkulasi skor di Sandbox tidak akan mengubah data lowongan aktif maupun profil kandidat di Candidate Warehouse.',
        },
        content: `**Luna AI Sandbox** adalah lingkungan pengujian internal (*developer playground*) yang dibangun langsung di dalam antarmuka web LUNA untuk memfasilitasi riset AI, benchmarking performa model LLM, penyesuaian instruksi (*prompt engineering*), dan inspeksi payload JSON secara real-time.

### Akses Cepat ke Sandbox

Developer dapat membuka antarmuka Sandbox melalui URL:
\`/sandbox\`

Di dalam Sandbox tersedia tombol **"Keluar Sandbox"** di bilah atas untuk kembali ke halaman utama aplikasi kapan saja.`,
      },
      {
        id: 'modul-konfigurasi-api',
        title: '1. Konfigurasi API Multi-Provider (`Sandbox-Konfigurasi.jsx`)',
        content: `Pusat kendali mesin AI LUNA yang menghubungkan aplikasi dengan penyedia model kecerdasan buatan:

### Dual Provider Switching
Beralih secara instan antara **Google Gemini API** (Google AI Studio) dan **OpenAI Responses API** tanpa perlu mengubah kode sumber (*runtime switching*).

### Konfigurasi Independen 5 Pipeline AI
LUNA memisahkan pengaturan model dan prompt untuk 5 tugas AI yang berbeda:
1. **JD (Job Description):** Ekstraksi teks deskripsi pekerjaan menjadi kriteria penilaian terstruktur.
2. **CV (Resume Parsing):** Pembacaan dan ekstraksi berkas CV menjadi data profil terstruktur.
3. **Scoring (Evaluasi Kandidat):** Penilaian kecocokan kandidat terhadap kriteria posisi beserta kutipan bukti (*evidence*).
4. **BuatLowonganTanya (AI Wizard Q&A):** Generator pertanyaan adaptif langkah demi langkah pada formulir interaktif.
5. **BuatLowonganDraft (AI Wizard Synthesis):** Perumusan draf lengkap lowongan pekerjaan dan *Catatan Praktis dari Luna*.

### Fine-Grained Parameter Tuning
- **Model Selector:** Memilih model spesifik per pipeline (misal: \`gemini-2.5-flash\`, \`gemini-1.5-pro\`, \`gpt-4o\`, \`gpt-4o-mini\`, \`o1\`, \`o3-mini\`).
- **System Prompt Editor & Override:** Mengubah teks instruksi sistem (*system prompt*) secara langsung untuk menguji variasi arahan.
- **Temperature Slider (0.0 – 1.0):** Mengatur tingkat kreativitas vs determinisme jawaban model.
- **Reasoning Effort:** Pengaturan intensitas penalaran (\`low\`, \`medium\`, \`high\`) khusus untuk model penalaran OpenAI (*Reasoning Models*).
- **Concurrency Limit:** Membatasi jumlah worker antrean paralel (default: 5 worker) untuk mencegah *rate-limit* kuota API.

### Sinkronisasi Database Otomatis
Seluruh parameter konfigurasi yang disimpan otomatis disinkronkan ke tabel database Supabase \`sandbox_configs\` dan \`prompt_settings\`.`,
      },
      {
        id: 'modul-playground-ai',
        title: '2. Modul Playground Ekstraksi & Simulasi',
        content: `Sandbox menyediakan ruang simulasi langsung untuk setiap kapabilitas AI LUNA:

### Kriteria Penilaian (\`Sandbox-Kriteria.jsx\`)
Playground untuk menguji konversi teks mentah atau dokumen Job Description (JD) menjadi kriteria terbobot. Menampilkan perbandingan *Kriteria Wajib* vs *Nilai Tambah*, durasi eksekusi dalam milidetik (ms), dan inspeksi struktur *Raw JSON Schema*.

### CV Parsing (\`Sandbox-CVParsing.jsx\`)
Playground pengujian upload resume nyata (format PDF atau DOCX):
- Menguji akurasi ekstraksi identitas pribadi, kontak, riwayat pekerjaan, riwayat pendidikan, dan interactive skills tagging.
- Membandingkan hasil ekstraksi teks lokal di browser (*Client-Side Text Extraction*) dengan *Multimodal OCR Vision* pada dokumen hasil scan kamera.

### AI Scoring (\`Sandbox-AIScoring.jsx\`)
Playground evaluasi kesesuaian pelamar terhadap kriteria posisi:
- Menguji kalkulasi formula rata-rata terbobot (*Weighted Match Score* 0–100).
- Memverifikasi akurasi kutipan teks bukti (*evidence matching*) dari resume.
- Menguji penentuan klasifikasi kategori fit (*Sangat Fit, Fit, Cukup Fit, Kurang Fit*).

### Buat Lowongan AI Wizard (\`Sandbox-BuatLowongan.jsx\`)
Simulator percakapan interaktif multi-turn AI Wizard:
- Menguji alur percakapan 8 pertanyaan terpandu dengan gaya bahasa Indonesia sehari-hari yang ramah.
- Memvalidasi konsistensi perumusan draf akhir lowongan dan tips rekrutmen.`,
      },
      {
        id: 'modul-riwayat-dan-ui',
        title: '3. Riwayat AI & UI Showcase',
        content: `Dua utilitas pendukung untuk pemantauan performa dan antarmuka:

### Riwayat AI & Benchmarking Latensi (\`Sandbox-Riwayat.jsx\`)
Audit trail komprehensif dari seluruh pemanggilan API di lingkungan Sandbox:
- Mencatat timestamp eksekusi, nama model yang digunakan, status pemrosesan (*Success* atau *Error*), dan durasi latensi eksekusi dalam milidetik (ms).
- Menyediakan penampil snapshot *Prompt Input* yang dikirimkan dan *Raw Response Payload JSON* yang dikembalikan oleh AI untuk mempermudah investigasi bug (*debugging*).

### Sidebar & UI Revamp Showcase (\`Sandbox-SidebarOptions.jsx\`)
Playground visualisasi komponen antarmuka, eksplorasi tata letak navigasi sidebar, dan uji coba token desain (warna, tipografi, radius sudut) sebelum diterapkan ke lingkungan produksi.`,
      },
    ],
  },
};

