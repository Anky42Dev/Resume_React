import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import Section from './components/Section.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    /* localStorage может быть недоступен */
  }
  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* ничего страшного */
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="layout">
      <Sidebar theme={theme} onToggleTheme={toggleTheme} />
      <main className="content">
        <Section id="experience" index="01" title="Опыт">
          <Experience />
        </Section>
        <Section id="skills" index="02" title="Навыки">
          <Skills />
        </Section>
        <Section id="projects" index="03" title="Проекты">
          <Projects />
        </Section>
        <Section id="education" index="04" title="Образование">
          <Education />
        </Section>
      </main>
    </div>
  )
}
