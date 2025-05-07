import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { skills } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ServiceCard = ({ index, title, icon }) => {
  const handleImageError = () => {
    console.error(`Error loading image for skill: ${title}`);
  };

  return (
    <Tilt className="w-full sm:w-[200px] md:w-[220px] lg:w-[250px]">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.3, 0.75)}
        className="bg-gradient-to-br from-[#1f1f2e] to-[#141421] p-[2px] rounded-[20px] shadow-md hover:shadow-xl transition duration-300"
      >
        <div className="bg-[#0e0e1c] rounded-[20px] py-10 px-6 min-h-[260px] flex flex-col items-center justify-center text-center relative">
          <img
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain mb-4"
            onError={handleImageError}
          />
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const Skills = () => {
  return (
    <section id='skills' className="relative overflow-hidden z-10 py-20 px-6 md:px-12 lg:px-20 bg-black">
      <motion.div
        variants={textVariant()}
        className="text-center mb-10"
      >
        <h2 className="text-white text-4xl md:text-5xl font-bold mt-12">
          Skills
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="text-gray-200 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-16"
      >
        I'm a skilled software developer with experience in multiple programming languages including Python, Java, JavaScript, and TypeScript.
        My expertise spans across FullStack Development, Backend and Infrastructure, Machine Learning, and Cloud Computing.
        I build efficient, scalable, and user-friendly solutions using frameworks like React, Node.js, and Flask.
        I'm passionate about creating innovative applications that solve real-world problems and enhance user experiences.
      </motion.p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center">
        {skills.map((skill, index) => (
          <ServiceCard key={skill.title} index={index} {...skill}/>
        ))}
      </div>

      <motion.div
        variants={textVariant()}
        className="text-center mt-20 mb-8"
      >
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Areas of Interest
        </h2>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.1, 1)}
        className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto mb-10"
      >
        {["FullStack Development", "Backend and Infrastructure", "Machine Learning", "Cloud Computing", "Computational Modeling"].map((interest, index) => (
          <div 
            key={index} 
            className="bg-gradient-to-r from-yellow-600 to-yellow-400 text-black font-semibold rounded-full px-6 py-3 text-center"
          >
            {interest}
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Skills
