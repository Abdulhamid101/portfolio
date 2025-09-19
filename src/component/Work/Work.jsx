import React, { useMemo } from "react";
import s from "./Work.module.css";

export default function Work() {
  const items = useMemo(
    () => [
      {
        id: "w1",
        title: "CHEF",
        desc: "Landing + trip planner. React Router, session storage, neat card grid.",
        roles: ["React", "CSS Modules"],
        demo: "https://chef-website-two-nh9u.vercel.app", 
        code: "https://github.com/Abdulhamid101/Chef-website-two.git", 
      },
      {
        id: "w2",
        title: "NEXA",
        desc: "Multi-section site with smooth scroll, sticky nav, contact form.",
        roles: ["JavaScript", "Accessibility"],
        demo: "https://github.com/Abdulhamid101/NEXA.git",
        code: "https://github.com/Abdulhamid101/NEXA.git",
      },
      {
        id: "w3",
        title: "TRAVELLY",
        desc: "Node/Express basics: register/login, JWT, protected routes.",
        roles: ["Node (basics)", "Express"],
        demo: "http://travelly-eo2i.vercel.app",
        code: "https://github.com/Abdulhamid101/Travelly.git",
      },
    ],
    []
  );

  return (
    <section id="work" className="section">
      <header className="secHead">
        <h2>Projects</h2>
        <p>Small, focused builds that show how I think and code.</p>
      </header>
      <div className={s.workGrid}>
        {items.map((it) => (
          <article key={it.id} className={s.workItem}>
            <div className={s.thumb}>
              <div className={s.thumbImg} />
            </div>
            <div className={s.meta}>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <ul className={s.roles}>
                {it.roles.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
              <div className={s.actionsRow}>
                <a
                  href={it.demo}
                  className={s.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
                <a
                  href={it.code}
                  className={s.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
