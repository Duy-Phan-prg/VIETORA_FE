const TREND_BARS = [40, 55, 45, 65, 60, 80, 70, 75, 65, 85];

const STRENGTHS = [
  { title: 'Academic Vocabulary', desc: 'Uses a wide range of complex collocations in Speaking.' },
  { title: 'Listening Skills (Section 1 & 4)', desc: '95% accuracy on detail-completion questions.' },
];

const WEAKNESSES = [
  { title: 'Ending Sounds Pronunciation', desc: 'Often drops /s/ and /ed/ sounds when speaking quickly.' },
  { title: 'Reading: Matching Headings', desc: 'Struggles to distinguish between similar main ideas.' },
];

const RECENT_TESTS = [
  { name: 'IELTS Listening Practice Test #12', date: 'Oct 24, 2023', score: '8.5', done: true  },
  { name: 'Cambridge 18 - Reading Test 1',     date: 'Oct 22, 2023', score: '7.0', done: true  },
  { name: 'IELTS Writing Task 2 - Education',  date: 'Oct 20, 2023', score: '6.5', done: false },
];

export default function ProgressPage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-[22px] font-bold text-[#1e3a5f] mb-1">Learning Progress</h1>
          <p className="text-[13px] text-secondary">Phân tích kết quả học tập 30 ngày qua.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white border border-outline-variant rounded-xl text-[13px] font-medium hover:bg-surface-container transition-colors flex items-center gap-2 text-secondary">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
            Last 30 days
          </button>
          <button className="px-4 py-2 bg-[#1e3a5f] text-white rounded-xl text-[13px] font-medium hover:bg-[#162d4a] transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Row 1: Chart + Skills */}
      <div className="grid gap-6" style={{ gridTemplateColumns: '2fr 1fr' }}>

        {/* Bar chart */}
        <div className="bg-white border border-outline-variant rounded-xl p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[16px] font-bold text-[#1e3a5f]">Trend Chart</h2>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-[#1e3a5f] rounded-full" />
              <span className="text-[11px] text-secondary uppercase tracking-wider">Average Score</span>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '160px' }}>
            {TREND_BARS.map((h, i) => (
              <div key={i} style={{
                flex: 1,
                height: `${h}%`,
                borderRadius: '4px 4px 0 0',
                background: i === 5 ? '#1e3a5f' : '#e2e8f0',
                transition: 'background 0.15s',
              }} />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-secondary mt-2">
            <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
          </div>
        </div>

        {/* Skills target */}
        <div className="bg-white border border-outline-variant rounded-xl p-6 flex flex-col">
          <h2 className="text-[16px] font-bold text-[#1e3a5f] mb-4">Target Skills</h2>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative flex items-center justify-center"
              style={{ width: '164px', height: '164px', borderRadius: '50%', border: '3px solid #e2e8f0' }}>
              <div className="absolute rounded-full" style={{ inset: '16px', border: '1px solid #e2e8f0' }} />
              <span className="material-symbols-outlined absolute text-[#1e3a5f]" style={{ fontSize: '18px', top: '-12px' }}>headphones</span>
              <span className="material-symbols-outlined absolute text-[#1e3a5f]" style={{ fontSize: '18px', right: '-16px' }}>record_voice_over</span>
              <span className="material-symbols-outlined absolute text-[#1e3a5f]" style={{ fontSize: '18px', bottom: '-12px' }}>book</span>
              <span className="material-symbols-outlined absolute text-[#1e3a5f]" style={{ fontSize: '18px', left: '-12px' }}>edit</span>
              <div className="text-center">
                <span className="text-[28px] font-bold text-[#1e3a5f] block leading-none">7.5</span>
                <span className="text-[10px] text-secondary uppercase tracking-wider">OVERALL</span>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2 border-t border-outline-variant pt-4">
            <div className="flex justify-between text-[12.5px]">
              <span className="text-secondary">Almost There</span>
              <span className="font-semibold text-[#1e3a5f]">Reading (8.0)</span>
            </div>
            <div className="flex justify-between text-[12.5px]">
              <span className="text-secondary">Needs Work</span>
              <span className="font-semibold text-[#f6b93b]">Writing (6.5)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Strengths + Weaknesses */}
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white border border-outline-variant rounded-xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg bg-[#1e3a5f]/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#1e3a5f]" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
            <h2 className="text-[15px] font-bold text-[#1e3a5f]">Strengths</h2>
          </div>
          <ul className="space-y-4">
            {STRENGTHS.map(({ title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 bg-[#1e3a5f] rounded-full shrink-0" />
                <div>
                  <p className="font-semibold text-[13.5px] text-[#1e3a5f]">{title}</p>
                  <p className="text-[12px] text-secondary mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-outline-variant rounded-xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-7 h-7 rounded-lg bg-[#f6b93b]/15 flex items-center justify-center">
              <span className="material-symbols-outlined text-[#f6b93b]" style={{ fontSize: '16px', fontVariationSettings: "'FILL' 1" }}>error</span>
            </div>
            <h2 className="text-[15px] font-bold text-[#1e3a5f]">Areas to Improve</h2>
          </div>
          <ul className="space-y-4">
            {WEAKNESSES.map(({ title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <div className="mt-2 w-1.5 h-1.5 bg-[#f6b93b] rounded-full shrink-0" />
                <div>
                  <p className="font-semibold text-[13.5px] text-[#1e3a5f]">{title}</p>
                  <p className="text-[12px] text-secondary mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Row 3: Recent Tests */}
      <div className="bg-white border border-outline-variant rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-outline-variant flex justify-between items-center">
          <h2 className="text-[15px] font-bold text-[#1e3a5f]">Recent Practice History</h2>
          <a href="#" className="text-[12.5px] text-[#1e3a5f] font-medium flex items-center gap-1 hover:underline">
            View All
            <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
          </a>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#f8fafc]">
              {['TEST', 'DATE', 'SCORE', 'STATUS', ''].map(col => (
                <th key={col} className="px-6 py-3 text-[10.5px] font-semibold text-secondary uppercase tracking-wider">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RECENT_TESTS.map(({ name, date, score, done }, i) => (
              <tr key={name} className={`text-[13px] hover:bg-[#f8fafc] transition-colors ${i > 0 ? 'border-t border-outline-variant' : ''}`}>
                <td className="px-6 py-4 font-medium text-[#1e3a5f]">{name}</td>
                <td className="px-6 py-4 text-secondary">{date}</td>
                <td className="px-6 py-4">
                  <span className="px-2.5 py-1 bg-[#1e3a5f]/8 text-[#1e3a5f] rounded-lg text-[12px] font-bold">{score}</span>
                </td>
                <td className="px-6 py-4">
                  {done ? (
                    <span className="flex items-center gap-1.5 text-[12px] text-[#1e3a5f] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1e3a5f] inline-block" />
                      Completed
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-[12px] text-[#f6b93b] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f6b93b] inline-block" />
                      Grading
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-secondary hover:text-[#1e3a5f] transition-colors">
                    <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{done ? 'visibility' : 'edit'}</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
