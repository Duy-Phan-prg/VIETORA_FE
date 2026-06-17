import { useState, useMemo } from 'react';
import type { Material, KBSection } from '../types/notes.types';
import MaterialCard from '../components/MaterialCard';
import UploadModal from '../components/UploadModal';
import AttachModal from '../components/AttachModal';

const INITIAL: Material[] = [
  {
    id: '1', name: 'Cambridge IELTS 18 — Full Tests', type: 'pdf',
    skill: 'Reading', starred: true, isPublic: false, source: 'mine',
    createdAt: '15/06/2026', fileSize: '4.2 MB',
  },
  {
    id: '2', name: 'Academic Vocabulary — Bộ 200 từ', type: 'flashcard',
    skill: 'Writing', starred: false, isPublic: true, source: 'mine',
    createdAt: '14/06/2026',
    cards: [{ front: 'ubiquitous', back: 'có mặt khắp nơi' }, { front: 'mitigate', back: 'giảm nhẹ' }],
  },
  {
    id: '3', name: 'TFNG — Chiến thuật làm bài', type: 'note',
    skill: 'Reading', starred: true, isPublic: false, source: 'mine',
    createdAt: '13/06/2026',
  },
  {
    id: '4', name: 'Listening Section 3 Tips', type: 'pdf',
    skill: 'Listening', starred: false, isPublic: true, source: 'buddy',
    createdAt: '12/06/2026', author: 'Minh Tú', fileSize: '1.8 MB',
  },
  {
    id: '5', name: 'Phrasal Verbs cho Writing Task 2', type: 'flashcard',
    skill: 'Writing', starred: false, isPublic: true, source: 'buddy',
    createdAt: '11/06/2026', author: 'Anh Khoa',
    cards: [{ front: 'bring about', back: 'gây ra' }],
  },
  {
    id: '6', name: 'Speaking Part 2 — Cue Card Templates', type: 'note',
    skill: 'Speaking', starred: false, isPublic: false, source: 'class',
    createdAt: '10/06/2026', classId: 'cls1',
  },
];

type SortKey = 'newest' | 'name' | 'type';

const FILTERS: { label: string; value: KBSection; icon?: string }[] = [
  { label: 'Tất cả',    value: 'all',       icon: 'folder' },
  { label: '⭐ Sao',    value: 'starred' },
  { label: 'Gần đây',   value: 'recent',    icon: 'schedule' },
  { label: 'Listening', value: 'listening' },
  { label: 'Reading',   value: 'reading' },
  { label: 'Writing',   value: 'writing' },
  { label: 'Speaking',  value: 'speaking' },
  { label: 'PDF',       value: 'pdf' },
  { label: 'Flashcard', value: 'flashcard' },
  { label: 'Notes',     value: 'note' },
  { label: 'Buddy',     value: 'buddy' },
  { label: 'Lớp học',   value: 'class' },
];

