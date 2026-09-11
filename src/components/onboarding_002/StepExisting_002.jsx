import React, { useState } from 'react';

export default function StepExisting_002({ onBack, onComplete }) {
  const [subStep, setSubStep] = useState(1); // 1: Info Lowongan, 2: Bulk Upload CV
  const [jabatan, setJabatan] = useState('');
  const [departemen, setDepartemen] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [selectedFileJD, setSelectedFileJD] = useState(null);

  // Substep 2: Bulk upload CV files
  const [uploadedCVs, setUploadedCVs] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleNextToUpload = (e) => {
    e.preventDefault();
    if (!jabatan.trim()) return;
    setSubStep(2);
  };

  const handleSimulateAddFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    const newItems = files.map((f, i) => ({
      id: Date.now() + i,
      name: f.name,
      size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
      status: 'ready'
    }));
    setUploadedCVs(prev => [...prev, ...newItems]);
  };

  const handleStartScoring = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      onComplete({
        jabatan,
        totalCV: uploadedCVs.length || 3
      });
    }, 1500);
  };

  return (
    <div>
      {subStep === 1 ? (
        <div>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 600, color: '#0A0908' }}>
              Masukkan Detail Lowongan yang Sedang Berjalan
            </h2>
            <p style={{ fontSize: 13, color: '#5E5C56', marginTop: 4 }}>
              AI LUNA membutuhkan info posisi ini untuk menentukan kriteria kecocokan bagi berkas CV yang Anda unggah.
            </p>
          </div>

          <form onSubmit={handleNextToUpload} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#0A0908', marginBottom: 6 }}>
                Nama Posisi / Jabatan Pekerjaan <span style={{ color: '#C9342B' }}>*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Misal: Sales Executive, Digital Marketer, Barista"
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

            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#0A0908', marginBottom: 6 }}>
                Departemen / Tim (Opsional)
              </label>
              <input
                type="text"
                placeholder="Misal: Pemasaran &amp; Sales, Operasional, Umum"
                value={departemen}
                onChange={e => setDepartemen(e.target.value)}
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

            {/* Opsi Unggah File JD atau Tulis Ringkas */}
            <div>
              <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#0A0908', marginBottom: 6 }}>
                Unggah Berkas JD (PDF / Word) atau Tulis Kualifikasi
              </label>
              <div
                style={{
                  border: '2px dashed #DCDAD5',
                  borderRadius: 10,
                  padding: '20px',
                  textAlign: 'center',
                  backgroundColor: '#F7F7F6',
                  cursor: 'pointer'
                }}
                onClick={() => document.getElementById('ob2-file-jd')?.click()}
              >
                <input
                  id="ob2-file-jd"
                  type="file"
                  accept=".pdf,.docx,.doc"
                  style={{ display: 'none' }}
                  onChange={e => setSelectedFileJD(e.target.files[0] || null)}
                />
                <div style={{ fontSize: 13, fontWeight: 600, color: '#0A0908' }}>
                  {selectedFileJD ? `📄 ${selectedFileJD.name}` : '📁 Klik untuk Unggah Dokumen Lowongan'}
                </div>
                <div style={{ fontSize: 11, color: '#8A8780', marginTop: 4 }}>
                  {selectedFileJD ? 'File siap dianalisis oleh AI' : 'Mendukung format PDF atau DOCX hingga 10 MB'}
                </div>
              </div>

              <div style={{ textAlign: 'center', margin: '10px 0', fontSize: 12, color: '#8A8780' }}>
                — ATAU TULIS RINGKAS DESKRIPSI &amp; SYARAT UTAMA —
              </div>

              <textarea
                rows={3}
                placeholder="Tuliskan ringkasan tanggung jawab dan syarat minimal (misal: Pengalaman minimal 1 tahun, menguasai Canva/Photoshop, komunikatif)..."
                value={deskripsi}
                onChange={e => setDeskripsi(e.target.value)}
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
              background: '#FFF4DF',
              borderLeft: '4px solid #FF8D21',
              padding: '10px 14px',
              borderRadius: 6,
              fontSize: 12,
              color: '#3D3B36',
              display: 'flex',
              alignItems: 'center',
              gap: 8
            }}>
              <span>💡</span>
              <span>
                <strong>Otomatis:</strong> Kriteria penilaian AI akan otomatis dirumuskan dari dokumen/teks yang Anda berikan tanpa perlu setting manual!
              </span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 16 }}>
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
                disabled={!jabatan.trim()}
                style={{
                  backgroundColor: jabatan.trim() ? '#FF8D21' : '#DCDAD5',
                  color: jabatan.trim() ? '#0A0908' : '#8A8780',
                  fontWeight: 600,
                  fontSize: 14,
                  padding: '10px 22px',
                  borderRadius: 8,
                  border: 'none',
                  cursor: jabatan.trim() ? 'pointer' : 'not-allowed'
                }}
              >
                Lanjut ke Unggah CV Pelamar →
              </button>
            </div>
          </form>
        </div>
      ) : (
        /* Substep 2: Edukasi ATS + Bulk Upload CV */
        <div>
          <div style={{ textAlign: 'center', marginBottom: 20 }}>
            <span style={{
              display: 'inline-block',
              background: '#E8F5E9',
              color: '#1F8A4E',
              fontSize: 11,
              fontWeight: 600,
              padding: '3px 10px',
              borderRadius: 9999,
              marginBottom: 8
            }}>
              POSISI: {jabatan.toUpperCase()}
            </span>
            <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 22, fontWeight: 600, color: '#0A0908' }}>
              Unggah Kumpulan CV Pelamar (Bulk Upload)
            </h2>
            <p style={{ fontSize: 13, color: '#5E5C56', marginTop: 4, maxWidth: 520, margin: '4px auto 0' }}>
              Jangan habiskan waktu menyaring manual. Masukkan file-file CV pelamar (bisa banyak sekaligus), AI LUNA akan langsung membaca dan memberi skor kesesuaian.
            </p>
          </div>

          {/* Area Dropzone */}
          <div
            style={{
              border: '2px dashed #FF8D21',
              borderRadius: 14,
              padding: '30px 20px',
              textAlign: 'center',
              backgroundColor: '#FFFDF9',
              cursor: 'pointer',
              marginBottom: 16
            }}
            onClick={() => document.getElementById('ob2-bulk-cv')?.click()}
          >
            <input
              id="ob2-bulk-cv"
              type="file"
              multiple
              accept=".pdf,.docx,.zip"
              style={{ display: 'none' }}
              onChange={handleSimulateAddFiles}
            />
            <div style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              backgroundColor: '#FFF4DF',
              color: '#FF8D21',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 10
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#0A0908' }}>
              Pilih Berkas CV Pelamar (Multi-select) atau File .ZIP
            </div>
            <div style={{ fontSize: 12, color: '#8A8780', marginTop: 4 }}>
              Format PDF atau DOCX hingga 10 MB per file
            </div>
          </div>

          {/* List File Terpilih */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: '#3D3B36', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
              <span>Berkas Siap Diproses ({uploadedCVs.length})</span>
              {uploadedCVs.length === 0 && (
                <button
                  type="button"
                  onClick={() => {
                    setUploadedCVs([
                      { id: 1, name: 'CV_Ahmad_Rizky_Sales.pdf', size: '1.2 MB', status: 'ready' },
                      { id: 2, name: 'Budi_Santoso_Resume_2026.pdf', size: '2.4 MB', status: 'ready' },
                      { id: 3, name: 'CV_Dewi_Lestari_Marketer.docx', size: '0.8 MB', status: 'ready' }
                    ]);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#FF8D21',
                    fontSize: 12,
                    cursor: 'pointer',
                    fontWeight: 600
                  }}
                >
                  + Gunakan Contoh Berkas Demo
                </button>
              )}
            </div>

            {uploadedCVs.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, maxHeight: 150, overflowY: 'auto' }}>
                {uploadedCVs.map((cv) => (
                  <div
                    key={cv.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 12px',
                      borderRadius: 6,
                      backgroundColor: '#F7F7F6',
                      border: '1px solid #EFEEEC',
                      fontSize: 12
                    }}
                  >
                    <span style={{ color: '#0A0908', fontWeight: 500 }}>📄 {cv.name}</span>
                    <span style={{ color: '#8A8780' }}>{cv.size}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '14px', backgroundColor: '#F7F7F6', borderRadius: 8, textAlign: 'center', fontSize: 12, color: '#8A8780' }}>
                Belum ada berkas dipilih. Anda bisa memilih beberapa file CV sekaligus atau mencoba contoh demo di atas.
              </div>
            )}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #EFEEEC', paddingTop: 16 }}>
            <button
              type="button"
              onClick={() => setSubStep(1)}
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
              ← Ubah Detail Lowongan
            </button>

            <div style={{ display: 'flex', gap: 10 }}>
              <button
                type="button"
                onClick={() => onComplete({ jabatan, totalCV: 0 })}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#8A8780',
                  fontSize: 13,
                  cursor: 'pointer',
                  padding: '8px 14px'
                }}
              >
                Lewati, unggah CV nanti
              </button>

              <button
                type="button"
                disabled={isProcessing}
                onClick={handleStartScoring}
                style={{
                  backgroundColor: '#FF8D21',
                  color: '#0A0908',
                  fontWeight: 600,
                  fontSize: 14,
                  padding: '10px 22px',
                  borderRadius: 8,
                  border: 'none',
                  cursor: isProcessing ? 'wait' : 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8
                }}
              >
                {isProcessing ? 'Memproses Penilaian AI...' : 'Mulai Skoring AI & Buka Hasil Seleksi →'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}