const SUGGESTIONS = [
  {
    icon: 'headphones',
    tag: 'Listening',
    title: 'Luyện Section 4 — Academic Monologue',
    desc: 'Dựa trên lỗi sai gần đây, bạn cần luyện thêm dạng điền số liệu trong bài độc thoại học thuật.',
    cta: 'Bắt đầu luyện',
  },
  {
    icon: 'edit_note',
    tag: 'Writing',
    title: 'Task 2 — Discuss Both Views',
    desc: 'Band hiện tại của bạn là 6.5. AI gợi ý tập trung vào cohesion và linking words để lên 7.0.',
    cta: 'Xem bài mẫu',
  },
  {
    icon: 'record_voice_over',
    tag: 'Speaking',
    title: 'Part 2 — Describe a place',
    desc: 'Bạn hay bỏ âm cuối khi nói nhanh. Thử bài luyện phát âm này để cải thiện fluency.',
    cta: 'Luyện ngay',
  },
];

const CHAT_HISTORY = [
  { role: 'ai', text: 'Xin chào! Mình là Mori 🐱 — trợ lý AI của Vietora. Hôm nay bạn muốn luyện kỹ năng gì?' },
  { role: 'user', text: 'Cho mình vài gợi ý để cải thiện Writing Task 2.' },
  { role: 'ai', text: 'Dựa trên lịch sử luyện tập, bạn đang ở Band 6.5. Để lên 7.0, mình gợi ý: (1) Luyện viết topic sentence rõ ràng hơn, (2) Dùng cohesive devices đa dạng, (3) Tránh lặp từ — dùng paraphrase nhiều hơn nhé!' },
];

export default function GoiYAIPage() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-[24px] font-bold text-primary mb-1">Gợi ý AI</h1>
        <p className="text-[14px] text-secondary">Mori phân tích tiến độ của bạn và đề xuất bài học phù hợp nhất hôm nay.</p>
      </div>

      {/* Two-column layout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '24px', alignItems: 'start' }}>

        {/* Left: suggestion cards */}
        <div className="space-y-4">
          <h2 className="text-[15px] font-semibold text-on-surface">Đề xuất cho hôm nay</h2>
          {SUGGESTIONS.map(({ icon, tag, title, desc, cta }) => (
            <div key={title} className="bg-white border border-outline-variant rounded-xl p-5 hover:bg-surface-container-lowest transition-colors cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-surface-container rounded-xl flex items-center justify-center shrink-0 border border-outline-variant">
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px' }}>{icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-surface-container rounded-full text-secondary">{tag}</span>
                  </div>
                  <p className="text-[14px] font-semibold text-on-surface mb-1">{title}</p>
                  <p className="text-[12px] text-secondary leading-relaxed">{desc}</p>
                  <button className="mt-3 text-[12px] font-semibold text-primary hover:underline flex items-center gap-1">
                    {cta}
                    <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: chat with Mori */}
        <div className="bg-white border border-outline-variant rounded-xl flex flex-col" style={{ height: '480px' }}>
          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-outline-variant">
            <div className="w-8 h-8 bg-surface-container rounded-full flex items-center justify-center border border-outline-variant">
              <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>smart_toy</span>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-on-surface leading-tight">Mori AI</p>
              <p className="text-[11px] text-secondary leading-tight">Trợ lý học IELTS cá nhân</p>
            </div>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block" />
              <span className="text-[11px] text-secondary">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
            {CHAT_HISTORY.map(({ role, text }, i) => (
              <div key={i} className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {role === 'ai' && (
                  <div className="w-6 h-6 bg-surface-container rounded-full flex items-center justify-center shrink-0 mr-2 mt-0.5 border border-outline-variant">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '12px' }}>smart_toy</span>
                  </div>
                )}
                <div className={`max-w-[78%] px-4 py-2.5 rounded-2xl text-[13px] leading-relaxed ${
                  role === 'user'
                    ? 'bg-primary text-on-primary rounded-br-sm'
                    : 'bg-surface-container text-on-surface rounded-bl-sm'
                }`}>
                  {text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-outline-variant">
            <div className="flex items-center gap-2 bg-surface-container rounded-xl px-4 py-2.5">
              <input
                type="text"
                placeholder="Hỏi Mori bất cứ điều gì..."
                className="flex-1 bg-transparent text-[13px] text-on-surface placeholder:text-secondary outline-none"
              />
              <button className="w-7 h-7 bg-primary text-on-primary rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity shrink-0">
                <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>send</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
