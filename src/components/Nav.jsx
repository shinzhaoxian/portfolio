import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PROFILE } from "../data/site.js";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const close = () => setMenu(false);

  return (
    <header className="tt-nav">
      <Link className="tt-logo" to="/" onClick={close}>{PROFILE.brand}</Link>

      <button className="tt-burger" onClick={() => setMenu(!menu)} aria-label="menu">
        <span /><span /><span />
      </button>

      <nav className={"tt-links " + (menu ? "is-open" : "")}>
        <NavLink className="tt-link" to="/projects" onClick={close}>See All Project</NavLink>
        <NavLink className="tt-link" to="/about" onClick={close}>Know Me</NavLink>
        <NavLink className="tt-link" to="/contact" onClick={close}>Contact</NavLink>
      </nav>
    </header>
  );
}
