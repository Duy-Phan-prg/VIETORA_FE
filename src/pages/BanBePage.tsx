export default function BanBePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold text-primary mb-1">Bạn bè</h1>
        <p className="text-[14px] text-secondary">Kết nối và học cùng những người bạn đồng hành IELTS.</p>
      </div>
      <div className="flex flex-col items-center justify-center" style={{ minHeight: '400px' }}>
        <span className="material-symbols-outlined text-secondary" style={{ fontSize: '48px' }}>group</span>
        <p className="mt-4 text-[15px] font-semibold text-on-surface">Chưa có bạn bè nào</p>
        <p className="mt-1 text-[13px] text-secondary">Tìm kiếm và kết bạn để cùng nhau luyện tập.</p>
      </div>
    </div>
  );
}
