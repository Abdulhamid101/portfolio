import React from "react";
import s from "./Skills.module.css";

const CATS = [
  {
    h: "Core Frontend",
    items: [
      { t: "React", level: "Comfortable" },
      { t: "JavaScript (ES6 basics)", level: "Comfortable" },
      { t: "HTML5", level: "Comfortable" },
      { t: "CSS3 + CSS Modules", level: "Comfortable" },
      { t: "Responsive layouts (Flexbox/Grid)", level: "Comfortable" },
    ],
  },
  {
    h: "Tooling",
    items: [
      { t: "Git & GitHub (basics)", level:  "Comfortable" },
      { t: "npm", level:  "Comfortable" },
      { t: "Vite", level:  "Comfortable" },
      { t: "VS Code", level: "Daily" },
    ],
  },
  {
    h: "Backend (tiny bit)",
    items: [
      { t: "Node & Express (intro)", level: "Basics" },
      { t: "REST & JSON (requests)", level: "Basics" },
      { t: "Postman/Thunder Client", level: "Basics" },
    ],
  },
  {
    h: "Deployment",
    items: [{ t: "Netlify / Vercel (basics)", level: "Basics" }],
  },
  {
    h: "Currently learning",
    items: [
      { t: "React forms & validation" },
      { t: "State with Context" },
      { t: "API integration & error handling" },
      { t: "Accessibility (a11y) basics" },
      { t: "Testing (RTL) – early" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <header className="secHead">
        <h2>Skills</h2>
        <p>
          Focused on React, JavaScript, and CSS. Learning backend step by step.
        </p>
      </header>

      <div className={s.grid}>
        {CATS.map((cat) => (
          <article key={cat.h} className={s.card}>
            <h3>{cat.h}</h3>
            <ul>
              {cat.items.map(({ t, level }) => (
                <li key={t} className={s.item}>
                  <span className={s.label}>{t}</span>
                  {level && <span className={s.badge}>{level}</span>}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
