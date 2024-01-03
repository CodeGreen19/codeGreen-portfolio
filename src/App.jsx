import React, { useEffect, useRef } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/project/Projects";
import Skill from "./components/skills/Skill";

function App() {
  const heroRef = useRef(null);
  const navRef = useRef(null);
  const skillRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("add", entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      },
    );

    // Only observe if cardRef has a value

    if (navRef.current) {
      observer.observe(navRef.current);
    }
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    if (projectRef.current) {
      observer.observe(projectRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Cleanup function to avoid memory leaks
    return () => observer.disconnect();
  }, []); // Empty dependency array to run effect only once
  return (
    <div className="t_w bg-[#292929]">
      <div className="m-auto w-full md:w-[86%]">
        <section ref={navRef} className="nav_effect">
          <Navbar scrollTo={{ navRef, skillRef, projectRef, contactRef }} />
        </section>
        <section ref={heroRef} className="hero_effect">
          <Hero />
        </section>
        <section ref={skillRef} className="skill_effect ">
          <Skill />
        </section>
        <section ref={projectRef} className="project_effect">
          <Projects />
        </section>
        <section ref={contactRef} className="contact_effect">
          <Contact />
        </section>
        <section ref={footerRef} className="footer_effect">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
