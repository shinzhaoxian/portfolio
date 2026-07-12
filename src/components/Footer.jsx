import { Link } from "react-router-dom";
import { PROFILE } from "../data/site.js";

export default function Footer() {
  return (
    <footer className="tt-foot">
      <h2 className="tt-foot-title">Time to ( Contact )</h2>
      <div className="tt-foot-cols">
        <div>
          <h4>Contact</h4>
          <p><span>Email</span> <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></p>
          <p><span>Call</span> {PROFILE.phone}</p>
          <p><span>Base</span> {PROFILE.location}</p>
        </div>
        <div>
          <h4>Certs</h4>
          <p>ADsP · GA4</p>
          <p>Full-stack Bootcamp (960h)</p>
        </div>
      </div>
      <div className="tt-foot-bar">
        <span>© {new Date().getFullYear()} {PROFILE.nameEn}</span>
        <Link to="/contact">More →</Link>
      </div>
    </footer>
  );
}
