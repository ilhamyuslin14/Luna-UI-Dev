import React, { useState } from 'react';
import StepIntent_002 from '../../components/onboarding_002/StepIntent_002.jsx';
import StepExisting_002 from '../../components/onboarding_002/StepExisting_002.jsx';
import StepNewJob_002 from '../../components/onboarding_002/StepNewJob_002.jsx';
import StepShare_002 from '../../components/onboarding_002/StepShare_002.jsx';
import '../../../css/onboarding/onboarding_002.css';

export default function Onboarding_002({ navigate }) {
  // Step 1: Intent Selection
  // Step 2: Action Form (Existing Job & Bulk CV or New Job Creation)
  // Step 3: Success & Distribution (or ATS Ranking view)
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedIntent, setSelectedIntent] = useState('existing'); // 'existing' | 'new'
  const [createdJobData, setCreatedJobData] = useState(null);
  const [atsResultData, setAtsResultData] = useState(null);

  const handleFinishExisting = (result) => {
    setAtsResultData(result);
    // User bisa lanjut ke step 3 (Celebration/Result) atau langsung navigasi
    setCurrentStep(3);
  };

  const handleFinishNewJob = (job) => {
    setCreatedJobData(job);
    setCurrentStep(3);
  };

  const handleFinalFinish = () => {
    if (navigate) {
      navigate('beranda_002');
    } else {
      window.location.href = '/?view=beranda_002';
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F7F7F6',
      color: '#0A0908',
      fontFamily: "'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif",
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Navbar */}
      <header style={{
        height: 64,
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EFEEEC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 40px',
        boxSizing: 'border-box'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            backgroundColor: '#FF8D21',
            color: '#0A0908',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 800,
            fontSize: 16
          }}>
            L
          </div>
          <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: 18, color: '#0A0908' }}>
            LUNA
          </span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: '#FFF4DF',
            color: '#FF8D21',
            fontSize: 11,
            fontWeight: 600,
            padding: '4px 10px',
            borderRadius: 9999,
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}>
            ✨ Onboarding V2 Preview
          </span>
        </div>

        <button
          type="button"
          onClick={handleFinalFinish}
          style={{
            background: 'transparent',
            border: '1px solid #DCDAD5',
            color: '#5E5C56',
            padding: '7px 16px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Lewati ke Dasbor →
        </button>
      </header>

      {/* Progress Stepper Bar */}
      <div style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #EFEEEC',
        padding: '16px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 16,
          maxWidth: 680,
          width: '100%',
        }}>
          {/* Step 1 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 13,
            fontWeight: currentStep === 1 ? 600 : 500,
            color: currentStep === 1 ? '#0A0908' : (currentStep > 1 ? '#1F8A4E' : '#8A8780'),
            whiteSpace: 'nowrap'
          }}>
            <div style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: currentStep === 1 ? '1.5px solid #FF8D21' : (currentStep > 1 ? '1.5px solid #1F8A4E' : '1.5px solid #DCDAD5'),
              backgroundColor: currentStep === 1 ? '#FF8D21' : (currentStep > 1 ? '#1F8A4E' : '#FFFFFF'),
              color: currentStep === 1 ? '#0A0908' : (currentStep > 1 ? '#FFFFFF' : '#8A8780'),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 600,
              boxShadow: currentStep === 1 ? '0 0 0 3px rgba(255, 141, 33, 0.2)' : 'none'
            }}>
              {currentStep > 1 ? '✓' : '1'}
            </div>
            <span>Pilih Kebutuhan</span>
          </div>

          <div style={{
            flex: 1,
            height: 2,
            minWidth: 40,
            backgroundColor: currentStep > 1 ? '#1F8A4E' : '#EFEEEC',
            borderRadius: 2
          }} />

          {/* Step 2 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 13,
            fontWeight: currentStep === 2 ? 600 : 500,
            color: currentStep === 2 ? '#0A0908' : (currentStep > 2 ? '#1F8A4E' : '#8A8780'),
            whiteSpace: 'nowrap'
          }}>
            <div style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: currentStep === 2 ? '1.5px solid #FF8D21' : (currentStep > 2 ? '1.5px solid #1F8A4E' : '1.5px solid #DCDAD5'),
              backgroundColor: currentStep === 2 ? '#FF8D21' : (currentStep > 2 ? '#1F8A4E' : '#FFFFFF'),
              color: currentStep === 2 ? '#0A0908' : (currentStep > 2 ? '#FFFFFF' : '#8A8780'),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 600,
              boxShadow: currentStep === 2 ? '0 0 0 3px rgba(255, 141, 33, 0.2)' : 'none'
            }}>
              {currentStep > 2 ? '✓' : '2'}
            </div>
            <span>
              {selectedIntent === 'existing' ? 'Lowongan & Unggah CV' : 'Buat Lowongan'}
            </span>
          </div>

          <div style={{
            flex: 1,
            height: 2,
            minWidth: 40,
            backgroundColor: currentStep > 2 ? '#1F8A4E' : '#EFEEEC',
            borderRadius: 2
          }} />

          {/* Step 3 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontSize: 13,
            fontWeight: currentStep === 3 ? 600 : 500,
            color: currentStep === 3 ? '#0A0908' : '#8A8780',
            whiteSpace: 'nowrap'
          }}>
            <div style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              border: currentStep === 3 ? '1.5px solid #FF8D21' : '1.5px solid #DCDAD5',
              backgroundColor: currentStep === 3 ? '#FF8D21' : '#FFFFFF',
              color: currentStep === 3 ? '#0A0908' : '#8A8780',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 12,
              fontWeight: 600,
              boxShadow: currentStep === 3 ? '0 0 0 3px rgba(255, 141, 33, 0.2)' : 'none'
            }}>
              3
            </div>
            <span>
              {selectedIntent === 'existing' ? 'Hasil Seleksi AI' : 'Sebar & Selesai'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <main style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '40px 24px'
      }}>
        <div style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid #EFEEEC',
          borderRadius: 16,
          maxWidth: 820,
          width: '100%',
          padding: '40px 48px',
          boxShadow: '0 6px 24px rgba(10, 9, 8, 0.04)',
          boxSizing: 'border-box'
        }}>
          {currentStep === 1 && (
            <StepIntent_002
              selectedIntent={selectedIntent}
              onSelectIntent={setSelectedIntent}
              onNext={() => setCurrentStep(2)}
            />
          )}

          {currentStep === 2 && selectedIntent === 'existing' && (
            <StepExisting_002
              onBack={() => setCurrentStep(1)}
              onComplete={handleFinishExisting}
            />
          )}

          {currentStep === 2 && selectedIntent === 'new' && (
            <StepNewJob_002
              onBack={() => setCurrentStep(1)}
              onComplete={handleFinishNewJob}
            />
          )}

          {currentStep === 3 && selectedIntent === 'new' && (
            <StepShare_002
              jobData={createdJobData}
              onFinish={handleFinalFinish}
            />
          )}

          {currentStep === 3 && selectedIntent === 'existing' && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
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

              <h2 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 24, fontWeight: 600, color: '#0A0908', marginBottom: 8 }}>
                AI Berhasil Menilai Berkas Pelamar! ⚡
              </h2>
              <p style={{ fontSize: 14, color: '#5E5C56', maxWidth: 520, margin: '0 auto', lineHeight: 1.5 }}>
                Posisi <strong>{atsResultData?.jabatan || 'Lowongan'}</strong> telah dibuat dan <strong>{atsResultData?.totalCV || 3} berkas pelamar</strong> telah diekstrak serta diberi skor peringkat kecocokan.
              </p>

              <div style={{
                backgroundColor: '#F7F7F6',
                border: '1px solid #DCDAD5',
                borderRadius: 10,
                padding: '16px 20px',
                maxWidth: 480,
                margin: '24px auto',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#0A0908', marginBottom: 6 }}>
                  Ringkasan Ekstraksi AI ATS:
                </div>
                <div style={{ fontSize: 12, color: '#3D3B36', display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <div>✓ Kriteria evaluasi terbobot aktif</div>
                  <div>✓ Ranking kandidat 0-100 telah terhitung</div>
                  <div>✓ Rekomendasi lolos wawancara siap di-review</div>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginTop: 24 }}>
                <button
                  type="button"
                  onClick={handleFinalFinish}
                  style={{
                    backgroundColor: '#FF8D21',
                    color: '#0A0908',
                    fontWeight: 600,
                    fontSize: 15,
                    padding: '12px 28px',
                    borderRadius: 8,
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Buka Papan Seleksi &amp; Dasbor →
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}