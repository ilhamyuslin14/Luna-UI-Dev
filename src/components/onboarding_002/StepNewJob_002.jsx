import React, { useState } from 'react';

export default function StepNewJob_002({ onBack, onComplete }) {
  const [method, setMethod] = useState('ai'); // 'ai' | 'form'
  const [jabatan, setJabatan] = useState('');
  const [departemen, setDepartemen] = useState('');
  const [pengalaman, setPengalaman] = useState('1');
  const [pendidikan, setPendidikan] = useState('D4/S1 (Sarjana)');
  const [kualifikasiUtama, setKualifikasiUtama] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    if (!jabatan.trim()) return;

    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      onComplete({
        jabatan,
        departemen: departemen || 'Umum',
        pengalaman,
        pendidikan,
        slug: jabatan.toLowerCase().replace(/[^a-z0-9]+/g, '-')
      });
    }, 1200);
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 600, color: '#0A0908' }}>
          Buat Lowongan Pekerjaan Pertama Anda
        </h2>
        <p style={{ fontSize: 13, color: '#5E5C56', marginTop: 4 }}>
          Laman karir resmi akan otomatis terbit dan langsung siap menerima pelamar tanpa pelamar perlu mendaftar akun.
        </p>
      </div>

      {/* Pilihan Metode */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
        <button
          type="button"
          onClick={() => setMethod('ai')}
          style={{
            padding: '14px',
            borderRadius: 10,
            border: method === 'ai' ? '2px solid #FF8D21' : '1px solid #DCDAD5',
            backgroundColor: method === 'ai' ? '#FFFDF9' : '#FFFFFF',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}
        >
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            backgroundColor: '#FFF4DF',
            color: '#FF8D21',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18
          }}>
            ✨
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0A0908' }}>Bantuan AI LUNA (Cepat)</div>
            <div style={{ fontSize: 11, color: '#8A8780' }}>Cukup jawab 3 pertanyaan kunci</div>
          </div>
        </button>

        <button
          type="button"
          onClick={() => setMethod('form')}
          style={{
            padding: '14px',
            borderRadius: 10,
            border: method === 'form' ? '2px solid #FF8D21' : '1px solid #DCDAD5',
            backgroundColor: method === 'form' ? '#FFFDF9' : '#FFFFFF',
            textAlign: 'left',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 12
          }}
        >
          <div style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            backgroundColor: '#F7F7F6',
            color: '#3D3B36',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18
          }}>
            📝
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#0A0908' }}>Input Mandiri / Dokumen</div>
            <div style={{ fontSize: 11, color: '#8A8780' }}>Unggah draf atau tuliskan sendiri</div>
          </div>
        </button>
      </div>

      <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#0A0908', marginBottom: 6 }}>
            Posisi yang Dicari <span style={{ color: '#C9342B' }}>*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Misal: Graphic Designer, Staf Administrasi, Kasir"
            value={jabatan}
            onChange={e => setJabatan(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 8,
              border: '1px solid #DCDAD5',
              fontSize: 14,
              outline: 'none',
              boxSizing: 'border-box'
            }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#0A0908', marginBottom: 6 }}>
              Departemen
            </label>
            <input
              type="text"
              placeholder="Contoh: Kreatif &amp; Desain"
              value={departemen}
              onChange={e => setDepartemen(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 8,
                border: '1px solid #DCDAD5',
                fontSize: 13,
                outline: 'none',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#0A0908', marginBottom: 6 }}>
              Minimal Pengalaman
            </label>
            <select
              value={pengalaman}
              onChange={e => setPengalaman(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                borderRadius: 8,
                border: '1px solid #DCDAD5',
                fontSize: 13,
                outline: 'none',
                backgroundColor: '#FFFFFF',
                boxSizing: 'border-box'
              }}
            >
              <option value="0">Fresh Graduate / Tanpa Pengalaman</option>
              <option value="1">Minimal 1 Tahun</option>
              <option value="2">Minimal 2-3 Tahun</option>
              <option value="5">Minimal 5+ Tahun</option>
            </select>
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#0A0908', marginBottom: 6 }}>
            Kualifikasi / Skill Kunci yang Wajib Dimiliki
          </label>
          <textarea
            rows={3}
            placeholder="Misal: Menguasai Adobe Illustrator &amp; Figma, portofolio desain aktif, mampu bekerja dengan deadline cepat..."
            value={kualifikasiUtama}
            onChange={e => setKualifikasiUtama(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 14px',
              borderRadius: 8,
              border: '1px solid #DCDAD5',
              fontSize: 13,
              outline: 'none',
              boxSizing: 'border-box',
              resize: 'vertical'
            }}
          />
        </div>

        <div style={{
          background: '#F7F7F6',
          border: '1px solid #EFEEEC',
          padding: '12px 14px',
          borderRadius: 8,
          fontSize: 12,
          color: '#5E5C56',
          display: 'flex',
          alignItems: 'center',
          gap: 8
        }}>
          <span style={{ color: '#1F8A4E', fontWeight: 'bold' }}>✓</span>
          <span>
            Kriteria penilaian AI (Skor 0-100) dan form lamaran publik langsung dikonfigurasi secara instan.
          </span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, borderTop: '1px solid #EFEEEC', paddingTop: 16 }}>
          <button
            type="button"
            onClick={onBack}
            style={{
              padding: '10px 18px',
              borderRadius: 8,
              border: '1px solid #DCDAD5',
              background: '#FFFFFF',
              color: '#5E5C56',
              fontSize: 13,
              cursor: 'pointer'
            }}
          >
            ← Kembali
          </button>

          <button
            type="submit"
            disabled={!jabatan.trim() || isGenerating}
            style={{
              backgroundColor: jabatan.trim() && !isGenerating ? '#FF8D21' : '#DCDAD5',
              color: jabatan.trim() && !isGenerating ? '#0A0908' : '#8A8780',
              fontWeight: 600,
              fontSize: 14,
              padding: '10px 22px',
              borderRadius: 8,
              border: 'none',
              cursor: jabatan.trim() && !isGenerating ? 'pointer' : 'not-allowed',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8
            }}
          >
            {isGenerating ? 'Menerbitkan Lowongan...' : 'Terbitkan Lowongan & Dapatkan Link →'}
          </button>
        </div>
      </form>
    </div>
  );
}