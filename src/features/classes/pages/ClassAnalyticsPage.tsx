import PageShell from '../../../components/shared/PageShell';

export default function ClassAnalyticsPage() {
  return (
    <PageShell
      icon="bar_chart"
      title="Class Analytics"
      subtitle="Teacher view · Cohort performance · Intervention alerts"
      description="Gives teachers a real-time view of how their class is performing. Aggregates quiz scores, practice frequency, and AI-evaluated writing scores into a cohort dashboard. Flags learners who are falling behind so teachers can intervene early."
      status="planned"
      features={[
        { icon: 'leaderboard',     title: 'Cohort Score Overview',  desc: 'Average band score per skill across the class, with week-over-week trend.' },
        { icon: 'person',          title: 'Per-Student Drilldown',  desc: 'Click any student to see their full activity log, scores, and submission history.' },
        { icon: 'warning',         title: 'At-Risk Alerts',         desc: 'Flags students who haven\'t logged in for 3+ days or whose scores are declining.' },
        { icon: 'assignment_late', title: 'Submission Tracker',     desc: 'Lists all assignments with submitted/pending/missing status per student.' },
        { icon: 'insights',        title: 'Skill Gap Heatmap',      desc: 'A heatmap of skill × student — shows which skill is weak across the whole cohort.' },
        { icon: 'download',        title: 'Export Report',          desc: 'Download a PDF or CSV progress report for the class or individual students.' },
      ]}
    />
  );
}
