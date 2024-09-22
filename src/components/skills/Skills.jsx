import React from "react";
import SkillsItem from "./SkillsItem";

export default function Skills() {
  return (
    <div className="bg-white p-10 rounded-lg bg-opacity-85 w-[60rem] mx-auto mb-20">
      <div
        className="flex justify-center mb-10 text-4xl font-bold underline"
        style={{ fontFamily: "Kanit-Bold" }}
      >
        Skills
      </div>
      <div className="grid grid-cols-5 gap-10 text-2xl font-bold">
        <SkillsItem title={"C"} text={"C"} />
        <SkillsItem title={"CPP"} text={"C++"} />
        <SkillsItem title={"CS"} text={"C#"} />
        <SkillsItem title={"Java-Dark"} text={"Java"} />
        <SkillsItem title={"Python-Dark"} text={"Python"} />
        <SkillsItem title={"HTML"} text={"HTML"} />
        <SkillsItem title={"CSS"} text={"CSS"} />
        <SkillsItem title={"Javascript"} text={"JS"} />
        <SkillsItem title={"Vue"} text={"Vue.js"} />
        <SkillsItem title={"React"} text={"React"} />
        <SkillsItem title={"Typescript"} text={"TS"} />
        <SkillsItem title={"TailwindCSS-Dark"} text={"Tailwind"} />
        <SkillsItem title={"recoil"} text={"Recoil"} /> {/** recoil */}
        <SkillsItem title={"Redux"} text={"Redux"} />
        <SkillsItem title={"Spring-Dark"} text={"Spring Boot"} />{" "}
        {/** spring boot */}
        <SkillsItem title={"jsp"} text={"Servlet&JSP"} />{" "}
        {/** Servlets & JSP */}
        <SkillsItem title={"MySQL-Dark"} text={"MySQL"} />
        <SkillsItem title={"h2"} text={"H2"} /> {/** H2 */}
        <SkillsItem title={"Firebase-Dark"} text={"Firebase"} />
        <SkillsItem title={"Github-Dark"} text={"Github"} />
        <SkillsItem title={"Tensorflow-Dark"} text={"Tensorflow"} />
        <SkillsItem title={"PyTorch-Dark"} text={"PyTorch"} />
        <SkillsItem title={"Figma"} text={"Figma"} />
        <SkillsItem title={"notion"} text={"Notion"} />
      </div>
    </div>
  );
}
