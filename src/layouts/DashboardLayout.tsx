import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';

// ── Static nav data ────────────────────────────────────────────────────────

const HOME_ITEMS = [
  { label: 'Overview',        icon: 'space_dashboard', path: '/dashboard',               group: 1, sub: null },
  { label: 'Skill Radar',     icon: 'radar',           path: '/skill-radar',             group: 1, sub: null },
  { label: 'Study Plan',      icon: 'map',             path: '/roadmap',                 group: 1, sub: null },
  { label: 'Skill Drills',    icon: 'fitness_center',  path: null,                       group: 2, sub: 'skill' },
  { label: 'Practice Tests',  icon: 'edit_note',       path: null,                       group: 2, sub: 'practice' },
  { label: 'Full Mock Exam',  icon: 'fact_check',      path: '/mock-exam',               group: 2, sub: null },
  { label: 'Study Materials', icon: 'folder_open',     path: '/study-materials',         group: 3, sub: null },
  { label: 'Question Bank',   icon: 'quiz',            path: '/question-bank',           group: 3, sub: null },
  { label: 'My Progress',     icon: 'bar_chart',       path: '/progress',                group: 4, sub: null },
  { label: 'AI Coach',        icon: 'psychology',      path: '/ai-tips',                 group: 4, sub: null },
] as const;

const COWORK_ITEMS = [
  { label: 'My Classes',       icon: 'school',          path: '/classes',         group: 1, sub: null },
  { label: 'Study Partners',   icon: 'people',          path: '/partners',        group: 2, sub: null },
  { label: 'Study Calendar',   icon: 'calendar_month',  path: '/calendar',        group: 2, sub: null },
  { label: 'Quiz Creator',     icon: 'edit_square',     path: '/quiz-creator',    group: 3, sub: null },
  { label: 'Class Analytics',  icon: 'bar_chart',       path: '/class-analytics', group: 3, sub: null },
  { label: 'Account Settings', icon: 'manage_accounts', path: '/settings',        group: 4, sub: null },
] as const;

const SKILL_SUB = [
  { label: 'Listening', icon: 'headphones', path: '/skill-training/listening' },
  { label: 'Reading',   icon: 'menu_book',  path: '/skill-training/reading'   },
  { label: 'Writing',   icon: 'edit_note',  path: '/skill-training/writing'   },
  { label: 'Speaking',  icon: 'mic',        path: '/skill-training/speaking'  },
];

const PRACTICE_SUB = [
  { label: 'Cambridge Tests', icon: 'menu_book', path: '/practice' },
];

const PATH_LABEL: Record<string, string> = {
  '/dashboard':       'Overview',
  '/skill-radar':     'Skill Radar',
  '/roadmap':         'Study Plan',
  '/mock-exam':       'Full Mock Exam',
  '/study-materials': 'Study Materials',
  '/notes':           'Study Materials',
  '/question-bank':   'Question Bank',
  '/progress':        'My Progress',
  '/ai-tips':         'AI Coach',
  '/classes':         'My Classes',
  '/partners':        'Study Partners',
  '/friends':         'Study Partners',
  '/calendar':        'Study Calendar',
  '/quiz-creator':    'Quiz Creator',
  '/class-analytics': 'Class Analytics',
  '/settings':        'Account Settings',
};

// ── Shared sub-menu flyout ─────────────────────────────────────────────────

