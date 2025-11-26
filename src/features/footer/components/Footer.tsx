import React from "react";
import ContactHeader from "./ContactHeader";

import FooterBottom from "./FooterBottom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white scroll-mt-20"
    >
      <div className="px-[12%] py-20">
        <div className="max-w-6xl mx-auto">
          <ContactHeader />

          <FooterBottom currentYear={currentYear} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
