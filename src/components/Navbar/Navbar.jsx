import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSun, FaMoon } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } catch (e) {
      return 'light'
    }
  })

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "certificates", label: "Certificates" },
    { id: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled 
          ? "dark:bg-background-dark dark:bg-opacity-50 bg-background-light bg-opacity-50 backdrop-blur-md shadow-md" 
          : "bg-transparent"
      }`}
    >
      <div className="dark:text-content-dark text-content-light py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-primary">&lt;</span>
          <span className="dark:text-content-dark text-content-light">Ritik</span>
          <span className="text-primary">/</span>
          <span className="dark:text-content-dark text-content-light">Singh</span>
          <span className="text-primary">&gt;</span>
        </div>

        {/* Theme toggle */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            aria-label="Toggle theme"
            onClick={() => {
              const newTheme = theme === 'dark' ? 'light' : 'dark'
              setTheme(newTheme)
              try {
                localStorage.setItem('theme', newTheme)
              } catch (e) {}
              if (newTheme === 'dark') document.documentElement.classList.add('dark')
              else document.documentElement.classList.remove('dark')
            }}
            className="text-gray-300 hover:text-[#ec6945] p-2 rounded"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 dark:text-gray-300 text-gray-600">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-primary transition-colors ${
                activeSection === item.id ? "text-primary" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

  {/* Social Icons */}
  <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/ritiksingh4433"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-300 text-gray-600 hover:text-primary transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ritik-singh4433/"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:text-gray-300 text-gray-600 hover:text-primary transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              className="text-3xl text-primary cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className="text-3xl text-primary cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 dark:bg-background-dark bg-background-light bg-opacity-50 dark:bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 dark:text-gray-300 text-gray-600">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-primary transition-colors ${
                  activeSection === item.id ? "text-primary" : ""
                }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className="flex items-center space-x-4">
              <button
                aria-label="Toggle theme"
                onClick={() => {
                  const newTheme = theme === 'dark' ? 'light' : 'dark'
                  setTheme(newTheme)
                  try {
                    localStorage.setItem('theme', newTheme)
                  } catch (e) {}
                  if (newTheme === 'dark') document.documentElement.classList.add('dark')
                  else document.documentElement.classList.remove('dark')
                }}
                className="dark:text-gray-300 text-gray-600 hover:text-primary transition-colors p-2 rounded"
              >
                {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
              </button>

              <div className="flex space-x-4">
              <a
                href="https://github.com/ritiksingh4433"
                target="_blank"
                rel="noopener noreferrer"
                  className="dark:text-gray-300 text-gray-600 hover:text-primary transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/ritik-singh4433/"
                target="_blank"
                rel="noopener noreferrer"
                  className="dark:text-gray-300 text-gray-600 hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
