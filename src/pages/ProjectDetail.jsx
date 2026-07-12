import { useParams, Link, Navigate } from "react-router-dom";
import { PROJECTS } from "../data/site.js";
import Media from "../components/Media.jsx";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) return <Navigate to="/projects" replace />;

  const others = PROJECTS.filter((p) => p.id !== project.id);

  return (
    <section className="tt-detail">
      <Link className="tt-back" to="/projects">← Back to projects</Link>

      <p className="tt-eyebrow">{project.period}</p>
      <h1 className="tt-detail-title">{project.title}</h1>
      <p className="tt-detail-subline">{project.sub} · {project.tags}</p>

      <Media src={project.cover || project.image} label={project.title} className="tt-detail-hero" />

      <p className="tt-detail-lead">{project.oneLiner}</p>
      <p className="tt-detail-body">{project.intro}</p>

      <div className="tt-detail-cols">
        <div>
          <h4>담당 역할</h4>
          <ul className="tt-role">
            {project.role.map((r, i) => <li key={i}>{r}</li>)}
          </ul>
        </div>
        <div>
          {project.facts.map(([k, v], i) => (
            <div className="tt-fact" key={i}>
              <h4>{k}</h4>
              <p>{v}</p>
            </div>
          ))}
        </div>
      </div>

      {project.metrics.length > 0 && (
        <div className="tt-metrics">
          <p className="tt-metrics-tag">{project.metricsLabel}</p>
          <div className="tt-metrics-grid">
            {project.metrics.map(([n, l], i) => (
              <div key={i}><strong>{n}</strong><span>{l}</span></div>
            ))}
          </div>
          {project.metricsNote && <p className="tt-metrics-note">{project.metricsNote}</p>}
        </div>
      )}

      <div className="tt-detail-nav">
        {others.map((p) => (
          <Link key={p.id} to={`/projects/${p.id}`}>
            <span>Next</span> {p.title} →
          </Link>
        ))}
      </div>
    </section>
  );
}
