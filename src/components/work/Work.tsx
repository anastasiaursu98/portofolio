import { WORK_DATA } from "@/constants/work-data";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest works</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Step into my digital playground — a showcase of front-end creations
        crafted with code, creativity, and a passion for seamless user
        experiences.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WORK_DATA.map((work) => (
          <div key={work.id} className="bg-white rounded-lg shadow-md">
            <div className="p-4" style={{ backgroundImage: work.image }}>
              <h3 className="text-lg font-bold">{work.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
