export type SkillKey = 'listening' | 'reading' | 'writing' | 'speaking';

export interface SkillTopic {
  id: number;
  title: string;
  desc: string;
  lessonCount: number;
}

export interface SkillMeta {
  label: string;
  icon: string;
  iconColor: string;
  topics: SkillTopic[];
}
