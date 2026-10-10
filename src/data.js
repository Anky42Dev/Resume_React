// Все данные резюме — здесь. Меняешь текст тут, компоненты трогать не нужно.

export const profile = {
  name: 'Айпери Абакирова',
  version: 'v2.0 · обновлено 2026',
  role: 'Студент-разработчик',
  stack: 'Python / Java',
  learning: 'изучаю сети и кибербезопасность',
  status: 'ищу первую команду',
  email: 'ajperiabakirova42@gmail.com',
  github: { label: 'github.com/Anky42Dev', url: 'https://github.com/Anky42Dev' },
  location: 'Кыргызстан',
}

export const experience = [
  {
    title: 'Frontend + Backend разработчик',
    company: 'Стартап (компания преподавателя)',
    period: '2026 — н.в.',
    duration: '3 месяца',
    stack: ['Django', 'JavaScript', 'Next.js'],
    points: [
      'разработала лендинг компании (alifholding.biz)',
      'писала backend-логику на Django',
      'собирала интерфейсы на JavaScript и Next.js',
      'участвую в разработке продуктов для портфолио будущей компании',
    ],
  },
]

export const skills = [
  { group: 'Языки', items: ['Python', 'Java', 'JavaScript (немного)'] },
  { group: 'Frontend', items: ['HTML', 'CSS'] },
  { group: 'Backend', items: ['Django', 'Spring', 'Kafka', 'WebSocket'] },
  { group: 'Инфраструктура', items: ['Docker', 'Playwright'] },
  { group: 'Изучаю сейчас', items: ['сети', 'кибербезопасность'], learning: true },
]

export const projects = [
  {
    title: 'Система для проведения спортивных турниров',
    kind: 'Курсовой проект · задеплоен',
    link: { label: 'tournament-system.digital', url: 'http://tournament-system.digital' },
    role: 'Frontend-разработчик + Backend (расширение)',
    points: [
      'весь React-интерфейс — 39 страниц',
      'api.js, auth.js',
      'доработка SecurityConfig и MatchService',
      'RoleRequestController, SystemStatsController, MaintenanceController',
      'миграция базы данных V4',
    ],
  },
  {
    title: 'ERP-система для учебной фирмы',
    kind: 'Учебный проект',
    link: { label: 'edu-erp.today', url: 'http://edu-erp.today' },
    role: 'Team Lead, Fullstack-разработчик · вклад ~55%',
    points: [
      'архитектура проекта (Frontend + Backend, Maven)',
      'React + TypeScript фронтенд, интерфейсы ERP',
      'API Gateway, Kafka, WebSocket',
      'система уведомлений (WebSocket, EmailService)',
      'Flyway-миграции V40–V63',
      'Docker-инфраструктура',
      'E2E-тесты на Playwright',
      'документация, деплой, CI/CD',
    ],
  },
  {
    title: 'Кликер на Python',
    kind: 'Пет-проект',
    role: null,
    points: ['простая игра-кликер на Python для практики'],
  },
]

export const education = [
  {
    school: 'Кыргызско-Германский институт прикладной информатики',
    program: 'Программные технологии · 2 курс',
    years: '2024 — н.в.',
  },
]
