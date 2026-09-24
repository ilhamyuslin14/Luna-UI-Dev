# 📊 Dokumentasi Query Analytics: Persona & Perilaku Pengguna Luna

Dokumen ini berisi rancangan dan kueri SQL analitik untuk memetakan profil persona recruiter/pengguna nyata (*real users*), perangkat yang digunakan, jejak kampanye iklan (atribusi), adopsi lowongan asli, jumlah pelamar riil, hingga siklus retensi akun di platform Luna.

---

## 🎯 1. Tujuan Analitik
1. **Memahami Profil & Persona Recruiter:** Mengetahui siapa yang mendaftar (jabatan, perusahaan, sektor industri, domisili/kota, dan skala bisnis).
2. **Menilai Efektivitas Akuisisi & Iklan:** Mengetahui channel mana (Google Ads vs Meta Ads vs Organic) yang mendatangkan recruiter paling aktif dan berkualitas.
3. **Menganalisis Perilaku Perangkat (Device Behavior):** Mengetahui preferensi pengguna saat registrasi dan mengelola rekrutmen (Mobile/HP vs Desktop/Laptop).
4. **Mengukur Konversi & Perekrutan Riil:** Menghitung jumlah lowongan dan pelamar riil tanpa terdistorsi oleh data template contoh bawaan sistem.
5. **Memantau Retensi & Churn:** Mengelompokkan pengguna ke dalam segmen *Active*, *At Risk*, atau *Dormant*.

---

## 🛡️ 2. Standar Filter Integritas Data (Anti-Tester)
Untuk memastikan metrik analitik murni mencerminkan pasar nyata, kueri ini secara ketat memfilter:
* **Domain Email Disposable / Temp-Mail:** Mengecualikan `@murkstar.com`, `@mailinator.com`, `@fidhost.com`, `@neowd.com`, `@prorises.com`, `@soppat.com`.
* **Akun & Entitas Pengujian Internal:** Mengecualikan pengguna dan organisasi yang mengandung teks `[TESTUSER]`, `test`, `tester`, `slythrn`, atau `404 not found`.
* **Lowongan & Kandidat Contoh Bawaan:** Mengecualikan lowongan dengan pola judul `Contoh - %` dan kandidat fiktif dengan email `@emailfiktif.com`.

---

## 📋 3. Glosarium Kolom Hasil Query

| Kategori | Nama Kolom | Keterangan & Makna Bisnis |
| :--- | :--- | :--- |
| **Identitas Recruiter** | `user_id` | ID unik pengguna di tabel `live_users`. |
| | `nama_pengguna` | Nama lengkap recruiter / pembuat akun. |
| | `email` | Alamat email terdaftar. |
| | `no_kontak` | Nomor HP / WhatsApp (ditampilkan `-` jika kosong). |
| | `jabatan` | Role pengguna (HR, Founder, CEO, Recruiter, dll). |
| | `metode_login` | Metode otentikasi (`google_oauth` vs `email_password`). |
| | `sumber_info_kuesioner` | Jawaban kuesioner onboarding *"Tahu Luna dari mana?"*. |
| **Profil Bisnis** | `nama_perusahaan` | Nama entitas bisnis / perusahaan. |
| | `industri` | Sektor usaha (F&B, Retail, Fintech, Manufaktur, Logistik, dll). |
| | `ukuran_perusahaan` | Skala karyawan (1-10, 11-50, 50+ karyawan). |
| | `tipe_bisnis` | Model bisnis (B2B, B2C, Agency). |
| | `tahun_berdiri` | Tahun pendirian perusahaan. |
| | `kota` & `alamat_kantor` | Wilayah domisili operasional dan alamat kantor. |
| | `website_url` | Alamat website resmi perusahaan. |
| | `instagram` & `linkedin` | Profil media sosial resmi perusahaan. |
| **Perangkat (Device)** | `kategori_perangkat` | Klasifikasi perangkat (`Desktop`, `Mobile`, atau `Tablet`). |
| | `sistem_operasi` | OS yang dipakai (`Windows`, `Android`, `iOS`, `macOS`, `Linux`). |
| **Atribusi Iklan** | `channel_akuisisi` | Sumber kedatangan (`Google Ads`, `Meta Ads`, `Direct/Organic`). |
| | `kampanye_iklan` | Nama kampanye UTM iklan (misal: `luna_v2_search_aug2026`). |
| | `materi_iklan` | Video / visual materi iklan (`utm_content`). |
| | `kata_kunci_iklan` | Keyword yang diketik di Google sebelum klik iklan (`utm_term`). |
| **Perekrutan Asli** | `total_lowongan_asli` | Jumlah lowongan asli yang dibuat pengguna (tanpa template). |
| | `lowongan_aktif_asli` | Lowongan asli yang berstatus operasional `aktif`. |
| | `lowongan_terbit_asli` | Lowongan asli yang tayang live di portal publik (`is_published = true`). |
| | `lowongan_via_ai` | Lowongan asli yang dibuat dibantu AI Luna (`created_by_ai = true`). |
| | `total_kuota_rekrut` | Total kebutuhan kandidat yang dibuka di seluruh lowongan asli. |
| **Pelamar Asli** | `total_pelamar_asli` | Total pelamar riil yang masuk (tanpa 5 pelamar demo). |
| | `pelamar_dinilai_ai` | Jumlah pelamar yang sudah dinilai skor kompetensinya oleh AI. |
| | `cv_dibuka` | Jumlah pelamar yang detail CV-nya telah diklik/dibuka oleh recruiter. |
| **Retensi & Recency** | `tanggal_daftar` | Tanggal dan waktu registrasi akun. |
| | `umur_akun_hari` | Sudah berapa hari user bergabung di platform Luna. |
| | `terakhir_login` | Waktu login terakhir ke sistem. |
| | `terakhir_aktivitas` | Waktu log aktivitas terbaru (login/update/create lowongan). |
| | `segmen_retensi` | Status keaktifan (`Active <= 7 hari`, `At Risk 8-30 hari`, `Dormant > 30 hari`). |

