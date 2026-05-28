import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
      <p className="text-[72px] font-bold text-primary leading-none">404</p>
      <h1 className="text-[20px] font-semibold text-on-surface">Trang không tồn tại</h1>
      <p className="text-secondary text-[14px]">Đường dẫn bạn truy cập không hợp lệ hoặc đã bị xóa.</p>
      <Link
        to="/"
        className="mt-2 px-6 py-2.5 bg-primary text-on-primary rounded-xl font-semibold text-[14px] hover:opacity-90 transition-opacity"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
