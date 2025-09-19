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
          Focused on React, JavaScript, and CSS Modules. Exploring a bit of{" "}
          <strong>Node/Express</strong> for simple APIs and auth flows.
        </p>

        <div className={s.actions}>
          <a
            className={s.primary}
            href="#work"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            See my projects
          </a>
          <a
            className={s.ghost}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact me
          </a>
        </div>

        {/* 🔥 Simple, unique introduction (no cards) */}
        <div className={s.introWrap}>
          <h3 className={s.introHeading}>Hi, I’m <span className={s.name}>Your Name</span>.</h3>
          <p className={s.introLead}>
            I’m a junior frontend developer who enjoys turning ideas into clean,
            responsive interfaces. I care about readable code, accessibility, and
            small, tasteful motion that makes products feel alive.
          </p>

          <ul className={s.pills}>
            <li className={s.pill}>React (Hooks)</li>
            <li className={s.pill}>JavaScript (ES6)</li>
            <li className={s.pill}>CSS Modules</li>
            <li className={s.pill}>Responsive layouts</li>
            <li className={s.pill}>Vercel / Netlify</li>
          </ul>

          <p className={s.note}>
            Currently learning: Node/Express basics, form validation, a11y, and testing (RTL).
          </p>
          <p className={s.openTo}>Open to junior frontend / internship roles.</p>
        </div>
      </div>
    </section>
  );
}
