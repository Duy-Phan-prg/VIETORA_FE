import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NAV_ITEMS = [
  { icon: 'psychology', label: 'AI Học hôm nay', href: '#' },
  { icon: 'bar_chart', label: 'Tiến độ học tập', href: '#' },
  { icon: 'menu_book', label: 'Lộ trình học', href: '/dashboard' },
  { icon: 'group', label: 'Bạn bè', href: '#' },
  { icon: 'more_horiz', label: 'Khác', href: '#' },
];

const PRACTICE_SUB = ['Listening', 'Reading', 'Writing', 'Speaking'];

const STUDYING = [
  { icon: 'headphones', title: 'Listening Mock Test #5', lesson: 'Bài 12/20', pct: 60 },
  { icon: 'menu_book', title: 'Reading: TFNG Strategies', lesson: 'Bài 5/10', pct: 45 },
  { icon: 'edit_note', title: 'Writing Task 2 Masterclass', lesson: 'Bài 8/15', pct: 55 },
];

const SCORES = [
  { skill: 'Nghe', pts: 1240, max: 2000 },
  { skill: 'Đọc', pts: 890, max: 2000 },
  { skill: 'Viết', pts: 650, max: 2000 },
  { skill: 'Nói', pts: 720, max: 2000 },
];

export default function DashboardPage() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Lộ trình học');
  const [practiceOpen, setPracticeOpen] = useState(false);
  const [practiceY, setPracticeY] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="bg-white text-on-surface font-body-md overflow-x-hidden">
      {/* Sidebar */}
      <aside className={`h-screen fixed left-0 top-0 bg-white border-r border-outline-variant/50 flex flex-col py-3 z-50 transition-all duration-200 overflow-hidden ${sidebarOpen ? 'w-56' : 'w-0'}`}>

        {/* Header */}
        <div className="flex items-center justify-between px-4 mb-4">
          <span className="text-[15px] font-bold text-primary tracking-tight">Vietora</span>
          <button onClick={() => setSidebarOpen(false)}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>left_panel_close</span>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-2 space-y-0.5 text-[13.5px] [&_a]:no-underline">
          {[
            { icon: 'psychology', label: 'Gợi ý AI' },
          ].map(({ icon, label }) => (
            <a key={label} href="#" onClick={() => setActiveNav(label)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeNav === label ? 'bg-surface-container text-primary font-medium' : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{icon}</span>
              {label}
            </a>
          ))}

          {/* Luyện đề with popover */}
          <div className="relative">
            <a href="#"
              onClick={(e) => { e.preventDefault(); setPracticeY((e.currentTarget as HTMLElement).getBoundingClientRect().top); setPracticeOpen(o => !o); setActiveNav('Luyện đề'); }}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeNav === 'Luyện đề' ? 'bg-surface-container text-primary font-medium' : 'text-on-surface hover:bg-surface-container-low'
              }`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit_note</span>
              <span className="flex-1">Luyện đề</span>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>chevron_right</span>
            </a>
            {practiceOpen && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setPracticeOpen(false)} />
                <div className="fixed z-50 bg-white border border-outline-variant rounded-xl shadow-md py-1.5 w-44" style={{ left: '232px', top: practiceY }}>
                  {PRACTICE_SUB.map((s) => (
                    <a key={s} href="#"
                      onClick={(e) => { e.preventDefault(); setPracticeOpen(false); }}
                      className="flex items-center gap-3 px-3 py-2 text-[13.5px] text-on-surface hover:bg-surface-container-low transition-colors"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
                        {s === 'Listening' ? 'headphones' : s === 'Reading' ? 'menu_book' : s === 'Writing' ? 'edit_note' : 'mic'}
                      </span>
                      {s}
                    </a>
                  ))}
                </div>
              </>
            )}
          </div>

          {[
            { icon: 'push_pin', label: 'Ghi chú' },
            { icon: 'bar_chart', label: 'Tiến độ' },
            { icon: 'menu_book', label: 'Lộ trình' },
            { icon: 'group', label: 'Bạn bè' },
          ].map(({ icon, label }) => (
            <a key={label} href="#" onClick={() => setActiveNav(label)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                activeNav === label ? 'bg-surface-container text-primary font-medium' : 'text-on-surface hover:bg-surface-container-low'
              }`}
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
              { icon: 'menu_book', label: 'Reading TFNG' },
              { icon: 'edit_note', label: 'Writing Task 2' },
            ].map(({ icon, label }) => (
              <a key={label} href="#"
                className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors"
              >
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: '15px' }}>{icon}</span>
                <span className="truncate text-[13px]">{label}</span>
              </a>
            ))}
          </div>

          {/* Điểm */}
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
            <img
              alt="Student Profile"
              className="w-8 h-8 rounded-full object-cover shrink-0"
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

      {/* Open button — only visible when sidebar is hidden */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-4 left-3 z-[60] w-7 h-7 flex items-center justify-center rounded-lg border border-outline-variant bg-white hover:bg-surface-container transition-colors text-secondary hover:text-primary"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>left_panel_open</span>
        </button>
      )}

      {/* Main Wrapper */}
      <div className={`min-h-screen transition-all duration-200 ${sidebarOpen ? 'ml-56' : 'ml-0'}`}>
        {/* Content Canvas */}
        <main className="p-container-padding-desktop space-y-stack-lg max-w-[1440px] mx-auto">

          {/* Welcome Banner */}
          <section className="relative overflow-hidden bg-primary text-on-primary p-10 rounded-xl">
            <div className="relative z-10 max-w-2xl">
              <span className="font-label-code text-label-code text-ai-purple uppercase tracking-widest mb-2 block">
                Chào mừng trở lại
              </span>
              <h3 className="font-bold text-display-lg-mobile md:text-display-lg mb-4">
                Chào mừng trở lại, sĩ tử IELTS!
              </h3>
              <p className="text-body-lg text-on-primary/80 mb-6">
                Bạn đã hoàn thành 75% lộ trình tuần này. Chỉ còn 2 bài thi thử nữa để đạt mục tiêu Band 7.5!
              </p>
              <button className="px-8 py-3 bg-white text-primary rounded-xl font-bold border border-outline-variant hover:bg-surface-container-highest transition-colors">
                Tiếp tục học ngay
              </button>
            </div>
            <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none">
              <div
                className="w-full h-full"
                style={{
                  background: 'radial-gradient(circle, rgba(165,85,238,0.4) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />
            </div>
          </section>

          {/* Đang học & Điểm */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

            {/* Đang học */}
            <div className="space-y-3">
              <h4 className="font-headline-md text-headline-md">Đang học</h4>
              <div className="space-y-2">
                {STUDYING.map(({ icon, title, lesson, pct }) => (
                  <div key={title} className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer">
                    <div className="w-10 h-10 bg-surface-container rounded-xl flex items-center justify-center shrink-0 border border-outline-variant">
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>{icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-semibold text-primary truncate">{title}</p>
                      <p className="text-[11px] text-secondary mb-1.5">{lesson}</p>
                      <div className="h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                        <div className="bg-primary h-full rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary shrink-0" style={{ fontSize: '16px' }}>chevron_right</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Điểm */}
            <div className="space-y-3">
              <h4 className="font-headline-md text-headline-md">Điểm luyện đề</h4>
              <div className="grid grid-cols-2 gap-3">
                {SCORES.map(({ skill, pts, max }) => (
                  <div key={skill} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4">
                    <p className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-2">{skill}</p>
                    <p className="text-[30px] font-bold text-primary leading-none">{pts.toLocaleString()}</p>
                    <p className="text-[11px] text-secondary mt-1">/{max.toLocaleString()} điểm</p>
                    <div className="mt-2 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${(pts / max) * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-primary text-on-primary rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-on-primary/60 uppercase tracking-wider">Tổng điểm</p>
                  <p className="text-[28px] font-bold leading-none mt-1">{SCORES.reduce((s, r) => s + r.pts, 0).toLocaleString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] text-on-primary/60 uppercase tracking-wider">Kỹ năng tốt nhất</p>
                  <p className="text-[18px] font-bold leading-none mt-1 text-ai-purple">
                    {SCORES.reduce((a, b) => a.pts > b.pts ? a : b).skill}
                  </p>
                </div>
              </div>
            </div>

          </section>

          {/* Active Courses */}
          <section className="space-y-stack-md">
            <h4 className="font-headline-md text-headline-md">Khóa học đang học</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Course Card 1 – wide */}
              <div className="md:col-span-2 group relative bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:bg-surface-container-low cursor-pointer transition-colors">
                <div className="flex h-full">
                  <div className="w-2/5 relative">
                    <img
                      alt="Course Thumbnail"
                      className="h-full w-full object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrsQO1LirmTx975elX1LBIz5pR8puyeqYEUJUN0pBX-_z4nuJ84nqpky-JIOqyXffwMfFCGvqQhU_rtjgFGbIRqsAKuv3qZUMQUgmZY691vZrCuX0D4Hos614-_86BPIGNa7RpY65W6jXwgbqdjR59wOiVi0SlVe96noJtyazHpI2hWpUE_c0v__J2z9rSj4EPHlvLU4b_HP3jxOOAj9lBjRudaQtErEyk0DSAsrmvloh_hQzmrXLAx-3J2JzEZWkQMpBM9rfyg1rR"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <div className="w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                        Intensive
                      </span>
                      <h5 className="text-headline-md font-bold mt-4 mb-2">IELTS Writing Task 2 Masterclass</h5>
                      <p className="text-body-sm text-secondary">
                        Phân tích chuyên sâu 10 dạng bài luận phổ biến nhất cùng chuyên gia.
                      </p>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-ai-purple">schedule</span>
                        <span className="text-body-sm font-bold">12/20 bài học</span>
                      </div>
                      <button className="p-2 border border-outline-variant rounded-lg hover:bg-primary hover:text-on-primary transition-all">
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Card 2 */}
              <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-xl flex flex-col justify-between hover:bg-surface-container-low cursor-pointer transition-colors">
                <div>
                  <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-6 border border-outline-variant">
                    <span className="material-symbols-outlined text-primary">menu_book</span>
                  </div>
                  <h5 className="text-headline-sm font-bold mb-2">Reading: True/False/Not Given</h5>
                  <p className="text-body-sm text-secondary">Mẹo phân biệt các bẫy thông tin phổ biến.</p>
                </div>
                <div className="mt-8">
                  <div className="w-full bg-surface-container-high h-2 rounded-full mb-3 overflow-hidden">
                    <div className="bg-primary h-full w-[45%]" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold">45% Hoàn thành</span>
                    <span className="material-symbols-outlined text-primary text-xl hover:text-ai-purple transition-colors cursor-pointer">
                      play_circle
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Activity */}
          <section className="space-y-stack-md">
            <h4 className="font-headline-md text-headline-md">Hoạt động gần đây</h4>
            <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
              <div className="divide-y divide-outline-variant">

                {/* Item 1 */}
                <div className="p-6 flex items-center justify-between hover:bg-surface-container-low transition-colors border-l-4 border-ai-purple">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white border border-outline-variant rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-ai-purple">assignment_turned_in</span>
                    </div>
                    <div>
                      <h6 className="font-bold text-body-md">Hoàn thành Listening Mock Test #4</h6>
                      <p className="text-body-sm text-secondary">Kết quả: 8.0 - Cải thiện 0.5 so với lần trước.</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <span className="font-label-code text-label-code block text-xs">2 GIỜ TRƯỚC</span>
                    <button className="text-ai-purple font-bold text-sm hover:underline mt-1">Xem chi tiết</button>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-6 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white border border-outline-variant rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-primary">forum</span>
                    </div>
                    <div>
                      <h6 className="font-bold text-body-md">Đã nộp bài Writing Task 1</h6>
                      <p className="text-body-sm text-secondary">Chờ giáo viên nhận xét và chấm điểm.</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <span className="font-label-code text-label-code block text-xs">HÔM QUA</span>
                    <span className="inline-block px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold mt-1">
                      ĐANG CHỜ
                    </span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-6 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 bg-white border border-outline-variant rounded-full flex items-center justify-center shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-primary">local_fire_department</span>
                    </div>
                    <div>
                      <h6 className="font-bold text-body-md">Chuỗi học tập (Streak) đạt 7 ngày</h6>
                      <p className="text-body-sm text-secondary">Bạn đang làm rất tốt! Duy trì phong độ nhé.</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <span className="font-label-code text-label-code block text-xs">3 NGÀY TRƯỚC</span>
                    <span className="material-symbols-outlined text-orange-500">stars</span>
                  </div>
                </div>

              </div>
            </div>
            <div className="text-center pt-4">
              <button className="font-label-code text-label-code text-primary border-b border-outline-variant hover:text-ai-purple hover:border-ai-purple transition-all">
                XEM TẤT CẢ HOẠT ĐỘNG
              </button>
            </div>
          </section>

        </main>
      </div>

      {/* Floating Cat AI Button */}
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
