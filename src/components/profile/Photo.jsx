import React from "react";

export default function Photo() {
  return (
    <div className="flex justify-center">
      <img
        className="rounded-full w-52 border-8 border-white"
        src="images/profile.jpg"
        alt="profile"
      />
    </div>
  );
}
