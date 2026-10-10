export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <h2 className="section-title">
        <span className="section-index">{index}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}
