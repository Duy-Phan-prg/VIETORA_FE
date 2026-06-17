import type { KBSection } from '../types/notes.types';

interface Props {
  active: KBSection;
  onChange: (s: KBSection) => void;
  starredCount: number;
  search: string;
  onSearch: (v: string) => void;
}

const MOCK_CLASSES = [
  { id: 'cls1', name: 'IELTS Band 7+' },
  { id: 'cls2', name: 'Writing Workshop' },
];

export default function KBNav({ active, onChange, starredCount, search, onSearch }: Props) {
  function item(label: string, icon: string, section: KBSection, badge?: number) {
    const isActive = active === section;
    return (
      <button
        key={section}
        onClick={() => onChange(section)}
        className={`w-full flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[12.5px] transition-colors text-left ${
          isActive ? 'bg-[#1e3a5f] text-white' : 'text-on-surface hover:bg-surface-container'
        }`}
      >
        <span className="material-symbols-outlined shrink-0" style={{ fontSize: '16px' }}>{icon}</span>
        <span className="flex-1 truncate">{label}</span>
        {badge != null && badge > 0 && (
          <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-[#f6b93b]/25 text-[#1e3a5f]'}`}>
            {badge}
          </span>
        )}
      </button>
    );
  }

  return (
    <aside className="w-[196px] shrink-0 flex flex-col gap-1 pr-3">
      {/* Search */}
      <div className="relative mb-2">
        <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-secondary" style={{ fontSize: '15px' }}>search</span>
        <input
          value={search}
          onChange={e => onSearch(e.target.value)}
          placeholder="Tìm tài liệu..."
          className="w-full pl-8 pr-3 py-1.5 rounded-lg border border-outline-variant text-[12.5px] bg-white focus:outline-none focus:border-[#1e3a5f]"
        />
      </div>

      <p className="px-3 pt-1 pb-0.5 text-[10px] font-semibold text-secondary uppercase tracking-wider">Cá nhân</p>
      {item('Tất cả tài liệu', 'folder', 'all')}
      {item('Đã đánh dấu sao', 'star', 'starred', starredCount)}
      {item('Gần đây', 'schedule', 'recent')}

      <p className="px-3 pt-3 pb-0.5 text-[10px] font-semibold text-secondary uppercase tracking-wider">Theo kỹ năng</p>
      {item('Listening', 'headphones', 'listening')}
      {item('Reading', 'menu_book', 'reading')}
      {item('Writing', 'edit_note', 'writing')}
      {item('Speaking', 'mic', 'speaking')}

      <p className="px-3 pt-3 pb-0.5 text-[10px] font-semibold text-secondary uppercase tracking-wider">Theo loại</p>
      {item('PDF', 'picture_as_pdf', 'pdf')}
      {item('Flashcard', 'style', 'flashcard')}
      {item('Notes', 'sticky_note_2', 'note')}
      {item('Quiz', 'quiz', 'quiz')}

      <p className="px-3 pt-3 pb-0.5 text-[10px] font-semibold text-secondary uppercase tracking-wider">Chia sẻ</p>
      {item('Từ Study Buddy', 'group', 'buddy')}
      {item('Tài liệu lớp học', 'school', 'class')}

      {active === 'class' && (
        <div className="ml-3 mt-1 flex flex-col gap-0.5">
          {MOCK_CLASSES.map(c => (
            <button key={c.id} className="text-left text-[11.5px] text-secondary px-2 py-1 rounded hover:bg-surface-container truncate">
              · {c.name}
            </button>
          ))}
        </div>
      )}
    </aside>
  );
}
