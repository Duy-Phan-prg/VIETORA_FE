import { useRef, useState, useEffect } from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import ChatWidget from '../features/chatbot/components/ChatWidget';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '../assets/logo/vietora-logo.png';

export default function HomePage() {
  const { t } = useLanguage();

  const previewRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = previewRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -6, y: (px - 0.5) * 6 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div>
      <Header />

      <section className="hero">
        {/* Decoration — swap placeholder photo cards for real images later */}
        <div className="hero-sunburst hero-sunburst-l"></div>
        <div className="hero-sunburst hero-sunburst-r"></div>
        <div className="hero-photo hero-photo-1"></div>
        <div className="hero-photo hero-photo-2"></div>
        <div className="hero-photo hero-photo-3"></div>
        <div className="hero-photo hero-photo-4"></div>

        {/* Left */}
        <div className="hero-left">
          <h1 className="hero-title">
            {t.home.titleLine1}<br />
            <span className="title-accent">{t.home.titleLine2}</span>
          </h1>

          <div className="hero-cta">
            <button className="btn-primary">{t.home.cta1}</button>
            <button className="btn-secondary">{t.home.cta2}</button>
          </div>

          <div className="social-proof">
            <div className="avatars">
              <div className="av av-1">J</div>
              <div className="av av-2">M</div>
              <div className="av av-3">A</div>
            </div>
            <span className="social-text">
              {t.home.socialProof} <strong>{t.home.socialProofBold}</strong> {t.home.socialProofSuffix}
            </span>
          </div>
        </div>
      </section>

      {/* App Preview — Parallax + 3D Tilt */}
      <section className="preview-section">
        <div
          className="preview-wrapper"
          ref={previewRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${Math.min(scrollY * -0.08, 0)}px)`,
          }}
        >
          <img
            src="/dashboard-preview.png"
            alt="Vietora dashboard preview"
            className="preview-image"
          />
        </div>
      </section>

      <Footer />

      {/* Floating contact widgets */}
      <div className="floating-contacts">
        <a className="float-btn float-btn-feedback" href="#" aria-label="Feedback">
          <span className="material-symbols-outlined">thumb_up</span>
        </a>
        <a className="float-btn float-btn-zalo" href="#" aria-label="Zalo chat">
          Zalo
        </a>
        <button className="float-btn float-btn-zalo-feedback" aria-label="Chatbot" onClick={() => setChatOpen((prev) => !prev)}>
          <img src={logo} alt="Vietora" className="float-btn-logo" />
        </button>
      </div>

      <ChatWidget open={chatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}
