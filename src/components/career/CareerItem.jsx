import React from "react";

export default function CareerItem({
  date,
  period,
  company,
  role,
  did,
  detail,
  pay,
  location,
  reason,
}) {
  return (
    <div>
      <table className="">
        <tr>
          <td className="align-top p-4 w-56">
            <div>{date}</div>
            <div className="text-red-700">{period}</div>
          </td>
          <td className="align-top p-4">
            <div>
              <span className="text-xl font-bold">{`${company} `}</span>
              <span className="text-gray-500">{`${role}`}</span>
            </div>
            <div>{did}</div>
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
            <div>
              <span className="text-gray-500">{`근무지역 `}</span>
              {location}
              <span className="text-gray-500">{` | 퇴사사유 `}</span>
              {reason}
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}
