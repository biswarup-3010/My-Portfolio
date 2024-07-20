import React, { useState } from "react";
import "./navBar.css";

export default function NavBar({ pic }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const menuItems = [
    { id: 1, title: "Home", link: "#homepage" },
    { id: 2, title: "About", link: "#aboutpage" },
    { id: 3, title: "Projects", link: "#projectpage" },
    { id: 4, title: "Experience", link: "#experiencepage" },
    {
      id: 5,
      title: "Resume",
      link: "https://drive.google.com/file/d/13m_f6eALBTYREjmEISruTCMz0G6POir5/view?usp=sharing",
    },
  ];
  const rotateIcon = () => {
    setIsRotated(!isRotated);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-dark-blue text-white z-10 fixed top-0 left-0 w-full">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img
            src={pic}
            alt="Profile Pic"
            className=" animate-pulse h-12 w-12 rounded-full"
          />
          <div>
            <h1 className="font-semibold text-lg">
              <span>&lt;</span> Biswa<span className="font-normal">rup</span>/
              <span>&gt;</span>
            </h1>
            <p className="text-sm">Web Developer</p>
          </div>
        </div>
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.id !== 5 && (
                <a
                  href={item.link}
                  onClick={(event) => {
                    event.preventDefault();
                    const targetElement = document.querySelector(item.link);
                    targetElement.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  {item.title}
                </a>
              )}
              {item.id === 5 && (
                <a target="_blank" href={item.link}>
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <button
            className={`text-white focus:outline-none ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-800 ${
                isRotated ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={rotateIcon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`${isOpen ? "open-line1" : ""}`}
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <ul
          className={`md:hidden text-indigo-500 p-4 flex flex-col items-center space-y-2 bg-gradient-to-b from-indigo-900/0 to-blue-300/90`}
        >
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.id !== 5 && (
                <a
                  href={item.link}
                  className="block options"
                  onClick={(event) => {
                    event.preventDefault();
                    const targetElement = document.querySelector(item.link);
                    setTimeout(() => {
                      targetElement.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }, 300);
                  }}
                >
                  {item.title}
                </a>
              )}
              {item.id === 5 && (
                <a target="_blank" className="block options" href={item.link}>
                  {item.title}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
