export default function GhiChuPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold text-primary mb-1">Ghi chú</h1>
        <p className="text-[14px] text-secondary">Lưu lại những từ vựng, ngữ pháp và ý tưởng quan trọng.</p>
      </div>
      <div className="flex flex-col items-center justify-center" style={{ minHeight: '400px' }}>
        <span className="material-symbols-outlined text-secondary" style={{ fontSize: '48px' }}>push_pin</span>
        <p className="mt-4 text-[15px] font-semibold text-on-surface">Chưa có ghi chú nào</p>
        <p className="mt-1 text-[13px] text-secondary">Bắt đầu ghi chú để lưu lại kiến thức quan trọng.</p>
      </div>
    </div>
  );
}
