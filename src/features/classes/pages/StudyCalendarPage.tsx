import PageShell from '../../../components/shared/PageShell';

export default function StudyCalendarPage() {
  return (
    <PageShell
      icon="calendar_month"
      title="Study Calendar"
      subtitle="Session planning · Deadlines · Daily goals"
      description="A personal and class-aware calendar for scheduling study sessions, tracking submission deadlines, and blocking focused practice time. Integrates with class schedules and sends Zalo/push reminders before sessions."
      status="planned"
      features={[
        { icon: 'today',             title: 'Daily Study Block',    desc: 'Learner sets daily study slots; the app protects these as focus time and tracks completion.' },
        { icon: 'event',             title: 'Class Events',         desc: 'Class sessions, submission deadlines, and mock exam dates auto-populate from enrolled classes.' },
        { icon: 'alarm',             title: 'Smart Reminders',      desc: 'Zalo and push notifications 30 min before a scheduled session or deadline.' },
        { icon: 'repeat',            title: 'Weekly Study Plan',    desc: 'Set a recurring weekly schedule (e.g. "Writing on Mon/Wed, Listening daily") and track streaks.' },
        { icon: 'history',           title: 'Session History',      desc: 'Log of completed study sessions with duration and skill focus — feeds into Progress analytics.' },
        { icon: 'sync',              title: 'Google Calendar Sync', desc: 'Export study blocks and class events to Google Calendar or iCal.' },
      ]}
    />
  );
}
