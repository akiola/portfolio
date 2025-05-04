import React, { useState } from "react";
import HeroImage from "../assets/main.jpg";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "./SocialIcons";
import Button from "./Button";

const Home = () => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
    console.error("Failed to load Hero image.");
  };

  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={HeroImage}
          alt="Hero"
          className="rounded-full w-48 sm:w-64 md:w-80 lg:w-[350px] xl:w-[400px] shadow-lg hover:scale-110 transition duration-300 hover:shadow-[0_0_15px_3px_rgba(255, 223, 0, 0.8)]"
          onError={handleImageError}
        />
        {imageError && <p className="text-red-500">Error loading image.</p>}
      </div>
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0">
        <h1 className="text-4xl sm:text-7xl font-bold mb-4">
          Hi, I'm <span className="text-yellow-600">Godfred Awuku</span>
        </h1>
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
          I am a <span className="text-yellow-600">
            <TypeAnimation
              sequence={[
                "Software Engineer", 1000,
                "Full Stack Developer", 1000,
              ]}
              speed={50}
              style={{ fontSize: "1re" }}
              repeat={Infinity}
              onError={(error) => console.error("Error in TypeAnimation:", error)}
            />
          </span>
        </h3>
        <p className="text-sm sm:text-lg mb-6">
          Hi, I'm Godfred, a full stack software engineer passionate about crafting clean, efficient, and scalable solutions.
          From low-level systems with C to dynamic web apps with Python and modern JavaScript frameworks, I love turning ideas into working products.
        </p>
        <SocialIcons />
        <Button text="Hire Me" href="#contact" />
      </div>
    </section>
  );
};

export default Home;
