export interface VocabWord {
  id: number;
  word: string;
  definition: string;
  example: string;
  level: 'B1' | 'B2' | 'C1' | 'C2';
}

export interface SearchVocabRequest {
  query: string;
}
