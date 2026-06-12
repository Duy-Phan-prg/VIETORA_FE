import { useNavigate, useParams } from 'react-router-dom';
import { SKILL_META } from '../data/skillTrainingData';
import type { SkillKey } from '../types/skillTraining.types';

export default function SkillDetailPage() {
  const { skill } = useParams<{ skill: string }>();
  const navigate = useNavigate();
  const meta = SKILL_META[skill as SkillKey];

  if (!meta) {
    return (
      <div className="flex flex-col items-center justify-center" style={{ minHeight: 300 }}>
        <p className="text-secondary">Kỹ năng không tồn tại.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate('/skill-training')}
          className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-surface-variant transition"
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>arrow_back</span>
        </button>
        <span className={`material-symbols-outlined ${meta.iconColor}`} style={{ fontSize: '28px' }}>
          {meta.icon}
        </span>
        <div>
          <h1 className="brand-name text-[24px] text-primary leading-tight">{meta.label}</h1>
          <p className="text-[13px] text-secondary">{meta.topics.length} chủ đề</p>
        </div>
      </div>

      {/* Topic list */}
      <div className="space-y-3">
        {meta.topics.map((topic, idx) => (
          <button
            key={topic.id}
            onClick={() => navigate(`/skill-training/${skill}/${topic.id}`)}
            className="w-full flex items-center gap-4 p-4 rounded-2xl border border-outline-variant bg-surface text-left hover:shadow-sm hover:border-outline transition active:scale-[0.99]"
          >
            <div className="flex items-center justify-center w-9 h-9 rounded-full bg-surface-variant text-[13px] font-bold text-secondary shrink-0">
              {idx + 1}
            </div>
            <div className="flex-1 min-w-0">
              <p className="brand-name text-[15.5px] text-primary">{topic.title}</p>
              <p className="text-[12.5px] text-secondary mt-0.5">{topic.desc}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[12px] text-secondary">{topic.lessonCount} bài học</p>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '18px' }}>chevron_right</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
