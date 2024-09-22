import React from "react";

export default function EducationItem({
  date,
  result,
  where,
  major,
  location,
  grade,
  when,
  detail,
}) {
  return (
    <div>
      <table className="">
        <tr>
          <td className="align-top p-4 w-56">
            <div>{date}</div>
            <div className="text-red-700">{result}</div>
          </td>
          <td className="align-top p-4">
            <div>
              <span className="text-xl font-bold">{`${where} `}</span>{" "}
              <span className="text-gray-500">{major}</span>
            </div>
            <div>
              {location !== "" && (
                <span className="text-gray-500">{`지역 `}</span>
              )}
              {location !== "" && `${location}`}
              {grade !== "" && (
                <span className="text-gray-500">{` | 학점 `}</span>
              )}
              {grade !== "" && `${grade}`}
              {when !== "" && (
                <span className="text-gray-500">{` | 주/야간 `}</span>
              )}
              {when !== "" && `${when}`}
              {detail.length > 0 && <div className="h-10"></div>}
              {detail.length > 0 &&
                detail.map((item) => (
                  <div
                    className={`text-red-700 ${item[0] !== ":" && "font-bold"}`}
                  >
                    {item === "" ? <div className="h-5"></div> : item}
                  </div>
                ))}
              {detail.length > 0 && <div className="h-10"></div>}
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
