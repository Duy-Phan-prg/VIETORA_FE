import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { MORE_ITEMS, STUDYING } from '../constants/dashboard';
import ChatWidget from '../features/chatbot/components/ChatWidget';
import logo from '../assets/logo/vietora-logo.png';
import chatbotImg from '../assets/logo/chatbot.png';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [practiceY, setPracticeY] = useState(0);
  const [skillOpen, setSkillOpen] = useState(false);
  const [skillY, setSkillY] = useState(0);
  const [activeLabel, setActiveLabel] = useState('Lộ trình');
  const [chatOpen, setChatOpen] = useState(false);
  const [zaloReminder, setZaloReminder] = useState(true);
  const [sidebarMode, setSidebarMode] = useState<'home' | 'cowork'>('cowork');

  useEffect(() => {
    const map: Record<string, string> = {
      '/ai-tips':   'Gợi ý AI',
      '/skill-map': 'Skill map',
      '/mock-test': 'Thi thử',
      '/progress':  'Tiến độ',
      '/roadmap':   'Lộ trình',
      '/notes':     'Kho kiến thức',
      '/schedule':  'Lịch học',
      '/friends':   'Bạn học',
      '/settings':  'Tùy chỉnh',
    };
    if (map[pathname]) setActiveLabel(map[pathname]);
    else if (pathname.startsWith('/practice'))       setActiveLabel('Luyện đề');
    else if (pathname.startsWith('/skill-training')) setActiveLabel('Luyện kỹ năng');
  }, [pathname]);

  function navCls(label: string) {
    const active = activeLabel === label;
    return `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium ${
      active
        ? 'bg-surface-container-high text-on-surface'
        : 'text-on-surface hover:bg-surface-container'
    }`;
  }

  return (
    <div className="bg-[#fafafa] text-on-surface font-body-md overflow-x-hidden">

      {/* ── Sidebar ─────────────────────────────── */}
      <aside className={`fixed left-3 top-3 bottom-3 bg-white border border-outline-variant/40 rounded-2xl shadow-sm
        flex flex-col py-3 z-50 transition-all duration-200 overflow-hidden
        ${sidebarOpen ? 'w-[270px]' : 'w-0 border-0 shadow-none'}`}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 mb-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Vitora" className="w-12 h-12 rounded-lg object-cover" />
            <span className="brand-name text-[19px] text-primary tracking-tight">Vitora</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>left_panel_close</span>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-2 space-y-0.5 text-[13.5px] [&_a]:no-underline">

          {/* Home / Cowork toggle */}
          <div className="flex items-center bg-surface-container rounded-lg p-0.5 mb-1">
            <button
              onClick={() => setSidebarMode('home')}
              className={`flex-1 px-3 py-1.5 rounded-md text-[12.5px] transition-colors ${
                sidebarMode === 'home'
                  ? 'bg-white text-on-surface font-semibold shadow-sm'
                  : 'text-secondary font-medium'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setSidebarMode('cowork')}
              className={`flex-1 px-3 py-1.5 rounded-md text-[12.5px] transition-colors ${
                sidebarMode === 'cowork'
                  ? 'bg-white text-on-surface font-semibold shadow-sm'
                  : 'text-secondary font-medium'
              }`}
            >
              Cowork
            </button>
          </div>

          {sidebarMode === 'home' && (
          <>
          {/* Lộ trình */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveLabel('Lộ trình'); navigate('/roadmap'); }}
            className={navCls('Lộ trình')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>menu_book</span>
            Lộ trình
          </a>

          {/* Luyện kỹ năng — popover */}
          <div className="relative">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSkillY((e.currentTarget as HTMLElement).getBoundingClientRect().top);
                setSkillOpen(o => !o);
              }}
              className={navCls('Luyện kỹ năng')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>fitness_center</span>
              <span className="flex-1">Luyện kỹ năng</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>chevron_right</span>
            </a>
            {skillOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setSkillOpen(false)} />
                <div
                  className="fixed z-50 bg-white border border-outline-variant rounded-xl shadow-md py-1.5 w-44"
                  style={{ left: '298px', top: skillY }}
                >
                  {[
                    { label: 'Listening', icon: 'headphones', path: '/skill-training/listening' },
                    { label: 'Reading',   icon: 'menu_book',  path: '/skill-training/reading'   },
                    { label: 'Writing',   icon: 'edit_note',  path: '/skill-training/writing'   },
                    { label: 'Speaking',  icon: 'mic',        path: '/skill-training/speaking'  },
                  ].map(({ label, icon, path }) => (
                    <a
                      key={label}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveLabel('Luyện kỹ năng');
                        navigate(path);
                        setSkillOpen(false);
                      }}
                      className="flex items-center gap-3 px-3 py-2 text-[13.5px] text-on-surface hover:bg-surface-container-low transition-colors"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>{icon}</span>
                      {label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Luyện đề — popover */}
          <div className="relative">
            <a
              href="#"
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
                <div
                  className="fixed z-50 bg-white border border-outline-variant rounded-xl shadow-md py-1.5 w-44"
                  style={{ left: '298px', top: practiceY }}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLabel('Luyện đề');
                      navigate('/practice');
                      setPracticeOpen(false);
                    }}
                    className="flex items-center gap-3 px-3 py-2 text-[13.5px] text-on-surface hover:bg-surface-container-low transition-colors"
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>menu_book</span>
                    Đề Cambridge
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Thi thử */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveLabel('Thi thử'); navigate('/mock-test'); }}
            className={navCls('Thi thử')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>fact_check</span>
            Thi thử
          </a>

          {/* Tiến độ */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveLabel('Tiến độ'); navigate('/progress'); }}
            className={navCls('Tiến độ')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>bar_chart</span>
            Tiến độ
          </a>

          {/* Skill map */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveLabel('Skill map'); navigate('/skill-map'); }}
            className={navCls('Skill map')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>account_tree</span>
            <span className="flex-1">Skill map</span>
            <span className="text-[10px] font-semibold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">Mới</span>
          </a>

          {/* Gợi ý AI */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveLabel('Gợi ý AI'); navigate('/ai-tips'); }}
            className={navCls('Gợi ý AI')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>psychology</span>
            Gợi ý AI
          </a>

          </>
          )}

          {/* Cowork — Thêm items moved here */}
          {sidebarMode === 'cowork' && (
          <>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveLabel('Gợi ý AI'); navigate('/ai-tips'); }}
            className={navCls('Phiên học mới')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>add</span>
            <span className="flex-1">Phiên học mới</span>
            <span className="text-[10px] font-semibold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">Mới</span>
          </a>
          {MORE_ITEMS.map(({ icon, label, path, badge }) => (
            <a
              key={label}
              href="#"
              onClick={(e) => { e.preventDefault(); setActiveLabel(label); navigate(path); }}
              className={navCls(label)}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>
              <span className="flex-1">{label}</span>
              {badge && (
                <span className="text-[10px] font-semibold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full">{badge}</span>
              )}
            </a>
          ))}
          </>
          )}

          {/* Đang học */}
          {sidebarMode === 'home' && (
          <div className="pt-4">
            <hr className="border-t border-outline-variant/50 mx-3 mb-3" />
            <p className="px-3 pb-1 text-[11px] font-semibold text-secondary uppercase tracking-wider">Đang học</p>
            {STUDYING.map(({ icon, title, status }) => (
              <a
                key={title}
                href="#"
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: '15px' }}>{icon}</span>
                <span className="truncate text-[13px] flex-1">{title}</span>
                {status && <span className="text-[10px] text-secondary shrink-0">{status}</span>}
              </a>
            ))}
          </div>
          )}
        </nav>

        {/* Nhắc học qua Zalo */}
        {sidebarMode === 'home' && (
        <div className="px-3 py-2 mx-2 mb-1 flex items-center gap-2 rounded-lg bg-white">
          <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>notifications</span>
          <span className="flex-1 text-[12.5px] text-on-surface">Nhắc học qua Zalo</span>
          <button
            onClick={() => setZaloReminder(z => !z)}
            className={`relative w-9 h-5 rounded-full transition-colors shrink-0 ${zaloReminder ? 'bg-primary' : 'bg-outline-variant'}`}
          >
            <span
              className="absolute top-0.5 w-4 h-4 bg-white rounded-full transition-all"
              style={{ left: zaloReminder ? '18px' : '2px' }}
            />
          </button>
        </div>
        )}

        {/* User profile */}
        <div className="px-2 pt-2 border-t border-outline-variant">
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-surface-container-low transition-colors"
          >
            {/* Avatar initials fallback */}
            <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 text-[13px] font-bold">
              QA
            </div>
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
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-4 z-[60] w-7 h-7 flex items-center justify-center rounded-lg border border-outline-variant bg-white hover:bg-surface-container transition-colors text-secondary hover:text-primary"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>left_panel_open</span>
        </button>
      )}

      {/* Content area */}
      <div className={`min-h-screen transition-all duration-200 ${sidebarOpen ? 'ml-[298px]' : 'ml-0'}`}>
        <main className="p-container-padding-desktop max-w-[1440px] mx-auto">
          <Outlet />
        </main>
      </div>

      {/* Floating ChatBot */}
      <div className="cat-float-wrapper" onClick={() => setChatOpen((o) => !o)}>
        <span className="cat-tooltip">Hỏi Miro</span>
        <div className="cat-container">
          <img src={chatbotImg} alt="Chatbot Miro" className="chatbot-img" />
        </div>
      </div>

      {/* Miro chat panel */}
      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
