import React from "react";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-black text-white text-sm py-10">
      <div className="flex justify-center">
        <a href={"https://github.com/kyung89"}>
          <IoLogoGithub size="60" className="m-2 hover:cursor-pointer" />
        </a>
      </div>
      <div className="flex justify-center">
        ©{year}. KyungLim Ock's Portfolio. All rights reserved.
      </div>
    </div>
  );
}
