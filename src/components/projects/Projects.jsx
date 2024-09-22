import React from "react";

export default function Projects() {
  const slides = [
    "슬라이드2",
    "슬라이드3",
    "슬라이드4",
    "슬라이드5",
    "슬라이드6",
    "슬라이드7",
    "슬라이드8",
    "슬라이드9",
    "슬라이드10",
    "슬라이드11",
    "슬라이드12",
    "슬라이드13",
    "슬라이드14",
    "슬라이드15",
    "슬라이드16",
    "슬라이드17",
    "슬라이드18",
  ];

  return (
    <div className="bg-white p-10 rounded-lg bg-opacity-85 w-[60rem] mx-auto mb-20">
      <div
        className="flex justify-center mb-10 text-4xl font-bold underline"
        style={{ fontFamily: "Kanit-Bold" }}
      >
        Projects
      </div>
      <div className="text-red-700 font-bold text-xl mb-3">
        [AI 활용 빅데이터 분석 풀스택웹서비스 SW 개발자 양성과정] 팀 프로젝트:
        마이팜 (MyFarm)
      </div>
      <div className=" mb-3">
        {`프론트엔드: `}
        <span className="text-blue-800 underline">
          <a href={"https://github.com/kyung89/frontened_proto_kyung"}>
            {"https://github.com/kyung89/frontened_proto_kyung"}
          </a>
        </span>
      </div>
      <div className=" mb-3">
        {`백엔드: `}
        <span className="text-blue-800 underline">
          <a href={"https://github.com/JinhyeokKo/Project_Farm"}>
            {"https://github.com/JinhyeokKo/Project_Farm"}
          </a>
        </span>
      </div>
      <div className="grid grid-col-1 gap-10">
        {slides.map((slide) => (
          <img
            src={`/projects_basic/${slide}.PNG`}
            alt={slide}
            className="w-50"
          />
        ))}
      </div>
    </div>
  );
}
