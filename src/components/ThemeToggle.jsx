import { useEffect, useState } from 'react'

function getInitialTheme() {
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('theme-transition')
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    const id = setTimeout(() => root.classList.remove('theme-transition'), 200)
    return () => clearTimeout(id)
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="inline-flex items-center gap-2 rounded-md border border-[var(--brand-accent)] px-3 py-2 text-sm"
      aria-label="Toggle color theme"
      title="Toggle dark/light"
    >
      {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}


