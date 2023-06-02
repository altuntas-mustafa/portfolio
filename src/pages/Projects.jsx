import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import projectsData from "../../projectsData";

const Projects = () => {
  const [openProjectId, setOpenProjectId] = useState(null);
  const projects = projectsData.data.projects;

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="pb-5 flex flex-wrap justify-center"
    >
      {projects.map((project, index) => (
        <motion.div
          layout
          onClick={() =>
            setOpenProjectId(project.id === openProjectId ? null : project.id)
          }
          className="bg-white mt-5 rounded mx-1 lg:mx-5 lg:w-1/4 w-5/6 h-full py-3  font-mono cursor-pointer"
          transition={{ layout: { duration: 1, type: "spring" } }}
          key={project.id}
        >
          <motion.h2
            className="text-2xl sm:text-3xl text-center"
            layout="position"
          >
            {project.name}
          </motion.h2>
          <motion.p
            layout="position"
            className="leading-6 text-sm font-bold pt-4 px-4 text-center"
          >
            {project.tech}
          </motion.p>
          {index === 0 && (
            <motion.p className="text-center mt-2" layout="position">
              Check out the video here:{" "}
              <a
                className="font-semibold text-rose-400 hover:text-indigo-400 hover:scale-105 underline visited:text-sky-400"
                href={project.video_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
              </a>
            </motion.p>
          )}
          <motion.p className="text-center mt-2" layout="position">
            Check out the website:{" "}
            <a
              className="font-semibold text-rose-400 hover:text-indigo-400 hover:scale-105 underline visited:text-sky-400"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </motion.p>
          <motion.div layout className="max-w-100% h-auto mt-0 mx-auto">
            <img
              className="md:h-72 mx-auto object-scale-down"
              src={project.img}
              alt=""
            />
          </motion.div>
          {project.id !== openProjectId && (
            <p className="mt-1 text-center hover:scale-105">
              More info <span className="text-xl">&#8594;</span>
            </p>
          )}
          {project.id === openProjectId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="pt-2 leading-7 px-5 "
            >
              <p>{project.desc}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Projects;
