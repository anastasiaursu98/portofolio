import React from "react";
import Image from "next/image";
import { ProfileImageProps } from "../types";

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  width = 400,
  height = 400,
}) => {
  return (
    <div className="w-full lg:w-1/3 animate-slide-up max-w-96">
      <div className="relative group">
        <div className="absolute -inset-4 bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-500"></div>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="relative w-full rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-500"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
