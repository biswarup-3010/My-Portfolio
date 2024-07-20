import React from "react";
import { ProgressBar } from "primereact/progressbar";
import { GrReactjs } from "react-icons/gr";
import { SiCplusplus, SiSqlalchemy } from "react-icons/si";
import { PiFileSqlLight } from "react-icons/pi";
import { FaJava } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiMicrosoftpowerpoint } from "react-icons/si";
import { SiMicrosoftword } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa6"; //<FaHtml5 /> html
import { IoLogoJavascript } from "react-icons/io5"; //<IoLogoJavascript /> js
import { FaCss3Alt } from "react-icons/fa"; //<FaCss3Alt /> css
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri"; //<RiTailwindCssFill /> tailwind css
import { FaBootstrap } from "react-icons/fa"; //<FaBootstrap />
import { IoLogoFirebase } from "react-icons/io5"; //<IoLogoFirebase />
import { IoLogoNodejs } from "react-icons/io5"; //<IoLogoNodejs />
import { FaPython } from "react-icons/fa6"; //<FaPython />
import { SiNumpy } from "react-icons/si"; //<SiNumpy />
import { SiPandas } from "react-icons/si"; //<SiPandas />
import { FaKaggle } from "react-icons/fa"; //<FaKaggle />
import { SiScikitlearn } from "react-icons/si"; //<SiScikitlearn />
import "./App.css";
export default function About() {
  const MySkills = [
    {
      id: 0,
      heading: "Programming Languages",
      tools: [
        <SiCplusplus />,
        <FaJava />,
        <FaPython />,
        <RiJavascriptFill />,
        <PiFileSqlLight />,
        <SiMysql />,
      ],
    },

    {
      id: 2,
      heading: "Web Technologies /Frame Works",
      tools: [
        <FaHtml5 />,
        <FaCss3Alt />,
        <IoLogoJavascript />,
        <GrReactjs />,
        <FaBootstrap />,
        <RiTailwindCssFill />,
      ],
    },
    {
      id: 1,
      heading: "Database Technologies",
      tools: [<PiFileSqlLight />, <SiMysql />],
    },
    {
      id: 3,
      heading: "Libraries",
      tools: [<SiNumpy />, <SiPandas />, <SiScikitlearn />],
    },

    {
      id: 4,
      heading: "Other skills",
      tools: [
        <SiMicrosoftword />,
        <SiMicrosoftexcel />,
        <SiMicrosoftpowerpoint />,
        <FaKaggle />,
      ],
    },
    {
      id: 5,
      heading: "Soft Skills ",
      tools: ["Problem Solving", "Communication", "Team Work"],
    },
  ];
  return (
    <>
      <div className="m-1 mt-0 mb-0 border-l-2 border-r-2 " id="aboutpage">
        <br />
        <div className="card">
          <ProgressBar value={50} className="text-white"></ProgressBar>
        </div>
        <div
          name="About"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-0 "
        >
          <div>
            <h3 className="text-2xl font-bold mb-5">
              <span>-:( About ):-</span>
            </h3>
            <h1 className="text-blue-400 font-semibold text-xl">
              {" "}
              Introduction
            </h1>
            <br />
            <p className="ml-2 text-blue-100 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
              I'm a final-year B.Tech student in Computer Science and
              Engineering at Haldia Institute of Technology. As a tech
              enthusiast, I'm passionate about exploring the latest advancements
              in the field and applying my knowledge to build innovative
              solutions.
            </p>
            <br />
            <h1 className="text-blue-400 font-semibold text-xl">Education</h1>
            <br />
            <h3 className="ml-2 text-blue-100 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
              1. Bachelor of Technology, at Haldia Institute of Technology,
              2025, CGPA : 9.13/10
              <br />
              <br />
              2. Higher Secondary ( Science ), 2020 , Kenduadihi High School,
              Bankura, 88.40%
              <br />
              <br />
              3. Madhyamik Exam, 2018, Chhotakurpa High School, Bankura, 86.00%
            </h3>
            <br />
            <br />
            <h1 className="text-blue-400 font-semibold text-xl">
              Skills & Expertise
            </h1>
            <br />
            <p className="ml-2 text-blue-100 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
              <ol className="px-0 list-disc space-y-2 text-white">
                {MySkills.map((element, index) => {
                  return (
                    <li key={index} className="flex flex-col">
                      <h1 className="text-blue-100 text-lg mb-5">
                        {element.heading} :
                      </h1>

                      {element.id !== 5 && (
                        <section className="tools-list">
                          {element.tools.map((tool) => {
                            return (
                              <li
                                key={tool.index}
                                className="text-4xl text-green-100"
                              >
                                {tool}
                              </li>
                            );
                          })}
                        </section>
                      )}
                      {element.id === 5 && (
                        <section className="gap-3">
                          {element.tools.map((tool) => {
                            return (
                              <li
                                key={tool.index}
                                className="text-lg text-green-100"
                              >
                                {tool}
                              </li>
                            );
                          })}
                        </section>
                      )}
                      <br />
                    </li>
                  );
                })}
              </ol>
            </p>
            <br />
            <br />
            <h1 className="text-blue-400 font-semibold text-xl">
              Trainee/Internship
            </h1>
            <br />
            <ol className="px-5 list-disc space-y-2 text-white">
              <li>
                <p className="text-white ml-2 text-blue-100 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                  <span className="text-blue-200">Frontend Developer</span>{" "}
                  <br /> Jul, 2024 <br />{" "}
                  <h3 className="text-blue-100">IBM SkillBuild Internship</h3>{" "}
                  <br />
                </p>
              </li>
              <li>
                <p className="text-white ml-2 text-blue-100 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
                  <span className="text-blue-200">US Launchpad Trainee</span>{" "}
                  <br /> Feb, 2024 - Jun, 2024 <br />{" "}
                  <h3 className="text-blue-100">PwC Launchpad</h3> <br />
                </p>
              </li>
            </ol>
            <br />
            <h1 className="text-blue-400 font-semibold text-xl">
              Achievements & Awards
            </h1>
            <br />
            <p className="text-white ml-2 text-blue-100 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
              <ol className="px-5 list-disc space-y-2 text-white">
                <li>Certified as a Top performer in CodingNinjas Course</li>
                <li>
                  Achieved <span>All-India Rank 1739 </span> in Codekaze 2023,
                  showcasing exceptional coding skills.
                </li>
                <li>
                  Solved <span> 600+</span> Questions over all the coding
                  platforms
                </li>
              </ol>
            </p>
            <br />
            <h1 className="text-blue-400 font-semibold text-xl">
              Mission Statement
            </h1>{" "}
            <br />
            <p className="text-white pl-2 ml-4 text-blue-100 text-xs sm:text-xs md:text-sm lg:text-lg xl:text-xl 2xl:text-2xl">
              My mission is to leverage my skills and creativity to deliver
              innovative Web Development solutions that exceed client
              expectations and contribute positively to the digital landscape. I
              am committed to continuous learning and growth, always seeking new
              challenges and opportunities to expand my horizons.
            </p>
            <br />
          </div>
        </div>
      </div>

      <span className="flex items-center text-indigo z-1 text-2xl">
        <span className="p-0 m-0 text-2xl">+</span>{" "}
        <hr className="h-px w-screen border-0 bg-white z-1" />{" "}
        <span className="p-0 m-0 text-2xl">+</span>
      </span>
    </>
  );
}
