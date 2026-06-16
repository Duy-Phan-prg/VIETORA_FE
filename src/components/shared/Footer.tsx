import { useLanguage } from '../../contexts/LanguageContext';
import logo from '../../assets/logo/vietora-logo.png';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="nav-logo">
            <span className="logo-badge">
              <img src={logo} alt="Vietora" className="logo-mark" />
            </span>
            <span className="brand-wordmark">Vietora</span>
          </div>
          <p className="footer-tagline">{t.footer.tagline}</p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t.footer.product}</h4>
          <a href="#">{t.footer.features}</a>
          <a href="#">{t.footer.pricing}</a>
          <a href="#">{t.footer.roadmap}</a>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t.footer.company}</h4>
          <a href="#">{t.footer.about}</a>
          <a href="#">{t.footer.blog}</a>
          <a href="#">{t.footer.careers}</a>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">{t.footer.resources}</h4>
          <a href="#">{t.footer.community}</a>
          <a href="#">{t.footer.help}</a>
          <a href="#">{t.footer.contact}</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>{t.footer.copyright}</span>
      </div>
    </footer>
  );
}
