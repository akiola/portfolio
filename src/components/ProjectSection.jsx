import { projects } from "../constants";
import Projects from "./Projects";

const ProjectsSection = () => {
    return (
        <section id="projects" className="relative overflow-hidden py-10 px-5 max-w-7xl mx-auto">
        <h2 className="text-white text-4xl md:text-5xl font-bold mt-12 text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
            try {
                if (!project.name || !project.image || !project.shortDescription) {
                throw new Error(`Missing data for project at index ${index}: ${project.name || 'Unknown'}`);
                }

                return <Projects key={index} project={project} index={index} />;
            } catch (error) {
                console.error(error.message);
                return (
                <div key={index} className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
                    <p>Error rendering project</p>
                    <p>{error.message}</p>
                </div>
                );
            }
            })}
        </div>
        </section>
    );
};

export default ProjectsSection;
