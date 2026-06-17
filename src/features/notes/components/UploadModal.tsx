import { useState } from 'react';
import type { Material, MaterialType, SkillTag, Flashcard } from '../types/notes.types';

interface Props {
  onClose: () => void;
  onSave: (m: Omit<Material, 'id' | 'starred' | 'source' | 'createdAt'>) => void;
}

type Step = 'choose' | 'pdf' | 'flashcard' | 'note';

const SKILLS: SkillTag[] = ['Listening', 'Reading', 'Writing', 'Speaking'];

export default function UploadModal({ onClose, onSave }: Props) {
  const [step, setStep] = useState<Step>('choose');

  // PDF / Note state
  const [name, setName]       = useState('');
  const [skill, setSkill]     = useState<SkillTag | ''>('');
  const [isPublic, setPublic] = useState(false);
  const [content, setContent] = useState('');
  const [fileName, setFileName] = useState('');

  // Flashcard state
  const [cards, setCards] = useState<Flashcard[]>([{ front: '', back: '' }]);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const f = e.target.files?.[0];
    if (f) { setFileName(f.name); if (!name) setName(f.name.replace(/\.[^.]+$/, '')); }
  }

  function addCard() { setCards(c => [...c, { front: '', back: '' }]); }
  function updateCard(i: number, field: 'front' | 'back', val: string) {
    setCards(c => c.map((card, idx) => idx === i ? { ...card, [field]: val } : card));
  }
  function removeCard(i: number) { setCards(c => c.filter((_, idx) => idx !== i)); }

  function save(type: MaterialType) {
    if (!name.trim()) return;
    onSave({
      name: name.trim(),
      type,
      skill: skill || null,
      isPublic,
      ...(type === 'flashcard' ? { cards: cards.filter(c => c.front || c.back) } : {}),
      ...(type === 'pdf' ? { fileSize: '—' } : {}),
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant">
          <h2 className="text-[15px] font-bold text-[#1e3a5f]">
            {step === 'choose'    && 'Tạo tài liệu mới'}
            {step === 'pdf'       && 'Upload PDF'}
            {step === 'flashcard' && 'Tạo Flashcard'}
            {step === 'note'      && 'Tạo Note'}
          </h2>
          <button onClick={onClose} className="text-secondary hover:text-on-surface">
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>close</span>
          </button>
        </div>

        <div className="px-6 py-5">

          {/* Step 1: Choose type */}
          {step === 'choose' && (
            <div className="grid grid-cols-2 gap-3">
              {([
                { type: 'pdf',       icon: 'picture_as_pdf', label: 'Upload PDF',   color: '#1e3a5f', bg: '#e8eef5', s: 'pdf'       },
                { type: 'flashcard', icon: 'style',          label: 'Flashcard',     color: '#7c3aed', bg: '#ede9fe', s: 'flashcard' },
                { type: 'note',      icon: 'sticky_note_2',  label: 'Tạo Note',      color: '#1e3a5f', bg: '#e8eef5', s: 'note'      },
                { type: 'quiz',      icon: 'quiz',           label: 'Quiz (sắp ra)', color: '#f6b93b', bg: '#fef9ec', s: null        },
              ] as const).map(({ icon, label, color, bg, s }) => (
                <button
                  key={label}
                  onClick={() => s && setStep(s as Step)}
                  disabled={!s}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-transparent hover:border-[#1e3a5f]/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                  style={{ background: bg }}
                >
                  <span className="material-symbols-outlined" style={{ fontSize: '28px', color }}>{icon}</span>
                  <span className="text-[13px] font-semibold" style={{ color }}>{label}</span>
                </button>
              ))}
            </div>
          )}

          {/* Step 2a: PDF */}
          {step === 'pdf' && (
            <div className="flex flex-col gap-4">
              <label className="flex flex-col items-center gap-2 border-2 border-dashed border-outline-variant rounded-xl p-6 cursor-pointer hover:border-[#1e3a5f] transition-colors">
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: '36px' }}>upload_file</span>
                <span className="text-[13px] text-secondary">{fileName || 'Kéo thả hoặc click để chọn file PDF'}</span>
                <input type="file" accept=".pdf,.docx" className="hidden" onChange={handleFile} />
              </label>
              {renderCommonFields()}
              {renderFooter(() => save('pdf'))}
            </div>
          )}

          {/* Step 2b: Flashcard */}
          {step === 'flashcard' && (
            <div className="flex flex-col gap-4">
              <input
                value={name} onChange={e => setName(e.target.value)}
                placeholder="Tên bộ flashcard *"
                className="w-full px-3 py-2 rounded-lg border border-outline-variant text-[13px] focus:outline-none focus:border-[#1e3a5f]"
              />
              <div className="flex gap-2">
                {SKILLS.map(s => (
                  <button key={s} onClick={() => setSkill(prev => prev === s ? '' : s)}
                    className={`flex-1 text-[11px] font-semibold py-1 rounded-full border transition-colors ${skill === s ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]' : 'border-outline-variant text-secondary'}`}>
                    {s}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-2 max-h-52 overflow-y-auto">
                {cards.map((card, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <div className="flex-1 flex flex-col gap-1">
                      <input value={card.front} onChange={e => updateCard(i, 'front', e.target.value)}
                        placeholder={`Mặt trước ${i + 1}`}
                        className="w-full px-3 py-1.5 rounded-lg border border-outline-variant text-[12.5px] focus:outline-none focus:border-[#1e3a5f]" />
                      <input value={card.back} onChange={e => updateCard(i, 'back', e.target.value)}
                        placeholder={`Mặt sau ${i + 1}`}
                        className="w-full px-3 py-1.5 rounded-lg border border-outline-variant text-[12.5px] focus:outline-none focus:border-[#1e3a5f]" />
                    </div>
                    {cards.length > 1 && (
                      <button onClick={() => removeCard(i)} className="mt-1 text-secondary hover:text-error">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>remove_circle</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button onClick={addCard} className="flex items-center gap-1 text-[12.5px] text-[#1e3a5f] font-medium hover:underline">
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add_circle</span>
                Thêm card
              </button>
              {renderFooter(() => save('flashcard'))}
            </div>
          )}

          {/* Step 2c: Note */}
          {step === 'note' && (
            <div className="flex flex-col gap-4">
              {renderCommonFields()}
              <textarea
                value={content} onChange={e => setContent(e.target.value)}
                placeholder="Nội dung note..."
                rows={5}
                className="w-full px-3 py-2 rounded-lg border border-outline-variant text-[13px] focus:outline-none focus:border-[#1e3a5f] resize-none"
              />
              {renderFooter(() => save('note'))}
            </div>
          )}

        </div>
      </div>
    </div>
  );

  function renderCommonFields() {
    return (
      <div className="flex flex-col gap-3">
        <input
          value={name} onChange={e => setName(e.target.value)}
          placeholder="Tên tài liệu *"
          className="w-full px-3 py-2 rounded-lg border border-outline-variant text-[13px] focus:outline-none focus:border-[#1e3a5f]"
        />
        <div className="flex gap-2">
          {SKILLS.map(s => (
            <button key={s} onClick={() => setSkill(prev => prev === s ? '' : s)}
              className={`flex-1 text-[11px] font-semibold py-1 rounded-full border transition-colors ${skill === s ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]' : 'border-outline-variant text-secondary'}`}>
              {s}
            </button>
          ))}
        </div>
        <button onClick={() => setPublic(p => !p)}
          className={`flex items-center gap-2 text-[12.5px] font-medium px-3 py-2 rounded-lg border transition-colors ${isPublic ? 'border-[#16a34a] text-[#16a34a] bg-[#f0fdf4]' : 'border-outline-variant text-secondary'}`}>
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>{isPublic ? 'public' : 'lock'}</span>
          {isPublic ? 'Public — mọi người có thể xem' : 'Private — chỉ mình tôi'}
        </button>
      </div>
    );
  }

  function renderFooter(onConfirm: () => void) {
    return (
      <div className="flex gap-2 pt-2">
        <button onClick={() => setStep('choose')}
          className="flex-1 py-2 rounded-lg border border-outline-variant text-[13px] text-secondary hover:bg-surface-container transition-colors">
          Quay lại
        </button>
        <button onClick={onConfirm}
          className="flex-1 py-2 rounded-lg bg-[#1e3a5f] text-white text-[13px] font-semibold hover:bg-[#162d4a] transition-colors">
          Lưu
        </button>
      </div>
    );
  }
}
