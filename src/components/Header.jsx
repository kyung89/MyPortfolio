import React from "react";

export default function Header() {
  return (
    <div
      className="flex justify-between p-1 bg-black text-white sticky top-0"
      id="header"
    >
      {/** logo */}
      <div
        className="text-2xl font-bold p-1 mt-2"
        style={{ fontFamily: "Kanit-Bold" }}
      >
        KyungLimOck's Portfolio
      </div>
      {/** menu */}
      <div className="text-sm p-1">
        <ul className="flex">
          <li className="p-3 hover:cursor-pointer hover:underline">
            <a href="#profile">ABOUT</a>
          </li>
          <li className="p-3 hover:cursor-pointer hover:underline">
            <a href="#skills">SKILLS</a>
          </li>
          <li className="p-3 hover:cursor-pointer hover:underline">
            <a href="#career">CAREER</a>
          </li>
          <li className="p-3 hover:cursor-pointe hover:underline">
            <a href="#education">EDUCATION</a>
          </li>
          <li className="p-3 hover:cursor-pointer hover:underline">
            <a href="#experience">EXPERIENCE</a>
          </li>
          <li className="p-3 hover:cursor-pointer hover:underline">
            <a href="#projects">PROJECTS</a>
          </li>
          <li className="p-3 hover:cursor-pointer hover:underline">
            <a href="#certificate">CERTIFICATE</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
