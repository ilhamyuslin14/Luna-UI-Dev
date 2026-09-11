import { useState } from 'react';
import '../../../../css/mobile/getting-started-profil.css';

/*
  Prototipe klik-tembus "Getting Started — Profil Perusahaan". SEMUA data &
  aksi di sini dummy/statis — tidak ada panggilan Supabase, tidak ada koneksi
  ke komponen Akun Profil asli. Section ini TERPISAH dari Getting Started
  Lowongan (lihat ../getting-started-lowongan/GettingStartedLowongan.jsx) —
  menyusul setelah "Sebarkan Lowongannya" selesai, dengan penanda visual
  sendiri, bukan lanjutan bernomor dari journey itu.
*/

const DUMMY_COMPANY = 'Kreativa Studio';
const INDUSTRI_OPTS = ['Teknologi & Digital', 'Retail & E-commerce', 'Manufaktur', 'Jasa Keuangan', 'Pendidikan', 'Kesehatan', 'Media & Kreatif', 'Lainnya'];

const IconCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);
const IconChevronDown = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
);
const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4.5 19.5 9.5 8 21H3v-5Z" /></svg>
);
const IconSettings = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" /></svg>
);
const IconCopy = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
);
const IconExternal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6" /><path d="M10 14 21 3" /></svg>
);
const IconImage = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="4" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></svg>
);
const IconText = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h10" /></svg>
);
const IconGlobe = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" /></svg>
);

function initialsOf(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('') || '?';
}

export default function GettingStartedProfil() {
  const [step, setStep] = useState('intro'); // 'intro' | 'form' | 'selesai'

  return (
    <div className="msh-fullscreen-panel open gsp-panel">
      {step === 'intro' && <ScreenIntro onNext={() => setStep('form')} />}
      {step === 'form' && <ScreenForm onNext={() => setStep('selesai')} />}
      {step === 'selesai' && <ScreenSelesai />}
    </div>
  );
}

/* ── 1. Kenapa Ini Penting (value-prop) ── */
function ScreenIntro({ onNext }) {
  return (
    <>
      <div className="gsp-body" style={{ paddingTop: 'calc(24px + env(safe-area-inset-top, 0px))' }}>
        <span className="gsp-kicker">Sebelum Lengkapi Profil</span>
        <h2 className="gsp-h2">Kandidat menilai kamu sebelum melamar</h2>
        <p className="gsp-p">Bukan cuma baca posisinya — mereka lihat siapa yang merekrut.</p>

        <div className="gsp-proof">
          <div className="gsp-proof-card before">
            <span className="gsp-proof-tag">Profil kosong</span>
            <div className="gsp-proof-avatar">?</div>
            <div className="gsp-proof-name">Nama Perusahaan</div>
            <div className="gsp-proof-line" />
            <div className="gsp-proof-line short" />
          </div>
          <div className="gsp-proof-card after">
            <span className="gsp-proof-tag">Profil lengkap</span>
            <div className="gsp-proof-avatar">KS</div>
            <div className="gsp-proof-name">{DUMMY_COMPANY}</div>
            <div className="gsp-proof-line" />
            <div className="gsp-proof-line short" />
          </div>
        </div>

        <div className="gsp-stat-inline">
          <b>75%</b>
          <span>pencari kerja meriset profil perusahaan dulu sebelum memutuskan melamar.</span>
        </div>

        <div className="gsp-list">
          <div className="gsp-item">
            <div className="gsp-item-ic"><IconImage /></div>
            <div><div className="gsp-item-t">Logo &amp; identitas visual</div><div className="gsp-item-d">Kesan pertama sebelum mereka baca satu kata pun.</div></div>
          </div>
          <div className="gsp-item">
            <div className="gsp-item-ic"><IconText /></div>
            <div><div className="gsp-item-t">Cerita singkat perusahaan</div><div className="gsp-item-d">Kenapa orang harus tertarik bekerja di sini.</div></div>
          </div>
          <div className="gsp-item">
            <div className="gsp-item-ic"><IconGlobe /></div>
            <div><div className="gsp-item-t">Langsung tayang publik</div><div className="gsp-item-d">Begitu disimpan, laman karier kamu langsung terupdate.</div></div>
          </div>
        </div>
      </div>
      <div className="gsp-footer">
        <button className="gsp-btn gsp-btn-primary" onClick={onNext}>Lanjutkan</button>
      </div>
    </>
  );
}

