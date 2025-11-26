import React from "react";
import { InfoCardProps } from "../types";

const InfoCard: React.FC<InfoCardProps> = ({
  icon: Icon,
  title,
  description,
}) => {
  return (
    <div className="relative group shadow-lg bg-white border-2 border-gray-100 rounded-2xl p-6 cursor-pointer hover:border-violet-500 transition-all duration-300 card-hover overflow-hidden">
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="w-12 h-12 bg-white border-1 border-gray-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-black" />
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
