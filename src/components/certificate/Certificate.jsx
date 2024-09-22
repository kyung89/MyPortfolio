import data from "./data.json";
import CertificateItem from "./CertificateItem";

export default function Certificate() {
  return (
    <div className="bg-white p-10 rounded-lg bg-opacity-85 w-[60rem] mx-auto">
      <div
        className="flex justify-center mb-10 text-4xl font-bold underline"
        style={{ fontFamily: "Kanit-Bold" }}
      >
        Cerificate
      </div>
      <div className="">
        {Object.values(data).map((item) => (
          <CertificateItem
            date={item.date}
            title={item.title}
            from={item.from}
          />
        ))}
      </div>
    </div>
  );
}
