import React, { useState, useEffect, useMemo } from 'react';
import { productNavigation, developerNavigation, docsContent } from './docsData.js';

// Embedded SVG Icons
const IconSearch = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconChevronRight = ({ className = "" }) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const IconArrowLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const IconArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconInfo = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1F6FB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

const IconCheck = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1F8A4E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconTableCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1F8A4E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconTableX = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9342B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const IconZoomIn = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const IconCloseImg = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Code Block with Copy to Clipboard button
function CodeBlock({ code, language = 'bash' }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="my-4 rounded-xl border border-[#DCDAD5] bg-[#0A0908] text-[#F7F7F6] overflow-hidden shadow-xs">
      <div className="px-4 py-2 bg-[#15140F] border-b border-[#3D3B36] flex items-center justify-between text-xs font-mono text-[#8A8780]">
        <span className="uppercase tracking-wider text-[10px] text-[#B8B5AE] font-semibold">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-[#DCDAD5] hover:text-white px-2.5 py-1 rounded-md bg-[#3D3B36]/60 hover:bg-[#3D3B36] transition-colors"
        >
          {copied ? (
            <>
              <IconCheck />
              <span className="text-[#1F8A4E] font-medium">Tersalin!</span>
            </>
          ) : (
            <span>Salin Kode</span>
          )}
        </button>
      </div>
      <pre className="p-4 text-xs sm:text-sm font-mono overflow-x-auto leading-relaxed text-[#EFEEEC]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// Markdown inline parser (bold, italic, code, math)
function parseInline(text) {
  if (!text) return null;
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\$[^$]+\$)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    if (!part) return null;
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={index} className="font-semibold text-[#0A0908]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      return (
        <em key={index} className="italic text-[#5E5C56]">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 rounded bg-[#F7F7F6] text-[#FF7B00] font-mono text-xs border border-[#DCDAD5]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
      return (
        <code
          key={index}
          className="px-1.5 py-0.5 rounded bg-[#FFF4DF] text-[#FF7B00] font-mono text-xs font-semibold border border-[#FFCD90]/50"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={index}>{part}</span>;
  });
}

// Markdown table: | Header | ... |\n|---|---|\n| Cell | ... |
function parseMarkdownTable(block) {
  const lines = block.split('\n').map((l) => l.trim()).filter(Boolean);
  if (lines.length < 2 || !lines[0].includes('|')) return null;

  const isSeparatorRow = /^\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?$/.test(lines[1]);
  if (!isSeparatorRow) return null;

  const splitRow = (line) => {
    let l = line.trim();
    if (l.startsWith('|')) l = l.slice(1);
    if (l.endsWith('|')) l = l.slice(0, -1);
    return l.split('|').map((c) => c.trim());
  };

  return {
    header: splitRow(lines[0]),
    rows: lines.slice(2).map(splitRow),
  };
}

// Sel checklist (✅/❌) dirender sebagai badge bulat, sisanya teks biasa
// (tetap lewat parseInline supaya bold/code inline tetap jalan).
function TableCell({ value }) {
  if (value === '✅') {
    return <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#1F8A4E]/10"><IconTableCheck /></span>;
  }
  if (value === '❌') {
    return <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#C9342B]/10"><IconTableX /></span>;
  }
  return <>{parseInline(value)}</>;
}

function DocTable({ header, rows }) {
  return (
    <div className="my-4 overflow-x-auto rounded-xl border border-[#EFEEEC]">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-[#F7F7F6]">
            {header.map((h, i) => (
              <th
                key={i}
                className={`px-4 py-2.5 font-semibold text-[#5E5C56] text-xs uppercase tracking-wide ${i === 0 ? 'text-left' : 'text-center'}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#EFEEEC]">
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 === 1 ? 'bg-[#FDFCFB]' : ''}>
              {row.map((cell, ci) => (
                <td key={ci} className={`px-4 py-2.5 ${ci === 0 ? 'text-left text-[#3D3B36] font-medium' : 'text-center'}`}>
                  <TableCell value={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Lightbox penuh layar dipakai bareng oleh DocImage (gambar inline di
// konten) dan DocThumb (thumbnail galeri "Tampilan Layar" di sidebar kanan).
function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-6"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        aria-label="Tutup"
        className="absolute top-5 right-5 rounded-full bg-white/10 p-2 text-white/80 hover:bg-white/20 hover:text-white transition-colors"
      >
        <IconCloseImg />
      </button>
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-[90vw] max-h-[88vh] w-auto h-auto rounded-lg shadow-2xl object-contain"
      />
    </div>
  );
}

// Gambar dokumentasi inline di dalam paragraf — tampil sebagai frame rasio
// tetap (default 3:4, crop pakai object-fit: cover), diklik untuk buka
// lightbox berisi gambar asli. Sintaks: ![alt](url) atau ![alt](url "rasio")
// — mis. ![Tampilan Beranda](/docs/beranda.png "4:3").
function DocImage({ src, alt, ratio }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full max-w-sm mx-auto my-4 text-left cursor-zoom-in"
      >
        <div
          className="relative overflow-hidden rounded-xl border border-[#EFEEEC] bg-[#F7F7F6]"
          style={{ aspectRatio: ratio.replace(':', ' / ') }}
        >
          <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/15 transition-colors">
            <span className="flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <IconZoomIn /> Perbesar
            </span>
          </div>
        </div>
        {alt && <p className="mt-2 text-xs text-[#8A8780] text-center">{alt}</p>}
      </button>

      {open && <ImageLightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}

// Thumbnail kecil untuk galeri "Tampilan Layar" di sidebar kanan — beberapa
// gambar sekaligus boleh mewakili satu halaman/artikel dokumentasi.
function DocThumb({ src, alt, ratio }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group block w-full text-left cursor-zoom-in"
      >
        <div
          className="relative overflow-hidden rounded-lg border border-[#EFEEEC] bg-[#F7F7F6]"
          style={ratio ? { aspectRatio: ratio.replace(':', ' / ') } : undefined}
        >
          <img
            src={src}
            alt={alt}
            className={`${ratio ? 'absolute inset-0 w-full h-full object-cover' : 'w-full h-auto block'} transition-transform duration-300 group-hover:scale-105`}
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/25 transition-colors">
            <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <IconZoomIn />
            </span>
          </div>
        </div>
        {alt && <p className="mt-1.5 text-[11px] leading-snug text-[#8A8780]">{alt}</p>}
      </button>

      {open && <ImageLightbox src={src} alt={alt} onClose={() => setOpen(false)} />}
    </>
  );
}

const IMAGE_RATIO_RE = /^\d+:\d+$/;

function parseMarkdownImage(block) {
  const match = block.trim().match(/^!\[([^\]]*)\]\(([^)"\s]+)(?:\s+"([^"]*)")?\)$/);
  if (!match) return null;
  const [, alt, src, title] = match;
  return { alt, src, ratio: title && IMAGE_RATIO_RE.test(title) ? title : '3:4' };
}

// Markdown block parser (paragraphs, code blocks, tables, images, bullet lists, numbered lists)
function DocMarkdown({ content }) {
  if (!content) return null;

  const rawBlocks = content.split(/\n\s*\n/);

  return (
    <div className="text-[15px] leading-relaxed text-[#3D3B36] space-y-4">
      {rawBlocks.map((block, bIdx) => {
        const trimmed = block.trim();
        if (!trimmed) return null;

        // Check if block is a standalone image ![alt](url "ratio")
        const imageData = parseMarkdownImage(trimmed);
        if (imageData) {
          return <DocImage key={bIdx} src={imageData.src} alt={imageData.alt} ratio={imageData.ratio} />;
        }

        // Check if block is a markdown table
        const tableData = parseMarkdownTable(trimmed);
        if (tableData) {
          return <DocTable key={bIdx} header={tableData.header} rows={tableData.rows} />;
        }

        // Check if block is a codeblock ```lang ... ```
        const codeBlockMatch = trimmed.match(/^```([a-zA-Z0-9_-]*)\n([\s\S]*?)```$/);
        if (codeBlockMatch) {
          return (
            <CodeBlock
              key={bIdx}
              language={codeBlockMatch[1] || 'bash'}
              code={codeBlockMatch[2].trim()}
            />
          );
        }

        const lines = trimmed.split('\n').map((l) => l.trim()).filter(Boolean);
        const elements = [];
        let currentList = null; // { type: 'ul' | 'ol', items: [] }

        lines.forEach((line) => {
          const h3Match = line.match(/^###\s+(.*)/);
          const h4Match = line.match(/^####\s+(.*)/);
          const bulletMatch = line.match(/^[*-]\s+(.*)/);
          const numberMatch = line.match(/^(\d+)\.\s+(.*)/);

          if (h3Match) {
            if (currentList) {
              elements.push(currentList);
              currentList = null;
            }
            elements.push({ type: 'h3', text: h3Match[1] });
          } else if (h4Match) {
            if (currentList) {
              elements.push(currentList);
              currentList = null;
            }
            elements.push({ type: 'h4', text: h4Match[1] });
          } else if (bulletMatch) {
            if (!currentList || currentList.type !== 'ul') {
              if (currentList) elements.push(currentList);
              currentList = { type: 'ul', items: [] };
            }
            currentList.items.push(bulletMatch[1]);
          } else if (numberMatch) {
            if (!currentList || currentList.type !== 'ol') {
              if (currentList) elements.push(currentList);
              currentList = { type: 'ol', items: [] };
            }
            currentList.items.push({ num: numberMatch[1], text: numberMatch[2] });
          } else {
            if (currentList) {
              elements.push(currentList);
              currentList = null;
            }
            elements.push({ type: 'p', text: line });
          }
        });

        if (currentList) {
          elements.push(currentList);
        }

        return (
          <React.Fragment key={bIdx}>
            {elements.map((el, elIdx) => {
              if (el.type === 'h3') {
                return (
                  <h3 key={elIdx} className="text-base font-semibold text-[#0A0908] pt-2 pb-0.5 tracking-tight">
                    {parseInline(el.text)}
                  </h3>
                );
              }
              if (el.type === 'h4') {
                return (
                  <h4 key={elIdx} className="text-sm font-semibold text-[#5E5C56] pt-1.5">
                    {parseInline(el.text)}
                  </h4>
                );
              }
              if (el.type === 'ul') {
                return (
                  <ul key={elIdx} className="space-y-2.5 my-3 pl-1">
                    {el.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-2.5 text-[#3D3B36]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF8D21] shrink-0 mt-2" />
                        <span className="flex-1 leading-relaxed">{parseInline(item)}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (el.type === 'ol') {
                return (
                  <ol key={elIdx} className="space-y-2.5 my-3 pl-1">
                    {el.items.map((item, iIdx) => (
                      <li key={iIdx} className="flex items-start gap-3 text-[#3D3B36]">
                        <span className="w-5 h-5 rounded-md bg-[#FFF4DF] text-[#FF7B00] font-semibold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-[#FFCD90]/50">
                          {item.num}
                        </span>
                        <span className="flex-1 leading-relaxed">{parseInline(item.text)}</span>
                      </li>
                    ))}
                  </ol>
                );
              }
              return (
                <p key={elIdx} className="leading-relaxed">
                  {parseInline(el.text)}
                </p>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default function Docs({ navigate }) {
  // Ambil initial mode & doc dari query URL jika ada
  const [docMode, setDocMode] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const docId = params.get('doc');
    if (params.get('mode') === 'developer' || (docId && docsContent[docId]?.mode === 'developer')) {
      return 'developer';
    }
    return 'product';
  });

  const [activeDocId, setActiveDocId] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const initialDoc = params.get('doc');
    if (initialDoc && docsContent[initialDoc]) return initialDoc;
    return params.get('mode') === 'developer' ? 'arsitektur-sistem' : 'pengenalan';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [feedbackSent, setFeedbackSent] = useState(null);

  // Sync navigasi tree aktif berdasarkan mode
  const currentNav = docMode === 'developer' ? developerNavigation : productNavigation;

  // Handler pergantian mode (Product vs Developer)
  const handleSwitchMode = (mode) => {
    setDocMode(mode);
    setFeedbackSent(null);
    const defaultDoc = mode === 'developer' ? 'arsitektur-sistem' : 'pengenalan';
    setActiveDocId(defaultDoc);

    const url = new URL(window.location);
    url.searchParams.set('mode', mode);
    url.searchParams.set('doc', defaultDoc);
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sync dengan URL query parameter
  const handleSelectDoc = (id, targetMode = null) => {
    const matchedMode = targetMode || docsContent[id]?.mode || docMode;
    if (matchedMode !== docMode) {
      setDocMode(matchedMode);
    }
    setActiveDocId(id);
    setFeedbackSent(null);
    const url = new URL(window.location);
    url.searchParams.set('mode', matchedMode);
    url.searchParams.set('doc', id);
    window.history.pushState({}, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Keyboard shortcut Ctrl+K / Cmd+K untuk Search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K' || e.code === 'KeyK')) {
        e.stopPropagation();
      } else if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Data konten artikel yang sedang aktif
  const currentDoc = docsContent[activeDocId] || (docMode === 'developer' ? docsContent['arsitektur-sistem'] : docsContent['pengenalan']);

  // Flattened list untuk tombol Previous & Next
  const allDocItems = useMemo(() => {
    return currentNav.flatMap((group) => group.items);
  }, [currentNav]);

  const currentIndex = allDocItems.findIndex((item) => item.id === activeDocId);
  const prevDoc = currentIndex > 0 ? allDocItems[currentIndex - 1] : null;
  const nextDoc = currentIndex < allDocItems.length - 1 ? allDocItems[currentIndex + 1] : null;

  // Search filter lintas mode
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    const results = [];

    Object.entries(docsContent).forEach(([id, doc]) => {
      if (doc.title.toLowerCase().includes(q) || doc.description.toLowerCase().includes(q)) {
        results.push({ id, title: doc.title, category: doc.category, mode: doc.mode, snippet: doc.description });
      } else {
        doc.sections?.forEach((sec) => {
          if (sec.title.toLowerCase().includes(q) || sec.content.toLowerCase().includes(q)) {
            results.push({
              id,
              title: `${doc.title} > ${sec.title}`,
              category: doc.category,
              mode: doc.mode,
              snippet: sec.content.substring(0, 100) + '...',
            });
          }
        });
      }
    });

    return results;
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#15140F] font-sans antialiased flex flex-col selection:bg-[#FFF4DF] selection:text-[#FF7B00]">
      {/* Top Header Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-[#EFEEEC] bg-white/95 backdrop-blur-md">
        <div className="w-full px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo & Brand (Pojok Kiri) */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="flex items-center gap-2.5 cursor-pointer select-none group"
            >
              <img
                src="/assets/logos/luna-logo-clean.png"
                alt="Luna"
                className="h-8.5 w-auto rounded-lg object-contain shadow-2xs"
              />
              <span className="px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-[#FF7B00] bg-[#FFF4DF] rounded-md border border-[#FFCD90]/50">
                Docs
              </span>
            </a>
          </div>

          {/* Sisi Kanan: Pencarian + CTA Ke Aplikasi Utama */}
          <div className="flex items-center gap-3">
            {/* Quick Search Bar */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="flex items-center justify-between gap-6 px-3.5 py-1.5 text-sm text-[#8A8780] bg-[#F7F7F6] hover:bg-[#EFEEEC] hover:text-[#5E5C56] border border-[#DCDAD5]/70 rounded-xl transition-all shadow-2xs cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <IconSearch />
                <span className="text-xs sm:text-sm">Cari panduan, fitur...</span>
              </div>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono text-[#5E5C56] bg-white border border-[#DCDAD5] rounded-md shadow-2xs">
                Ctrl K
              </kbd>
            </button>

            {/* CTA Ke Aplikasi Utama */}
            <a
              href="/?view=beranda_002"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-[#3D3B36] hover:text-[#0A0908] hover:bg-[#F7F7F6] border border-[#EFEEEC] rounded-xl transition-all shadow-2xs shrink-0"
            >
              <span>Ke Aplikasi Utama</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container - 3 Column Layout */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-6 flex-1 flex gap-8 py-8">
        {/* Left Sidebar (Hierarchical Navigation Tree) */}
        <aside className="w-64 shrink-0 hidden lg:block sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pr-3 scrollbar-thin">
          {/* Mode Switcher Pill */}
          <div className="p-1 bg-[#F7F7F6] border border-[#EFEEEC] rounded-xl flex gap-1 mb-6">
            <button
              onClick={() => handleSwitchMode('product')}
              className={`flex-1 py-2 px-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center ${
                docMode === 'product'
                  ? 'bg-white text-[#0A0908] shadow-xs'
                  : 'text-[#8A8780] hover:text-[#0A0908]'
              }`}
            >
              Panduan Produk
            </button>
            <button
              onClick={() => handleSwitchMode('developer')}
              className={`flex-1 py-2 px-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center ${
                docMode === 'developer'
                  ? 'bg-[#0A0908] text-white shadow-xs'
                  : 'text-[#8A8780] hover:text-[#0A0908]'
              }`}
            >
              Developer
            </button>
          </div>

          <div className="space-y-6">
            {currentNav.map((group) => (
              <div key={group.category} className="space-y-1">
                <h4 className="px-3 text-xs font-semibold tracking-wider text-[#8A8780] uppercase">
                  {group.category}
                </h4>
                <ul className="space-y-0.5 mt-2">
                  {group.items.map((item) => {
                    const isActive = activeDocId === item.id;
                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => handleSelectDoc(item.id)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-xl font-medium transition-all text-left ${
                            isActive
                              ? (docMode === 'developer' ? 'text-white bg-[#0A0908] font-semibold shadow-xs' : 'text-[#FF7B00] bg-[#FFF4DF] font-semibold shadow-xs')
                              : 'text-[#5E5C56] hover:text-[#0A0908] hover:bg-[#F7F7F6]'
                          }`}
                        >
                          <span className="truncate">{item.title}</span>
                          {isActive && <div className={`w-1.5 h-1.5 rounded-full ${docMode === 'developer' ? 'bg-[#FF8D21]' : 'bg-[#FF7B00]'}`} />}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Center Main Content Area */}
        <main className="flex-1 min-w-0 max-w-3xl pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-medium text-[#8A8780] mb-4">
            <span
              className="hover:text-[#5E5C56] cursor-pointer"
              onClick={() => handleSelectDoc(docMode === 'developer' ? 'arsitektur-sistem' : 'pengenalan')}
            >
              {docMode === 'developer' ? 'Developer / Engineering' : 'Product Guide'}
            </span>
            <IconChevronRight className="opacity-50" />
            <span>{currentDoc.category}</span>
            <IconChevronRight className="opacity-50" />
            <span className="text-[#0A0908] font-semibold">{currentDoc.title}</span>
          </nav>

          {/* Article Header */}
          <div className="border-b border-[#EFEEEC] pb-6 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A0908] mb-3">
              {currentDoc.title}
            </h1>
            <p className="text-base text-[#5E5C56] leading-relaxed mb-4">
              {parseInline(currentDoc.description)}
            </p>
            <div className="flex items-center gap-4 text-xs text-[#8A8780]">
              <span>Terakhir diperbarui: {currentDoc.lastUpdated}</span>
            </div>
          </div>

          {/* Article Sections */}
          <div className="space-y-10">
            {currentDoc.sections?.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
                <h2 className="text-xl font-semibold text-[#0A0908] tracking-tight flex items-center gap-2 group">
                  <span>{section.title}</span>
                  <a
                    href={`#${section.id}`}
                    className="text-[#8A8780] opacity-0 group-hover:opacity-100 transition-opacity"
                    title="Direct link to heading"
                  >
                    #
                  </a>
                </h2>

                {/* Callout Box if any */}
                {section.callout && (
                  <div className="my-4 p-4 rounded-xl bg-[#FFF4DF]/60 border-l-4 border-[#FF8D21] text-sm text-[#3D3B36] space-y-1">
                    <div className="font-semibold text-[#0A0908] flex items-center gap-2">
                      <IconInfo />
                      <span>{section.callout.title}</span>
                    </div>
                    <p className="leading-relaxed">{parseInline(section.callout.text)}</p>
                  </div>
                )}

                {/* Content paragraphs */}
                <DocMarkdown content={section.content} />
              </section>
            ))}
          </div>

          {/* Article Feedback Box */}
          <div className="mt-14 p-6 rounded-2xl bg-white border border-[#EFEEEC] shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-semibold text-[#0A0908]">Apakah panduan ini membantu Anda?</h4>
              <p className="text-xs text-[#8A8780] mt-0.5">Bantu kami meningkatkan kualitas dokumentasi Luna.</p>
            </div>
            {feedbackSent ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1F8A4E] bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                <IconCheck />
                <span>Terima kasih atas masukannya!</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setFeedbackSent('yes')}
                  className="px-3.5 py-1.5 text-xs font-medium text-[#3D3B36] bg-[#F7F7F6] hover:bg-[#EFEEEC] border border-[#DCDAD5] rounded-lg transition-colors"
                >
                  👍 Ya, Membantu
                </button>
                <button
                  onClick={() => setFeedbackSent('no')}
                  className="px-3.5 py-1.5 text-xs font-medium text-[#3D3B36] bg-[#F7F7F6] hover:bg-[#EFEEEC] border border-[#DCDAD5] rounded-lg transition-colors"
                >
                  👎 Perlu Perbaikan
                </button>
              </div>
            )}
          </div>

          {/* Bottom Pagination (Prev / Next) */}
          <div className="mt-8 pt-6 border-t border-[#EFEEEC] grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevDoc ? (
              <button
                onClick={() => handleSelectDoc(prevDoc.id)}
                className="flex flex-col items-start p-4 rounded-xl border border-[#EFEEEC] hover:border-[#FFCD90] bg-white hover:bg-[#FFF4DF]/30 transition-all text-left group"
              >
                <div className="flex items-center gap-1 text-xs text-[#8A8780] group-hover:text-[#FF7B00] mb-1">
                  <IconArrowLeft />
                  <span>Sebelumnya</span>
                </div>
                <span className="text-sm font-semibold text-[#0A0908] group-hover:text-[#FF7B00]">
                  {prevDoc.title}
                </span>
              </button>
            ) : (
              <div />
            )}

            {nextDoc && (
              <button
                onClick={() => handleSelectDoc(nextDoc.id)}
                className="flex flex-col items-end p-4 rounded-xl border border-[#EFEEEC] hover:border-[#FFCD90] bg-white hover:bg-[#FFF4DF]/30 transition-all text-right group"
              >
                <div className="flex items-center gap-1 text-xs text-[#8A8780] group-hover:text-[#FF7B00] mb-1">
                  <span>Selanjutnya</span>
                  <IconArrowRight />
                </div>
                <span className="text-sm font-semibold text-[#0A0908] group-hover:text-[#FF7B00]">
                  {nextDoc.title}
                </span>
              </button>
            )}
          </div>
        </main>

        {/* Right Sidebar (Table of Contents / On this Page) */}
        <aside className="w-56 shrink-0 hidden xl:block sticky top-24 self-start max-h-[calc(100vh-7rem)] overflow-y-auto pl-2">
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-wider text-[#8A8780] uppercase">
              Di Halaman Ini
            </h4>
            <ul className="space-y-2 border-l border-[#EFEEEC] pl-3 text-xs">
              {currentDoc.sections?.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block text-[#5E5C56] hover:text-[#FF7B00] transition-colors leading-normal"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>

            {currentDoc.screenshots?.length > 0 && (
              <div className="pt-8 border-t border-[#EFEEEC] space-y-3">
                <h4 className="text-xs font-semibold tracking-wider text-[#8A8780] uppercase">
                  Tampilan Layar
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {currentDoc.screenshots.map((shot, i) => (
                    <DocThumb key={i} src={shot.src} alt={shot.alt} ratio={shot.ratio} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>

      {/* Global Search Modal (Ctrl + K) */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-start justify-center pt-20 px-4">
          <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#EFEEEC] overflow-hidden flex flex-col max-h-[80vh]">
            <div className="p-4 border-b border-[#EFEEEC] flex items-center gap-3">
              <IconSearch />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari dokumentasi Luna..."
                className="flex-1 bg-transparent text-sm text-[#0A0908] placeholder-[#8A8780] outline-none"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="px-2 py-0.5 text-xs text-[#8A8780] hover:text-[#0A0908] bg-[#F7F7F6] rounded-md border border-[#DCDAD5]"
              >
                ESC
              </button>
            </div>

            <div className="p-2 overflow-y-auto max-h-96">
              {searchQuery.trim() === '' ? (
                <div className="p-8 text-center text-xs text-[#8A8780]">
                  Ketik kata kunci untuk mencari seluruh dokumen dan topik panduan.
                </div>
              ) : searchResults.length === 0 ? (
                <div className="p-8 text-center text-xs text-[#8A8780]">
                  Tidak ada artikel yang cocok dengan "{searchQuery}".
                </div>
              ) : (
                <div className="space-y-1">
                  {searchResults.map((res, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        handleSelectDoc(res.id, res.mode);
                        setIsSearchOpen(false);
                        setSearchQuery('');
                      }}
                      className="p-3 rounded-xl hover:bg-[#FFF4DF]/50 cursor-pointer border border-transparent hover:border-[#FFCD90]/50 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wider ${
                          res.mode === 'developer'
                            ? 'bg-[#0A0908] text-white'
                            : 'bg-[#FFF4DF] text-[#FF7B00] border border-[#FFCD90]/50'
                        }`}>
                          {res.mode === 'developer' ? 'Dev' : 'User'}
                        </span>
                        <span className="text-xs font-medium text-[#8A8780]">{res.category}</span>
                      </div>
                      <div className="text-sm font-semibold text-[#0A0908]">{res.title}</div>
                      <div className="text-xs text-[#5E5C56] line-clamp-1 mt-0.5">{res.snippet}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
