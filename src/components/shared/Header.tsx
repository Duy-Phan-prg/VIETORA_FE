import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Header() {
  const { lang, setLang, t } = useLanguage();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <div className="logo-mark">V</div>
        <span>Vitora</span>
      </Link>

      <div className="nav-links">
        <a href="#">{t.nav.features}</a>
        <a href="#">{t.nav.pricing}</a>
        <a href="#">{t.nav.blog}</a>
        <a href="#">{t.nav.community}</a>
      </div>

      <div className="nav-actions">
        <div className="lang-toggle">
          <button
            className={`lang-btn ${lang === 'vi' ? 'active' : ''}`}
            onClick={() => setLang('vi')}
          >
            VI
          </button>
          <button
            className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
            onClick={() => setLang('en')}
          >
            EN
          </button>
        </div>
        <Link to="/login" className="nav-signin">{t.nav.signIn}</Link>
        <button className="btn-nav">{t.nav.getStarted}</button>
      </div>
    </nav>
  );
}
