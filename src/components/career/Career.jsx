import React from "react";
import CareerItem from "./CareerItem";
import data from "./data.json";

export default function Career() {
  return (
    <div className="bg-white p-10 rounded-lg bg-opacity-85 w-[60rem] mx-auto mb-20">
      <div
        className="flex justify-center mb-10 text-4xl font-bold underline"
        style={{ fontFamily: "Kanit-Bold" }}
      >
        Career
      </div>
      <div className="">
        {Object.values(data).map((item) => (
          <CareerItem
            date={item.date}
            period={item.period}
            company={item.company}
            role={item.role}
            did={item.did}
            detail={item.detail}
            pay={item.pay}
            location={item.location}
            reason={item.reason}
          />
        ))}
      </div>
    </div>
  );
}
