import { experience } from '../data.js'

export default function Experience() {
  return (
    <div className="stack">
      {experience.map((job) => (
        <article className="card" key={job.title + job.period}>
          <header className="card-head">
            <div>
              <h3 className="card-title">{job.title}</h3>
              <div className="card-sub">{job.company}</div>
            </div>
            <div className="card-date mono">
              {job.period} · {job.duration}
            </div>
          </header>
          <div className="chips">
            {job.stack.map((s) => (
              <span className="chip" key={s}>{s}</span>
            ))}
          </div>
          <ul className="list">
            {job.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
