import PageShell from '../../../components/shared/PageShell';

export default function QuestionBankPage() {
  return (
    <PageShell
      icon="quiz"
      title="Question Bank"
      subtitle="Question repository · Search · Filter · Reuse"
      description="A searchable library of IELTS-style questions — MCQ, True/False/NG, gap-fill, essay prompts, and speaking cues. Teachers can pull questions into quizzes; learners can drill specific question types. Questions are tagged by skill, difficulty, topic, and source."
      status="planned"
      features={[
        { icon: 'search',         title: 'Smart Search',        desc: 'Search questions by keyword, skill, type, difficulty, or Cambridge test number.' },
        { icon: 'filter_list',    title: 'Multi-tag Filtering', desc: 'Filter by Listening/Reading/Writing/Speaking + question type simultaneously.' },
        { icon: 'bookmark_add',   title: 'Save to Study Set',   desc: 'Learners can save questions to a personal drill set or flashcard deck.' },
        { icon: 'add_circle',     title: 'Teacher Upload',      desc: 'Teachers add custom questions with model answers and scoring rubrics.' },
        { icon: 'shuffle',        title: 'Random Quiz Mode',    desc: 'Generate a randomised mini-quiz from any filtered subset of questions.' },
        { icon: 'analytics',      title: 'Attempt Tracking',    desc: 'Tracks how many times a learner attempted each question and their accuracy rate.' },
      ]}
    />
  );
}
