import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

export default function Header() {
  const { t } = useLanguage();

  return (
    <>
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        <span className="brand-wordmark">Vietora</span>
      </Link>

      <div className="nav-links">
        <a href="#">{t.nav.features}</a>
        <a href="#">{t.nav.pricing}</a>
        <a href="#">{t.nav.blog}</a>
        <a href="#">{t.nav.community}</a>
      </div>

      <div className="nav-actions">
        <Link to="/login" className="nav-signin">{t.nav.signIn}</Link>
        <button className="btn-nav">{t.nav.getStarted}</button>
      </div>
    </nav>

    <div className="marquee-bar">
      <div className="marquee-track">
        {Array.from({ length: 2 }).map((_, i) => (
          <div className="marquee-content" key={i}>
            <span>IELTS Band 7+ Guaranteed</span>
            <span>Free Mock Test Available</span>
            <span>Join 10,000+ Learners</span>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
