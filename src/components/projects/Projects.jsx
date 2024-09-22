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
      <div className="p-5 text-red-700 font-bold">
        <div className="p-3">프로젝트를 진행하면서 아쉬운 점이 많았습니다.</div>
        <div className="p-3">
          1. 먼저 초기의 제 포지션이 프론트엔드 메인 & 데이터 분석 서브였는데
          경진대회 시일이 촉박하여 다양한 포지션을 경험해 보지 못한 점이
          아쉬웠습니다.
        </div>
        <div className="p-3">
          2. 부득이하게 프로젝트를 진행하면서 설계를 진행하게 되어서 처음에
          꼼꼼한 설계안을 작성한 후 시작했으면 더 좋았을 것이라 생각됩니다.
        </div>
        <div className="p-3">
          3. 기한이 촉박한 만큼 기능의 우선순위를 정하고 핵심 기능 또는 시간이
          많이 걸릴 부분을 먼저 진행했으면 좋았을 것 같습니다.
        </div>
        <div className="p-3">
          4. 개인 역량도 중요하지만 협업이니 만큼 소통이 많이 중요하다는 것을
          느꼈습니다. 공유한 중심 주제는 같아도 각자 생각한 의견이 달라 생각하는
          것을 통일하기 위해 충분한 팀 회의가 필요함을 느꼈습니다.
        </div>
        <div className="p-3">
          5. 목표한 만큼 만들진 못했지만 팀플을 하며 여러 가지로 배운 게 많은
          점은 좋은 것 같습니다. 만들면서 아쉬움을 많이 느껴서 앞으로도
          개인적으로 해당 프로젝트의 개선 버전을 틈틈이 작업해 볼 예정입니다.
        </div>
        <div className="p-3">
          6. 프로그래밍을 하면서 논리적인 구조를 짜는 작업이 즐거웠던 것
          같습니다.
        </div>
      </div>
    </div>
  );
}
