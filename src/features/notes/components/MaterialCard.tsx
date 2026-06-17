import { useState } from 'react';
import type { Material } from '../types/notes.types';

const TYPE_META: Record<string, { icon: string; color: string; bg: string }> = {
  pdf:       { icon: 'picture_as_pdf', color: '#1e3a5f', bg: '#e8eef5' },
  flashcard: { icon: 'style',          color: '#7c3aed', bg: '#ede9fe' },
  note:      { icon: 'sticky_note_2',  color: '#1e3a5f', bg: '#e8eef5' },
  quiz:      { icon: 'quiz',           color: '#f6b93b', bg: '#fef9ec' },
};

const SKILL_COLOR: Record<string, string> = {
  Listening: '#1e3a5f',
  Reading:   '#1e3a5f',
  Writing:   '#7c3aed',
  Speaking:  '#f6b93b',
};

interface Props {
  material: Material;
  onStar: (id: string) => void;
  onTogglePublic: (id: string) => void;
  onAttach: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function MaterialCard({ material, onStar, onTogglePublic, onAttach, onDelete }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const meta = TYPE_META[material.type];

  return (
    <div className="relative bg-white rounded-xl border border-outline-variant p-4 flex flex-col gap-3 hover:shadow-md transition-shadow">
      {/* Top row: icon + star */}
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: meta.bg }}>
          <span className="material-symbols-outlined" style={{ fontSize: '20px', color: meta.color }}>{meta.icon}</span>
        </div>
        <button onClick={() => onStar(material.id)} className="transition-colors">
          <span
            className="material-symbols-outlined"
            style={{
              fontSize: '20px',
              color: material.starred ? '#f6b93b' : '#94a3b8',
              fontVariationSettings: material.starred
                ? "'FILL' 1, 'wght' 600, 'GRAD' 0, 'opsz' 24"
                : "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
            }}
          >
            star
          </span>
        </button>
      </div>

      {/* Name */}
      <p className="text-[13px] font-semibold text-on-surface leading-snug line-clamp-2">{material.name}</p>

      {/* Tags */}
      <div className="flex items-center gap-1.5 flex-wrap">
        {material.skill && (
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full text-white" style={{ background: SKILL_COLOR[material.skill] }}>
            {material.skill}
          </span>
        )}
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full" style={{ background: meta.bg, color: meta.color }}>
          {material.type.toUpperCase()}
        </span>
        {material.source === 'buddy' && (
          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-surface-container text-secondary">
            {material.author}
          </span>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-1 border-t border-outline-variant/40">
        <span className="text-[11px] text-secondary">{material.createdAt}</span>

        <div className="flex items-center gap-1">
          {/* Public/Private toggle */}
          {material.source === 'mine' && (
            <button
              onClick={() => onTogglePublic(material.id)}
              title={material.isPublic ? 'Public' : 'Private'}
              className="flex items-center gap-1 text-[10px] font-medium px-2 py-0.5 rounded-full border transition-colors"
              style={material.isPublic
                ? { borderColor: '#1e3a5f', color: '#1e3a5f', background: '#e8eef5' }
                : { borderColor: '#cbd5e1', color: '#6b7280', background: '#f8fafc' }
              }
            >
              <span className="material-symbols-outlined" style={{ fontSize: '12px' }}>
                {material.isPublic ? 'public' : 'lock'}
              </span>
              {material.isPublic ? 'Public' : 'Private'}
            </button>
          )}

          {/* Menu */}
          <div className="relative">
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="w-7 h-7 flex items-center justify-center rounded-lg text-secondary hover:bg-surface-container transition-colors"
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>more_vert</span>
            </button>
            {menuOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
                <div className="absolute right-0 bottom-8 z-50 bg-white border border-outline-variant rounded-xl shadow-lg p-1 w-44">
                  {material.source === 'mine' && (
                    <button
                      onClick={() => { onAttach(material.id); setMenuOpen(false); }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12.5px] text-on-surface hover:bg-surface-container"
                    >
                      <span className="material-symbols-outlined text-[#1e3a5f]" style={{ fontSize: '16px' }}>attach_file</span>
                      Đính kèm vào lớp
                    </button>
                  )}
                  {material.source === 'buddy' && (
                    <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12.5px] text-on-surface hover:bg-surface-container">
                      <span className="material-symbols-outlined text-[#1e3a5f]" style={{ fontSize: '16px' }}>save</span>
                      Lưu về thư viện
                    </button>
                  )}
                  <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12.5px] text-on-surface hover:bg-surface-container">
                    <span className="material-symbols-outlined text-[#1e3a5f]" style={{ fontSize: '16px' }}>share</span>
                    Chia sẻ
                  </button>
                  {material.source === 'mine' && (
                    <button
                      onClick={() => { onDelete(material.id); setMenuOpen(false); }}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12.5px] text-error hover:bg-error/5"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>delete</span>
                      Xóa
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
