import { SCORES, STUDYING } from '../../../constants/dashboard';

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* Banner */}
      <section className="relative overflow-hidden rounded-2xl bg-primary text-white p-8">
        <div className="relative z-10">
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-accent text-primary mb-3">
            Welcome Back
          </span>
          <h1 className="text-[26px] font-bold leading-snug mb-2">
            Welcome back, IELTS warrior!
          </h1>
          <p className="text-[13px] text-white/70 mb-5 max-w-lg">
            You've completed 75% of your roadmap this week. Just 2 more mock tests to hit your Band 7.5 goal!
          </p>
          <button className="px-5 py-2 bg-accent text-primary rounded-xl text-[13px] font-bold hover:opacity-90 transition-opacity">
            Continue Learning
          </button>
        </div>
        <span className="material-symbols-outlined absolute right-[-20px] bottom-[-40px] select-none pointer-events-none text-white/5" style={{ fontSize: '220px' }}>
          school
        </span>
      </section>

      {/* Currently Studying + Scores */}
      <div className="grid grid-cols-2 gap-6">

        {/* Currently Studying */}
        <div>
          <h2 className="text-[14px] font-bold text-primary mb-3">Currently Studying</h2>
          <div className="space-y-2">
            {STUDYING.map(({ icon, title, lesson, pct }) => (
              <div key={title} className="flex items-center gap-3 p-4 bg-white border border-outline-variant rounded-xl hover:bg-surface-container transition-colors cursor-pointer">
                <div className="w-9 h-9 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>{icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-semibold text-on-surface truncate">{title}</p>
                  <p className="text-[11px] text-secondary mb-1">{lesson}</p>
                  <div className="h-1 bg-outline-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>chevron_right</span>
              </div>
            ))}
          </div>
        </div>

        {/* Practice Scores */}
        <div>
          <h2 className="text-[14px] font-bold text-primary mb-3">Practice Scores</h2>
          <div className="grid grid-cols-2 gap-3 mb-3">
            {SCORES.map(({ skill, pts, max }) => (
              <div key={skill} className="bg-white border border-outline-variant rounded-xl p-4">
                <p className="text-[10px] font-semibold text-secondary uppercase tracking-wider mb-1">{skill}</p>
                <p className="text-[24px] font-bold text-on-surface leading-none">{pts.toLocaleString()}</p>
                <p className="text-[11px] text-secondary mt-0.5">/{max.toLocaleString()} pts</p>
                <div className="mt-2 h-1 bg-outline-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full" style={{ width: `${(pts / max) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-primary text-white rounded-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] text-white/50 uppercase tracking-wider">Total Score</p>
              <p className="text-[24px] font-bold leading-none mt-1">
                {SCORES.reduce((s, r) => s + r.pts, 0).toLocaleString()}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-white/50 uppercase tracking-wider">Best Skill</p>
              <p className="text-[18px] font-bold leading-none mt-1 text-accent">
                {SCORES.reduce((a, b) => a.pts > b.pts ? a : b).skill}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Courses In Progress */}
      <div>
        <h2 className="text-[14px] font-bold text-primary mb-3">Courses In Progress</h2>
        <div className="grid grid-cols-3 gap-4">

          <div className="col-span-2 bg-white border border-outline-variant rounded-xl overflow-hidden hover:shadow-sm transition-shadow cursor-pointer">
            <div className="flex h-full">
              <div className="w-2/5 bg-primary/5 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary/20" style={{ fontSize: '64px' }}>edit_note</span>
              </div>
              <div className="w-3/5 p-5 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-primary text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">Intensive</span>
                  <h3 className="text-[13.5px] font-bold text-on-surface mt-2 mb-1">IELTS Writing Task 2 Masterclass</h3>
                  <p className="text-[12px] text-secondary">An in-depth analysis of the 10 most common essay types.</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[12px] text-secondary font-medium">12 / 20 lessons</span>
                  <button className="p-1.5 border border-outline-variant rounded-lg hover:bg-primary hover:text-white hover:border-primary transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white border border-outline-variant rounded-xl p-5 flex flex-col justify-between hover:shadow-sm transition-shadow cursor-pointer">
            <div>
              <div className="w-9 h-9 bg-primary/8 rounded-xl flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>menu_book</span>
              </div>
              <h3 className="text-[13px] font-bold text-on-surface mb-1">Reading: True/False/Not Given</h3>
              <p className="text-[12px] text-secondary">Tips for spotting information traps.</p>
            </div>
            <div className="mt-4">
              <div className="h-1 bg-outline-variant rounded-full overflow-hidden mb-2">
                <div className="h-full bg-primary w-[45%]" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-semibold text-secondary">45%</span>
                <span className="material-symbols-outlined text-primary hover:text-accent transition-colors cursor-pointer" style={{ fontSize: '22px' }}>play_circle</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-[14px] font-bold text-primary mb-3">Recent Activity</h2>
        <div className="bg-white border border-outline-variant rounded-xl divide-y divide-outline-variant overflow-hidden">

          <div className="flex items-center gap-4 p-4 hover:bg-surface-container transition-colors border-l-[3px] border-primary">
            <div className="w-9 h-9 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>assignment_turned_in</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-on-surface">Completed Listening Mock Test #4</p>
              <p className="text-[12px] text-secondary">Result: 8.0 — Improved by 0.5 from last time.</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] text-secondary uppercase tracking-wider">2 hours ago</p>
              <button className="text-[12px] font-semibold text-primary hover:underline mt-0.5">View</button>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 hover:bg-surface-container transition-colors">
            <div className="w-9 h-9 bg-primary/8 rounded-xl flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>forum</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-on-surface">Submitted Writing Task 1</p>
              <p className="text-[12px] text-secondary">Awaiting feedback and grading.</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] text-secondary uppercase tracking-wider">Yesterday</p>
              <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-accent/15 text-primary mt-0.5">PENDING</span>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 hover:bg-surface-container transition-colors">
            <div className="w-9 h-9 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-accent" style={{ fontSize: '18px' }}>local_fire_department</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[13px] font-semibold text-on-surface">Reached a 7-day study streak</p>
              <p className="text-[12px] text-secondary">You're doing great! Keep up the momentum.</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[10px] text-secondary uppercase tracking-wider">3 days ago</p>
              <span className="material-symbols-outlined text-accent mt-0.5" style={{ fontSize: '18px', fontVariationSettings: "'FILL' 1" }}>stars</span>
            </div>
          </div>

        </div>
        <div className="text-center mt-3">
          <button className="text-[12.5px] font-semibold text-primary hover:underline">View all activity</button>
        </div>
      </div>

    </div>
  );
}
