/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f0f0f0',
          soft: '#f8f8f8',
          cream: '#fafafa',
        },
        accent: {
          orange: '#ff8c69',
          'orange-gold': '#ffb347',
          blue: '#7db3d3',
          purple: '#b19cd9',
          pink: '#ffb6c1',
          green: '#98d8c8',
        },
        text: {
          dark: '#2d2d2d',
          medium: '#4a4a4a',
          light: '#6b6b6b',
        },
      },
      fontFamily: {
        playful: ['Fredoka', 'Nunito', 'Comic Neue', 'system-ui', 'sans-serif'],
      },
      animation: {
        'background-shift': 'backgroundShift 20s ease-in-out infinite',
        'particle-float': 'particleFloat 15s linear infinite',
        'gradient-shift': 'gradientShift 3s ease-in-out infinite',
        'skeleton-loading': 'skeletonLoading 1.5s ease-in-out infinite',
      },
      keyframes: {
        backgroundShift: {
          '0%, 100%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(-10px) translateY(-5px)' },
          '50%': { transform: 'translateX(5px) translateY(-10px)' },
          '75%': { transform: 'translateX(-5px) translateY(5px)' },
        },
        particleFloat: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        skeletonLoading: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
    },
  },
  plugins: [],
}

