import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PROJECTS } from "../data/site.js";
import Media from "../components/Media.jsx";

export default function Projects() {
  const navigate = useNavigate();
  const trackRef = useRef(null);

  // 버튼을 누르면 보이는 폭만큼(약 한 화면) 이동
  const move = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85; // 한 번에 넘어가는 거리
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="tt-carousel">
      <div className="tt-carousel-head">
        <h2 className="tt-main-title">SEE MY PROJECTS</h2>
        <p className="tt-main-sub">
          기획·마케팅부터 서비스 구현·B2B까지, 제가 진행한 프로젝트입니다.
        </p>
      </div>

      <div className="tt-carousel-viewport">
        <button
          className="tt-arrow left"
          onClick={() => move(-1)}
          aria-label="이전 프로젝트"
        >
          ‹
        </button>

        <div className="tt-track" ref={trackRef}>
          {PROJECTS.map((p) => (
            <article className="tt-slide" key={p.id}>
              <div
                className="tt-slide-img"
                onClick={() => navigate(`/projects/${p.id}`)}
              >
                <Media src={p.image} label={p.title} className="tt-slide-media" />
              </div>
              <div className="tt-slide-meta">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <button onClick={() => navigate(`/projects/${p.id}`)}>
                  See more →
                </button>
              </div>
            </article>
          ))}
        </div>

        <button
          className="tt-arrow right"
          onClick={() => move(1)}
          aria-label="다음 프로젝트"
        >
          ›
        </button>
      </div>
    </section>
  );
}
