import { assets } from "@/assets/assets";
import { HandIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/ui/Button";

const Header = () => {
  return (
    <div className="w-11/12 max-w-5xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-6">
      <div>
        <Image
          src={assets.user_image}
          alt="user-image"
          className=" rounded-full"
          width={160}
          height={160}
        />
      </div>
      <h3 className="flex items-center justify-center gap-2 text-xl font-normal">
        Hi! I'm Anastasia Ursu <HandIcon className="w-5 h-5" />
      </h3>
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-normal">
        Frontend Developer
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 mt-6">
          I'm a Frontend Developer with 3+ years of experience building modern,
          scalable web applications.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button variant="primary" className="px-8 py-3 text-base font-normal">
            Contact me
          </Button>
          <Button variant="outline" className="px-8 py-3 text-base font-normal">
            My Resume
          </Button>
        </div>
      </h1>
    </div>
  );
};

export default Header;
