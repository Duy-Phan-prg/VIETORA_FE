import Header from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div>
      <Header />

      <section className="hero">
        {/* Left */}
        <div className="hero-left">
          <div className="badge">
            <span className="badge-pulse"></span>
            {t.home.badge}
          </div>

          <h1 className="hero-title">
            {t.home.titleLine1}<br />
            {t.home.titleLine2}
          </h1>

          <p className="hero-sub">{t.home.subtitle}</p>

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

        {/* Right — UI Mockup */}
        <div className="hero-right">
          <div className="mockup-wrapper">
            <div className="cat-container">
              <div className="cat-ear cat-ear-left"></div>
              <div className="cat-ear cat-ear-right"></div>
              <div className="cat-head">
                <div className="cat-eye cat-eye-left">
                  <div className="cat-pupil"></div>
                </div>
                <div className="cat-eye cat-eye-right">
                  <div className="cat-pupil"></div>
                </div>
                <div className="cat-whisker cat-whisker-left cat-w1"></div>
                <div className="cat-whisker cat-whisker-left cat-w2"></div>
                <div className="cat-whisker cat-whisker-left cat-w3"></div>
                <div className="cat-whisker cat-whisker-right cat-w1"></div>
                <div className="cat-whisker cat-whisker-right cat-w2"></div>
                <div className="cat-whisker cat-whisker-right cat-w3"></div>
              </div>
            </div>

            <div className="mockup-card">
              <div className="ai-label">{t.home.aiLabel}</div>

              <div className="writing-lines">
                <div className="wl wl-100"></div>
                <div className="wl wl-85"></div>
                <div className="wl wl-65"></div>
              </div>

              <hr className="card-divider" />

              <div className="feedback-row">
                <div className="fb-icon">🤖</div>
                <div className="fb-body">
                  <div className="fb-name">
                    Vitora <span className="ai-tag">AI</span>
                  </div>
                  <p className="fb-quote">{t.home.fbQuote}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="floating-chat">
            <div className="chat-tab-bar">
              <div className="chat-tab-dot"></div>
              <span className="chat-tab-title">{t.home.chatTitle}</span>
              <span className="chat-tab-close">×</span>
            </div>
            <div className="chat-body">
              <div className="chat-input-row">
                <span className="chat-placeholder">{t.home.chatPlaceholder}</span>
                <div className="chat-cursor"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
