import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";
import { FaJava } from "react-icons/fa6";
// import { BiLogoSpringBoot } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { ReactTyped } from "react-typed";
import "./HomPage.css";
import AddAnimation from "./AddAnimation";
export default function HomePage({ pic }) {
  return (
    <>
      <div
        className="m-1 mt-0 mb-0 border-l-2 border-r-2 md:h-screen  lg:h-screen xl:h-screen border-t-2"
        id="homepage"
      >
        <div
          name="Home"
          className="max-w-screen-2xl container mx-auto px-4 md:px-12 mt-20 h-auto "
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
              <span className="text-xl">Welcome In My Feed</span>
              <div className="flex space-x-1 text-1xl md: text-3xl">
                <h4 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                  Hello, I'm a
                </h4>
                <ReactTyped
                  className="font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={70}
                  backSpeed={50}
                  loop={true}
                />
              </div>
              <br />
              <p
                className="text-sm md:text-md text-justify"
                style={{ color: "#f1f5f9" }}
              >
                <p className="text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                  Hi, I'm <span>Biswarup Banerjee</span>. A passionate Computer
                  Science and Engineering student with a zeal for coding,
                  programming, and developing innovative solutions. With a
                  strong foundation in technology and a thirst for knowledge,
                  I'm excited to showcase my projects and skills. Let's connect
                  and create something amazing together!
                </p>
              </p>
              <br />
              <div className="flex flex-col items-center  md:flex-row justify-between space-y-10 space-x-0 md:space-y-0">
                <div
                  className="space-y-3 p-3 opacity-0 animate__animated animate__fadeInUp animate__delay-0.5s"
                  style={{ animationDuration: "400ms" }}
                >
                  <h1
                    className="font-bold text-center text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl special-case-repsonces"
                    style={{ color: "#e5e7eb" }}
                  >
                    Available on
                  </h1>
                  <ul className="flex space-x-5">
                    <li>
                      <a
                        href="https://www.facebook.com/profile.php?id=100081347947021"
                        target="_blank"
                      >
                        <FaSquareFacebook className="text-xl cursor-pointer t-colour-change md:text-2xl hover:scale-110 duration-200  cursor-pointer " />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/its_biswarup1/ "
                        target="_blank"
                      >
                        <FaInstagramSquare className="text-xl cursor-pointer t-colour-change md:text-2xl hover:scale-110 duration-200  cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/biswarup-banerjee-406b72241/"
                        target="_blank"
                      >
                        <BsLinkedin className="text-xl cursor-pointer t-colour-change md:text-2xl hover:scale-110 duration-200  cursor-pointer" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/biswarup-3010"
                        target="_blank"
                      >
                        <FaGithub className="text-xl cursor-pointer t-colour-change md:text-2xl hover:scale-110 duration-200  cursor-pointer" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className="space-y-3 p-3 opacity-0 animate__animated animate__fadeInUp animate__delay-0.5s"
                  style={{ animationDuration: "1000ms" }}
                >
                  <h1
                    className="font-bold text-center text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl"
                    style={{ color: "#e5e7eb" }}
                  >
                    Currently working on
                  </h1>
                  <div className="flex space-x-5">
                    <RiReactjsFill className="text-xl t-colour-change md:text-2xl hover:scale-110 duration-200  cursor-pointer" />
                    <SiTailwindcss className="text-xl t-colour-change md:text-2xl hover:scale-110 duration-200  cursor-pointer" />
                    <FaJava className="text-xl t-colour-change md:text-2xl hover:scale-110 duration-200  cursor-pointer" />
                    {/* <BiLogoSpringBoot className="text-xl t-colour-change md:text-2xl hover:scale-110 duration-200  cursor-pointer" /> */}
                    <FaDatabase className="text-xl t-colour-change md:text-2xl hover:scale-110 duration-200  cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:ml-10 md:mt-20 mt-8 order-1 lg:ml-32">
              <AddAnimation />
              <img
                src={pic}
                className="w-1/2 h-1/2 sm:w-64 sm:h-64 md:w-auto md:h-auto lg:w-1/1.1 xl:w-1/1.2 2xl:w-1/3 roundlg "
                alt=""
              />
            </div>
          </div>
        </div>
        <br />
      </div>

      <span className="flex items-center text-indigo z-1 text-2xl">
        <span className="p-0 m-0 text-2xl">+</span>{" "}
        <hr className="h-px w-screen border-0 bg-white z-1" />{" "}
        <span className="p-0 m-0 text-2xl">+</span>
      </span>
    </>
  );
}
