import { useContext } from "react";
import AppContext from "../context/AppContext";
import content from "../data/content";

export default function Projects() {
  const { language } = useContext(AppContext);
  const t = content[language];

  return (
    <section id="projects" className="w-full py-10 font-inter">
      <div className="max-w-[1200px] mx-auto px-10">
        {/* Başlık */}
        <h2 className="text-5xl font-semibold text-[#1F2937] dark:text-white mb-10">
          {t.projects.title}
        </h2>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-16 lg:gap-[120px]">
          {t.projects.items.map((project) => (
            <div key={project.name} className="flex flex-col w-[301px]">
              {/* Image */}
              <img
                src={`/${project.image}`}
                alt={project.name}
                className="rounded-sm mb-6 w-[301px] h-[180px] object-cover"
              />

              {/* Title */}
              <h3 className="text-3xl font-medium text-[#4338CA] mb-4">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-[#6B7280] dark:text-gray-300 text-sm font-normal leading-[20px] mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-[6px] mb-6">
                {project.tags.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-1 border border-[#3730A3] text-[#3730A3] dark:border-[#A5B4FC] dark:text-[#A5B4FC] text-sm font-medium rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between mt-auto mb-8">
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3730A3] dark:text-[#A5B4FC] underline text-base font-medium hover:opacity-80"
                >
                  Github
                </a>

                <a
                  href={project.links.site}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#3730A3] dark:text-[#A5B4FC] underline text-base font-medium hover:opacity-80"
                >
                  View Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}