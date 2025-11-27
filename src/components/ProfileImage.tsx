import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProfileImageProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  shape?: "circular" | "rectangular";
  size?: "small" | "medium" | "large";
  withGlow?: boolean;
  priority?: boolean;
  className?: string;
  containerClassName?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src,
  alt,
  width,
  height,
  shape = "circular",
  size = "medium",
  withGlow = false,
  priority = false,
  className = "",
  containerClassName = "",
}) => {
  // Size presets
  const sizePresets = {
    small: { width: 120, height: 120 },
    medium: { width: 180, height: 180 },
    large: { width: 400, height: 400 },
  };

  const finalWidth = width || sizePresets[size].width;
  const finalHeight = height || sizePresets[size].height;

  // Shape classes
  const shapeClasses = {
    circular: "rounded-full",
    rectangular: "rounded-3xl",
  };

  // Border classes
  const borderClasses =
    shape === "circular"
      ? "border-4 border-white dark:border-black"
      : "border-0";

  if (withGlow) {
    return (
      <div className={`relative group ${containerClassName}`}>
        <div className="absolute -inset-4 bg-gradient-to-r from-violet-400 via-purple-400 to-violet-400 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-500"></div>
        <Image
          src={src}
          alt={alt}
          width={finalWidth}
          height={finalHeight}
          className={`relative w-full ${shapeClasses[shape]} shadow-2xl dark:shadow-purple-900/50 transform group-hover:scale-105 transition duration-500 ${className}`}
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div className={`relative group ${containerClassName}`}>
      <Image
        src={src}
        alt={alt}
        width={finalWidth}
        height={finalHeight}
        className={`${shapeClasses[shape]} ${borderClasses} shadow-2xl dark:shadow-purple-900/50 ${className}`}
        priority={priority}
      />
    </div>
  );
};

export default ProfileImage;
