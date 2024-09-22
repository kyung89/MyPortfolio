import React from "react";

export default function SkillsItem({ title, text }) {
  return (
    <div className="text-orange-800">
      <div style={{ fontFamily: "SpaceGrotesk" }}>{text}</div>
      <img
        src={`/skills/${title}.svg`}
        alt={title}
        className="hover:opacity-60 rounded-[2.5rem] h-36 w-36"
      />
    </div>
  );
}
