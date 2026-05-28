import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage      from './pages/HomePage';
import LoginPage     from './pages/LoginPage';
import DashboardLayout from './pages/DashboardLayout';
import DashboardPage from './pages/DashboardPage';
import GoiYAIPage    from './pages/GoiYAIPage';
import TiendoPage    from './pages/TiendoPage';
import LuyendePage   from './pages/LuyendePage';
import GhiChuPage    from './pages/GhiChuPage';
import LotrinhPage   from './pages/LotrinhPage';
import BanBePage     from './pages/BanBePage';
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
            <Route path="/goiyai"    element={<GoiYAIPage />} />
            <Route path="/tiendo"    element={<TiendoPage />} />
            <Route path="/luyende"   element={<LuyendePage />} />
            <Route path="/ghichu"    element={<GhiChuPage />} />
            <Route path="/lotrinh"   element={<LotrinhPage />} />
            <Route path="/banbe"     element={<BanBePage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
