import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { MORE_ITEMS, STUDYING } from '../constants/dashboard';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [rightRailOpen, setRightRailOpen] = useState(true);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [practiceY, setPracticeY] = useState(0);
  const [skillOpen, setSkillOpen] = useState(false);
  const [skillY, setSkillY] = useState(0);
  const [activeLabel, setActiveLabel] = useState('Roadmap');
  const [zaloReminder, setZaloReminder] = useState(true);
  const [sidebarMode, setSidebarMode] = useState<'home' | 'cowork'>('cowork');

  useEffect(() => {
    const map: Record<string, string> = {
      '/mock-test': 'Mock Test',
      '/progress':  'Progress',
      '/roadmap':   'Roadmap',
      '/notes':     'Knowledge Base',
      '/schedule':  'Schedule',
      '/friends':   'Study Buddies',
      '/settings':  'Settings',
    };
    if (map[pathname]) setActiveLabel(map[pathname]);
    else if (pathname.startsWith('/practice'))       setActiveLabel('Practice');
    else if (pathname.startsWith('/skill-training')) setActiveLabel('Skills');
  }, [pathname]);

  function navCls(label: string) {
    const active = activeLabel === label;
    return `flex items-center gap-3 px-3 py-2 rounded-lg transition-colors font-medium ${
      active
        ? 'bg-[#1e3a5f] text-white'
        : 'text-on-surface hover:bg-surface-container'
    }`;
  }

  return (
    <div className="bg-[#fafafa] text-on-surface font-body-md overflow-x-hidden">

      {/* ── Sidebar ─────────────────────────────── */}
      <aside className={`fixed left-0 top-0 bottom-0 bg-white shadow-md flex flex-col py-4 z-50 overflow-hidden transition-all duration-200 ${
        sidebarOpen ? 'w-[200px]' : 'w-0'
      }`}>
        {/* Logo */}
        <div className="flex items-center px-4 mb-4">
          <span className="brand-name text-[19px] text-[#1e3a5f] tracking-tight whitespace-nowrap">Vietora</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-2 space-y-1 text-[13.5px] [&_a]:no-underline">

          {/* Home / Cowork toggle */}
          <div className="flex items-center bg-surface-container rounded-lg p-0.5 mb-3">
            <button
              onClick={() => setSidebarMode('home')}
              className={`flex-1 px-2 py-1.5 rounded-md text-[12.5px] whitespace-nowrap transition-colors ${
                sidebarMode === 'home'
                  ? 'bg-white text-on-surface font-semibold shadow-sm'
                  : 'text-secondary font-medium'
              }`}
            >
              Learn
            </button>
            <button
              onClick={() => setSidebarMode('cowork')}
              className={`flex-1 px-2 py-1.5 rounded-md text-[12.5px] whitespace-nowrap transition-colors ${
                sidebarMode === 'cowork'
                  ? 'bg-white text-on-surface font-semibold shadow-sm'
                  : 'text-secondary font-medium'
              }`}
            >
              Together
            </button>
          </div>

          {sidebarMode === 'home' && (
          <>
          {/* Roadmap */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveLabel('Roadmap'); navigate('/roadmap'); }}
            className={navCls('Roadmap')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>menu_book</span>
            Roadmap
          </a>

          {/* Skills — popover */}
          <div className="relative">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setSkillY((e.currentTarget as HTMLElement).getBoundingClientRect().top);
                setSkillOpen(o => !o);
              }}
              className={navCls('Skills')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>fitness_center</span>
              <span className="flex-1">Skills</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>chevron_right</span>
            </a>
            {skillOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setSkillOpen(false)} />
                <div
                  className="fixed z-50 bg-white border border-[#1e3a5f]/15 rounded-xl shadow-lg p-1.5 w-44"
                  style={{ left: '258px', top: skillY }}
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
                        setActiveLabel('Skills');
                        navigate(path);
                        setSkillOpen(false);
                      }}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13.5px] text-on-surface hover:bg-[#1e3a5f] hover:text-white transition-colors group"
                    >
                      <span className="material-symbols-outlined text-[#1e3a5f] group-hover:text-[#f6b93b]" style={{ fontSize: '16px' }}>{icon}</span>
                      {label}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Practice — popover */}
          <div className="relative">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setPracticeY((e.currentTarget as HTMLElement).getBoundingClientRect().top);
                setPracticeOpen(o => !o);
              }}
              className={navCls('Practice')}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit_note</span>
              <span className="flex-1">Practice</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>chevron_right</span>
            </a>
            {practiceOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setPracticeOpen(false)} />
                <div
                  className="fixed z-50 bg-white border border-[#1e3a5f]/15 rounded-xl shadow-lg p-1.5 w-44"
                  style={{ left: '258px', top: practiceY }}
                >
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveLabel('Practice');
                      navigate('/practice');
                      setPracticeOpen(false);
                    }}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-[13.5px] text-on-surface hover:bg-[#1e3a5f] hover:text-white transition-colors group"
                  >
                    <span className="material-symbols-outlined text-[#1e3a5f] group-hover:text-[#f6b93b]" style={{ fontSize: '16px' }}>menu_book</span>
                    Cambridge Tests
                  </a>
                </div>
              </>
            )}
          </div>

          {/* Mock Test */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveLabel('Mock Test'); navigate('/mock-test'); }}
            className={navCls('Mock Test')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>fact_check</span>
            Mock Test
          </a>

          {/* Progress */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); setActiveLabel('Progress'); navigate('/progress'); }}
            className={navCls('Progress')}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>bar_chart</span>
            Progress
          </a>

          </>
          )}

          {/* Cowork — "More" items moved here */}
          {sidebarMode === 'cowork' && (
          <>
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
                <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-full ${
                  activeLabel === label ? 'bg-white/20 text-white' : 'bg-[#f6b93b]/25 text-[#1e3a5f]'
                }`}>{badge}</span>
              )}
            </a>
          ))}
          </>
          )}

          {/* Pinned */}
          {sidebarMode === 'home' && (
          <div className="pt-4">
            <hr className="border-t border-outline-variant/50 mx-3 mb-3" />
            <p className="px-3 pb-1 text-[11px] font-semibold text-secondary uppercase tracking-wider">Pinned</p>
            {[
              { icon: 'description', title: 'Notes TFNG' },
              { icon: 'menu_book',   title: 'Writing Vocabulary Set' },
            ].map(({ icon, title }) => (
              <a
                key={title}
                href="#"
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: '15px' }}>{icon}</span>
                <span className="truncate text-[13px] flex-1">{title}</span>
              </a>
            ))}
          </div>
          )}

          {/* Currently Studying */}
          {sidebarMode === 'home' && (
          <div className="pt-4">
            <hr className="border-t border-outline-variant/50 mx-3 mb-3" />
            <p className="px-3 pb-1 text-[11px] font-semibold text-secondary uppercase tracking-wider">Currently Studying</p>
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

        {/* Zalo study reminders */}
        {sidebarMode === 'home' && (
        <div className="px-3 py-2 mx-2 mb-1 flex items-center gap-2 rounded-lg bg-white">
          <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>notifications</span>
          <span className="flex-1 text-[12.5px] text-on-surface">Zalo study reminders</span>
          <button
            onClick={() => setZaloReminder(z => !z)}
            className={`relative w-9 h-5 rounded-full transition-colors shrink-0 ${zaloReminder ? 'bg-[#1e3a5f]' : 'bg-outline-variant'}`}
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
            <div className="w-8 h-8 rounded-full bg-[#1e3a5f] text-white flex items-center justify-center shrink-0 text-[13px] font-bold">
              QA
            </div>
            <div className="text-left flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-[#1e3a5f] truncate leading-tight">Quoc Anh</p>
              <p className="text-[11px] text-secondary truncate leading-tight">Band 7.5</p>
            </div>
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>more_horiz</span>
          </button>
        </div>
      </aside>

      {/* Sidebar toggle */}
      <button
        onClick={() => setSidebarOpen(o => !o)}
        className={`fixed top-5 z-50 w-8 h-8 flex items-center justify-center rounded-full border border-outline-variant bg-white shadow-sm text-secondary hover:text-[#1e3a5f] hover:border-[#1e3a5f] transition-all duration-200 ${
          sidebarOpen ? 'left-[188px]' : 'left-2'
        }`}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
          {sidebarOpen ? 'chevron_left' : 'chevron_right'}
        </span>
      </button>

      {/* Content area */}
      <div className={`min-h-screen transition-all duration-200 ${sidebarOpen ? 'ml-[200px]' : 'ml-0'}`}>
        <main className="pt-16 pr-[96px] pb-16 pl-6 max-w-[1280px] mx-auto">
          <Outlet />
        </main>
      </div>

      {/* ── Right icon rail ─────────────────────── */}
      <aside className={`fixed right-3 top-1/2 -translate-y-1/2 bg-white border border-outline-variant rounded-2xl shadow-md flex flex-col items-center py-3 z-50 overflow-hidden transition-all duration-200 ${
        rightRailOpen ? 'w-14' : 'w-12'
      }`}>
        {rightRailOpen && (
        <div className="flex flex-col items-center gap-2">
          {[
            { icon: 'assignment_turned_in', badge: 3,    active: true  },
            { icon: 'style',                badge: null, active: false },
            { icon: 'menu_book',            badge: null, active: false },
            { icon: 'lightbulb',            badge: 'dot', active: false },
            { icon: 'calendar_month',       badge: null, active: false },
            { icon: 'group',                badge: null, active: false },
          ].map(({ icon, badge, active }, i) => (
            <button
              key={i}
              className={`relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
                active ? 'bg-[#1e3a5f] text-white' : 'text-secondary hover:bg-surface-container hover:text-on-surface'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>
              {badge === 'dot' && (
                <span className="absolute top-1.5 right-2 w-2 h-2 rounded-full bg-error ring-2 ring-white" />
              )}
              {typeof badge === 'number' && (
                <span className="absolute top-0 right-0 min-w-[16px] h-4 px-1 rounded-full bg-error text-white text-[10px] font-semibold flex items-center justify-center ring-2 ring-white">
                  {badge}
                </span>
              )}
            </button>
          ))}
        </div>
        )}
        {rightRailOpen && <div className="w-8 border-t border-outline-variant/60 mb-2 mt-2" />}
        <button
          onClick={() => setRightRailOpen(o => !o)}
          className="w-10 h-10 flex items-center justify-center rounded-xl text-secondary hover:bg-surface-container hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
            {rightRailOpen ? 'chevron_left' : 'chevron_right'}
          </span>
        </button>
      </aside>

    </div>
  );
}
