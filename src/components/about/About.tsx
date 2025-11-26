import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { infoList } from "@/constants/text";
import { Icon, RectangleVerticalIcon } from "lucide-react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-10">
      <h4 className="text-center mb-4 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About Me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt=""
            width={160}
            height={160}
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I'm a Frontend Developer with 3+ years of experience building
            modern, scalable web applications. Skilled in React, TypeScript,
            Redux, Next.js, and TailwindCSS. I've contributed to enterprise
            platforms, sustainability solutions, and healthcare apps—focusing on
            performance, accessibility, and clean, maintainable code.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:translate-y-1 duration-500"
              >
                {icon && React.createElement(icon)}
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
