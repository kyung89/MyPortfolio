import React from "react";
import ProfileItem from "./ProfileItem";
import { FaUser } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

export default function Profile() {
  return (
    <div className="bg-white p-10 rounded-lg bg-opacity-85 w-[60rem] mx-auto mb-20">
      <div
        className="flex justify-center mb-10 text-4xl font-bold underline"
        style={{ fontFamily: "Kanit-Bold" }}
      >
        About
      </div>
      <div className="grid grid-cols-3 gap-20">
        <ProfileItem
          icon={<FaUser size="40" className="m-2" />}
          title={"이름"}
          contents={"옥경림"}
        />

        <ProfileItem
          icon={<FaCalendarAlt size="40" className="m-2" />}
          title={"생년월일"}
          contents={"1989.10.29"}
        />

        <ProfileItem
          icon={<MdAttachEmail size="40" className="m-2" />}
          title={"이메일"}
          contents={"bamtori1029@gmail.com"}
        />

        <ProfileItem
          icon={<FaPhoneSquareAlt size="40" className="m-2" />}
          title={"휴대폰"}
          contents={"010-4520-2671"}
        />

        <ProfileItem
          icon={<FaAddressBook size="40" className="m-2" />}
          title={"주소"}
          contents={"(48516) 부산 남구 분포로"}
        />

        <ProfileItem
          icon={<IoLogoGithub size="40" className="m-2" />}
          title={"깃허브"}
          contents={"https://github.com/kyung89"}
          linked={true}
        />
      </div>
    </div>
  );
}
