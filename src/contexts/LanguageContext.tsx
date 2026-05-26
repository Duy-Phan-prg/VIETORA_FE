import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from '../i18n/translations';
import type { Lang } from '../i18n/translations';

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en');
  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
