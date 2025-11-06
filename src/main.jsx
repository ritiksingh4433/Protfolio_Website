import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Immediately set theme class before React mounts to avoid flash
(function initTheme() {
  try {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      document.documentElement.classList.add('dark')
    } else if (stored === 'light') {
      document.documentElement.classList.remove('dark')
    } else {
      // no preference stored, use system preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      if (prefersDark) document.documentElement.classList.add('dark')
    }
  } catch (e) {
    // ignore
  }
})()

createRoot(document.getElementById('root')).render(
  <App />
)
