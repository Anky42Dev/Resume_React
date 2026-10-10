import { skills } from '../data.js'

export default function Skills() {
  return (
    <div className="skills-grid">
      {skills.map((g) => (
        <div className="skill-group" key={g.group}>
          <div className="skill-label mono">{g.group}</div>
          <div className="chips">
            {g.items.map((item) => (
              <span className={g.learning ? 'chip chip-learning' : 'chip'} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
