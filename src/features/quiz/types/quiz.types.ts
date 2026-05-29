export interface Quiz {
  id: number;
  title: string;
  skill: 'Listening' | 'Reading' | 'Writing' | 'Speaking';
  book: string;
}

export interface SubmitQuizRequest {
  quizId: number;
  answers: Record<string, string>;
}

export interface QuizResult {
  score: number;
  band: number;
  feedback: string;
}
