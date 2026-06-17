import PageShell from '../../../components/shared/PageShell';

export default function MyClassesPage() {
  return (
    <PageShell
      icon="school"
      title="My Classes"
      subtitle="Class management · Enroll · Track cohort progress"
      description="The central hub for structured learning cohorts. Students see classes they're enrolled in, access shared materials, view upcoming sessions, and track class-level assignments. Teachers manage their class roster, post resources, and monitor learner performance."
      status="in-progress"
      features={[
        { icon: 'group',              title: 'Class Roster',         desc: 'Teacher view: list of enrolled students with progress status and last active date.' },
        { icon: 'folder_shared',      title: 'Shared Materials',     desc: 'Class-specific material library — PDFs, flashcard sets, notes posted by the teacher.' },
        { icon: 'assignment',         title: 'Assignments',          desc: 'Teacher posts tasks (e.g. "Write Task 2 on education"); students submit and get AI + teacher feedback.' },
        { icon: 'calendar_month',     title: 'Class Schedule',       desc: 'Upcoming live sessions, submission deadlines, and class events in one calendar view.' },
        { icon: 'leaderboard',        title: 'Cohort Leaderboard',   desc: 'Gamified ranking of class members by weekly XP earned from practice and submissions.' },
        { icon: 'video_call',         title: 'Live Session Link',    desc: 'Quick-access button to join the class\'s scheduled Zoom/Meet session.' },
      ]}
    />
  );
}
