import './App.css'

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <div className="logo-mark">V</div>
          <span>Vietora</span>
        </div>

        <div className="nav-links">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Community</a>
        </div>

        <div className="nav-actions">
          <a href="#" className="nav-signin">Sign in</a>
          <button className="btn-nav">Get Started Free</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        {/* Left */}
        <div className="hero-left">
          <div className="badge">
            <span className="badge-pulse"></span>
            NEW: IELTS WRITING 2.0
          </div>

          <h1 className="hero-title">
            Master IELTS with<br />
            AI Precision.
          </h1>

          <p className="hero-sub">
            Playful style, serious results. The most advanced AI workspace
            designed specifically for ambitious students aiming for Band 8.0+.
          </p>

          <div className="hero-cta">
            <button className="btn-primary">Get Started for Free</button>
            <button className="btn-secondary">View Demo →</button>
          </div>

          <div className="social-proof">
            <div className="avatars">
              <div className="av av-1">J</div>
              <div className="av av-2">M</div>
              <div className="av av-3">A</div>
            </div>
            <span className="social-text">
              Trusted by <strong>12,000+</strong> Band 8+ achievers
            </span>
          </div>
        </div>

        {/* Right — UI Mockup */}
        <div className="hero-right">
          <div className="mockup-wrapper">

            <div className="mockup-card">
              {/* AI FEEDBACK badge — relative to card */}
              <div className="ai-label">AI FEEDBACK</div>

              {/* CSS Cat sitting on card */}
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
                    Vietora <span className="ai-tag">AI</span>
                  </div>
                  <p className="fb-quote">
                    "Your vocabulary in paragraph 2 is excellent, but consider
                    using a more formal transition here."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating chat bubble */}
          <div className="floating-chat">
            <div className="chat-tab-bar">
              <div className="chat-tab-dot"></div>
              <span className="chat-tab-title">Vietora · Band 8 Feedback</span>
              <span className="chat-tab-close">×</span>
            </div>
            <div className="chat-body">
              <div className="chat-input-row">
                <span className="chat-placeholder">Ask Vietora about your essay…</span>
                <div className="chat-cursor"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
