import React, { useEffect, useRef } from "react";
import s from "./Hero.module.css";

function useParallax(range = 10) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      el.style.setProperty("--tiltX", `${-(dy * range).toFixed(2)}deg`);
      el.style.setProperty("--tiltY", `${(dx * range).toFixed(2)}deg`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [range]);
  return ref;
}

export default function Hero() {
  const ref = useParallax(10);
  return (
    <section id="home" className={s.hero}>
      <div className={s.heroIn} ref={ref}>
        <p className={s.kicker}>Frontend Developer</p>
        <h1 className={s.title}>
          I build clean <em>React</em> interfaces with solid CSS
        </h1>
        <p className={s.subtitle}>
          Focused on React, JavaScript, and CSS Modules. I’m exploring a little
          <strong> Node/Express</strong> for simple APIs and auth flows.
        </p>
        <div className={s.actions}>
          <a
            className={s.primary}
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("work")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See my projects
          </a>
          <a
            className={s.ghost}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact me
          </a>
        </div>

        <div className={s.cards}>
          {[
            {
              h: "CHEF",
              p: "Travel landing & planner built with React + CSS Modules.",
              tag: "React",
            },
            {
              h: "NEXA",
              p: "Simple site with sections, forms, and smooth scroll.",
              tag: "Frontend",
            },
            {
              h: "TRAVELLY",
              p: "Basic Node/Express JWT auth (learning project).",
              tag: "Backend basics",
            },
          ].map((c, i) => (
            <article key={i} className={s.card}>
              <div className={s.cardTag}>{c.tag}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <button className={s.more}>Open</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
