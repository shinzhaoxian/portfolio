import { Link } from "react-router-dom";
import { PROFILE, PROJECTS, TOOLS } from "../data/site.js";

export default function Home() {
  return (
    <section className="tt-cover">
      {/* 자기소개 한 문장 */}
      <div className="tt-cover-top">
        <p className="tt-eyebrow">PLANNING · MARKETING · B2B</p>
        <h1 className="tt-cover-title">
          {PROFILE.intro} 
        </h1>
      </div>

      <div className="tt-cover-grid">
        {/* 왼쪽: 나 */}
        <aside className="tt-cover-me">
          <h2 className="tt-cover-name">
            {PROFILE.nameEn}
          </h2>
          <ul className="tt-cover-contact">
            {PROFILE.birth && <li><span>Birth</span> {PROFILE.birth}</li>}
            {PROFILE.phone && <li><span>Tel</span> {PROFILE.phone}</li>}
            <li><span>Email</span> <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></li>
            <li><span>Base</span> {PROFILE.location}</li>
          </ul>

          <h3 className="tt-cover-subh">Skills &amp; Tools</h3>
          <img className="tt-tools-img" src="/images/skills.png" alt="Skills and tools" />
        </aside>

        {/* 오른쪽: 프로젝트 목차 */}
        <div className="tt-cover-toc">
          <h3 className="tt-cover-subh">Projects</h3>
          <ol className="tt-toc">
            {PROJECTS.map((p, i) => (
              <li key={p.id}>
                <Link to={`/projects/${p.id}`}>
                  <em>{String(i + 1).padStart(2, "0")}</em>
                  <span>{p.toc}</span>
                  <b>→</b>
                </Link>
              </li>
            ))}
          </ol>
          <Link className="tt-cta" to="/projects">전체 보러가기 →</Link>
        </div>
      </div>
    </section>
  );
}
