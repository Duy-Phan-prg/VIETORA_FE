import PageShell from '../../../components/shared/PageShell';

export default function SkillRadarPage() {
  return (
    <PageShell
      icon="radar"
      title="Skill Radar"
      subtitle="Skill assessment · Band score breakdown"
      description="A visual radar chart showing the learner's current estimated band score across all 4 IELTS skills — Listening, Reading, Writing, Speaking. Scores are derived from practice test results and AI evaluation."
      status="planned"
      features={[
        { icon: 'radar',          title: 'Radar Chart',         desc: 'Displays a 4-axis radar (L/R/W/S) with current score vs. target band.' },
        { icon: 'trending_up',    title: 'Score History',       desc: 'Timeline of each skill score over the past 30/90 days.' },
        { icon: 'emoji_events',   title: 'Target Gap Analysis', desc: 'Shows how far each skill is from the learner\'s target band (e.g. 7.5).' },
        { icon: 'psychology',     title: 'AI Skill Diagnosis',  desc: 'AI identifies root causes of weak areas (e.g. "Slow reading speed in Section 3").' },
        { icon: 'flag',           title: 'Skill Milestones',    desc: 'Badges awarded when a skill crosses a band threshold (e.g. Reading 7.0 → 7.5).' },
        { icon: 'compare_arrows', title: 'Peer Benchmark',      desc: 'Compare your radar shape against the community average for your target band.' },
      ]}
    />
  );
}
