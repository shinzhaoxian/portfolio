import { MEDIA, PROFILE } from "../data/site.js";

export default function Contact() {
  return (
    <section className="tt-contact">
      <div className="tt-hero-bg">
        {MEDIA.heroVideo ? (
          <video src={MEDIA.heroVideo} autoPlay muted loop playsInline />
        ) : (
          <div className="tt-hero-motion" />
        )}
        <div className="tt-hero-scrim" />
      </div>
      <div className="tt-contact-inner">
        <h1 className="tt-display sm">
          I WOULD LOVE TO<br />HEAR FROM YOU.<br />
          IT'S TIME TO <span className="acc-l">( TALK )</span>
        </h1>
        <div className="tt-contact-info">
          <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          <span>{PROFILE.phone}</span>
          <span>{PROFILE.location}</span>
        </div>
      </div>
    </section>
  );
}
