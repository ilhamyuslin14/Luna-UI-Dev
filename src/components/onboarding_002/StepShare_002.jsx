import React, { useState } from 'react';

export default function StepShare_002({ jobData, onFinish }) {
  const [copied, setCopied] = useState(false);
  const companySlug = 'pt-sukses-makmur';
  const jobSlug = jobData?.slug || 'posisi-baru';
  const shareUrl = `https://karir.lunasys.ai/${companySlug}/${jobSlug}`;

  const handleCopy = () => {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWA = () => {
    const text = encodeURIComponent(`Halo! Kami di PT Sukses Makmur sedang membuka lowongan untuk posisi ${jobData?.jabatan || 'baru'}. Lamar sekarang tanpa ribet buat akun di:\n${shareUrl}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const handleShareLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div style={{ textAlign: 'center', padding: '10px 0' }}>
      {/* Icon Sukses */}
      <div style={{
        width: 68,
        height: 68,
        borderRadius: '50%',
        backgroundColor: '#E8F5E9',
        color: '#1F8A4E',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16
      }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>

      <h2 style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        fontSize: 24,
        fontWeight: 600,
        color: '#0A0908',
        marginBottom: 6
      }}>
        Selamat! Lowongan Pertama Anda Telah Aktif 🎉
      </h2>
      <p style={{ fontSize: 14, color: '#5E5C56', maxWidth: 520, margin: '0 auto', lineHeight: 1.5 }}>
        Laman karir resmi untuk posisi <strong>{jobData?.jabatan || 'Lowongan Baru'}</strong> sudah live dan siap menerima berkas pelamar.
      </p>

      {/* URL Share Box */}
      <div style={{
        margin: '24px auto',
        padding: '12px 18px',
        backgroundColor: '#F7F7F6',
        border: '1px solid #DCDAD5',
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 580
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13,
          color: '#0A0908',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {shareUrl}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          style={{
            backgroundColor: copied ? '#1F8A4E' : '#FFFFFF',
            color: copied ? '#FFFFFF' : '#0A0908',
            border: '1px solid #DCDAD5',
            borderRadius: 6,
            padding: '6px 14px',
            fontSize: 12,
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
        >
          {copied ? '✓ Tersalin!' : 'Salin Link'}
        </button>
      </div>

      {/* Quick Share Buttons */}
      <div style={{ maxWidth: 580, margin: '0 auto', textAlign: 'left' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#3D3B36', marginBottom: 10 }}>
          Sebarkan Sekarang ke Saluran Rekrutmen Anda:
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 24 }}>
          <button
            type="button"
            onClick={handleShareWA}
            style={{
              padding: '10px 12px',
              borderRadius: 8,
              border: '1px solid #DCDAD5',
              backgroundColor: '#FFFFFF',
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6
            }}
          >
            <span>💬</span> WhatsApp
          </button>

          <button
            type="button"
            onClick={handleShareLinkedIn}
            style={{
              padding: '10px 12px',
              borderRadius: 8,
              border: '1px solid #DCDAD5',
              backgroundColor: '#FFFFFF',
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6
            }}
          >
            <span>💼</span> LinkedIn
          </button>

          <button
            type="button"
            onClick={handleCopy}
            style={{
              padding: '10px 12px',
              borderRadius: 8,
              border: '1px solid #DCDAD5',
              backgroundColor: '#FFFFFF',
              fontSize: 13,
              fontWeight: 500,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6
            }}
          >
            <span>📸</span> Story IG Copy
          </button>
        </div>

        {/* Mitra Sebar Suggestion Card */}
        <div style={{
          backgroundColor: '#FFF4DF',
          border: '1px solid #FFCD90',
          borderRadius: 10,
          padding: 16,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 28
        }}>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0A0908' }}>
              Mau lowongan ini diposting di akun loker mitra LUNA?
            </div>
            <div style={{ fontSize: 12, color: '#5E5C56', marginTop: 2 }}>
              Jangkau 50.000+ pencari kerja aktif melalui akun media sosial mitra terverifikasi.
            </div>
          </div>
          <span style={{
            fontSize: 12,
            fontWeight: 600,
            color: '#FF8D21',
            padding: '6px 12px',
            backgroundColor: '#FFFFFF',
            borderRadius: 6,
            border: '1px solid #FFCD90'
          }}>
            Tersedia di Menu Sebar
          </span>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #EFEEEC', paddingTop: 20 }}>
        <button
          type="button"
          onClick={onFinish}
          style={{
            backgroundColor: '#FF8D21',
            color: '#0A0908',
            fontWeight: 600,
            fontSize: 15,
            padding: '12px 32px',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(255, 141, 33, 0.2)'
          }}
        >
          Selesai &amp; Buka Dasbor Beranda →
        </button>
      </div>
    </div>
  );
}