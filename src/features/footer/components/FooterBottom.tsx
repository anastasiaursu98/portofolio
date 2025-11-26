import React from "react";
import { Mail } from "lucide-react";
import { SiLinkedin, SiGit } from "react-icons/si";

interface FooterBottomProps {
  currentYear: number;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ currentYear }) => {
  return (
    <div className="border-t border-white/10 pt-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-gray-300 text-center md:text-left">
            © {currentYear} Anastasia Ursu. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/anastasia-ursu-88bb8723a"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
          >
            <SiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:anastasia.ursu98@gmail.com"
            className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/anastasiaursu98?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110"
          >
            <SiGit className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
