import { useRef, useState } from 'react'
import { profile } from '../data.js'

const NAV = [
  ['experience', 'Опыт'],
  ['skills', 'Навыки'],
  ['projects', 'Проекты'],
  ['education', 'Образование'],
]

export default function Sidebar({ theme, onToggleTheme }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
    } catch {
      // запасной вариант для старых браузеров
      const ta = document.createElement('textarea')
      ta.value = profile.email
      document.body.appendChild(ta)
      ta.select()
      document.execCommand('copy')
      document.body.removeChild(ta)
    }
    setCopied(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setCopied(false), 2000)
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="version mono">{profile.version}</div>
        <button
          className="theme-btn"
          onClick={onToggleTheme}
          aria-label="Переключить тему"
          title="Переключить тему"
        >
          {theme === 'dark' ? '☀' : '☾'}
        </button>
      </div>

      <div className="avatar" aria-hidden="true">АА</div>
      <h1 className="name">{profile.name}</h1>
      <p className="role">
        {profile.role} · <b>{profile.stack}</b>
      </p>
      <p className="learning">{profile.learning}</p>

      <div className="availability">
        <span className="dot" />
        <span>{profile.status}</span>
      </div>

      <nav className="nav" aria-label="Разделы">
        {NAV.map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>

      <ul className="contacts">
        <li>
          <span className="contact-label mono">email</span>
          <span className="contact-value">{profile.email}</span>
          <button className="copy-btn" onClick={copyEmail}>
            {copied ? 'скопировано ✓' : 'копировать'}
          </button>
        </li>
        <li>
          <span className="contact-label mono">github</span>
          <a href={profile.github.url} target="_blank" rel="noreferrer">
            {profile.github.label}
          </a>
        </li>
        <li>
          <span className="contact-label mono">место</span>
          <span className="contact-value">{profile.location}</span>
        </li>
      </ul>
    </aside>
  )
}
