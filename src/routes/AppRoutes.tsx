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
import AITipsPage   from '../features/ai/pages/AITipsPage';
import NotesPage    from '../features/notes/pages/NotesPage';
import PracticePage from '../features/quiz/pages/PracticePage';

// Misc pages (still in pages/)
import FriendsPage  from '../pages/FriendsPage';
import RoadmapPage  from '../pages/RoadmapPage';

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
        <Route path="/roadmap"   element={<RoadmapPage />} />
        <Route path="/friends"   element={<FriendsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
