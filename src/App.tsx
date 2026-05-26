import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
