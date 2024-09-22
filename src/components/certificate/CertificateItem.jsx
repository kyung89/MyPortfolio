import React from "react";

export default function CertificateItem({ date, title, from }) {
  return (
    <div>
      <table className="">
        <tr>
          <td className="align-top p-4 w-56">
            <div>{date}</div>
          </td>
          <td className="align-top p-4">
            <div>{`${title} ${from}`}</div>
          </td>
        </tr>
      </table>
    </div>
  );
}
