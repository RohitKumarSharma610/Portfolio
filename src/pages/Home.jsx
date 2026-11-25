import React, { useState } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../component/Footer";
import profileImage from "../assets/Rohit.png";
import pdff from "../assets/Rohit_Resume.pdf";

const Home = () => {
  const [isProfileFlipped, setIsProfileFlipped] = useState(false);

  return (
    <>
      <main>
        {/* Hero Section */}
        <section
          id="home"
          className="hero-section relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-16"
        >
          {/* Background Effects */}
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="ambient-orb absolute left-[-100px] top-32 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="ambient-orb ambient-orb-delayed absolute bottom-20 right-[-100px] h-72 w-72 rounded-full bg-emerald-500/20 blur-[120px]" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="order-2 text-center lg:order-1 lg:text-left" data-reveal>
              <div className="availability-pill mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-gray-300 backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                Available for new opportunities
              </div>

              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-green-400">
                Shopify developer · web designer
              </p>

              <h1 className="hero-title text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-8xl">
                Digital craft,
                <span className="premium-gradient-text block">
                  built to sell.
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-lg text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
                I’m Rohit Sharma. I create considered Shopify storefronts and
                custom websites that make brands feel as good as they look.
              </p>

              {/* Technologies */}
              <div className="mt-7 flex flex-wrap justify-center gap-2 lg:justify-start">
                {["Shopify", "Liquid", "React", "WordPress"].map((tech) => (
                  <span
                    key={tech}
                    className="tech-pill rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium tracking-wide text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
                <a
                  href="#projects"
                  className="premium-button inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-white px-7 py-3.5 text-center text-sm font-semibold text-black transition hover:-translate-y-1 hover:bg-gray-200 sm:w-auto"
                >
                  Explore selected work
                  <FaArrowUpRightFromSquare size={12} aria-hidden="true" />
                </a>

                <a
                  href={pdff}
                  download="Rohit_Sharma_Resume.pdf"
                  className="premium-outline-button w-full rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white hover:bg-white/10 sm:w-auto"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="order-1 flex justify-center lg:order-2" data-reveal>
              <div className="profile-float relative w-full max-w-[420px]">
                <div className="profile-aura absolute inset-5 rounded-[2rem] blur-3xl" />

                <button
                  type="button"
                  className={`profile-flip-card relative mx-auto h-[390px] w-[300px] rounded-[2rem] sm:h-[500px] sm:w-[380px] ${
                    isProfileFlipped ? "is-flipped" : ""
                  }`}
                  aria-label={
                    isProfileFlipped
                      ? "Show Rohit Sharma's photo"
                      : "Show more about Rohit Sharma"
                  }
                  aria-pressed={isProfileFlipped}
                  onClick={() => setIsProfileFlipped((flipped) => !flipped)}
                >
                  <span className="profile-flip-card-inner">
                    <span
                      className="profile-flip-face profile-flip-front profile-frame absolute inset-0 overflow-hidden rounded-[2rem] border border-white/15 bg-white/5 p-2 shadow-2xl"
                      aria-hidden={isProfileFlipped}
                    >
                      <img
                        src={profileImage}
                        alt="Rohit Sharma - Shopify Developer and Web Designer"
                        className="h-full w-full rounded-[1.6rem] object-cover object-bottom"
                      />
                      <span className="profile-note absolute bottom-5 left-5 rounded-2xl border border-white/15 bg-black/80 px-5 py-4 text-left shadow-xl backdrop-blur-md">
                        <span className="block text-xs font-medium uppercase tracking-[0.16em] text-gray-400">
                          Independent Devloper
                        </span>
                        <span className="mt-1 block text-lg font-semibold text-white">
                          Rohit Sharma
                        </span>
                      </span>
                    </span>

                    <span
                      className="profile-flip-face profile-flip-back absolute inset-0 flex flex-col items-center justify-center rounded-[2rem] border border-white/15 p-8 text-center shadow-2xl sm:p-12"
                      aria-hidden={!isProfileFlipped}
                    >
                      <span className="text-xs font-semibold uppercase tracking-[0.24em] text-green-400">
                        A little about me
                      </span>
                      <span className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                        Thoughtful design.
                        <span className="premium-gradient-text mt-1 block">
                          Useful experiences.
                        </span>
                      </span>
                      <span className="mt-5 text-sm leading-7 text-gray-300 sm:text-base">
                        I’m Rohit, a Shopify developer, Web Devloper and web designer. I build
                        polished, easy-to-use storefronts with Shopify, Liquid,
                        and React.
                      </span>
                      <span className="absolute bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/20 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-gray-300">
                        Click to see my photo
                      </span>
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Sections */}
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="services" className="scroll-mt-20">
          <Services />
        </section>

        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;