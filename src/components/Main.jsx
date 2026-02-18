import React from "react";
import Photo from "./profile/Photo";
import Profile from "./profile/Profile";
import Skills from "./skills/Skills";
import Career from "./career/Career";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Certificate from "./certificate/Certificate";

export default function Main() {
  return (
    <div
      className="bg-fixed"
      style={{
        backgroundImage: `url("/images/binary-bg.jpg")`,
        backgroundSize: "cover",
      }}
    >
      <section className="p-6" id="profile">
        <Photo />
      </section>
      <section>
        <Profile />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="career">
        <Career />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="certificate">
        <Certificate />
      </section>
      <div className="h-20"></div>
    </div>
  );
}
