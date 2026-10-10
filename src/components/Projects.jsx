import { projects } from '../data.js'

export default function Projects() {
  return (
    <div className="stack">
      {projects.map((p) => (
        <article className="card" key={p.title}>
          <header className="card-head">
            <div>
              <h3 className="card-title">{p.title}</h3>
              <div className="card-sub">
                {p.kind}
                {p.link && (
                  <>
                    {' · '}
                    <a href={p.link.url} target="_blank" rel="noreferrer">
                      {p.link.label} ↗
                    </a>
                  </>
                )}
              </div>
            </div>
          </header>
          {p.role && (
            <div className="role-line">
              <span className="mono role-tag">роль</span> {p.role}
            </div>
          )}
          <ul className="list">
            {p.points.map((pt) => (
              <li key={pt}>{pt}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
