import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold dark:text-content-dark text-content-light">PROJECTS</h2>
        <div className="w-32 h-1 bg-primary mx-auto mt-4"></div>
        <p className="dark:text-gray-400 text-gray-600 mt-4 text-lg font-semibold">
          A collection of my projects that reflect my skills, creativity, and hands-on experience across diverse technologies.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-primary dark:bg-surface-dark bg-surface-light backdrop-blur-md rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-primary/30 hover:-translate-y-2 transition-all duration-300"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold dark:text-content-dark text-content-light mb-2">
                {project.title}
              </h3>
              <p className="dark:text-gray-500 text-gray-600 mb-4 pt-4 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block dark:bg-surface-dark/50 bg-surface-light/80 text-xs font-semibold text-primary rounded-full px-2 py-1 mr-2 mb-2 border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center dark:bg-black/90 bg-black/50 p-4">
          <div className="dark:bg-surface-dark bg-surface-light rounded-xl shadow-lg lg:w-full w-[90%] max-w-3xl overflow-hidden relative">
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="dark:text-content-dark text-content-light text-3xl font-bold hover:text-primary transition-colors"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col">
              <div className="w-full flex justify-center dark:bg-surface-dark bg-surface-light px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] object-contain rounded-xl shadow-lg"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold dark:text-content-dark text-content-light mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="dark:text-gray-400 text-gray-600 mb-6 lg:text-base text-xs">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="dark:bg-surface-dark/50 bg-surface-light/80 text-xs font-semibold text-primary rounded-full px-2 py-1 border border-primary/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-gray-800 hover:bg-orange-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 bg-orange-600 hover:bg-orange-800 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
