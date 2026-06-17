import PageShell from '../../../components/shared/PageShell';

export default function StudyPartnersPage() {
  return (
    <PageShell
      icon="people"
      title="Study Partners"
      subtitle="Peer learning · Speaking practice · Accountability pairs"
      description="Connects learners with study partners at a similar band level for Speaking practice sessions, writing exchange, and accountability check-ins. Partners are matched by target band, available time slots, and skill focus."
      status="planned"
      features={[
        { icon: 'person_search',   title: 'Partner Matching',      desc: 'AI-matched partners based on target band, weak skills, timezone, and availability.' },
        { icon: 'mic',             title: 'Speaking Exchange',     desc: 'Book 1-on-1 speaking sessions — each person takes turns as examiner and candidate.' },
        { icon: 'edit_note',       title: 'Writing Peer Review',   desc: 'Exchange Writing Task 1 & 2 essays for structured peer feedback using a scoring rubric.' },
        { icon: 'notifications',   title: 'Daily Check-ins',       desc: 'Accountability nudges — partners confirm they completed their daily practice goal.' },
        { icon: 'chat',            title: 'Direct Messaging',      desc: 'In-app chat to coordinate sessions, share tips, and encourage each other.' },
        { icon: 'star',            title: 'Partner Reviews',       desc: 'Rate your study partner after each session to improve future matching quality.' },
      ]}
    />
  );
}
