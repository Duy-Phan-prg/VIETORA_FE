interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface Props {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  status?: 'planned' | 'in-progress' | 'live';
}

const STATUS_META = {
  planned:     { label: 'Planned',     color: 'bg-secondary/10 text-secondary'          },
  'in-progress': { label: 'In Progress', color: 'bg-accent/15 text-primary font-semibold' },
  live:        { label: 'Live',        color: 'bg-primary/10 text-primary font-semibold' },
};

export default function PageShell({ icon, title, subtitle, description, features, status = 'planned' }: Props) {
  const s = STATUS_META[status];
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-start gap-4 p-6 bg-white border border-outline-variant rounded-2xl">
        <div className="w-12 h-12 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-primary" style={{ fontSize: '24px' }}>{icon}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-[20px] font-bold text-primary leading-tight">{title}</h1>
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${s.color}`}>{s.label}</span>
          </div>
          <p className="text-[12px] text-secondary font-medium uppercase tracking-wider mb-2">{subtitle}</p>
          <p className="text-[13.5px] text-on-surface leading-relaxed max-w-2xl">{description}</p>
        </div>
      </div>

      {/* Feature breakdown */}
      <div>
        <h2 className="text-[12px] font-bold text-secondary uppercase tracking-widest mb-3">What goes here</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
          {features.map(({ icon: fIcon, title: fTitle, desc }) => (
            <div key={fTitle} className="flex gap-3 p-4 bg-white border border-outline-variant rounded-xl">
              <div className="w-8 h-8 rounded-lg bg-primary/8 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>{fIcon}</span>
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold text-on-surface mb-0.5">{fTitle}</p>
                <p className="text-[12px] text-secondary leading-snug">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
