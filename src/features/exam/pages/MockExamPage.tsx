import PageShell from '../../../components/shared/PageShell';

export default function MockExamPage() {
  return (
    <PageShell
      icon="fact_check"
      title="Full Mock Exam"
      subtitle="Simulated IELTS test · Timed · Scored"
      description="A full-length IELTS simulation covering all 4 sections in timed conditions — Listening (30 min), Reading (60 min), Writing (60 min), Speaking (AI-evaluated). Results include band score estimates and section-level feedback."
      status="planned"
      features={[
        { icon: 'timer',             title: 'Timed Exam Engine',    desc: 'Each section runs with a countdown timer matching real IELTS conditions.' },
        { icon: 'headphones',        title: 'Listening Section',    desc: '4 sections, 40 questions. Audio playback with answer sheet sync.' },
        { icon: 'menu_book',         title: 'Reading Section',      desc: '3 academic passages, 40 questions. True/False/NG, MCQ, matching headings.' },
        { icon: 'edit_note',         title: 'Writing Section',      desc: 'Task 1 (chart/graph description) and Task 2 (essay). AI-graded with C/C/L/G breakdown.' },
        { icon: 'mic',               title: 'Speaking Section',     desc: 'Parts 1–3 prompts with AI speech analysis for fluency, vocabulary, pronunciation.' },
        { icon: 'assignment_turned_in', title: 'Score Report',      desc: 'Full band score estimate per skill + overall, with highlighted weak areas.' },
      ]}
    />
  );
}
