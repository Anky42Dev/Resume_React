import { education } from '../data.js'

export default function Education() {
  return (
    <div className="stack">
      {education.map((e) => (
        <article className="card card-head" key={e.school}>
          <div>
            <h3 className="card-title">{e.school}</h3>
            <div className="card-sub">{e.program}</div>
          </div>
          <div className="card-date mono">{e.years}</div>
        </article>
      ))}
    </div>
  )
}
