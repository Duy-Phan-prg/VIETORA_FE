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
          <h1 className="text-[24px] font-bold text-primary mb-1">Learning Progress</h1>
          <p className="text-[14px] text-secondary">An analysis of your study results over the last 30 days.</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-surface-container-high rounded-xl text-[13px] font-medium hover:bg-surface-variant transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>calendar_today</span>
            Last 30 days
          </button>
          <button className="px-4 py-2 bg-primary text-on-primary rounded-xl text-[13px] font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>download</span>
            Export Report
          </button>
        </div>
      </div>

      {/* Row 1: Chart + Skills */}
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>

        {/* Bar chart */}
        <div className="bg-white border border-outline-variant rounded-xl p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-[18px] font-bold">Trend Chart</h2>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-primary rounded-full" />
              <span className="text-[11px] text-secondary uppercase tracking-wider">Average Score</span>
            </div>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '180px' }}>
              {TREND_BARS.map((h, i) => (
                <div key={i} className="cursor-pointer transition-all" style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: '4px 4px 0 0',
                  backgroundColor: i === 5 ? '#000000' : '#e2e2e7',
                }} />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-secondary mt-2">
              <span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span>
            </div>
          </div>
        </div>

        {/* Skills target */}
        <div className="bg-white border border-outline-variant rounded-xl p-6 flex flex-col">
          <h2 className="text-[18px] font-bold mb-6">Target Skills</h2>
          <div className="flex-1 flex items-center justify-center">
            <div className="relative flex items-center justify-center"
              style={{ width: '176px', height: '176px', borderRadius: '50%', border: '4px solid #ededf2' }}>
              <div className="absolute rounded-full border border-outline-variant" style={{ inset: '16px', opacity: 0.3 }} />
              <div className="absolute rounded-full border border-outline-variant" style={{ inset: '40px', opacity: 0.3 }} />
              <span className="material-symbols-outlined absolute text-primary" style={{ fontSize: '20px', top: '-14px' }}>headphones</span>
              <span className="material-symbols-outlined absolute text-primary" style={{ fontSize: '20px', right: '-18px' }}>record_voice_over</span>
              <span className="material-symbols-outlined absolute text-primary" style={{ fontSize: '20px', bottom: '-14px' }}>book</span>
              <span className="material-symbols-outlined absolute text-primary" style={{ fontSize: '20px', left: '-14px' }}>edit</span>
              <div className="text-center">
                <span className="text-[28px] font-bold block leading-none">7.5</span>
                <span className="text-[10px] text-secondary uppercase tracking-wider">OVERALL</span>
              </div>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-[13px]">
              <span className="text-secondary">Almost There</span>
              <span className="font-semibold">Reading (8.0)</span>
            </div>
            <div className="flex justify-between text-[13px]">
              <span className="text-secondary">Needs Improvement</span>
              <span className="font-semibold">Writing (6.5)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Strengths + Weaknesses */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div className="bg-white border border-outline-variant rounded-xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#16a34a' }}>check_circle</span>
            <h2 className="text-[18px] font-bold">Strengths</h2>
          </div>
          <ul className="space-y-4">
            {STRENGTHS.map(({ title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                <div>
                  <p className="font-semibold text-[15px]">{title}</p>
                  <p className="text-[13px] text-secondary mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-outline-variant rounded-xl p-8">
          <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined" style={{ fontSize: '20px', color: '#f97316' }}>error</span>
            <h2 className="text-[18px] font-bold">Areas to Improve</h2>
          </div>
          <ul className="space-y-4">
            {WEAKNESSES.map(({ title, desc }) => (
              <li key={title} className="flex items-start gap-3">
                <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                <div>
                  <p className="font-semibold text-[15px]">{title}</p>
                  <p className="text-[13px] text-secondary mt-0.5">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Row 3: Recent Tests */}
      <div className="bg-white border border-outline-variant rounded-xl overflow-hidden">
        <div className="px-6 py-5 border-b border-outline-variant flex justify-between items-center">
          <h2 className="text-[18px] font-bold">Recent Practice History</h2>
          <a href="#" className="text-[13px] text-primary font-medium flex items-center gap-1 hover:underline">
            View All
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>arrow_forward</span>
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-surface-container">
                {['TEST', 'DATE', 'SCORE', 'STATUS', ''].map(col => (
                  <th key={col} className="px-6 py-3 text-[11px] font-semibold text-secondary uppercase tracking-wider">{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RECENT_TESTS.map(({ name, date, score, done }, i) => (
                <tr key={name} className={`text-[14px] hover:bg-surface-container-low transition-colors ${i > 0 ? 'border-t border-outline-variant' : ''}`}>
                  <td className="px-6 py-4 font-semibold">{name}</td>
                  <td className="px-6 py-4 text-secondary">{date}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-surface-container-highest rounded text-[13px] font-bold">{score}</span>
                  </td>
                  <td className="px-6 py-4">
                    {done ? (
                      <span className="flex items-center gap-2 text-[13px]" style={{ color: '#16a34a' }}>
                        <span className="w-2 h-2 rounded-full inline-block" style={{ background: '#16a34a' }} />
                        Completed
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-[13px] text-secondary">
                        <span className="w-2 h-2 bg-outline rounded-full inline-block" />
                        Grading
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-secondary hover:text-primary transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>{done ? 'visibility' : 'edit'}</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
