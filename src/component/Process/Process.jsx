import React from "react";
import s from "./Process.module.css";

export default function Process() {
  const steps = [
    { t: "Discover", d: "Clarify goals, constraints, audiences. Align on success metrics." },
    { t: "Design", d: "Wireframes → hi-fi mocks. Motion studies. A11y checks early." },
    { t: "Develop", d: "Component library, state model, API contracts, perf budgets." },
    { t: "Deliver", d: "Ship, measure, iterate. Set up logging and dashboards." },
  ];
  return (
    <section id="process" className="section">
      <header className="secHead"><h2>Process</h2><p>Lightweight, outcome-driven, and collaborative.</p></header>
      <ol className={s.timeline}>
        {steps.map((st, i) => (
          <li key={st.t}>
            <span className={s.stepIndex}>{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3>{st.t}</h3>
              <p>{st.d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
