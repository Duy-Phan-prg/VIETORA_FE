export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold text-primary mb-1">Lộ trình</h1>
        <p className="text-[14px] text-secondary">Kế hoạch học tập cá nhân hóa theo mục tiêu band của bạn.</p>
      </div>
      <div className="flex flex-col items-center justify-center" style={{ minHeight: '400px' }}>
        <span className="material-symbols-outlined text-secondary" style={{ fontSize: '48px' }}>menu_book</span>
        <p className="mt-4 text-[15px] font-semibold text-on-surface">Lộ trình đang được xây dựng</p>
        <p className="mt-1 text-[13px] text-secondary">Nội dung sẽ sớm được cập nhật.</p>
      </div>
    </div>
  );
}
