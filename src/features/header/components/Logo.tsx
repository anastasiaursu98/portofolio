"use client";

const Logo = () => {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <a href="#top" onClick={scrollToTop} className="text-2xl font-semibold">
      Anastasia<span className="text-red-500">.</span>
    </a>
  );
};

export default Logo;
