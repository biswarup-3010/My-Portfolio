import React from "react";

export default function Experience() {
  // Define enhanced floating animation using react-spring (example, adjust as needed)

  return (
    <>
      <div
        className="m-1 mt-0 mb-0 border-l-2 border-r-2 h-auto md:min-h-screen  lg:min-h-screen xl:min-h-screen p-8"
        id="experiencepage"
      >
        <h3 className="text-2xl font-bold mb-5">
          <span>-:( Experience ):-</span>
        </h3>
        <section className="text-gray-600 body-font overflow-hidden">
          {experiences.map((experience, index) => {
            return (
              <div key={index} className="container py-8 mx-auto">
                <div className="-my-8 divide-y-2 divide-gray-100">
                  <div className="py-8 flex flex-wrap md:flex-nowrap">
                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                      <span className="font-semibold title-font text-gray-200">
                        {experience.tag}
                      </span>
                      <span className="mt-1 text-gray-400 text-sm">
                        {experience.date}
                      </span>
                    </div>
                    <div className="md:flex-grow">
                      <h2 className="text-2xl font-medium text-gray-300 title-font mb-2">
                        {experience.title}
                      </h2>
                      <p className="leading-relaxed text-gray-400 ">
                        {experience.description}
                      </p>
                      <a className="text-indigo-300 inline-flex items-center mt-4">
                        Details{experience.certificate}
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <span className="flex items-center text-indigo z-1 text-2xl">
        <span className="p-0 m-0 text-2xl">+</span>{" "}
        <hr className="h-px w-screen border-0 bg-white z-1" />{" "}
        <span className="p-0 m-0 text-2xl">+</span>
      </span>
    </>
  );
}

const experiences = [
  {
    title: "PwC US Launchpad Trainee",
    tag: "US Launchpad Trainee",
    date: "Feb, 2024 to Jun, 2024",
    href: "#",
    description: `Successfully completed an extensive 4.5-month training program covering IT fundamentals, relational databases, Java programming, DevOps, cloud computing, and web technologies, leading to a 20% improvement in project delivery efficiency.`,
  },
  {
    title: "IBM Skill Build Program Internship",
    tag: "Front End Developer Internship",
    date: "Jul, 2024",
    href: "#",
    description: `Improved team productivity by 30% by leveraging advanced frontend technologies and project management tech-
      niques, resulting in a 25% reduction in project timelines.
      `,
  },
  {
    title: "HacktoberFest",
    tag: "Open Source Contribution",
    date: "Oct, 2023",
    href: "#",
    description:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
];
