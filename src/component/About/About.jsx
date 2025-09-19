import React from "react";
import s from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={s.split}>
      <div className={s.splitLeft}>
        <h2>About</h2>
        <p>
          I’m a frontend developer focused on React and modern JavaScript. I
          care about clean components, responsive layouts, and accessible,
          readable UI.
        </p>
        <p>
          I’m also learning a little backend with Node/Express so I can wire up
          simple APIs and authentication when needed.
        </p>
      </div>
      <div className={s.splitRight}>
        <ul className={s.stats}>
          <li>
            <strong>1–2 yrs</strong>
            <span>Coding experience</span>
          </li>
          <li>
            <strong>5–8</strong>
            <span>Projects shipped</span>
          </li>
          <li>
            <strong>3</strong>
            <span>Live demos</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
