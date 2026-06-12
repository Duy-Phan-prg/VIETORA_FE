import api from '../../../lib/axios';
import type { ChatMessage, ChatRequest } from '../types/chatbot.types';

export const chatbotService = {
  sendMessage: (data: ChatRequest) =>
    api.post<ChatMessage>('/api/ai-chat/send', data).then((r) => r.data),

  getHistory: () =>
    api.get<ChatMessage[]>('/api/ai-chat/history').then((r) => r.data),
};
