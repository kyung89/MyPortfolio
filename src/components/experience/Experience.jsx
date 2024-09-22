import data from "./data.json";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <div className="bg-white p-10 rounded-lg bg-opacity-85 w-[60rem] mx-auto mb-20">
      <div
        className="flex justify-center mb-10 text-4xl font-bold underline"
        style={{ fontFamily: "Kanit-Bold" }}
      >
        Experience
      </div>
      <div className="">
        {Object.values(data).map((item) => (
          <ExperienceItem
            date={item.date}
            title={item.title}
            type={item.type}
            contents={item.contents}
            project={item.project}
          />
        ))}
      </div>
    </div>
  );
}
