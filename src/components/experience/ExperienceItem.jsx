import React from "react";

export default function ExperienceItem({
  date,
  title,
  type,
  contents,
  project,
}) {
  return (
    <div>
      <table className="">
        <tr>
          <td className="align-top p-4 w-56">
            <div>{date}</div>
          </td>
          <td className="align-top p-4">
            <div>
              <span className="text-xl font-bold">{`${title} `}</span>
              <span className="text-gray-500">{`${type}`}</span>
            </div>
            <div>
              <ul>
                {contents.map((content) => (
                  <li className="text-gray-800">{` - ${content}`}</li>
                ))}
              </ul>
              <div className="h-10"></div>
              {project.length > 0 &&
                project.map((p) => (
                  <div
                    className={`text-red-700 ${p[0] !== ":" && "font-bold"}`}
                  >
                    {p === "" ? <div className="h-5"></div> : p}
                  </div>
                ))}
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
