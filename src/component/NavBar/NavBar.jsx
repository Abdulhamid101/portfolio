import React, { useEffect, useState } from "react";
import s from "./NavBar.module.css";

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.2, 0.6], rootMargin: "-20% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

export default function Nav() {
  const ids = ["home", "work", "about", "skills", "process", "contact"];
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // lock scroll when menu open
  useEffect(() => {
    const prev = document.documentElement.style.overflow;
    if (open) document.documentElement.style.overflow = "hidden";
    return () => (document.documentElement.style.overflow = prev);
  }, [open]);

  const goto = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.history.pushState({}, "", `/#${id}`);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className={s.navbar}>
      <div className={s.navwrap}>
        <a
          href="#home"
          className={s.brand}
          onClick={(e) => {
            e.preventDefault();
            goto("home");
          }}
        >
          <span className={s.brandMark}>KA</span>
          <span className={s.brandText}>Portfolio</span>
        </a>

        {/* Mobile menu button */}
        <button
          className={`${s.menuBtn} ${open ? s.menuOpen : ""}`}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={s.burger} aria-hidden />
          <span className={s.srOnly}>Menu</span>
        </button>

        {/* Links (mobile = dropdown, desktop = inline) */}
        <nav
          id="nav-links"
          className={`${s.links} ${open ? s.open : ""}`}
          aria-hidden={!open}
        >
          {ids.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${s.link} ${active === id ? s.active : ""}`}
              onClick={(e) => {
                e.preventDefault();
                goto(id);
              }}
            >
              {id}
            </a>
          ))}
        </nav>
      </div>

      {/* Scrim for mobile menu */}
      <div
        className={`${s.scrim} ${open ? s.show : ""}`}
        onClick={() => setOpen(false)}
      />
    </header>
  );
}
