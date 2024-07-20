import React from "react";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactUsPage from "./components/ContactUsPage";
import pic from "./images/photo.jpg";
export default function App() {
  return (
    <>
      <NavBar pic={pic} />
      <HomePage pic={pic} />
      <About />
      <Projects />
      <Experience />
      <ContactUsPage />
    </>
  );
}
