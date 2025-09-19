import React from "react";
import s from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <header className="secHead">
        <h2>Let’s build something</h2>
        <p>Have a brief or idea? I’d love to hear it.</p>
      </header>
      <form className={s.form} onSubmit={(e) => e.preventDefault()}>
        <div className={s.row}>
          <label>
            <span>Name</span>
            <input placeholder="Your name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" placeholder="you@example.com" required />
          </label>
        </div>
        <label>
          <span>Message</span>
          <textarea rows={5} placeholder="What are we building?" required />
        </label>
        <div className={s.rowJustify}>
          <a className={s.ghost} href="mailto:hello@example.com">
            Or email directly
          </a>
          <button className={s.primary} type="submit">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
