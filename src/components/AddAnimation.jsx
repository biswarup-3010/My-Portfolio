import React, { useCallback } from "react";
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
