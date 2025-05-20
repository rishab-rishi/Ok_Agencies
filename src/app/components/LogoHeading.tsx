import React from "react";

interface LogoHeadingProps {
  logo: React.ReactNode; // Can be an <img>, <svg>, or any React node
  heading: string;
  bgClassName?: string; // Optional: Tailwind CSS classes for background
  className?: string; // Optional: For additional styling
}

const LogoHeading: React.FC<LogoHeadingProps> = ({
  logo,
  heading,
  bgClassName = "bg-gray-100",
  className = "",
}) => (
  <div
    className={`flex items-center justify-center px-6 py-8 rounded-lg gap-4 ${bgClassName} ${className}`}
  >
    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
      {logo}
    </span>
    <h2 className="text-2xl font-semibold text-gray-900">{heading}</h2>
  </div>
);

export default LogoHeading;