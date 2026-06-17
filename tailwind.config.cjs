/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── Brand palette (chỉ dùng 4 màu này) ──────────────
        'primary':   '#1e3a5f',   // navy xanh đậm
        'accent':    '#f6b93b',   // vàng gold
        'purple':    '#7c3aed',   // tím
        'on-primary': '#ffffff',

        // ── Text ─────────────────────────────────────────────
        'on-surface':         '#111827',   // đen chính
        'secondary':          '#6b7280',   // xám phụ

        // ── Surface / Background ──────────────────────────────
        'surface':                  '#f8fafc',
        'surface-container':        '#f1f5f9',
        'surface-container-low':    '#f8fafc',
        'surface-container-lowest': '#ffffff',
        'surface-container-high':   '#e2e8f0',
        'surface-container-highest':'#e2e8f0',
        'surface-variant':          '#e2e8f0',
        'surface-bright':           '#ffffff',
        'surface-dim':              '#e2e8f0',

        // ── Border ───────────────────────────────────────────
        'outline':         '#cbd5e1',
        'outline-variant': '#e2e8f0',

        // ── Legacy aliases (giữ để không break) ──────────────
        'background':          '#f8fafc',
        'on-background':       '#111827',
        'on-surface-variant':  '#6b7280',
        'primary-container':   '#e8eef5',
        'secondary-container': '#f1f5f9',
        'on-secondary':        '#ffffff',
        'secondary-fixed':     '#e2e8f0',
        'error':               '#1e3a5f',
        'on-error':            '#ffffff',
        'error-container':     '#fee2e2',
        'on-error-container':  '#1e3a5f',
        'inverse-surface':     '#1e293b',
        'tertiary':            '#7c3aed',
        'ai-accent':           '#7c3aed',
        'ai-purple':           '#7c3aed',
      },
      borderRadius: {
        DEFAULT: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      spacing: {
        'container-padding-mobile':  '1.5rem',
        'container-padding-desktop': '4rem',
        'stack-sm':  '0.5rem',
        'stack-md':  '1.5rem',
        'stack-lg':  '3rem',
        'gutter':    '1.5rem',
      },
      fontFamily: {
        'body-sm':    ['var(--font-notion)'],
        'display-lg': ['var(--font-notion)'],
        'headline-sm':['var(--font-notion)'],
        'headline-md':['var(--font-notion)'],
        'body-md':    ['var(--font-notion)'],
        'label-code': ['var(--font-notion)'],
        'body-lg':    ['var(--font-notion)'],
      },
      fontSize: {
        'body-sm':              ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'display-lg':           ['48px', { lineHeight: '56px', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg-mobile':    ['32px', { lineHeight: '40px', letterSpacing: '-0.02em', fontWeight: '800' }],
        'headline-sm':          ['20px', { lineHeight: '28px', fontWeight: '700' }],
        'headline-md':          ['24px', { lineHeight: '32px', fontWeight: '700' }],
        'body-md':              ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-code':           ['13px', { lineHeight: '18px', letterSpacing: '0.05em', fontWeight: '500' }],
        'body-lg':              ['18px', { lineHeight: '28px', fontWeight: '400' }],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
