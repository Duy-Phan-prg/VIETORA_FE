import api from '../../../lib/axios';
import type { ChatMessage, ChatRequest } from '../types/ai.types';

export const aiService = {
  sendMessage: (data: ChatRequest) =>
    api.post<ChatMessage>('/api/ai-chat/send', data).then((r) => r.data),

  getHistory: () =>
    api.get<ChatMessage[]>('/api/ai-chat/history').then((r) => r.data),
};
