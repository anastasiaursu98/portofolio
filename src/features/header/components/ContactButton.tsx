import { assets } from "@/assets/assets";
import Image from "next/image";

const ContactButton = () => {
  return (
    <a
      href="#contact"
      className="hidden lg:flex items-center gap-2 px-8 py-3 border border-gray-200 rounded-full hover:border-gray-300 transition-all cursor-pointer group font-Ovo"
    >
      <Image
        src={assets.arrow_icon}
        alt=""
        className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
      />
      Contact
    </a>
  );
};

export default ContactButton;

