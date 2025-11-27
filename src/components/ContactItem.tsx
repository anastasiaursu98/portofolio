import React from "react";
import { LucideIcon } from "lucide-react";

interface ContactItemProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  label,
  value,
  href,
  target,
  rel,
  className = "",
}) => {
  const isClickable = !!href;
  const iconClassName = isClickable
    ? "p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300"
    : "p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl";

  const content = (
    <>
      <div className={iconClassName}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <p className="text-sm text-gray-400">{label}</p>
        <p className="font-semibold text-white">{value}</p>
      </div>
    </>
  );

  const baseClassName =
    "flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10";
  const clickableClassName = `${baseClassName} group hover:bg-white/10 transition-all duration-300 hover:border-purple-400 ${className}`;
  const nonClickableClassName = `${baseClassName} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={clickableClassName}>
        {content}
      </a>
    );
  }

  return <div className={nonClickableClassName}>{content}</div>;
};

export default ContactItem;
