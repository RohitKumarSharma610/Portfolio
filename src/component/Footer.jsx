import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="premium-footer border-t border-white/10 bg-black px-5 py-10 text-white sm:px-8 lg:px-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left" data-reveal>
        {/* Name and Copyright */}
        <div>
          <a
            href="#home"
            className="text-lg font-semibold text-white transition hover:text-green-400"
          >
            Rohit Sharma
          </a>

          <p className="mt-1 text-sm text-gray-500">
            © {currentYear} Rohit Sharma. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/RohitKumarSharma610"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Rohit's GitHub profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="http://linkedin.com/in/rohit-kumar-sharma-220436345"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Rohit's LinkedIn profile"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white hover:text-black"
          >
            <FaLinkedinIn size={17} />
          </a>
        </div>

        {/* Back to Top */}
        <a
          href="#home"
          className="group inline-flex items-center gap-3 text-sm text-gray-400 transition hover:text-white"
        >
          Back to top

          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-black">
            <FaArrowUp size={12} />
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;