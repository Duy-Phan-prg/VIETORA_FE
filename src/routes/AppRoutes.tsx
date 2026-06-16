import { Routes, Route } from 'react-router-dom';

import DashboardLayout from '../layouts/DashboardLayout';

// Public pages
import HomePage     from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

// Auth
import LoginPage from '../features/auth/pages/LoginPage';

// Dashboard
import DashboardPage from '../features/dashboard/pages/DashboardPage';
import ProgressPage  from '../features/dashboard/pages/ProgressPage';

// Features
import AITipsPage   from '../features/aitips/pages/AITipsPage';
import NotesPage    from '../features/notes/pages/NotesPage';
import PracticePage from '../features/quiz/pages/PracticePage';

// Misc pages (still in pages/)
import FriendsPage  from '../pages/FriendsPage';
import RoadmapPage  from '../pages/RoadmapPage';

// Skill Training
import SkillDetailPage from '../features/skilltraining/pages/SkillDetailPage';

// Coming soon placeholders
import ComingSoonPage from '../pages/ComingSoonPage';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/"      element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Protected — inside DashboardLayout */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/ai-tips"   element={<AITipsPage />} />
        <Route path="/practice"  element={<PracticePage />} />
        <Route path="/progress"  element={<ProgressPage />} />
        <Route path="/notes"     element={<NotesPage />} />
        <Route path="/roadmap"              element={<RoadmapPage />} />
        <Route path="/friends"              element={<FriendsPage />} />
        <Route path="/skill-training/:skill" element={<SkillDetailPage />} />

        {/* New nav items */}
        <Route path="/skill-map" element={<ComingSoonPage title="My Skill Map" icon="map" />} />
        <Route path="/mock-test" element={<ComingSoonPage title="Mock Test" icon="fact_check" />} />
        <Route path="/schedule"  element={<ComingSoonPage title="Schedule" icon="calendar_month" />} />
        <Route path="/settings"  element={<ComingSoonPage title="Settings" icon="tune" />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
