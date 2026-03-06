/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'moonstone': 'var(--color-primary)',
        'dim-gray': 'var(--color-text-primary)',
        'eerie-black': 'var(--color-bg-secondary)',
        'night': 'var(--color-bg-primary)',
        'dark-slate-gray': 'var(--color-bg-tertiary)',
      },
    },
  },
  plugins: [],
}
