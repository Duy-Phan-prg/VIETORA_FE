import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './pages/DashboardLayout';
import GoiYAIPage from './pages/GoiYAIPage';
import TiendoPage from './pages/TiendoPage';
import LuyendePage from './pages/LuyendePage';
import GhiChuPage from './pages/GhiChuPage';
import LotrinhPage from './pages/LotrinhPage';
import BanBePage from './pages/BanBePage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route element={<DashboardLayout />}>
            <Route path="/goiyai" element={<GoiYAIPage />} />
            <Route path="/tiendo" element={<TiendoPage />} />
            <Route path="/luyende" element={<LuyendePage />} />
            <Route path="/ghichu" element={<GhiChuPage />} />
            <Route path="/lotrinh" element={<LotrinhPage />} />
            <Route path="/banbe" element={<BanBePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
