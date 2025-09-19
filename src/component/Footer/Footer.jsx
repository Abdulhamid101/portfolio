import React from "react";
import s from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.footIn}>
        <div>© {new Date().getFullYear()} Your Name</div>
        <div className={s.socials}>
          <a href="#" aria-label="GitHub">
            GitHub
          </a>
          <a href="#" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="#" aria-label="X/Twitter">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
