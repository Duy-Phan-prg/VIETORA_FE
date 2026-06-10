import type { SkillKey, SkillMeta } from '../types/skillTraining.types';

export const SKILL_META: Record<SkillKey, SkillMeta> = {
  listening: {
    label: 'Listening',
    icon: 'headphones',
    iconColor: 'text-blue-500',
    topics: [
      { id: 1, title: 'Form Completion',   desc: 'Điền thông tin vào biểu mẫu',           lessonCount: 3 },
      { id: 2, title: 'Map Labeling',       desc: 'Ghi chú trên sơ đồ, bản đồ',            lessonCount: 2 },
      { id: 3, title: 'Note Completion',    desc: 'Hoàn thành ghi chú từ bài nghe',        lessonCount: 3 },
      { id: 4, title: 'Multiple Choice',    desc: 'Chọn đáp án đúng từ bài nghe',          lessonCount: 2 },
      { id: 5, title: 'Short Answer',       desc: 'Trả lời ngắn gọn từ bài nghe',          lessonCount: 2 },
    ],
  },
  reading: {
    label: 'Reading',
    icon: 'menu_book',
    iconColor: 'text-green-500',
    topics: [
      { id: 1, title: 'True/False/Not Given', desc: 'Xác định thông tin đúng/sai/không có', lessonCount: 4 },
      { id: 2, title: 'Matching Headings',    desc: 'Ghép tiêu đề với đoạn văn',            lessonCount: 3 },
      { id: 3, title: 'Fill in the Blank',    desc: 'Điền từ vào chỗ trống',                lessonCount: 3 },
      { id: 4, title: 'Multiple Choice',      desc: 'Chọn đáp án đúng từ bài đọc',          lessonCount: 2 },
      { id: 5, title: 'Sentence Completion',  desc: 'Hoàn thành câu từ thông tin bài đọc',  lessonCount: 3 },
    ],
  },
  writing: {
    label: 'Writing',
    icon: 'edit_note',
    iconColor: 'text-orange-500',
    topics: [
      { id: 1, title: 'Task 1 — Biểu đồ',      desc: 'Mô tả bar chart, line graph, pie chart', lessonCount: 3 },
      { id: 2, title: 'Task 1 — Quy trình',    desc: 'Mô tả process diagram, map change',     lessonCount: 2 },
      { id: 3, title: 'Task 2 — Opinion Essay', desc: 'Agree/Disagree, To what extent',        lessonCount: 3 },
      { id: 4, title: 'Task 2 — Discussion',    desc: 'Discuss both views and give opinion',   lessonCount: 2 },
    ],
  },
  speaking: {
    label: 'Speaking',
    icon: 'mic',
    iconColor: 'text-purple-500',
    topics: [
      { id: 1, title: 'Part 1 — Introduction', desc: 'Trả lời câu hỏi về bản thân và cuộc sống', lessonCount: 2 },
      { id: 2, title: 'Part 2 — Cue Card',     desc: 'Nói 2 phút theo chủ đề gợi ý',             lessonCount: 3 },
      { id: 3, title: 'Part 3 — Discussion',   desc: 'Thảo luận chuyên sâu với giám khảo',        lessonCount: 3 },
    ],
  },
};
