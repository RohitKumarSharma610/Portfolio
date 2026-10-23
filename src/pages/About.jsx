import React from "react";

const skills = [
  "Shopify",
  "Liquid",
  "React.js",
  "JavaScript",
  "WordPress",
  "WordPress Customization",
  "Shopify Theme Customization",
  "HTML & CSS",
  "Tailwind CSS",
  "Responsive Web Design",
  "Git & GitHub",
];

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "Shopify", label: "Store Development" },
];

const About = () => {
  return (
    <section className="premium-section relative overflow-hidden bg-[#050505] px-5 py-28 text-white sm:px-8 lg:px-16">
      {/* Background Effects */}
      <div className="absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-green-500/10 blur-[130px]" />
      <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 max-w-3xl" data-reveal>
          <p className="section-kicker text-xs font-semibold uppercase tracking-[0.28em] text-green-400">
            01 / A little introduction
          </p>

          <h2 className="section-title mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
            Thoughtful by design.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400 sm:text-xl">
            Good digital experiences should feel effortless. I bring thoughtful
            design and careful development together to help brands stand out.
          </p>
        </div>

        {/* About Content */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Left Column */}
          <div data-reveal style={{ "--reveal-delay": "100ms" }}>
            <div className="space-y-5 text-base leading-8 text-gray-400">
              <p>
                I’m Rohit Sharma, a Shopify developer and web designer focused
                on creating distinctive, easy-to-use online stores.
              </p>

              <p>
                I work with Shopify, Liquid, and React to build and customize
                storefront experiences, and with WordPress to tailor themes,
                layouts, and website components.
              </p>

              <p>
                I use responsive design and clean, maintainable code to create
                useful experiences across desktop and mobile devices.
              </p>
            </div>

            <a
              href="#projects"
              className="premium-button mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-200"
            >
              Explore My Projects
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right Column */}
          <div data-reveal style={{ "--reveal-delay": "200ms" }}>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400">
              Technologies I work with
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  data-reveal
                  style={{ "--reveal-delay": `${Math.min(index * 45, 360)}ms` }}
                  className="skill-pill rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Statistics */}
            <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <p className="text-2xl font-bold text-white">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Current Focus */}
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-5">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 animate-pulse rounded-full bg-green-400" />

                <div>
                  <p className="font-medium text-white">Currently focused on</p>
                  <p className="mt-1 text-sm leading-6 text-gray-500">
                    Building Shopify storefronts with Liquid and React, and
                    customizing WordPress themes and components.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;