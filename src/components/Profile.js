import React from "react";
import ProfileCard from "./profileCard";
import ProfileHero from "./profileHero";

function Profile() {
  return (
    <div className=" container  flex flex-row  pt-4">
      <ProfileCard />
      <ProfileHero />
      <div className=" fixed bottom-6 right-6 flex items-center justify-center  h-16 w-16 rounded-full hover:bg-[#5073f2] bg-[#5A7BF3] text-white text-4xl font-bold cursor-pointer ">
        +
      </div>
    </div>
  );
}

export default Profile;
