import { MEDIA, PROFILE, SKILLS } from "../data/site.js";
import Media from "../components/Media.jsx";

export default function About() {
  return (
    <section className="tt-about">
      <Media src={MEDIA.about} label="Profile" className="tt-about-img" />
      <div className="tt-about-text">
        <p className="tt-eyebrow">KNOW ME</p>
        <h1 className="tt-about-hi">Hello!</h1>
        <p className="tt-about-name">
          시장을 읽고 기획으로 옮기는 <b>{PROFILE.name}</b>입니다
        </p>
        <p className="tt-about-p">
          대만에서 4년간 국제경영을 전공하며 영어·중국어 커뮤니케이션 능력과 중화권
          시장에 대한 이해를 쌓았습니다.
        </p>
        <p className="tt-about-p">
          팀 프로젝트에서는 서비스 기획과 함께 수익모델(구독·광고)까지 제안했고,
          일부 화면을 직접 구현했습니다. 현재는 글로벌 에너지 기업 OTR팀에서 EPC
          고객사와 해외 공장 사이의 B2B 프로젝트를 조율하며 데이터 처리 자동화를
          담당하고 있습니다.
        </p>
        <p className="tt-about-p">
          데이터 분석 자격(ADsP·GA4)과 풀스택 개발 부트캠프(약 960시간)를 이수해,
          기획과 실행·구현을 함께 다룹니다. 이 사이트도 React로 직접 만들었습니다.
        </p>

        <div className="tt-skills">
          {SKILLS.map(([name, lvl]) => (
            <div className="tt-skill" key={name}>
              <span>{name}</span>
              <div className="tt-dots">
                {[1, 2, 3, 4, 5].map((n) => (
                  <i key={n} className={n <= lvl ? "on" : ""} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
