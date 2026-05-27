import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

const SCORES = [
  { skill: 'Nghe', pts: 1240, max: 2000 },
  { skill: 'Đọc', pts: 890, max: 2000 },
  { skill: 'Viết', pts: 650, max: 2000 },
  { skill: 'Nói', pts: 720, max: 2000 },
];

const NAV_ITEMS = [
  { icon: 'psychology', label: 'Gợi ý AI',  path: '/goiyai' },
  { icon: 'push_pin',   label: 'Ghi chú',   path: '/ghichu' },
  { icon: 'bar_chart',  label: 'Tiến độ',   path: '/tiendo' },
  { icon: 'menu_book',  label: 'Lộ trình',  path: '/lotrinh' },
  { icon: 'group',      label: 'Bạn bè',    path: '/banbe' },
];

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [practiceY, setPracticeY] = useState(0);
  const [activeLabel, setActiveLabel] = useState('Lộ trình');

  useEffect(() => {
    if (pathname === '/goiyai')   setActiveLabel('Gợi ý AI');
    else if (pathname === '/ghichu')  setActiveLabel('Ghi chú');
    else if (pathname === '/tiendo')  setActiveLabel('Tiến độ');
    else if (pathname === '/lotrinh') setActiveLabel('Lộ trình');
    else if (pathname === '/banbe')   setActiveLabel('Bạn bè');
    else if (pathname.startsWith('/luyende')) setActiveLabel('Luyện đề');
  }, [pathname]);

  function navCls(label: string) {
    const active = activeLabel === label;
    return `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
      active ? 'bg-surface-container text-primary font-medium' : 'text-on-surface hover:bg-surface-container-low'
    }`;
  }

  return (
    <div className="bg-white text-on-surface font-body-md overflow-x-hidden">

      {/* Sidebar */}
      <aside className={`h-screen fixed left-0 top-0 bg-white border-r border-outline-variant/50 flex flex-col py-3 z-50 transition-all duration-200 overflow-hidden ${sidebarOpen ? 'w-56' : 'w-0'}`}>

        <div className="flex items-center justify-between px-4 mb-4">
          <span className="text-[15px] font-bold text-primary tracking-tight">Vietora</span>
          <button onClick={() => setSidebarOpen(false)}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>left_panel_close</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 space-y-0.5 text-[13.5px] [&_a]:no-underline">

          {/* Gợi ý AI */}
          <a href="#"
            onClick={(e) => { e.preventDefault(); setActiveLabel('Gợi ý AI'); navigate('/goiyai'); }}
            className={navCls('Gợi ý AI')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>psychology</span>
            Gợi ý AI
          </a>

          {/* Luyện đề with popover */}
          <div className="relative">
            <a href="#"
              onClick={(e) => {
                e.preventDefault();
                setPracticeY((e.currentTarget as HTMLElement).getBoundingClientRect().top);
                setPracticeOpen(o => !o);
              }}
              className={navCls('Luyện đề')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit_note</span>
              <span className="flex-1">Luyện đề</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>chevron_right</span>
            </a>
            {practiceOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setPracticeOpen(false)} />
                <div className="fixed z-50 bg-white border border-outline-variant rounded-xl shadow-md py-1.5 w-44"
                  style={{ left: '232px', top: practiceY }}>
                  <a href="#"
                    onClick={(e) => { e.preventDefault(); setActiveLabel('Luyện đề'); navigate('/luyende'); setPracticeOpen(false); }}
                    className="flex items-center gap-3 px-3 py-2 text-[13.5px] text-on-surface hover:bg-surface-container-low transition-colors"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>menu_book</span>
                    Đề Cambridge
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Other nav items */}
          {NAV_ITEMS.filter(n => !['Gợi ý AI'].includes(n.label)).map(({ icon, label, path }) => (
            <a key={label} href="#"
              onClick={(e) => { e.preventDefault(); setActiveLabel(label); navigate(path); }}
              className={navCls(label)}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>
              {label}
            </a>
          ))}

          {/* Đang học */}
          <div className="pt-4">
            <p className="px-3 pb-1 text-[11px] font-semibold text-secondary uppercase tracking-wider">Đang học</p>
            {[
              { icon: 'headphones', label: 'Listening Mock #5' },
              { icon: 'menu_book',  label: 'Reading TFNG' },
              { icon: 'edit_note',  label: 'Writing Task 2' },
            ].map(({ icon, label }) => (
              <a key={label} href="#"
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: '15px' }}>{icon}</span>
                <span className="truncate text-[13px]">{label}</span>
              </a>
            ))}
          </div>

          {/* Điểm luyện đề */}
          <div className="pt-3 pb-1">
            <p className="px-3 pb-2 text-[11px] font-semibold text-secondary uppercase tracking-wider">Điểm luyện đề</p>
            <div className="px-3 grid grid-cols-2 gap-1.5">
              {SCORES.map(({ skill, pts, max }) => (
                <div key={skill} className="bg-surface-container rounded-lg px-2 py-1.5">
                  <p className="text-[10px] text-secondary mb-0.5">{skill}</p>
                  <p className="text-[14px] font-bold text-primary leading-tight">{pts.toLocaleString()}</p>
                  <div className="mt-1 h-1 bg-surface-container-high rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{ width: `${(pts / max) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* User profile */}
        <div className="px-2 pt-2 border-t border-outline-variant">
          <button onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-container-low transition-colors"
          >
            <img alt="Student Profile" className="w-8 h-8 rounded-full object-cover shrink-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl9mBNl0xDPBlKxrA1lliWj7FAJlUN6yO9YrVH1v4SZYk8l_lJOLSL0WoTc2QuiEqk5p4WnsCR4jyNifs9wwvbuhBWd9DbYpa9gYZ3FzV4gZ1zRGbTJJggpaYL7a-TLcwhpKlhtVlmTRffhgIVYQf95mP36MS44hWj7qYHdqWLFRpTXc-ynDz4gWWFyzMLOAkqQ43ABbMwin0RlZBQXUSdy3pmsbEQWgQiY7QRLW6dilAGk8lxyRRtZY5uCXeGqXSZWuHXDGwCBfTZ"
            />
            <div className="text-left flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-primary truncate leading-tight">Quốc Anh</p>
              <p className="text-[11px] text-secondary truncate leading-tight">Band 7.5</p>
            </div>
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>more_horiz</span>
          </button>
        </div>
      </aside>

      {/* Open sidebar button */}
      {!sidebarOpen && (
        <button onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-3 z-[60] w-7 h-7 flex items-center justify-center rounded-lg border border-outline-variant bg-white hover:bg-surface-container transition-colors text-secondary hover:text-primary"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>left_panel_open</span>
        </button>
      )}

      {/* Content area */}
      <div className={`min-h-screen transition-all duration-200 ${sidebarOpen ? 'ml-56' : 'ml-0'}`}>
        <main className="p-container-padding-desktop max-w-[1440px] mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Floating Cat */}
      <div className="cat-float-wrapper">
        <span className="cat-tooltip">Hỏi Mori</span>
        <div className="cat-container">
          <div className="cat-ear cat-ear-left" />
          <div className="cat-ear cat-ear-right" />
          <div className="cat-head">
            <div className="cat-eye cat-eye-left"><div className="cat-pupil" /></div>
            <div className="cat-eye cat-eye-right"><div className="cat-pupil" /></div>
            <div className="cat-whisker cat-whisker-left cat-w1" />
            <div className="cat-whisker cat-whisker-left cat-w2" />
            <div className="cat-whisker cat-whisker-left cat-w3" />
            <div className="cat-whisker cat-whisker-right cat-w1" />
            <div className="cat-whisker cat-whisker-right cat-w2" />
            <div className="cat-whisker cat-whisker-right cat-w3" />
          </div>
        </div>
      </div>
    </div>
  );
}
