export type MessageRole = 'user' | 'ai';

export interface ChatMessage {
  id: number;
  role: MessageRole;
  text: string;
  createdAt: string;
}

export interface ChatRequest {
  message: string;
}
