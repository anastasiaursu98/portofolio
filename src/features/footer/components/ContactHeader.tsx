import React from "react";

const ContactHeader = () => {
  return (
    <div className="text-center mb-16 animate-slide-up">
      <p className="text-purple-300 font-semibold text-sm uppercase tracking-wider mb-3">
        Get In Touch
      </p>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        Let&apos;s Work{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Together
        </span>
      </h2>
      <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
      <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
        I&apos;m always interested in hearing about new projects and
        opportunities. Feel free to reach out!
      </p>
    </div>
  );
};

export default ContactHeader;
