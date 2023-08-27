/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'raisin-black': '#28262C',
        'outer-space': '#374043',
        'mint-cream': '#F0F7F4',
        'tomato-red': '#E78383',
        'flamy-orange': '#E28413',
        'wenge': '#5E4D56'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        scrn: ['Scr-Nsevcn-Regular', 'sans-serif'],
        vt323: ['VT323-Regular', 'sans-serif'],
        computer: ['Computer-Says-No', 'sans-serif'],
      },
      ransitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      animation: {
        zoominout: 'zoominout 2s ease-in-out infinite',
      },
      keyframes: {
        zoominout: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.075)' },
        }
      },
    },
  },
  plugins: [],
}
