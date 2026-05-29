import api from '../../../lib/axios';
import type { Note, CreateNoteRequest } from '../types/notes.types';

export const notesService = {
  getAll: () =>
    api.get<Note[]>('/api/notes').then((r) => r.data),

  create: (data: CreateNoteRequest) =>
    api.post<Note>('/api/notes', data).then((r) => r.data),

  delete: (id: number) =>
    api.delete(`/api/notes/${id}`),
};
