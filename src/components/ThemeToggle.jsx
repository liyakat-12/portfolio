import { useTheme } from '../context/ThemeContext'
import { MoonIcon, SunIcon } from './icons'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      title={theme === 'light' ? 'Dark mode' : 'Light mode'}
    >
      {theme === 'light' ? <MoonIcon /> : <SunIcon />}
    </button>
  )
}
