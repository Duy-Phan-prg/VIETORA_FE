import { useState } from 'react';

const CAM_BOOKS = Array.from({ length: 20 }, (_, i) => `Bộ đề Cambridge ${i + 1}`);

export default function LuyendePage() {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      {selectedBook === null ? (
        <div className="border border-outline-variant" style={{ borderRadius: '16px', padding: '40px 48px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
            {[0, 1, 2, 3, 4].map(col => (
              <div key={col} className="flex flex-col gap-5">
                {CAM_BOOKS.slice(col * 4, col * 4 + 4).map(book => (
                  <button
                    key={book}
                    onClick={() => setSelectedBook(book)}
                    className="text-left text-[14px] text-on-surface hover:text-primary hover:font-semibold transition-all whitespace-nowrap"
                  >
                    {book}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6 text-center">
          <button
            onClick={() => setSelectedBook(null)}
            className="flex items-center gap-2 text-[13px] text-secondary hover:text-primary transition-colors self-start"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_back</span>
            Quay lại
          </button>
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '64px' }}>menu_book</span>
          <h4 className="font-bold text-headline-md">{selectedBook}</h4>
          <p className="text-secondary text-body-md max-w-sm">Nội dung {selectedBook} đang được cập nhật.</p>
        </div>
      )}
    </div>
  );
}
