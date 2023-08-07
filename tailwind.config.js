/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary:{
        100:'#eff6ff',
        200:'#bfdbfe',
        300:'#2563eb',
        400:'#1e3a8a'
      },
      danger:{
        100:'#fef2f2',
        200:'#fecaca',
        300:'#f87171',
        400:'#991b1b'
      },
      secondary:{
        100:'#f1f5f9',
        200:'#e2e8f0',
        300:'#475569',
        400:'#1e293b'
      },
      accent:{
        100:'#f0fdfa',
        200:'#99f6e4',
        300:'#2dd4bf',
        400:'#134e4a'
      },
      success:{
        100:'#f0fdf4',
        200:'#bbf7d0',
        300:'#22c55e',
        400:'#166534'
      },
      warning:{
        100:'#fffbeb',
        200:'#fde68a',
        300:'#f59e0b',
        400:'#92400e'
      },
    },
    opacity:{
      0:'0',
      20:'0.2',
      40:'0.4',
      60:'0.6',
      80:'0.8',
      100:'1'
    }
  },
  plugins: [],
}

