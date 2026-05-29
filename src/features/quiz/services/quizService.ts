import api from '../../../lib/axios';
import type { Quiz, SubmitQuizRequest, QuizResult } from '../types/quiz.types';

export const quizService = {
  getByBook: (book: string) =>
    api.get<Quiz[]>('/api/quiz', { params: { book } }).then((r) => r.data),

  submit: (data: SubmitQuizRequest) =>
    api.post<QuizResult>('/api/quiz/submit', data).then((r) => r.data),
};
