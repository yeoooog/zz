/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0a0a',       // 더 깊은 검은색 배경
        card: '#121212',       // 카드 배경색
        neon: '#00E0FF',       // 핵심: 밝게 빛나는 네온 블루
        slate: { 
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // 깔끔한 Inter 폰트 적용
      },
      boxShadow: {
        'neon-glow': '0 0 20px rgba(0, 224, 255, 0.4)', // 네온 빛 번짐 효과
      }
    },
  },
  plugins: [],
}