/* ── 2. Isi Data (form + preview live) ── */
function ScreenForm({ onNext }) {
  const [nama, setNama] = useState(DUMMY_COMPANY);
  const [deskripsi, setDeskripsi] = useState('');
  const [industriIdx, setIndustriIdx] = useState(0);
  const [ukuran, setUkuran] = useState('11–50');

  const initials = initialsOf(nama);
  const industri = INDUSTRI_OPTS[industriIdx];
  const metaParts = [industri, ''].filter(Boolean);

  return (
    <>
      <div className="gsp-top"><span className="gsp-step">Profil Perusahaan</span></div>
      <div className="gsp-body">

        <div className="gsp-avatar-upload">
          <button type="button" className="gsp-avatar-circle" aria-label="Ubah logo">
            <div className="fill">{initials}</div>
            <div className="gsp-avatar-badge"><IconCamera /></div>
          </button>
          <div className="gsp-avatar-hint">Ketuk untuk unggah logo</div>
        </div>

        <div className="gsp-field">
          <label>Nama Perusahaan <span className="prefill">Dari data daftar</span></label>
          <input className="gsp-inp" value={nama} onChange={e => setNama(e.target.value)} />
        </div>

        <div>
          <div className="gsp-sec-eyebrow">Cerita Singkat</div>
          <div className="gsp-field" style={{ marginTop: 9 }}>
            <label>Deskripsi Perusahaan</label>
            <textarea
              className="gsp-txa"
              placeholder="Studio desain yang bikin brand digital tampil beda…"
              value={deskripsi}
              maxLength={160}
              onChange={e => setDeskripsi(e.target.value)}
            />
            <div className="gsp-char-hint">{deskripsi.length}/160</div>
          </div>
        </div>

        <div>
          <div className="gsp-sec-eyebrow">Detail Perusahaan</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 9 }}>
            <div className="gsp-field">
              <label>Industri</label>
              <button type="button" className="gsp-pick-field" onClick={() => setIndustriIdx((industriIdx + 1) % INDUSTRI_OPTS.length)}>
                <span>{industri}</span>
                <IconChevronDown />
              </button>
            </div>
            <div className="gsp-field">
              <label>Ukuran Perusahaan</label>
              <div className="gsp-seg">
                {['1–10', '11–50', '51–200', '200+'].map(opt => (
                  <button key={opt} type="button" className={`gsp-seg-opt${ukuran === opt ? ' sel' : ''}`} onClick={() => setUkuran(opt)}>{opt}</button>
                ))}
              </div>
            </div>
            <div className="gsp-field">
              <label>Lokasi</label>
              <input className="gsp-inp" placeholder="Kota, Provinsi" />
            </div>
          </div>
        </div>

        <div>
          <div className="gsp-sec-eyebrow">Kontak <span style={{ textTransform: 'none', letterSpacing: 0, fontWeight: 500, color: 'var(--luna-ink-300)' }}>(opsional)</span></div>
          <div className="gsp-field" style={{ marginTop: 9 }}>
            <label>Nomor WhatsApp</label>
            <input className="gsp-inp" placeholder="08xx-xxxx-xxxx" />
          </div>
        </div>

        <div className="gsp-browser">
          <div className="gsp-browser-bar">
            <span className="gsp-browser-dot" /><span className="gsp-browser-dot" /><span className="gsp-browser-dot" />
            <span className="gsp-browser-url">https://karir.lunasys.ai/...</span>
          </div>
          <div className="gsp-browser-body">
            <div className="gsp-prev-head">
              <div className="gsp-prev-logo filled">{initials}</div>
              <div>
                <div className="gsp-prev-name">{nama || 'Nama Perusahaan'}</div>
                <div className="gsp-prev-meta">{metaParts.filter(Boolean).join(' · ') || 'Isi industri & lokasi di atas'}</div>
              </div>
            </div>
            <div className={`gsp-prev-desc${deskripsi ? '' : ' placeholder'}`}>
              {deskripsi || 'Deskripsi perusahaan akan tampil di sini begitu kamu mengetik…'}
            </div>
          </div>
        </div>

        <div className="gsp-settings-hint">
          <IconSettings />
          <p>Alamat lengkap, website, media sosial &amp; video profil bisa dilengkapi kapan saja lewat <b>Pengaturan Akun</b>.</p>
        </div>

      </div>
      <div className="gsp-footer">
        <button className="gsp-btn gsp-btn-primary" onClick={onNext}>Simpan</button>
      </div>
    </>
  );
}

/* ── 3. Selesai ── */
function ScreenSelesai() {
  return (
    <>
      <div className="gsp-body">
        <div className="gsp-conf-hero">
          <div className="gsp-conf-ring"><IconCheck /></div>
          <h2 className="gsp-h2">Profil perusahaan kamu sudah tayang</h2>
          <p className="gsp-p">{DUMMY_COMPANY} sekarang punya identitas lengkap di mata kandidat.</p>
        </div>

        <div className="gsp-browser">
          <div className="gsp-browser-bar">
            <span className="gsp-browser-dot" /><span className="gsp-browser-dot" /><span className="gsp-browser-dot" />
            <span className="gsp-browser-url">https://karir.lunasys.ai/...</span>
          </div>
          <div className="gsp-browser-body">
            <div className="gsp-prev-head">
              <div className="gsp-prev-logo filled">KS</div>
              <div><div className="gsp-prev-name">{DUMMY_COMPANY}</div><div className="gsp-prev-meta">Teknologi &amp; Digital · Jakarta</div></div>
            </div>
            <div className="gsp-prev-desc">Studio desain yang bikin brand digital tampil beda, dikerjakan tim kecil yang gerak cepat.</div>
          </div>
        </div>

        <div className="gsp-link-box">
          <span className="u">karir.lunasys.ai/kreativa-studio</span>
          <div className="gsp-link-actions">
            <button type="button" className="gsp-link-act"><IconCopy />Salin</button>
            <span className="div" />
            <button type="button" className="gsp-link-act view"><IconExternal />Lihat</button>
          </div>
        </div>

        <p className="gsp-settings-note">Data lainnya (alamat, website, media sosial, dll) bisa dilengkapi kapan saja lewat <b>Pengaturan Akun</b>.</p>
      </div>
      <div className="gsp-footer">
        <button className="gsp-btn gsp-btn-primary">Buka Beranda</button>
      </div>
    </>
  );
}
