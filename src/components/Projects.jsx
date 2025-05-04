import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

const Projects = ({ project, index }) => {
  const [open, setOpen] = useState(false);

  const handleImageError = () => {
    console.error(`Error loading image for project: ${project.name}`);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.2 }}
        className="bg-[#1f1f2e] p-4 rounded-xl shadow-lg cursor-pointer hover:shadow-2xl"
        onClick={() => setOpen(true)}
      >
        <img
          src={project.image}
          alt={project.name}
          className="rounded-md h-40 w-full object-cover"
          onError={handleImageError}
        />
        <h3 className="text-white mt-3 font-semibold text-lg">{project.name}</h3>
        <p className="text-gray-400 text-sm mt-1">{project.shortDescription}</p>
      </motion.div>

      {open && <ProjectModal project={project} onClose={() => setOpen(false)} />}
    </>
  );
}

export default Projects;
