/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Segoe UI"', 'sans-serif'],
        display: ['"Sora"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#142744',
          900: '#1e375c',
          800: '#2a4871',
          700: '#395987',
        },
        cyan: {
          300: '#a7ebff',
          400: '#73dcff',
          500: '#44c7f2',
          600: '#2597bf',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(115, 220, 255, 0.48), 0 24px 60px -28px rgba(68, 199, 242, 0.5)',
        card: '0 24px 60px -34px rgba(10, 30, 56, 0.55)',
      },
      backgroundImage: {
        'mesh-gradient': 'radial-gradient(circle at 14% 18%, rgba(122, 220, 255, 0.32), transparent 44%), radial-gradient(circle at 88% 2%, rgba(255, 180, 142, 0.24), transparent 36%), radial-gradient(circle at 50% 100%, rgba(130, 162, 255, 0.25), rgba(30, 55, 92, 0.88))',
      },
      transitionTimingFunction: {
        refined: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
