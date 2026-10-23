import React, { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./pages/Home";

function App() {
  const [isLightMode, setIsLightMode] = useState(
    () => window.localStorage.getItem("portfolio-theme") === "light"
  );

  const toggleTheme = () => {
    setIsLightMode((currentMode) => {
      const nextMode = !currentMode;
      window.localStorage.setItem(
        "portfolio-theme",
        nextMode ? "light" : "dark"
      );
      return nextMode;
    });
  };

  useEffect(() => {
    const revealElements = document.querySelectorAll("[data-reveal]");
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => {
        element.classList.add("is-visible");
      });
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return (
    <div
      className={`portfolio-app min-h-screen overflow-x-hidden bg-black text-white ${
        isLightMode ? "light-mode" : "dark-mode"
      }`}
    >
      <Navbar isLightMode={isLightMode} onToggleTheme={toggleTheme} />
      <Home />
    </div>
  );
}

export default App;