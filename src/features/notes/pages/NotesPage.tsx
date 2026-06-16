export default function NotesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-[24px] font-bold text-primary mb-1">Notes</h1>
        <p className="text-[14px] text-secondary">Save important vocabulary, grammar points, and ideas.</p>
      </div>
      <div className="flex flex-col items-center justify-center" style={{ minHeight: '400px' }}>
        <span className="material-symbols-outlined text-secondary" style={{ fontSize: '48px' }}>push_pin</span>
        <p className="mt-4 text-[15px] font-semibold text-on-surface">No notes yet</p>
        <p className="mt-1 text-[13px] text-secondary">Start taking notes to keep track of what you've learned.</p>
      </div>
    </div>
  );
}
