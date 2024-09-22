import React from "react";

export default function ProfileItem({ icon, title, contents, linked = false }) {
  return (
    <div className="flex">
      <div className="">{icon}</div>
      <ul>
        <li className="text-2xl font-bold">{title}</li>
        {!linked && <li>{contents}</li>}
        {linked && (
          <li className="text-blue-800 underline">
            <a href={contents}>{contents}</a>
          </li>
        )}
      </ul>
    </div>
  );
}
