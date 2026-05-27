import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { useLanguage } from '../contexts/LanguageContext';

function GoogleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20" height="20">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

export default function LoginPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="bg-white text-on-background min-h-screen flex flex-col font-body-md overflow-x-hidden">
      <Header />

      <main className="flex-grow flex items-center justify-center relative px-container-padding-mobile py-stack-lg">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.05,
          }}
        />

        <div className="w-full max-w-[480px] relative">
          {/* Login Card */}
          <div className="bg-surface-container-lowest border-2 border-primary rounded-xl p-8 md:p-10 hard-shadow relative z-20">
            <div className="mb-stack-md text-center">
              <h1 className="font-headline-md text-headline-md mb-2">{t.login.title}</h1>
              <p className="text-secondary text-body-sm">{t.login.subtitle}</p>
            </div>

            <form className="space-y-stack-md" onSubmit={(e) => { e.preventDefault(); navigate('/goiyai'); }}>
              {/* Username */}
              <div className="space-y-1">
                <label className="font-label-code text-label-code uppercase tracking-wider block">
                  {t.login.usernameLabel}
                </label>
                <div className="relative">
                  <input
                    className="w-full px-6 py-4 rounded-xl border border-outline focus:border-primary focus:ring-0 transition-all font-body-md bg-white"
                    placeholder={t.login.usernamePlaceholder}
                    required
                    type="text"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline select-none">
                    person
                  </span>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-1">
                <div className="flex justify-between items-end">
                  <label className="font-label-code text-label-code uppercase tracking-wider">
                    {t.login.passwordLabel}
                  </label>
                  <a className="font-label-code text-label-code text-ai-accent hover:underline" href="#">
                    {t.login.forgot}
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full px-6 py-4 rounded-xl border border-outline focus:border-primary focus:ring-0 transition-all font-body-md bg-white"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-outline select-none">
                    lock
                  </span>
                </div>
              </div>

              {/* Login Button */}
              <button
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-headline-sm text-headline-sm hard-shadow hard-shadow-hover transition-all active:scale-95 flex items-center justify-center gap-2"
                type="submit"
              >
                {t.login.loginBtn}
                <span className="material-symbols-outlined select-none">terminal</span>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4 py-2">
                <div className="h-[1px] bg-outline-variant flex-grow" />
                <span className="font-label-code text-label-code text-secondary whitespace-nowrap">
                  {t.login.orWith}
                </span>
                <div className="h-[1px] bg-outline-variant flex-grow" />
              </div>

              {/* Google */}
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border-2 border-primary py-3 rounded-xl hover:bg-surface-variant transition-colors active:scale-95"
              >
                <span className="grayscale"><GoogleIcon /></span>
                <span className="font-label-code text-label-code">GOOGLE</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-outline-variant text-center">
              <p className="text-secondary text-body-sm">
                {t.login.newToGrid}{' '}
                <Link to="/register" className="text-primary font-bold hover:underline">
                  {t.login.initAccount}
                </Link>
              </p>
            </div>
          </div>

          {/* AI Status Box */}
          <div className="mt-stack-md bg-surface-container-low border-l-4 border-ai-accent p-4 rounded-r-xl">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-ai-accent mt-1 select-none">auto_awesome</span>
              <div>
                <p className="font-label-code text-label-code text-on-surface">{t.login.systemStatus}</p>
                <p className="text-body-sm text-secondary">{t.login.systemMsg}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