---

## 💻 4. Kueri SQL Lengkap (PostgreSQL / Supabase)

```sql
WITH user_utm AS (
  -- Mengambil jejak pertama kali user masuk (device & atribusi iklan)
  SELECT DISTINCT ON (user_id)
    user_id,
    user_device,
    referrer,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term,
    gclid,
    fbclid
  FROM public.utm_tracking
  WHERE user_type = 'live' AND user_id > 0
  ORDER BY user_id, created_at ASC
),
user_activity AS (
  -- Mengambil waktu aktivitas terakhir dari log sistem
  SELECT 
    user_id,
    MAX(created_at) AS last_activity_at
  FROM public.user_activity_logs
  GROUP BY user_id
),
job_metrics AS (
  -- Agregasi MURNI lowongan asli (mengecualikan template 'Contoh - %')
  SELECT 
    l.user_id,
    COUNT(l.id) AS total_lowongan_real,
    COUNT(CASE WHEN LOWER(l.status) = 'aktif' THEN 1 END) AS lowongan_aktif_real,
    COUNT(CASE WHEN l.is_published = true THEN 1 END) AS lowongan_terbit_real,
    COUNT(CASE WHEN l.created_by_ai = true THEN 1 END) AS lowongan_via_ai,
    COALESCE(SUM(l.jumlah_rekrut), 0) AS total_kuota_rekrut
  FROM public.lowongan l
  WHERE l.is_archived = false
    AND l.nama_jabatan NOT ILIKE 'Contoh - %' -- FILTER: Hanya lowongan asli buatan user
  GROUP BY l.user_id
),
candidate_metrics AS (
  -- Agregasi MURNI kandidat pelamar asli (mengecualikan pelamar fiktif demo)
  SELECT 
    l.user_id,
    COUNT(cl.id) AS total_kandidat_real,
    COUNT(CASE WHEN cl.ai_scoring IS NOT NULL THEN 1 END) AS kandidat_dinilai_ai,
    COUNT(CASE WHEN cl.is_detail_opened = true THEN 1 END) AS cv_dibuka
  FROM public.lowongan l
  JOIN public.luna_candidates_lowongan cl ON l.id = cl.lowongan_id
  JOIN public.luna_candidates c ON cl.candidate_id = c.id::text
  WHERE l.is_archived = false
    AND l.nama_jabatan NOT ILIKE 'Contoh - %'   -- FILTER: Bukan dari lowongan contoh
    AND c.email NOT ILIKE '%@emailfiktif.com'   -- FILTER: Bukan pelamar fiktif bawaan
  GROUP BY l.user_id
)
SELECT 
  -- 1. IDENTITAS RECRUITER
  u.id AS user_id,
  u.nama AS nama_pengguna,
  u.email,
  COALESCE(u.no_hp, u.whatsapp_number, '-') AS no_kontak,
  COALESCE(u.jabatan, '-') AS jabatan,
  COALESCE(u.oauth_provider, 'email_password') AS metode_login,
  COALESCE(u.luna_reference_from, '-') AS sumber_info_kuesioner,
  
  -- 2. PROFIL PERUSAHAAN (FIRMOGRAPHICS)
  u.organization_id,
  COALESCE(o.company_name, u.nama_perusahaan, '-') AS nama_perusahaan,
  COALESCE(o.company_industry, u.industri, '-') AS industri,
  COALESCE(o.company_size, u.jumlah_karyawan, '-') AS ukuran_perusahaan,
  COALESCE(o.business_type, '-') AS tipe_bisnis,
  o.founded_year AS tahun_berdiri,
  COALESCE(o.location_city, u.lokasi, '-') AS kota,
  COALESCE(o.location_address, o.office_address, '-') AS alamat_kantor,
  COALESCE(o.website_url, '-') AS website_url,
  COALESCE(o.social_instagram, '-') AS instagram,
  COALESCE(o.social_linkedin, '-') AS linkedin,

  -- 3. PERANGKAT (DEVICE INFO)
  CASE 
    WHEN utm.user_device ILIKE '%mobile%' OR utm.user_device ILIKE '%android%' OR utm.user_device ILIKE '%iphone%' THEN 'Mobile'
    WHEN utm.user_device ILIKE '%tablet%' OR utm.user_device ILIKE '%ipad%' THEN 'Tablet'
    WHEN utm.user_device ILIKE '%windows%' OR utm.user_device ILIKE '%macintosh%' OR utm.user_device ILIKE '%linux%' THEN 'Desktop'
    ELSE 'Unknown / Direct'
  END AS kategori_perangkat,
  CASE 
    WHEN utm.user_device ILIKE '%windows%' THEN 'Windows'
    WHEN utm.user_device ILIKE '%android%' THEN 'Android'
    WHEN utm.user_device ILIKE '%iphone%' OR utm.user_device ILIKE '%ipad%' THEN 'iOS'
    WHEN utm.user_device ILIKE '%macintosh%' THEN 'macOS'
    WHEN utm.user_device ILIKE '%linux%' THEN 'Linux'
    ELSE '-'
  END AS sistem_operasi,

  -- 4. SUMBER IKLAN & AKUISISI (ATTRIBUTION)
  CASE 
    WHEN utm.gclid IS NOT NULL OR utm.utm_source ILIKE '%google%' THEN 'Google Ads (Paid Search)'
    WHEN utm.fbclid IS NOT NULL OR utm.utm_source ILIKE '%meta%' OR utm.utm_source ILIKE '%facebook%' OR utm.utm_source ILIKE '%instagram%' THEN 'Meta Ads (Paid Social)'
    WHEN utm.utm_source IS NOT NULL THEN utm.utm_source
    ELSE 'Direct / Organic'
  END AS channel_akuisisi,
  COALESCE(utm.utm_campaign, '-') AS kampanye_iklan,
  COALESCE(utm.utm_content, '-') AS materi_iklan,
  COALESCE(utm.utm_term, '-') AS kata_kunci_iklan,

  -- 5. METRIK LOWONGAN ASLI (REAL JOBS)
  COALESCE(jm.total_lowongan_real, 0) AS total_lowongan_asli,
  COALESCE(jm.lowongan_aktif_real, 0) AS lowongan_aktif_asli,
  COALESCE(jm.lowongan_terbit_real, 0) AS lowongan_terbit_asli,
  COALESCE(jm.lowongan_via_ai, 0) AS lowongan_via_ai,
  COALESCE(jm.total_kuota_rekrut, 0) AS total_kuota_rekrut,

  -- 6. METRIK PELAMAR ASLI (REAL APPLICANTS)
  COALESCE(cm.total_kandidat_real, 0) AS total_pelamar_asli,
  COALESCE(cm.kandidat_dinilai_ai, 0) AS pelamar_dinilai_ai,
  COALESCE(cm.cv_dibuka, 0) AS cv_dibuka,

  -- 7. SIKLUS HIDUP & SEGMEN RETENSI
  u.created_at AS tanggal_daftar,
  ROUND(EXTRACT(EPOCH FROM (NOW() - u.created_at)) / 86400) AS umur_akun_hari,
  u.last_login_at AS terakhir_login,
  act.last_activity_at AS terakhir_aktivitas,
  CASE 
    WHEN COALESCE(act.last_activity_at, u.last_login_at, u.created_at) >= NOW() - INTERVAL '7 days' THEN 'Active (<= 7 hari)'
    WHEN COALESCE(act.last_activity_at, u.last_login_at, u.created_at) >= NOW() - INTERVAL '30 days' THEN 'At Risk (8-30 hari)'
    ELSE 'Dormant / Inactive (> 30 hari)'
  END AS segmen_retensi

FROM public.live_users u
LEFT JOIN public.organizations o ON u.organization_id = o.id
LEFT JOIN user_utm utm ON u.id = utm.user_id
LEFT JOIN user_activity act ON u.id = act.user_id
LEFT JOIN job_metrics jm ON u.id = jm.user_id
LEFT JOIN candidate_metrics cm ON u.id = cm.user_id
WHERE u.is_deleted = false
  -- FILTER ANTI-TESTER (Murni Pengguna Riil)
  AND u.email NOT ILIKE '%@murkstar.com'
  AND u.email NOT ILIKE '%@mailinator.com'
  AND u.email NOT ILIKE '%@fidhost.com'
  AND u.email NOT ILIKE '%@neowd.com'
  AND u.email NOT ILIKE '%@prorises.com'
  AND u.email NOT ILIKE '%@soppat.com'
  AND u.email NOT ILIKE '%test%'
  AND u.nama NOT ILIKE '%test%'
  AND COALESCE(o.company_name, u.nama_perusahaan, '') NOT ILIKE '%test%'
  AND COALESCE(o.company_name, u.nama_perusahaan, '') NOT ILIKE '%slythrn%'
  AND COALESCE(o.company_name, u.nama_perusahaan, '') NOT ILIKE '%404 not found%'
ORDER BY u.created_at DESC;
```
