import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const projects = [
  {
    id: 1,
    name: "English Brands",
    type: "Shopify Store",
    description:
      "Responsive Shopify storefront with custom Liquid sections and refined product and collection pages.",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    live: "https://english-brands.co.uk/",
  },
  {
    id: 2,
    name: "Pure Spectrum CBD",
    type: "E-commerce Store",
    description:
      "Online store customization with clean product layouts, storefront updates and mobile-first styling.",
    technologies: ["Shopify", "Liquid", "CSS"],
    live: "https://purespectrumcbd.com/",
  },
  {
    id: 3,
    name: "Casa Fika",
    type: "Storefront",
    description:
      "Multi-language storefront customization focused on usability across desktop, tablet and mobile.",
    technologies: ["Shopify", "Liquid", "Responsive UI"],
    live: "https://casafika.it/en",
  },
  {
    id: 4,
    name: "Kind Lights",
    type: "Shopify Store",
    description:
      "Custom theme sections and product page improvements built from design references.",
    technologies: ["Shopify", "Liquid", "Tailwind CSS"],
    live: "https://kindlights.co/",
  },
  {
    id: 5,
    name: "Sonya Moda",
    type: "Fashion Store",
    description:
      "Fashion storefront with customized collection pages, layouts and visual consistency.",
    technologies: ["Shopify", "Liquid", "JavaScript"],
    live: "https://sonya.moda/",
  },
  {
    id: 6,
    name: "Kumiukoo",
    type: "Shopify Store",
    description:
      "Theme customization and layout work with careful typography, spacing and responsive behavior.",
    technologies: ["Shopify", "Liquid", "CSS"],
    live: "https://kumiukoo.fi/",
  },
  {
    id: 7,
    name: "Rubio Monocoat",
    type: "Brand Website",
    description:
      "Custom page layouts and storefront updates with cross-browser testing and ongoing maintenance.",
    technologies: ["Shopify", "Liquid", "Maintenance"],
    live: "https://www.rubiomonocoat.com",
  },
  {
    id: 8,
    name: "Musical Breathwork",
    type: "Website",
    description:
      "Responsive website build with clean layouts and interactive features using JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "",
  },
];

const getDomain = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const Projects = () => {
  return (
    <section
      id="projects"
      className="premium-section relative overflow-hidden bg-black px-5 py-28 text-white sm:px-8 lg:px-16"
    >
      {/* Background glows (same feel as hero) */}
      <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center" data-reveal>
          <p className="section-kicker mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-400">
            03 / Selected work
          </p>

          <h2 className="section-title text-4xl font-semibold tracking-tight sm:text-6xl">
            A few good projects.
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Live Shopify and web projects built for real clients, from custom
            Liquid sections to responsive storefronts.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.id}
              data-reveal
              style={{ "--reveal-delay": `${Math.min(project.id * 70, 420)}ms` }}
              className="premium-project-card group relative flex h-full flex-col rounded-3xl bg-gradient-to-br from-white/15 via-white/5 to-white/5 p-px transition duration-500 hover:-translate-y-1 hover:from-green-400/60 hover:via-cyan-400/30 hover:to-blue-500/60"
            >
              <div className="flex h-full flex-col rounded-[calc(1.5rem-1px)] bg-[#050505] p-6 sm:p-7">
                {/* Type pill */}
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-gray-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  {project.type}
                </span>

                <h3 className="mt-5 text-xl font-semibold leading-snug text-white">
                  {project.name}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-6 border-t border-white/10 pt-5">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex max-w-full items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black transition hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                    >
                      <span className="truncate">{getDomain(project.live)}</span>
                      <FaArrowUpRightFromSquare size={11} className="shrink-0" />
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-gray-500">
                      Client project
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center" data-reveal>
          <p className="text-sm text-gray-500">
            Have a store or website in mind?
          </p>

          <a
            href="#contact"
            className="premium-button mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
