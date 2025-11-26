import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const ProfileImage = () => {
  return (
    <div className="relative group">
      <div className="relative mt-8">
        <Image
          src={assets.user_image}
          alt="Anastasia Ursu"
          className="rounded-full border-4 border-white shadow-2xl"
          width={180}
          height={180}
          priority
        />
      </div>
    </div>
  );
};

export default ProfileImage;
