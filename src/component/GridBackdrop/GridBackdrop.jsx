import React from "react";
import s from "./GridBackdrop.module.css";

export default function GridBackdrop() {
  return (
    <div aria-hidden className={s.backdrop}>
      <div className={s.grid}></div>
      <div className={s.glowA}></div>
      <div className={s.glowB}></div>
    </div>
  );
}
