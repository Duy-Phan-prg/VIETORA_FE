import { useState } from 'react';

const MOCK_CLASSES = [
  { id: 'cls1', name: 'IELTS Band 7+', members: 12 },
  { id: 'cls2', name: 'Writing Workshop', members: 8 },
];

interface Props {
  materialName: string;
  onClose: () => void;
  onConfirm: (classIds: string[]) => void;
}

export default function AttachModal({ materialName, onClose, onConfirm }: Props) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(id: string) {
    setSelected(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm mx-4">
        <div className="flex items-center justify-between px-5 py-4 border-b border-outline-variant">
          <h2 className="text-[14px] font-bold text-[#1e3a5f]">Đính kèm vào lớp</h2>
          <button onClick={onClose} className="text-secondary hover:text-on-surface">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
          </button>
        </div>
        <div className="px-5 py-4 flex flex-col gap-3">
          <p className="text-[12.5px] text-secondary">
            Tài liệu: <span className="font-semibold text-on-surface">{materialName}</span>
          </p>
          {MOCK_CLASSES.map(cls => {
            const checked = selected.includes(cls.id);
            return (
              <button
                key={cls.id}
                onClick={() => toggle(cls.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-left transition-colors ${checked ? 'border-[#1e3a5f] bg-[#1e3a5f]/5' : 'border-outline-variant hover:border-[#1e3a5f]/30'}`}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#1e3a5f' }}>school</span>
                <div className="flex-1">
                  <p className="text-[13px] font-semibold text-on-surface">{cls.name}</p>
                  <p className="text-[11px] text-secondary">{cls.members} thành viên</p>
                </div>
                {checked && <span className="material-symbols-outlined text-[#1e3a5f]" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>}
              </button>
            );
          })}
          <div className="flex gap-2 pt-1">
            <button onClick={onClose} className="flex-1 py-2 rounded-lg border border-outline-variant text-[13px] text-secondary hover:bg-surface-container">
              Hủy
            </button>
            <button
              onClick={() => { onConfirm(selected); onClose(); }}
              disabled={selected.length === 0}
              className="flex-1 py-2 rounded-lg bg-[#1e3a5f] text-white text-[13px] font-semibold hover:bg-[#162d4a] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Đính kèm ({selected.length})
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
