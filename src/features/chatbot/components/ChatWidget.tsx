import { useState } from 'react';
import { chatbotService } from '../services/chatbotService';
import type { ChatMessage } from '../types/chatbot.types';

interface ChatWidgetProps {
  open: boolean;
  onClose: () => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 0,
    role: 'ai',
    text: 'Xin chào! Mình là Miro 🐱 — trợ lý AI của Vietora. Hôm nay bạn muốn luyện kỹ năng gì?',
    createdAt: new Date().toISOString(),
  },
];

export default function ChatWidget({ open, onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);

  if (!open) return null;

  async function handleSend() {
    const text = input.trim();
    if (!text || sending) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      role: 'user',
      text,
      createdAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setSending(true);

    try {
      const reply = await chatbotService.sendMessage({ message: text });
      setMessages((prev) => [...prev, reply]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'ai',
          text: 'Miro đang gặp sự cố kết nối, bạn thử lại sau nhé!',
          createdAt: new Date().toISOString(),
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSend();
  }

  return (
    <div
      className="fixed z-[60] bg-white border border-outline-variant rounded-2xl shadow-xl flex flex-col"
      style={{ bottom: '120px', right: '64px', width: '360px', height: '480px' }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-outline-variant">
        <div className="w-8 h-8 bg-surface-container rounded-full flex items-center justify-center border border-outline-variant">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>smart_toy</span>
        </div>
        <div>
          <p className="text-[13px] font-semibold text-on-surface leading-tight">Miro AI</p>
          <p className="text-[11px] text-secondary leading-tight">Trợ lý học IELTS cá nhân</p>
        </div>
        <button
          onClick={onClose}
          className="ml-auto w-7 h-7 flex items-center justify-center rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>close</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
        {messages.map(({ id, role, text }) => (
          <div key={id} className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'}`}>
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Hỏi Miro bất cứ điều gì..."
            className="flex-1 bg-transparent text-[13px] text-on-surface placeholder:text-secondary outline-none"
          />
          <button
            onClick={handleSend}
            disabled={sending || !input.trim()}
            className="w-7 h-7 bg-primary text-on-primary rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity shrink-0 disabled:opacity-50"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>send</span>
          </button>
        </div>
      </div>
    </div>
  );
}
