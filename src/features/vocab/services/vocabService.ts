import api from '../../../lib/axios';
import type { VocabWord, SearchVocabRequest } from '../types/vocab.types';

export const vocabService = {
  search: (data: SearchVocabRequest) =>
    api.get<VocabWord[]>('/api/vocabulary/search', { params: data }).then((r) => r.data),

  getSaved: () =>
    api.get<VocabWord[]>('/api/vocabulary/saved').then((r) => r.data),

  save: (wordId: number) =>
    api.post(`/api/vocabulary/saved/${wordId}`),
};
