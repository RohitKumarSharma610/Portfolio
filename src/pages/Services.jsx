import React from "react";
import {
  FaArrowRight,
  FaCode,
  FaLaptopCode,
  FaServer,
} from "react-icons/fa";

const services = [
  {
    id: "01",
    title: "Shopify Store Development",
    description:
      "Creating and improving Shopify storefronts with custom Liquid sections, responsive layouts, and polished product experiences.",
    details: [
      "Shopify theme customization",
      "Liquid sections and templates",
      "Product and collection pages",
      "Responsive storefront design",
    ],
    icon: FaCode,
  },
  {
    id: "02",
    title: "Web Design & React",
    description:
      "Designing clean, mobile-friendly websites and building interactive interfaces with React and reusable components.",
    details: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Responsive web design",
    ],
    icon: FaLaptopCode,
  },
  {
    id: "03",
    title: "WordPress Customization",
    description:
      "Customizing WordPress themes and components to create a website that fits your brand and content needs.",
    details: [
      "Theme and layout customization",
      "Custom CSS and code",
      "Page and component styling",
      "Mobile-friendly improvements",
    ],
    icon: FaServer,
  },
];

const Services = () => {
  return (
    <section className="premium-section premium-section-alt relative overflow-hidden bg-[#050505] px-5 py-28 text-white sm:px-8 lg:px-16">
      {/* Background Effects */}
      <div className="absolute right-[-160px] top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[130px]" />
      <div className="absolute bottom-0 left-[-120px] h-72 w-72 rounded-full bg-green-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center" data-reveal>
          <p className="section-kicker mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-green-400">
            02 / How I can help
          </p>

          <h2 className="section-title text-4xl font-semibold tracking-tight sm:text-6xl">
            Made with intention.
          </h2>

          <p className="mt-5 leading-7 text-gray-400">
            Shopify storefronts, React interfaces, and customized WordPress
            websites designed for a smooth experience on every device.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                data-reveal
                style={{ "--reveal-delay": `${Number(service.id) * 100}ms` }}
                className="premium-card group relative flex min-h-[400px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 transition duration-500 hover:-translate-y-2 hover:border-white/25 hover:bg-white/[0.06] sm:p-8"
              >
                {/* Card Number */}
                <span className="absolute right-7 top-5 text-5xl font-bold text-white/[0.04] transition duration-500 group-hover:text-white/[0.08]">
                  {service.id}
                </span>

                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition duration-500 group-hover:rotate-3 group-hover:bg-white group-hover:text-black">
                  <Icon size={24} />
                </div>

                {/* Card Content */}
                <h3 className="text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-[84px] leading-7 text-gray-400">
                  {service.description}
                </p>

                {/* Service Details */}
                <ul className="mt-7 space-y-3">
                  {service.details.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Bottom Link */}
                <a
                  href="#contact"
                  className="mt-auto flex items-center gap-2 pt-8 text-sm font-semibold text-white transition hover:text-green-400"
                >
                  Discuss a project
                  <FaArrowRight
                    size={12}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>

                {/* Hover Line */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;