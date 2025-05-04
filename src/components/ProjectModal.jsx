const ProjectModal = ({ project, onClose }) => {
    if (!project) {
        console.error("Error: Project data is missing.");
        return (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
            <div className="bg-[#1f1f2e] rounded-lg w-full max-w-3xl p-6 relative shadow-xl">
                <p className="text-white">Error: Project data is unavailable.</p>
            </div>
            </div>
        );
        }
    
        const { image, name, fullDescription, techStack, demoLink } = project;
    
        if (!name || !image || !fullDescription || !techStack || !demoLink) {
        console.error(`Error: Missing essential data in project: ${name || "Unnamed project"}`);
        return (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
            <div className="bg-[#1f1f2e] rounded-lg w-full max-w-3xl p-6 relative shadow-xl">
                <p className="text-white">Error: Missing essential project details.</p>
            </div>
            </div>
        );
        }
    
        return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
            <div className="bg-[#1f1f2e] rounded-lg w-full max-w-3xl p-6 relative shadow-xl">
            <button onClick={onClose} className="absolute top-4 right-4 text-white text-xl">✖</button>
            <img src={image} className="w-full h-64 object-cover rounded-md" alt={name} />
            <h2 className="text-white mt-4 text-2xl font-bold">{name}</h2>
            <p className="text-gray-300 mt-2">{fullDescription}</p>
            <div className="mt-4">
                <h4 className="text-green-400 font-semibold">Tech Stack:</h4>
                <ul className="flex flex-wrap gap-2 mt-1">
                {techStack.map((tech, idx) => (
                    <li key={idx} className="bg-[#2a2a40] text-white px-3 py-1 rounded-full text-sm">{tech}</li>
                ))}
                </ul>
            </div>
            <a
                href={demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition"
            >
                Live Demo
            </a>
            </div>
        </div>
        );
    };

export default ProjectModal;
