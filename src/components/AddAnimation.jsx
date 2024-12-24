import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import "./HomPage.css"; // Make sure to import the CSS file

const AddAnimation = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  //colour changing
  // const [bgColor, setBgColor] = useState("#082f49"); // Default color (night)

  // useEffect(() => {
  //   const updateBackgroundColor = () => {
  //     const seconds = new Date().getSeconds(); // Get current second (0-59)

  //     // Create a color array for each second (you can modify this)
  //     const colors = [
  //       "#020617", // 0 sec - Sunrise (Orange)
  //       "#0c0a09",
  //       "#052e16",
  //       "#042f2e",
  //       "#172554",
  //       "#500724",
  //       "#4c0519",
  //     ];

  //     // Color change for each second (0-59)
  //     setBgColor(colors[seconds % colors.length]); // Cycle through colors array
  //   };

  //   updateBackgroundColor(); // Set initial color
  //   const timer = setInterval(updateBackgroundColor, 10000); // Update every second

  //   return () => clearInterval(timer); // Cleanup on component unmount
  // }, []);
  return (
    <div>
      <Particles
        id="tsparticles"
        className="particles-background"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#0f172a", // Updated background color
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 10,
              },
              grab: {
                distance: 100, // Smaller area influenced by cursor
                links: {
                  opacity: 10, // Fully transparent to dislink particles
                },
              },
              repulse: {
                distance: 60,
                duration: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: [
                "#b91c1c",
                "#fcd34d",
                "#a3e635",
                "#e11d48",
                "#f472b6",
                "#d946ef",
                "#4f46e5",
              ], // Different colors
            },
            links: {
              color: "#64748b",
              distance: 80, // Reduced distance to decrease line visibility
              enable: true,
              opacity: 0.3, // Reduced opacity to make links less prominent
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 4, // Faster speed
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              limit: 400,
              value: 300, // Reduced number for clarity
            },
            opacity: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 1,
                sync: false,
              },
              random: true,
              value: 0.5,
            },
            shape: {
              type: ["circle"], // Dot only
            },
            size: {
              animation: {
                enable: true,
                minimumValue: 0.1,
                speed: 3,
                sync: false,
              },
              random: true,
              value: 4, // Smaller size
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default AddAnimation;
