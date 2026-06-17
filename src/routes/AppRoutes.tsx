import { Routes, Route, Navigate } from 'react-router-dom';

import DashboardLayout from '../layouts/DashboardLayout';

// Public pages
import HomePage     from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

// Auth
import LoginPage from '../features/auth/pages/LoginPage';

// Dashboard
import DashboardPage  from '../features/dashboard/pages/DashboardPage';
import ProgressPage   from '../features/dashboard/pages/ProgressPage';
import SkillRadarPage from '../features/dashboard/pages/SkillRadarPage';

// Learning
import AITipsPage      from '../features/aitips/pages/AITipsPage';
import PracticePage    from '../features/quiz/pages/PracticePage';
import MockExamPage    from '../features/exam/pages/MockExamPage';
import SkillDetailPage from '../features/skilltraining/pages/SkillDetailPage';
import RoadmapPage     from '../pages/RoadmapPage';

// Library
import NotesPage       from '../features/notes/pages/NotesPage';
import QuestionBankPage from '../features/notes/pages/QuestionBankPage';

// Cowork
import MyClassesPage      from '../features/classes/pages/MyClassesPage';
import StudyPartnersPage  from '../features/classes/pages/StudyPartnersPage';
import StudyCalendarPage  from '../features/classes/pages/StudyCalendarPage';
import QuizCreatorPage    from '../features/classes/pages/QuizCreatorPage';
import ClassAnalyticsPage from '../features/classes/pages/ClassAnalyticsPage';

// Settings
import AccountSettingsPage from '../features/settings/pages/AccountSettingsPage';


export default function AppRoutes() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/"      element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Dashboard shell */}
      <Route element={<DashboardLayout />}>
        {/* HOME — Overview */}
        <Route path="/dashboard"   element={<DashboardPage />} />
        <Route path="/skill-radar" element={<SkillRadarPage />} />
        <Route path="/roadmap"     element={<RoadmapPage />} />

        {/* HOME — Train */}
        <Route path="/skill-training/:skill" element={<SkillDetailPage />} />
        <Route path="/practice"              element={<PracticePage />} />
        <Route path="/mock-exam"             element={<MockExamPage />} />

        {/* HOME — Library */}
        <Route path="/study-materials" element={<NotesPage />} />
        <Route path="/notes"           element={<NotesPage />} />   {/* legacy alias */}
        <Route path="/question-bank"   element={<QuestionBankPage />} />

        {/* HOME — Analytics */}
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/ai-tips"  element={<AITipsPage />} />

        {/* COWORK — Classes */}
        <Route path="/classes"     element={<MyClassesPage />} />
        <Route path="/classes/:id" element={<MyClassesPage />} />

        {/* COWORK — Community */}
        <Route path="/partners"  element={<StudyPartnersPage />} />
        <Route path="/friends"   element={<StudyPartnersPage />} />  {/* legacy alias */}
        <Route path="/calendar"  element={<StudyCalendarPage />} />

        {/* COWORK — Teacher */}
        <Route path="/quiz-creator"     element={<QuizCreatorPage />} />
        <Route path="/class-analytics"  element={<ClassAnalyticsPage />} />

        {/* COWORK — System */}
        <Route path="/settings" element={<AccountSettingsPage />} />

        {/* Old route redirects */}
        <Route path="/skill-map" element={<Navigate to="/skill-radar"     replace />} />
        <Route path="/mock-test" element={<Navigate to="/mock-exam"       replace />} />
        <Route path="/schedule"  element={<Navigate to="/calendar"        replace />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
