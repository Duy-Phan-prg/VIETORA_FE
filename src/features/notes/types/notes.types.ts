export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

export interface CreateNoteRequest {
  title: string;
  content: string;
}

export type MaterialType = 'pdf' | 'flashcard' | 'note' | 'quiz';
export type SkillTag = 'Listening' | 'Reading' | 'Writing' | 'Speaking';
export type MaterialSource = 'mine' | 'buddy' | 'class';

export interface Flashcard {
  front: string;
  back: string;
}

export interface Material {
  id: string;
  name: string;
  type: MaterialType;
  skill: SkillTag | null;
  starred: boolean;
  isPublic: boolean;
  createdAt: string;
  source: MaterialSource;
  author?: string;
  classId?: string;
  cards?: Flashcard[];   // flashcard type only
  fileSize?: string;     // pdf type only
}

export type KBSection =
  | 'all' | 'starred' | 'recent'
  | 'listening' | 'reading' | 'writing' | 'speaking'
  | 'pdf' | 'flashcard' | 'note' | 'quiz'
  | 'buddy' | 'class';
