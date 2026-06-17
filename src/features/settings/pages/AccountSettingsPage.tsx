import PageShell from '../../../components/shared/PageShell';

export default function AccountSettingsPage() {
  return (
    <PageShell
      icon="manage_accounts"
      title="Account Settings"
      subtitle="Profile · Preferences · Notifications · Billing"
      description="Central settings panel for the learner or teacher account. Covers profile information, IELTS target configuration, notification preferences, display language, and subscription management."
      status="planned"
      features={[
        { icon: 'person',           title: 'Profile',              desc: 'Update name, avatar, bio, and current institution or employer.' },
        { icon: 'flag',             title: 'IELTS Goal Setup',     desc: 'Set target band score per skill and exam date — drives roadmap and AI coaching.' },
        { icon: 'notifications',    title: 'Notification Prefs',   desc: 'Choose which alerts to receive via push, email, or Zalo (streak reminders, class updates, feedback).' },
        { icon: 'lock',             title: 'Security',             desc: 'Change password, enable 2FA, manage active sessions.' },
        { icon: 'credit_card',      title: 'Subscription',         desc: 'View current plan (Free / Pro / Teacher), upgrade, manage billing, download invoices.' },
        { icon: 'translate',        title: 'Display Language',     desc: 'Switch interface language between Vietnamese and English.' },
      ]}
    />
  );
}
