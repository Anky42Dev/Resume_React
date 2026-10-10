// Все данные резюме — здесь. Меняешь текст тут, компоненты трогать не нужно.

export const profile = {
  name: 'Айпери Абакирова',
  version: 'v2.0 · обновлено 2026',
  role: 'Студент-разработчик',
  stack: 'Python / Java · базовый уровень',
  learning: 'сейчас изучаю компьютерные сети и кибербезопасность',
  status: 'ищу первую команду',
  email: 'ajperiabakirova42@gmail.com',
  github: { label: 'github.com/Anky42Dev', url: 'https://github.com/Anky42Dev' },
  location: 'Кыргызстан',
}

export const experience = [
  {
    title: 'Frontend + Backend разработчик',
    company: 'Стартап (компания преподавателя)',
    period: '2026',
    duration: '3 месяца',
    stack: ['Python', 'Django', 'JavaScript', 'Next.js', 'Telegram Bot API'],
    points: [
      'разработала лендинг компании (alifholding.biz)',
      'участвовала в разработке backend-части платформы на Django',
      'собирала отдельные элементы интерфейса на JavaScript и Next.js',
      'помогала с базовыми задачами по безопасности платформы',
      'создавала Telegram-ботов для портфолио',
    ],
  },
]

export const skills = [
  { group: 'Языки · базовые знания', items: ['Python', 'Java', 'JavaScript'] },
  { group: 'Frontend · базовые знания', items: ['HTML', 'CSS', 'React', 'Next.js'] },
  { group: 'Backend · базовые знания', items: ['Django', 'Spring', 'Kafka', 'WebSocket', 'Telegram-боты'] },
  { group: 'Инструменты · базовые знания', items: ['Docker', 'Playwright'] },
  { group: 'Изучаю сейчас · начальный уровень', items: ['компьютерные сети', 'кибербезопасность'], learning: true },
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
