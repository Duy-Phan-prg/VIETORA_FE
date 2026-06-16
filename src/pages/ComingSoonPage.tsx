interface ComingSoonPageProps {
  title: string;
  description?: string;
  icon?: string;
}

export default function ComingSoonPage({
  title,
  description = 'This feature is under development, please check back later!',
  icon = 'auto_awesome',
}: ComingSoonPageProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center" style={{ minHeight: 400 }}>
      <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-primary" style={{ fontSize: '32px' }}>{icon}</span>
      </div>
      <h1 className="text-[20px] font-bold text-primary mb-1">{title}</h1>
      <p className="text-[13px] text-secondary max-w-[320px]">{description}</p>
    </div>
  );
}
