import React from 'react';

export default function StepIntent_002({ selectedIntent, onSelectIntent, onNext }) {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 28 }}>
        <h2 style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontSize: 24,
          fontWeight: 600,
          color: '#0A0908',
          marginBottom: 8
        }}>
          Bagaimana Kondisi Rekrutmen Anda Saat Ini?
        </h2>
        <p style={{ fontSize: 14, color: '#5E5C56', maxWidth: 520, margin: '0 auto', lineHeight: 1.5 }}>
          Pilih skenario yang paling sesuai agar LUNA dapat menyesuaikan alur kerja dan fitur yang tepat untuk Anda.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 18,
        marginTop: 20
      }}>
        {/* Card A: Lowongan Sedang Berlangsung / Existing */}
        <div
          onClick={() => onSelectIntent('existing')}
          style={{
            border: selectedIntent === 'existing' ? '2px solid #FF8D21' : '1.5px solid #EFEEEC',
            backgroundColor: selectedIntent === 'existing' ? '#FFFDF9' : '#FFFFFF',
            borderRadius: 14,
            padding: 24,
            cursor: 'pointer',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: selectedIntent === 'existing' ? '0 6px 20px rgba(255, 141, 33, 0.12)' : 'none'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#E8F5E9',
            color: '#1F8A4E',
            fontSize: 11,
            fontWeight: 600,
            padding: '3px 8px',
            borderRadius: 6,
            alignSelf: 'flex-start',
            marginBottom: 14
          }}>
            Fokus: Otomatisasi ATS &amp; Skoring CV
          </div>

          <div style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            backgroundColor: selectedIntent === 'existing' ? '#FF8D21' : '#F7F7F6',
            color: selectedIntent === 'existing' ? '#0A0908' : '#3D3B36',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 14
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>

          <h3 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: '#0A0908',
            marginBottom: 6
          }}>
            Rekrutmen Sedang Berjalan
          </h3>
          <p style={{ fontSize: 13, color: '#5E5C56', lineHeight: 1.5, marginBottom: 16, flex: 1 }}>
            Saya sudah memasang lowongan di luar (LinkedIn, Jobstreet, WhatsApp, dll) dan sudah punya kumpulan file CV pelamar yang ingin dinilai otomatis oleh AI.
          </p>

          <div style={{
            borderTop: '1px solid #EFEEEC',
            paddingTop: 12,
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          }}>
            <div style={{ fontSize: 12, color: '#3D3B36', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#1F8A4E', fontWeight: 'bold' }}>✓</span> Ekstraksi kriteria otomatis dari file/teks JD
            </div>
            <div style={{ fontSize: 12, color: '#3D3B36', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#1F8A4E', fontWeight: 'bold' }}>✓</span> Unggah tumpukan CV pelamar (Bulk / ZIP)
            </div>
            <div style={{ fontSize: 12, color: '#3D3B36', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#1F8A4E', fontWeight: 'bold' }}>✓</span> AI urutkan peringkat pelamar terbaik (&lt; 30 detik)
            </div>
          </div>
        </div>

        {/* Card B: Buka Lowongan Baru / Fresh */}
        <div
          onClick={() => onSelectIntent('new')}
          style={{
            border: selectedIntent === 'new' ? '2px solid #FF8D21' : '1.5px solid #EFEEEC',
            backgroundColor: selectedIntent === 'new' ? '#FFFDF9' : '#FFFFFF',
            borderRadius: 14,
            padding: 24,
            cursor: 'pointer',
            transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            boxShadow: selectedIntent === 'new' ? '0 6px 20px rgba(255, 141, 33, 0.12)' : 'none'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#FFF4DF',
            color: '#FF8D21',
            fontSize: 11,
            fontWeight: 600,
            padding: '3px 8px',
            borderRadius: 6,
            alignSelf: 'flex-start',
            marginBottom: 14
          }}>
            Fokus: Laman Karir &amp; Jangkauan Sebar
          </div>

          <div style={{
            width: 44,
            height: 44,
            borderRadius: 10,
            backgroundColor: selectedIntent === 'new' ? '#FF8D21' : '#F7F7F6',
            color: selectedIntent === 'new' ? '#0A0908' : '#3D3B36',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 14
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>

          <h3 style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: '#0A0908',
            marginBottom: 6
          }}>
            Membuka Lowongan Baru
          </h3>
          <p style={{ fontSize: 13, color: '#5E5C56', lineHeight: 1.5, marginBottom: 16, flex: 1 }}>
            Saya baru ingin mencari talenta baru dan membutuhkan halaman karir publik resmi atas nama perusahaan serta tools untuk menyebarkan info loker.
          </p>

          <div style={{
            borderTop: '1px solid #EFEEEC',
            paddingTop: 12,
            display: 'flex',
            flexDirection: 'column',
            gap: 6
          }}>
            <div style={{ fontSize: 12, color: '#3D3B36', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#1F8A4E', fontWeight: 'bold' }}>✓</span> Buat cepat dipandu AI LUNA atau unggah file draf
            </div>
            <div style={{ fontSize: 12, color: '#3D3B36', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#1F8A4E', fontWeight: 'bold' }}>✓</span> Laman Karir publik resmi terbit seketika
            </div>
            <div style={{ fontSize: 12, color: '#3D3B36', display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ color: '#1F8A4E', fontWeight: 'bold' }}>✓</span> 1-Klik sebar ke WA, LinkedIn, &amp; Mitra Loker
            </div>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 32,
        paddingTop: 20,
        borderTop: '1px solid #EFEEEC'
      }}>
        <button
          type="button"
          disabled={!selectedIntent}
          onClick={onNext}
          style={{
            backgroundColor: selectedIntent ? '#FF8D21' : '#DCDAD5',
            color: selectedIntent ? '#0A0908' : '#8A8780',
            fontWeight: 600,
            fontSize: 14,
            padding: '10px 24px',
            borderRadius: 8,
            border: 'none',
            cursor: selectedIntent ? 'pointer' : 'not-allowed',
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            transition: 'background-color 0.2s'
          }}
        >
          Lanjutkan ke Langkah Berikutnya →
        </button>
      </div>
    </div>
  );
}