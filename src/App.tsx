import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/app.css';
import { LanguageProvider } from './contexts/LanguageContext';

import DashboardLayout from './layouts/DashboardLayout';

import HomePage      from './pages/HomePage';
import LoginPage     from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AITipsPage    from './pages/AITipsPage';
import PracticePage  from './pages/PracticePage';
import ProgressPage  from './pages/ProgressPage';
import NotesPage     from './pages/NotesPage';
import RoadmapPage   from './pages/RoadmapPage';
import FriendsPage   from './pages/FriendsPage';
import NotFoundPage  from './pages/NotFoundPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"      element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

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
      </BrowserRouter>
    </LanguageProvider>
  );
}
