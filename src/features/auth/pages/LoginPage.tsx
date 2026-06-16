import { Link, useNavigate } from 'react-router-dom';
import Header from '../../../components/shared/Header';
import { useLanguage } from '../../../contexts/LanguageContext';

export default function LoginPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="bg-[#fafafa] text-on-background min-h-screen flex flex-col font-body-md overflow-x-hidden">
      <Header />

      <main className="flex-grow flex items-center justify-center relative px-container-padding-mobile py-stack-lg">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#1e3a5f 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.06,
          }}
        />

        <div className="w-full max-w-[480px] relative">
          {/* Login Card */}
          <div className="bg-white border-2 border-[#1e3a5f] rounded-xl p-8 md:p-10 hard-shadow-navy relative z-20">
            <div className="mb-stack-md text-center">
              <h1 className="font-headline-md text-headline-md mb-2 text-[#1e3a5f]">{t.login.title}</h1>
              <p className="text-secondary text-body-sm">{t.login.subtitle}</p>
            </div>

            <form className="space-y-stack-md" onSubmit={(e) => { e.preventDefault(); navigate('/dashboard'); }}>
              {/* Username */}
              <div className="space-y-1">
                <label className="font-label-code text-label-code uppercase tracking-wider block">
                  {t.login.usernameLabel}
                </label>
                <div className="relative">
                  <input
                    className="w-full px-6 py-4 rounded-xl border border-outline focus:border-[#1e3a5f] focus:ring-0 transition-all font-body-md bg-white"
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
                  <a className="font-label-code text-label-code text-[#1e3a5f] hover:underline" href="#">
                    {t.login.forgot}
                  </a>
                </div>
                <div className="relative">
                  <input
                    className="w-full px-6 py-4 rounded-xl border border-outline focus:border-[#1e3a5f] focus:ring-0 transition-all font-body-md bg-white"
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
                className="w-full bg-[#f6b93b] text-[#1e3a5f] py-4 rounded-xl font-headline-sm text-headline-sm hard-shadow-navy hard-shadow-navy-hover transition-all active:scale-95 flex items-center justify-center gap-2"
                type="submit"
              >
                {t.login.loginBtn}
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
                className="w-full flex items-center justify-center gap-2 border-2 border-[#1e3a5f] py-3 rounded-xl hover:bg-surface-variant transition-colors active:scale-95"
              >
                <span className="font-label-code text-label-code">GOOGLE</span>
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-outline-variant text-center">
              <p className="text-secondary text-body-sm">
                {t.login.newToGrid}{' '}
                <Link to="/register" className="text-[#1e3a5f] font-bold hover:underline">
                  {t.login.initAccount}
                </Link>
              </p>
            </div>
          </div>

          {/* AI Status Box */}
          <div className="mt-stack-md bg-surface-container-low border-l-4 border-[#f6b93b] p-4 rounded-r-xl">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-[#1e3a5f] mt-1 select-none">auto_awesome</span>
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
