import React from "react";
import data from "./data.json";
import EducationItem from "./EducationItem";

export default function Education() {
  return (
    <div className="bg-white p-10 rounded-lg bg-opacity-85 w-[60rem] mx-auto mb-20">
      <div
        className="flex justify-center mb-10 text-4xl font-bold underline"
        style={{ fontFamily: "Kanit-Bold" }}
      >
        Education
      </div>
      <div className="">
        {Object.values(data).map((item) => (
          <EducationItem
            date={item.date}
            result={item.result}
            where={item.where}
            major={item.major}
            location={item.location}
            grade={item.grade}
            when={item.when}
            detail={item.detail}
          />
        ))}
      </div>
    </div>
  );
}