function SubFlyout({
  title, items, left, top,
  onSelect, onMouseEnter, onMouseLeave,
}: {
  title: string;
  items: { label: string; icon: string; path: string }[];
  left: number; top: number;
  onSelect: (path: string) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      className="fixed z-50 bg-white border border-outline-variant rounded-xl shadow-lg p-1.5 w-44"
      style={{ left, top }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <p className="px-3 pt-1 pb-1.5 text-[10px] font-bold text-secondary uppercase tracking-widest">
        {title}
      </p>
      {items.map(item => (
        <a key={item.label} href="#"
          onClick={(e) => { e.preventDefault(); onSelect(item.path); }}
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-[13px] text-on-surface hover:bg-primary hover:text-white transition-colors group"
        >
          <span className="material-symbols-outlined text-primary group-hover:text-accent" style={{ fontSize: '15px' }}>
            {item.icon}
          </span>
          {item.label}
        </a>
      ))}
    </div>
  );
}

// ── Main layout ────────────────────────────────────────────────────────────

export default function DashboardLayout() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [sidebarOpen, setSidebarOpen]   = useState(true);
  const [sidebarMode, setSidebarMode]   = useState<'home' | 'cowork'>('home');
  const [activeLabel, setActiveLabel]   = useState('Overview');
  const [zaloReminder, setZaloReminder] = useState(true);

  // Expanded sidebar flyouts
  const [skillOpen, setSkillOpen]       = useState(false);
  const [skillY, setSkillY]             = useState(0);
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [practiceY, setPracticeY]       = useState(0);

  // Collapsed rail flyouts
  const [railSkillOpen, setRailSkillOpen]       = useState(false);
  const [railSkillY, setRailSkillY]             = useState(0);
  const [railPracticeOpen, setRailPracticeOpen] = useState(false);
  const [railPracticeY, setRailPracticeY]       = useState(0);

  // Rail tooltip
  const [railTooltip, setRailTooltip]   = useState<string | null>(null);
  const [railTooltipY, setRailTooltipY] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Sync active label from URL
  useEffect(() => {
    if (PATH_LABEL[pathname]) {
      setActiveLabel(PATH_LABEL[pathname]);
    } else if (pathname.startsWith('/skill-training')) {
      setActiveLabel('Skill Drills');
    } else if (pathname.startsWith('/practice')) {
      setActiveLabel('Practice Tests');
    } else if (pathname.startsWith('/classes/')) {
      setActiveLabel('My Classes');
    }
  }, [pathname]);

  // Rail flyout helpers
  const openRailFlyout = useCallback((e: React.MouseEvent, type: 'skill' | 'practice') => {
    const y = (e.currentTarget as HTMLElement).getBoundingClientRect().top;
    if (type === 'skill')    { setRailSkillY(y);    setRailSkillOpen(true);    setRailPracticeOpen(false); }
    if (type === 'practice') { setRailPracticeY(y); setRailPracticeOpen(true); setRailSkillOpen(false); }
    setRailTooltip(null);
  }, []);

  const startClose = useCallback((type: 'skill' | 'practice') => {
    closeTimer.current = setTimeout(() => {
      if (type === 'skill')    setRailSkillOpen(false);
      if (type === 'practice') setRailPracticeOpen(false);
    }, 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  // Shared nav item renderer (expanded sidebar)
  function NavItem({ label, icon, path, badge }: { label: string; icon: string; path: string; badge?: string }) {
    const active = activeLabel === label;
    return (
      <a href="#"
        onClick={(e) => { e.preventDefault(); setActiveLabel(label); navigate(path); }}
        className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
          active ? 'bg-primary text-white' : 'text-on-surface hover:bg-surface-container'
        }`}
      >
        <span className="material-symbols-outlined shrink-0" style={{ fontSize: '17px' }}>{icon}</span>
        <span className="flex-1 truncate">{label}</span>
        {badge && (
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
            active ? 'bg-white/20 text-white' : 'bg-accent/20 text-primary'
          }`}>
            {badge}
          </span>
        )}
      </a>
    );
  }

  // Section label with divider
  function SectionLabel({ text, first = false }: { text: string; first?: boolean }) {
    return (
      <>
        {!first && <div className="h-px bg-outline-variant mx-1 mt-3 mb-2" />}
        <p className="px-3 mb-0.5 text-[10px] font-bold text-secondary uppercase tracking-widest">{text}</p>
      </>
    );
  }

  // Toggle switch
  function Toggle({ on, onChange }: { on: boolean; onChange: () => void }) {
    return (
      <button onClick={onChange}
        className={`relative w-8 h-4 rounded-full transition-colors shrink-0 ${on ? 'bg-primary' : 'bg-outline-variant'}`}
      >
        <span className="absolute top-0.5 w-3 h-3 bg-white rounded-full shadow-sm transition-all"
          style={{ left: on ? '17px' : '2px' }} />
      </button>
    );
  }

  const railItems = sidebarMode === 'home'
    ? (HOME_ITEMS as unknown as { label: string; icon: string; path: string | null; group: number; sub: string | null }[])
    : (COWORK_ITEMS as unknown as { label: string; icon: string; path: string | null; group: number; sub: string | null }[]);

  return (
    <div className="bg-[#f8fafc] text-on-surface font-body-md overflow-x-hidden">

      {/* ── Sidebar ──────────────────────────────────────────────────────── */}
      <aside className={`fixed left-0 top-0 bottom-0 bg-white border-r border-outline-variant flex flex-col z-50 overflow-hidden transition-all duration-200 ${
        sidebarOpen ? 'w-[240px]' : 'w-14'
      }`}>

        {/* Logo row */}
        <div className={`flex items-center h-14 shrink-0 ${sidebarOpen ? 'px-3 gap-2' : 'justify-center'}`}>
          <button onClick={() => setSidebarOpen(o => !o)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-secondary hover:bg-surface-container hover:text-primary transition-colors shrink-0"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>menu</span>
          </button>
          {sidebarOpen && (
            <span className="brand-name text-[19px] text-primary tracking-tight whitespace-nowrap">Vietora</span>
          )}
        </div>

        {/* ── Collapsed rail ─────────────────────────────────────────────── */}
        {!sidebarOpen && (
          <>
            <nav className="flex-1 overflow-y-auto py-2 flex flex-col items-center">
              {railItems.map(({ label, icon, path, group, sub }, i, arr) => {
                const active = activeLabel === label;
                const isSkillOpen    = sub === 'skill'    && railSkillOpen;
                const isPracticeOpen = sub === 'practice' && railPracticeOpen;
                const showDivider    = i > 0 && arr[i - 1].group !== group;

                return (
                  <div key={label} className="w-full flex flex-col items-center">
                    {showDivider && <div className="w-6 h-px bg-outline-variant my-1.5" />}
                    <div className="relative w-full flex justify-center mb-0.5">
                      <a href="#"
                        onMouseEnter={(e) => {
                          if (sub === 'skill' || sub === 'practice') openRailFlyout(e, sub);
                          else { setRailTooltip(label); setRailTooltipY((e.currentTarget as HTMLElement).getBoundingClientRect().top); }
                        }}
                        onMouseLeave={() => {
                          if (sub === 'skill' || sub === 'practice') startClose(sub);
                          else setRailTooltip(null);
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          setRailTooltip(null);
                          if (!sub && path) { setActiveLabel(label); navigate(path); }
                        }}
                        className={`w-9 h-9 flex items-center justify-center rounded-lg transition-colors ${
                          active || isSkillOpen || isPracticeOpen
                            ? 'bg-primary text-white'
                            : 'text-secondary hover:bg-surface-container hover:text-primary'
                        }`}
                      >
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>
                      </a>

                      {isSkillOpen && (
                        <SubFlyout
                          title="Skill Drills" items={SKILL_SUB}
                          left={60} top={railSkillY}
                          onSelect={(p) => { setActiveLabel('Skill Drills'); navigate(p); setRailSkillOpen(false); }}
                          onMouseEnter={cancelClose}
                          onMouseLeave={() => startClose('skill')}
                        />
                      )}
                      {isPracticeOpen && (
                        <SubFlyout
                          title="Practice Tests" items={PRACTICE_SUB}
                          left={60} top={railPracticeY}
                          onSelect={(p) => { setActiveLabel('Practice Tests'); navigate(p); setRailPracticeOpen(false); }}
                          onMouseEnter={cancelClose}
                          onMouseLeave={() => startClose('practice')}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </nav>

            {/* Rail tooltip */}
            {railTooltip && !railSkillOpen && !railPracticeOpen && (
              <div className="fixed z-[60] pointer-events-none" style={{ left: '62px', top: railTooltipY + 8 }}>
                <div className="bg-primary text-white text-[11.5px] font-medium px-2.5 py-1 rounded-md whitespace-nowrap shadow-lg">
                  {railTooltip}
                </div>
              </div>
            )}

            {/* Mode toggle */}
            <div className="shrink-0 pb-3 pt-2 flex flex-col items-center gap-1.5 border-t border-outline-variant">
              <span className="text-[9px] font-bold text-secondary uppercase tracking-widest">
                {sidebarMode === 'home' ? 'Home' : 'Cowork'}
              </span>
              <div
                onMouseEnter={(e) => {
                  setRailTooltip(sidebarMode === 'home' ? 'Switch to Cowork' : 'Switch to Home');
                  setRailTooltipY((e.currentTarget as HTMLElement).getBoundingClientRect().top);
                }}
                onMouseLeave={() => setRailTooltip(null)}
              >
                <Toggle on={sidebarMode === 'cowork'} onChange={() => setSidebarMode(m => m === 'home' ? 'cowork' : 'home')} />
              </div>
            </div>
          </>
        )}

        {/* ── Expanded nav ───────────────────────────────────────────────── */}
        {sidebarOpen && (
          <nav className="flex-1 overflow-y-auto px-2 pt-3 pb-2 text-[13px] [&_a]:no-underline">

            {/* Mode toggle */}
            <div className="flex items-center bg-surface-container rounded-lg p-0.5 mb-3">
              {(['home', 'cowork'] as const).map(mode => (
                <button key={mode} onClick={() => setSidebarMode(mode)}
                  className={`flex-1 py-1.5 rounded-md text-[12px] whitespace-nowrap transition-colors ${
                    sidebarMode === mode ? 'bg-white text-on-surface font-semibold shadow-sm' : 'text-secondary font-medium'
                  }`}
                >
                  {mode === 'home' ? 'Home' : 'Cowork'}
                </button>
              ))}
            </div>

            {/* HOME */}
            {sidebarMode === 'home' && (
              <>
                <SectionLabel text="Overview" first />
                <NavItem label="Overview"   icon="space_dashboard" path="/dashboard" />
                <NavItem label="Skill Radar" icon="radar"          path="/skill-radar" badge="New" />
                <NavItem label="Study Plan"  icon="map"            path="/roadmap" />

                <SectionLabel text="Train" />

                {/* Skill Drills — hover to open */}
                <div className="relative"
                  onMouseEnter={(e) => { setSkillY((e.currentTarget as HTMLElement).getBoundingClientRect().top); setSkillOpen(true); setPracticeOpen(false); }}
                  onMouseLeave={() => setSkillOpen(false)}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}
                    className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
                      activeLabel === 'Skill Drills' ? 'bg-primary text-white' : 'text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <span className="material-symbols-outlined shrink-0" style={{ fontSize: '17px' }}>fitness_center</span>
                    <span className="flex-1">Skill Drills</span>
                    <span className="material-symbols-outlined text-secondary" style={{ fontSize: '15px' }}>chevron_right</span>
                  </a>
                  {skillOpen && (
                    <SubFlyout
                      title="Skill Drills" items={SKILL_SUB}
                      left={224} top={skillY}
                      onSelect={(p) => { setActiveLabel('Skill Drills'); navigate(p); setSkillOpen(false); }}
                      onMouseEnter={() => {}}
                      onMouseLeave={() => setSkillOpen(false)}
                    />
                  )}
                </div>

                {/* Practice Tests — hover to open */}
                <div className="relative"
                  onMouseEnter={(e) => { setPracticeY((e.currentTarget as HTMLElement).getBoundingClientRect().top); setPracticeOpen(true); setSkillOpen(false); }}
                  onMouseLeave={() => setPracticeOpen(false)}
                >
                  <a href="#" onClick={(e) => e.preventDefault()}
                    className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors ${
                      activeLabel === 'Practice Tests' ? 'bg-primary text-white' : 'text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <span className="material-symbols-outlined shrink-0" style={{ fontSize: '17px' }}>edit_note</span>
                    <span className="flex-1">Practice Tests</span>
                    <span className="material-symbols-outlined text-secondary" style={{ fontSize: '15px' }}>chevron_right</span>
                  </a>
                  {practiceOpen && (
                    <SubFlyout
                      title="Practice Tests" items={PRACTICE_SUB}
                      left={224} top={practiceY}
                      onSelect={(p) => { setActiveLabel('Practice Tests'); navigate(p); setPracticeOpen(false); }}
                      onMouseEnter={() => {}}
                      onMouseLeave={() => setPracticeOpen(false)}
                    />
                  )}
                </div>

                <NavItem label="Full Mock Exam"  icon="fact_check"  path="/mock-exam" />

                <SectionLabel text="Library" />
                <NavItem label="Study Materials" icon="folder_open" path="/study-materials" />
                <NavItem label="Question Bank"   icon="quiz"        path="/question-bank" />

                <SectionLabel text="Analytics" />
                <NavItem label="My Progress" icon="bar_chart"  path="/progress" />
                <NavItem label="AI Coach"    icon="psychology" path="/ai-tips" />
              </>
            )}

            {/* COWORK */}
            {sidebarMode === 'cowork' && (
              <>
                <SectionLabel text="Classes" first />
                <NavItem label="My Classes" icon="school" path="/classes" badge="New" />

                <SectionLabel text="Community" />
                <NavItem label="Study Partners" icon="people"         path="/partners" />
                <NavItem label="Study Calendar" icon="calendar_month" path="/calendar" />

                <SectionLabel text="Teacher" />
                <NavItem label="Quiz Creator"    icon="edit_square" path="/quiz-creator" />
                <NavItem label="Class Analytics" icon="bar_chart"   path="/class-analytics" />

                <SectionLabel text="System" />
                <NavItem label="Account Settings" icon="manage_accounts" path="/settings" />
              </>
            )}
          </nav>
        )}
      </aside>

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <header className={`fixed top-0 right-0 z-40 h-14 bg-white flex items-center px-4 gap-3 transition-all duration-200 ${
        sidebarOpen ? 'left-[240px]' : 'left-14'
      }`}>
        <div className="relative flex-1 max-w-md">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-secondary" style={{ fontSize: '16px' }}>search</span>
          <input placeholder="Search..."
            className="w-full pl-9 pr-4 py-1.5 rounded-lg bg-surface-container border border-transparent text-[13px] placeholder:text-secondary focus:outline-none focus:border-primary/30 focus:bg-white transition-colors"
          />
        </div>

        <div className="flex-1" />

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container">
          <span className="material-symbols-outlined text-secondary" style={{ fontSize: '15px' }}>notifications</span>
          <span className="text-[12px] text-on-surface whitespace-nowrap">Zalo</span>
          <Toggle on={zaloReminder} onChange={() => setZaloReminder(z => !z)} />
        </div>

        <button className="flex items-center gap-1.5 px-4 py-1.5 bg-accent text-primary rounded-lg text-[12.5px] font-bold hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>workspace_premium</span>
          Upgrade
        </button>

        <div className="w-px h-5 bg-outline-variant" />

        <button className="relative w-8 h-8 flex items-center justify-center rounded-lg text-secondary hover:bg-surface-container hover:text-primary transition-colors">
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>notifications</span>
          <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-accent ring-2 ring-white" />
        </button>

        <button onClick={() => navigate('/')}
          className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-[12px] font-bold shrink-0 hover:opacity-90 transition-opacity"
        >
          QA
        </button>
      </header>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className={`min-h-screen transition-all duration-200 ${sidebarOpen ? 'ml-[240px]' : 'ml-14'}`}>
        <main className="pt-20 pb-16 px-8 max-w-[1200px] mx-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
}
