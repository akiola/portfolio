import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const icons = [
  {
    href: "https://linkedin.com/in/gawuku2025",
    components: <FaLinkedin />,
  },
  {
    href: "https://github.com/akiola",
    components: <FaGithub />,
  },
  {
    href: "#",
    components: <FaTwitter />,
  },
];

const SocialIcons = () => {
  if (!Array.isArray(icons) || icons.length === 0) {
    console.error("Error: Icons array is missing or empty.");
    return (
      <div className="text-white text-center">
        <p>Error: Social icons data is unavailable.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center md:justify-start space-x-4 mb-6 sm:mb-6">
      {icons.map((icon, index) => {
        if (!icon.href || !icon.components) {
          console.error(`Error: Missing data for icon at index ${index}`);
          return null; 
        }

        return (
          <a
            key={index}
            href={icon.href}
            className="w-10 h-10 flex items-center justify-center border-2 border-yellow-600 rounded-full text-yellow-600 hover:bg-yellow-600 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(128,0,128,0.8)]"
          >
            {icon.components}
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
