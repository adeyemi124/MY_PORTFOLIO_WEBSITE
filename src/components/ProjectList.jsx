import React from "react";

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 dark:text-white">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
