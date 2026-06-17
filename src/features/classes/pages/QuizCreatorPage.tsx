import PageShell from '../../../components/shared/PageShell';

export default function QuizCreatorPage() {
  return (
    <PageShell
      icon="edit_square"
      title="Quiz Creator"
      subtitle="Teacher tool · Build · Assign · Auto-grade"
      description="A drag-and-drop quiz builder for teachers. Pull questions from the Question Bank or write custom ones. Set time limits, assign to one or multiple classes, and let the system auto-grade objective questions. Writing tasks route to the teacher's grading queue."
      status="planned"
      features={[
        { icon: 'add_box',          title: 'Question Composer',   desc: 'Write MCQ, True/False, gap-fill, short answer, or essay questions with model answers.' },
        { icon: 'library_add',      title: 'Import from Bank',    desc: 'Search the Question Bank and add existing questions to a quiz in one click.' },
        { icon: 'timer',            title: 'Time Limit Settings', desc: 'Set overall quiz timer or per-question countdown. Timer is enforced on the student\'s screen.' },
        { icon: 'send',             title: 'Assign to Classes',   desc: 'Publish a quiz to one or multiple classes with a due date. Students see it in their dashboard.' },
        { icon: 'auto_awesome',     title: 'Auto-grading',        desc: 'MCQ and gap-fill are graded instantly. Writing tasks enter the teacher\'s review queue.' },
        { icon: 'content_copy',     title: 'Reuse & Clone',       desc: 'Clone a previous quiz, edit questions, and re-assign — no need to rebuild from scratch.' },
      ]}
    />
  );
}
