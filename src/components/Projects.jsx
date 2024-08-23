import React, { useState } from "react";
import "./project.css";
import { GrReactjs } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb"; //<GrReactjs /> react js
import { FaHtml5 } from "react-icons/fa6"; //<FaHtml5 /> html
import { IoLogoJavascript } from "react-icons/io5"; //<IoLogoJavascript /> js
import { FaCss3Alt } from "react-icons/fa"; //<FaCss3Alt /> css
import { RiTailwindCssFill } from "react-icons/ri"; //<RiTailwindCssFill /> tailwind css
import { FaBootstrap } from "react-icons/fa"; //<FaBootstrap />
import { IoLogoFirebase } from "react-icons/io5"; //<IoLogoFirebase />
import { IoLogoNodejs } from "react-icons/io5"; //<IoLogoNodejs />
import { FaPython } from "react-icons/fa6"; //<FaPython />
import { SiNumpy } from "react-icons/si"; //<SiNumpy />
import { SiPandas } from "react-icons/si"; //<SiPandas />
import { FaKaggle } from "react-icons/fa"; //<FaKaggle />
import { SiScikitlearn } from "react-icons/si"; //<SiScikitlearn />
let MyProjects = [
  {
    ProjectName: "Apple E-store",
    tools: [<GrReactjs />, <FaCss3Alt />, <FaBootstrap />],
    desc: `Developed a responsive and user-friendly e-commerce platform,
   "Apple E-Store", utilizing React JS, 
   Bootstrap, and CSS. The application enables customers to browse and purchase Apple products online, providing an immersive and seamless shopping experience.`,
    link: "https://biswarup-3010.github.io/e-apple-store/",
    github: "https://github.com/biswarup-3010/e-apple-store",
  },
  {
    ProjectName: "HOTSTAR CLONE",
    tools: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />],
    desc: `Designed and developed a fully functional clone of Hotstar, a popular streaming platform, using HTML, CSS, and
    JavaScript, featuring a 95% similarity in UI/UX and achieving a 90% reduction in page load time, within a span of
    6 weeks, as a personal educational project.`,
    link: "https://biswarup-3010.github.io/HotstarClone/",
    github: "https://github.com/biswarup-3010/HotstarClone",
  },

  {
    ProjectName: "Tic-Tac-Toe",
    tools: [<GrReactjs />, <RiTailwindCssFill />],
    desc: "Designed and developed a interactive Tic-Tac-Toe game using React JS, Tailwind CSS, providing an engaging and responsive user experience.",
    link: "https://biswarup-3010.github.io/tic-tac-toe/",
    github: "https://github.com/biswarup-3010/tic-tac-toe",
  },
  {
    ProjectName: "To-Do List",

    tools: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />],
    desc: "Designed and developed a interactive Todo List application using HTML, CSS, and JavaScript, providing an engaging and responsive user experience.",
    link: "https://biswarup-3010.github.io/To-do-List/",
    github: "https://github.com/biswarup-3010/To-do-List",
  },
  {
    ProjectName: "Cricket Score Counter",
    tools: [<FaHtml5 />, <FaCss3Alt />, <IoLogoJavascript />],
    desc: "Designed and developed a Cricket match score counter application using HTML, CSS, and JavaScript, providing an engaging and responsive user experience.",

    link: "https://biswarup-3010.github.io/CricketScoreCounter/",
    github: "https://github.com/biswarup-3010/CricketScoreCounter",
  },
];
const WorkingProjects = [
  {
    ProjectName: "EcoMind NGO",
    tools: [
      <GrReactjs />,
      <RiTailwindCssFill />,
      <IoLogoNodejs />,
      <IoLogoFirebase />,
    ],
    desc: "Designing a NGO website for raise awareness among the peoples for protecting our Earth from the Dark future of Global Warming",
    link: "https://biswarup-3010.github.io/eco-mind/",
    github: "https://github.com/biswarup-3010/eco-mind",
  },
  {
    ProjectName: "Disease Prediction ML Model",
    tools: [
      <FaPython />,
      <SiNumpy />,
      <SiPandas />,
      <SiScikitlearn />,
      <FaKaggle />,
    ],
    desc: "Designing a NGO website for Protecting our Earth from Pollutions",
    // link: "#",
    // github: "#",
  },
];

export default function Projects() {
  const [buttonText, setButtonText] = useState("Working Projects");
  const [elements, setElements] = useState(MyProjects);
  const [heading, setHeading] = useState("My Projects");
  const changeDisplay = () => {
    if (buttonText === "Working Projects") {
      setButtonText("My Projects");
      setHeading("Working Projects");
      setElements(WorkingProjects);
    } else {
      setButtonText("Working Projects");
      setHeading("My Projects");
      setElements(MyProjects);
    }
  };
  return (
    <>
      <div
        className="m-1 mt-0 mb-0 border-l-2 border-r-2 md:min-h-screen  lg:min-h-screen xl:min-h-screen pt-6 p-4"
        id="projectpage"
      >
        <h3 className="text-2xl font-bold m-5">
          <span>-:( {heading} ):-</span>
        </h3>
        <br />
        <div className="flex justify-center flex-wrap gap-4 items-center ">
          {elements.map((element, id) => {
            return (
              <div
                key={`${element.ProjectName}-${element.tools}`}
                className="justify-center block h-auto min-h-80 w-full m-0 p-3  text-3xl  rounded-[5px] sm:w-2/5 md:1/4 hover:shadow-blue-300 hover:shadow-lg bg-gradient-to-b from-indigo-900/0 to-blue-300/50"
              >
                <h1 className="text-blue-100">{element.ProjectName}</h1>
                <ul className="flex flex-row">
                  <li className="flex flex-row gap-4 p-3 h-5 text-4xl text-green-100/90">
                    {element.tools}
                  </li>
                </ul>
                <br />
                <p className="text-color text-sm">{element.desc}</p>
                <br />
                <a
                  href={element.link}
                  target="_blank"
                  className="text-colour-1 text-lg m-2 hover:text-blue-400"
                >
                  Link
                </a>
                <a
                  href={element.github}
                  target="_blank"
                  className="text-colour-1 text-lg m-2 hover:text-blue-400"
                >
                  GitHub
                </a>
              </div>
            );
          })}
          <br />
          <br />
        </div>
        <center className="m-8">
          <a href="#projectpage">
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-00 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 "
              onClick={changeDisplay}
            >
              {buttonText}
            </button>
          </a>
        </center>
      </div>
      <span className="flex items-center text-indigo z-1 text-2xl">
        <span className="p-0 m-0 text-2xl">+</span>{" "}
        <hr className="h-px w-screen border-0 bg-white z-1" />
        <span className="p-0 m-0 text-2xl">+</span>
      </span>
    </>
  );
}
