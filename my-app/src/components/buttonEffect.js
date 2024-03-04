import React, { useEffect } from "react";
import gsap from "gsap";
import { CSSPlugin } from "gsap";
import "../styles/button.css";
import "../styles/reserve.css";

gsap.registerPlugin(CSSPlugin);

export default function ButtonEffect() {
  useEffect(() => {
    document.querySelectorAll(".button").forEach((button) => {
      button.addEventListener("mousemove", (e) => {});

      button.addEventListener("mouseleave", (e) => {});

      button.addEventListener("click", (e) => {});
    });
  }, []);

  return null;
}
