import type { SkillKey, SkillMeta } from '../types/skillTraining.types';

export const SKILL_META: Record<SkillKey, SkillMeta> = {
  listening: {
    label: 'Listening',
    icon: 'headphones',
    iconColor: 'text-blue-500',
    topics: [
      { id: 1, title: 'Form Completion',   desc: 'Fill in information on a form',         lessonCount: 3 },
      { id: 2, title: 'Map Labeling',       desc: 'Label diagrams and maps',               lessonCount: 2 },
      { id: 3, title: 'Note Completion',    desc: 'Complete notes from the audio',         lessonCount: 3 },
      { id: 4, title: 'Multiple Choice',    desc: 'Choose the correct answer from the audio', lessonCount: 2 },
      { id: 5, title: 'Short Answer',       desc: 'Give short answers based on the audio', lessonCount: 2 },
    ],
  },
  reading: {
    label: 'Reading',
    icon: 'menu_book',
    iconColor: 'text-green-500',
    topics: [
      { id: 1, title: 'True/False/Not Given', desc: 'Determine whether information is true, false, or not given', lessonCount: 4 },
      { id: 2, title: 'Matching Headings',    desc: 'Match headings to paragraphs',          lessonCount: 3 },
      { id: 3, title: 'Fill in the Blank',    desc: 'Fill in the missing words',             lessonCount: 3 },
      { id: 4, title: 'Multiple Choice',      desc: 'Choose the correct answer from the passage', lessonCount: 2 },
      { id: 5, title: 'Sentence Completion',  desc: 'Complete sentences based on the passage', lessonCount: 3 },
    ],
  },
  writing: {
    label: 'Writing',
    icon: 'edit_note',
    iconColor: 'text-orange-500',
    topics: [
      { id: 1, title: 'Task 1 — Charts',       desc: 'Describe bar charts, line graphs, pie charts', lessonCount: 3 },
      { id: 2, title: 'Task 1 — Processes',    desc: 'Describe process diagrams and map changes', lessonCount: 2 },
      { id: 3, title: 'Task 2 — Opinion Essay', desc: 'Agree/Disagree, To what extent',        lessonCount: 3 },
      { id: 4, title: 'Task 2 — Discussion',    desc: 'Discuss both views and give opinion',   lessonCount: 2 },
    ],
  },
  speaking: {
    label: 'Speaking',
    icon: 'mic',
    iconColor: 'text-purple-500',
    topics: [
      { id: 1, title: 'Part 1 — Introduction', desc: 'Answer questions about yourself and daily life', lessonCount: 2 },
      { id: 2, title: 'Part 2 — Cue Card',     desc: 'Speak for 2 minutes on a given topic',     lessonCount: 3 },
      { id: 3, title: 'Part 3 — Discussion',   desc: 'In-depth discussion with the examiner',    lessonCount: 3 },
    ],
  },
};
