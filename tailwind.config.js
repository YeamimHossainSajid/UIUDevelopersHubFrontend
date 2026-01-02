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
          dark: '#1a1a2e',
          navy: '#16213e',
          blue: '#0f3460',
        },
        accent: {
          orange: '#ff6b35',
          'orange-gold': '#f7931e',
          blue: '#569cd6',
          red: '#ff4500',
        },
      },
      fontFamily: {
        tamzen: ['Tamzen', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
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

