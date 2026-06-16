import { SCORES, STUDYING } from '../../../constants/dashboard';

export default function DashboardPage() {
  return (
    <div className="space-y-stack-lg">

      {/* Welcome Banner */}
      <section
        className="relative overflow-hidden text-white p-10 rounded-xl"
        style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5485 100%)' }}
      >
        <div className="relative z-10 max-w-2xl">
          <span className="inline-block font-label-code text-label-code text-[#1e3a5f] uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-[#f6b93b] font-bold">
            Welcome Back
          </span>
          <h3 className="font-bold text-display-lg-mobile md:text-display-lg mb-4">
            Welcome back, IELTS warrior!
          </h3>
          <p className="text-body-lg text-white/80 mb-6">
            You've completed 75% of your roadmap this week. Just 2 more mock tests to hit your Band 7.5 goal!
          </p>
          <button className="px-8 py-3 bg-[#f6b93b] text-[#1e3a5f] rounded-xl font-bold hover:bg-[#ffc94d] transition-colors">
            Continue Learning
          </button>
        </div>

        {/* Decorative icon */}
        <span
          className="material-symbols-outlined absolute pointer-events-none select-none"
          style={{ right: '-30px', bottom: '-50px', fontSize: '260px', color: 'rgba(255,255,255,0.08)' }}
        >
          school
        </span>

        {/* Dot pattern */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-25 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              background: 'radial-gradient(circle, rgba(246,185,59,0.5) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
        </div>
      </section>

      {/* Currently Studying & Scores */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-gutter">

        {/* Currently Studying */}
        <div className="space-y-3">
          <h4 className="font-headline-md text-headline-md">Currently Studying</h4>
          <div className="space-y-2">
            {STUDYING.map(({ icon, title, lesson, pct }) => (
              <div
                key={title}
                className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer"
              >
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

        {/* Practice Scores */}
        <div className="space-y-3">
          <h4 className="font-headline-md text-headline-md">Practice Scores</h4>
          <div className="grid grid-cols-2 gap-3">
            {SCORES.map(({ skill, pts, max }) => (
              <div key={skill} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-4">
                <p className="text-[11px] font-semibold text-secondary uppercase tracking-wider mb-2">{skill}</p>
                <p className="text-[30px] font-bold text-primary leading-none">{pts.toLocaleString()}</p>
                <p className="text-[11px] text-secondary mt-1">/{max.toLocaleString()} pts</p>
                <div className="mt-2 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="bg-primary h-full rounded-full transition-all" style={{ width: `${(pts / max) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-primary text-on-primary rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-[11px] text-on-primary/60 uppercase tracking-wider">Total Score</p>
              <p className="text-[28px] font-bold leading-none mt-1">
                {SCORES.reduce((s, r) => s + r.pts, 0).toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[11px] text-on-primary/60 uppercase tracking-wider">Best Skill</p>
              <p className="text-[18px] font-bold leading-none mt-1 text-ai-purple">
                {SCORES.reduce((a, b) => a.pts > b.pts ? a : b).skill}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses In Progress */}
      <section className="space-y-stack-md">
        <h4 className="font-headline-md text-headline-md">Courses In Progress</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

          {/* Wide card */}
          <div className="md:col-span-2 group relative bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:bg-surface-container-low cursor-pointer transition-colors">
            <div className="flex h-full">
              <div className="w-2/5 relative bg-surface-container flex items-center justify-center">
                <span className="material-symbols-outlined text-primary opacity-30" style={{ fontSize: '64px' }}>edit_note</span>
              </div>
              <div className="w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">
                    Intensive
                  </span>
                  <h5 className="text-headline-md font-bold mt-4 mb-2">IELTS Writing Task 2 Masterclass</h5>
                  <p className="text-body-sm text-secondary">
                    An in-depth analysis of the 10 most common essay types with an expert instructor.
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-ai-purple">schedule</span>
                    <span className="text-body-sm font-bold">12/20 lessons</span>
                  </div>
                  <button className="p-2 border border-outline-variant rounded-lg hover:bg-primary hover:text-on-primary transition-all">
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Small card */}
          <div className="bg-surface-container-lowest border border-outline-variant p-8 rounded-xl flex flex-col justify-between hover:bg-surface-container-low cursor-pointer transition-colors">
            <div>
              <div className="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center mb-6 border border-outline-variant">
                <span className="material-symbols-outlined text-primary">menu_book</span>
              </div>
              <h5 className="text-headline-sm font-bold mb-2">Reading: True/False/Not Given</h5>
              <p className="text-body-sm text-secondary">Tips for spotting the most common information traps.</p>
            </div>
            <div className="mt-8">
              <div className="w-full bg-surface-container-high h-2 rounded-full mb-3 overflow-hidden">
                <div className="bg-primary h-full w-[45%]" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold">45% Complete</span>
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
        <h4 className="font-headline-md text-headline-md">Recent Activity</h4>
        <div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden">
          <div className="divide-y divide-outline-variant">

            <div className="p-6 flex items-center justify-between hover:bg-surface-container-low transition-colors border-l-4 border-ai-purple">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white border border-outline-variant rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-ai-purple">assignment_turned_in</span>
                </div>
                <div>
                  <h6 className="font-bold text-body-md">Completed Listening Mock Test #4</h6>
                  <p className="text-body-sm text-secondary">Result: 8.0 - Improved by 0.5 from last time.</p>
                </div>
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className="font-label-code text-label-code block text-xs">2 HOURS AGO</span>
                <button className="text-ai-purple font-bold text-sm hover:underline mt-1">View Details</button>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white border border-outline-variant rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-primary">forum</span>
                </div>
                <div>
                  <h6 className="font-bold text-body-md">Submitted Writing Task 1</h6>
                  <p className="text-body-sm text-secondary">Awaiting feedback and grading from your teacher.</p>
                </div>
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className="font-label-code text-label-code block text-xs">YESTERDAY</span>
                <span className="inline-block px-3 py-1 bg-surface-container-high rounded-full text-[10px] font-bold mt-1">
                  PENDING
                </span>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between hover:bg-surface-container-low transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-white border border-outline-variant rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <span className="material-symbols-outlined text-primary">local_fire_department</span>
                </div>
                <div>
                  <h6 className="font-bold text-body-md">Reached a 7-day study streak</h6>
                  <p className="text-body-sm text-secondary">You're doing great! Keep up the momentum.</p>
                </div>
              </div>
              <div className="text-right shrink-0 ml-4">
                <span className="font-label-code text-label-code block text-xs">3 DAYS AGO</span>
                <span className="material-symbols-outlined text-orange-500">stars</span>
              </div>
            </div>

          </div>
        </div>
        <div className="text-center pt-4">
          <button className="font-label-code text-label-code text-primary border-b border-outline-variant hover:text-ai-purple hover:border-ai-purple transition-all">
            VIEW ALL ACTIVITY
          </button>
        </div>
      </section>

    </div>
  );
}