export default function NotesPage() {
  const [materials, setMaterials]   = useState<Material[]>(INITIAL);
  const [section, setSection]       = useState<KBSection>('all');
  const [search, setSearch]         = useState('');
  const [sort, setSort]             = useState<SortKey>('newest');
  const [viewGrid, setViewGrid]     = useState(true);
  const [showUpload, setShowUpload] = useState(false);
  const [attachId, setAttachId]     = useState<string | null>(null);

  const filtered = useMemo(() => {
    let list = [...materials];
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(m => m.name.toLowerCase().includes(q));
    }
    switch (section) {
      case 'starred':   list = list.filter(m => m.starred); break;
      case 'recent':    list = list.slice().reverse().slice(0, 6); break;
      case 'listening': list = list.filter(m => m.skill === 'Listening'); break;
      case 'reading':   list = list.filter(m => m.skill === 'Reading'); break;
      case 'writing':   list = list.filter(m => m.skill === 'Writing'); break;
      case 'speaking':  list = list.filter(m => m.skill === 'Speaking'); break;
      case 'pdf':       list = list.filter(m => m.type === 'pdf'); break;
      case 'flashcard': list = list.filter(m => m.type === 'flashcard'); break;
      case 'note':      list = list.filter(m => m.type === 'note'); break;
      case 'buddy':     list = list.filter(m => m.source === 'buddy'); break;
      case 'class':     list = list.filter(m => m.source === 'class'); break;
    }
    if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === 'type') list.sort((a, b) => a.type.localeCompare(b.type));
    return list;
  }, [materials, section, search, sort]);

  function handleStar(id: string) {
    setMaterials(ms => ms.map(m => m.id === id ? { ...m, starred: !m.starred } : m));
  }
  function handleTogglePublic(id: string) {
    setMaterials(ms => ms.map(m => m.id === id ? { ...m, isPublic: !m.isPublic } : m));
  }
  function handleDelete(id: string) {
    setMaterials(ms => ms.filter(m => m.id !== id));
  }
  function handleSave(data: Omit<Material, 'id' | 'starred' | 'source' | 'createdAt'>) {
    const now = new Date();
    const d = `${now.getDate().toString().padStart(2,'0')}/${(now.getMonth()+1).toString().padStart(2,'0')}/${now.getFullYear()}`;
    setMaterials(ms => [{ ...data, id: String(Date.now()), starred: false, source: 'mine', createdAt: d }, ...ms]);
  }

  const attachMaterial = attachId ? materials.find(m => m.id === attachId) : null;

  return (
    <div className="flex flex-col gap-5">

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div>
          <h1 className="text-[22px] font-bold text-[#1e3a5f]">Knowledge Base</h1>
          <p className="text-[12px] text-secondary">{filtered.length} tài liệu</p>
        </div>
        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary" style={{ fontSize: '15px' }}>search</span>
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Tìm tài liệu..."
              className="pl-8 pr-3 py-1.5 rounded-lg border border-outline-variant text-[12.5px] bg-white focus:outline-none focus:border-[#1e3a5f] w-44"
            />
          </div>

          {/* Sort */}
          <select
            value={sort}
            onChange={e => setSort(e.target.value as SortKey)}
            className="text-[12.5px] px-2 py-1.5 rounded-lg border border-outline-variant bg-white text-secondary focus:outline-none focus:border-[#1e3a5f]"
          >
            <option value="newest">Mới nhất</option>
            <option value="name">Tên A–Z</option>
            <option value="type">Loại</option>
          </select>

          {/* View toggle */}
          <div className="flex border border-outline-variant rounded-lg overflow-hidden">
            <button onClick={() => setViewGrid(true)}
              className={`px-2 py-1.5 transition-colors ${viewGrid ? 'bg-[#1e3a5f] text-white' : 'text-secondary hover:bg-surface-container'}`}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>grid_view</span>
            </button>
            <button onClick={() => setViewGrid(false)}
              className={`px-2 py-1.5 transition-colors ${!viewGrid ? 'bg-[#1e3a5f] text-white' : 'text-secondary hover:bg-surface-container'}`}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>view_list</span>
            </button>
          </div>

          {/* Create */}
          <button onClick={() => setShowUpload(true)}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#1e3a5f] text-white rounded-xl text-[13px] font-semibold hover:bg-[#162d4a] transition-colors">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>add</span>
            Tạo mới
          </button>
        </div>
      </div>

      {/* Filter chips */}
      <div className="flex items-center gap-2 flex-wrap">
        {FILTERS.map(f => (
          <button
            key={f.value}
            onClick={() => setSection(f.value)}
            className={`px-3 py-1.5 rounded-full text-[12px] font-medium border transition-colors whitespace-nowrap ${
              section === f.value
                ? 'bg-[#1e3a5f] text-white border-[#1e3a5f]'
                : 'bg-white text-secondary border-outline-variant hover:border-[#1e3a5f]/40 hover:text-on-surface'
            }`}
          >
            {f.label}
            {f.value === 'starred' && materials.filter(m => m.starred).length > 0 && (
              <span className={`ml-1.5 text-[10px] font-bold px-1.5 py-0.5 rounded-full ${section === 'starred' ? 'bg-white/20' : 'bg-[#f6b93b]/25 text-[#1e3a5f]'}`}>
                {materials.filter(m => m.starred).length}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-3 text-center py-20">
          <span className="material-symbols-outlined text-secondary" style={{ fontSize: '48px' }}>folder_open</span>
          <p className="text-[14px] font-semibold text-on-surface">Chưa có tài liệu nào</p>
          <p className="text-[12.5px] text-secondary">Nhấn <strong>Tạo mới</strong> để thêm tài liệu đầu tiên</p>
        </div>
      ) : viewGrid ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map(m => (
            <MaterialCard key={m.id} material={m}
              onStar={handleStar} onTogglePublic={handleTogglePublic}
              onAttach={setAttachId} onDelete={handleDelete} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-2">
          {filtered.map(m => (
            <ListRow key={m.id} material={m}
              onStar={handleStar} onTogglePublic={handleTogglePublic}
              onAttach={setAttachId} onDelete={handleDelete} />
          ))}
        </div>
      )}

      {showUpload && <UploadModal onClose={() => setShowUpload(false)} onSave={handleSave} />}
      {attachId && attachMaterial && (
        <AttachModal materialName={attachMaterial.name}
          onClose={() => setAttachId(null)} onConfirm={() => setAttachId(null)} />
      )}
    </div>
  );
}

// ── List row ────────────────────────────────────────────────────────────────
const TYPE_META: Record<string, { icon: string; color: string }> = {
  pdf:       { icon: 'picture_as_pdf', color: '#1e3a5f' },
  flashcard: { icon: 'style',          color: '#7c3aed' },
  note:      { icon: 'sticky_note_2',  color: '#1e3a5f' },
  quiz:      { icon: 'quiz',           color: '#f6b93b' },
};
const SKILL_COLOR: Record<string, string> = {
  Listening: '#1e3a5f', Reading: '#1e3a5f', Writing: '#7c3aed', Speaking: '#f6b93b',
};

function ListRow({ material, onStar, onTogglePublic, onAttach, onDelete }: {
  material: Material;
  onStar: (id: string) => void;
  onTogglePublic: (id: string) => void;
  onAttach: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const meta = TYPE_META[material.type];

  return (
    <div className="flex items-center gap-3 bg-white rounded-xl border border-outline-variant px-4 py-3 hover:shadow-sm transition-shadow">
      <span className="material-symbols-outlined shrink-0" style={{ fontSize: '20px', color: meta.color }}>{meta.icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-[13px] font-semibold text-on-surface truncate">{material.name}</p>
        <div className="flex items-center gap-1.5 mt-0.5">
          {material.skill && (
            <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full text-white" style={{ background: SKILL_COLOR[material.skill] }}>{material.skill}</span>
          )}
          <span className="text-[11px] text-secondary">{material.createdAt}</span>
          {material.source === 'buddy' && <span className="text-[11px] text-secondary">· {material.author}</span>}
        </div>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {material.source === 'mine' && (
          <button onClick={() => onTogglePublic(material.id)}
            className={`text-[10px] font-medium px-2 py-0.5 rounded-full border transition-colors ${material.isPublic ? 'border-[#1e3a5f] text-[#1e3a5f] bg-[#e8eef5]' : 'border-outline-variant text-secondary'}`}>
            {material.isPublic ? 'Public' : 'Private'}
          </button>
        )}
        <button onClick={() => onStar(material.id)} className="text-secondary hover:text-[#f6b93b] transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '18px', color: material.starred ? '#f6b93b' : undefined, fontVariationSettings: material.starred ? "'FILL' 1" : "'FILL' 0" }}>star</span>
        </button>
        <div className="relative">
          <button onClick={() => setMenuOpen(o => !o)} className="text-secondary hover:text-on-surface">
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>more_vert</span>
          </button>
          {menuOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setMenuOpen(false)} />
              <div className="absolute right-0 top-7 z-50 bg-white border border-outline-variant rounded-xl shadow-lg p-1 w-44">
                {material.source === 'mine' && (
                  <button onClick={() => { onAttach(material.id); setMenuOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12.5px] text-on-surface hover:bg-surface-container">
                    <span className="material-symbols-outlined text-[#1e3a5f]" style={{ fontSize: '15px' }}>attach_file</span>
                    Đính kèm vào lớp
                  </button>
                )}
                {material.source === 'buddy' && (
                  <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12.5px] text-on-surface hover:bg-surface-container">
                    <span className="material-symbols-outlined text-[#1e3a5f]" style={{ fontSize: '15px' }}>save</span>
                    Lưu về thư viện
                  </button>
                )}
                <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12.5px] text-on-surface hover:bg-surface-container">
                  <span className="material-symbols-outlined text-[#1e3a5f]" style={{ fontSize: '15px' }}>share</span>
                  Chia sẻ
                </button>
                {material.source === 'mine' && (
                  <button onClick={() => { onDelete(material.id); setMenuOpen(false); }}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-[12.5px] text-error hover:bg-error/5">
                    <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>delete</span>
                    Xóa
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
