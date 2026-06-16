export default function FriendsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold text-primary mb-1">Friends</h1>
        <p className="text-[14px] text-secondary">Connect and study with your fellow IELTS learners.</p>
      </div>
      <div className="flex flex-col items-center justify-center" style={{ minHeight: '400px' }}>
        <span className="material-symbols-outlined text-secondary" style={{ fontSize: '48px' }}>group</span>
        <p className="mt-4 text-[15px] font-semibold text-on-surface">No friends yet</p>
        <p className="mt-1 text-[13px] text-secondary">Search for friends to practice together.</p>
      </div>
    </div>
  );
}
