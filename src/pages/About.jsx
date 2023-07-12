import React from "react";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView({
    // threshold: 0.1,
  });
  const animation = useAnimation();

  useEffect(() => {
    // console.log("use effect hook, inView = ", inView);
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { delay: 0.2, duration: 1 },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: 100,
        transition: { duration: 0.3 },
      });
    }
  }, [inView]);

  const handleScroll = () => {
    const skillsSection = document.getElementById("skills-section"); // Get the skills section container element
    skillsSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the skills section with smooth behavior
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
      className="select-none overflow-x-hidden flex-col	inset-0 font-mono flex justify-center pt-10 pb-10 md:pb-16 md:pt-0"
    >
      <motion.div className="inline-flex items-center md:bg-black md:bg-opacity-40 justify-center w-full xl:w-1/3 xl:mt-20 xl:ml-72">
        <motion.h1 className="roddenberry text-white text-2xl md:text-4xl xl:text-2xl tracking-widest">
          ABOUT ME
        </motion.h1>
        <motion.hr className="w-64 md:w-2/3 h-0.5 my-8 xl:my-0 ml-1 md:ml-5 xl:ml-1 border-0 bg-gray-300"></motion.hr>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className=" lg:flex max-h-750px overflow-y-auto mt-5"
      >
        <motion.div className="xl:order-last w-3/4 md:w-1/3 mx-auto mb-5 lg:ml-20 lg:pt-20 xl:ml-5 xl:pt-0 xl:w-1/4 xl:mt-16">
          <img
            className="object-cover"
            src="src/assets/mustafa_pic2.jpg"
            alt=""
          />
        </motion.div>
        <p className="xl:mx-auto mx-6 text-center bg-black bg-opacity-40 mb-5 xl:mb-0 leading-loose md:mx-10 lg:text-left lg:w-3/4 lg:mr-10 xl:w-1/3 xl:mr-1 xl:pl-6 text-white">
          <br /> &nbsp; &nbsp; As a certified dynamic Full Stack Software
          Developer with 3 years of experience in IT and 1.5 years of specific
          experience in Full Stack development, I possess expertise in both
          front-end and back-end programming languages. My ability to develop
          complex solutions using strong creative thinking skills and high
          energy levels is one of my greatest strengths. I am well-versed in
          creating servers and databases for website functionalities, ensuring
          cross-platform mobile optimization. My experience in working with APIs
          and technical documentation enables me to focus on both technical and
          consumer needs, resulting in a final product that exceeds
          expectations.
          <br /> &nbsp; &nbsp; My communication skills allow me to collaborate
          effectively with team members, create algorithms, and quickly grasp
          new technologies and concepts. I have a strong passion for delivering
          innovative and creative solutions to problems. I am always eager to
          learn various technologies, tools, and libraries to develop myself,
          with a particular focus on HTML-CSS-JS, TypeScript, React, Node.js,
          and Django.
          <br /> &nbsp; &nbsp; I’m a team player. I’m used to working in a mob
          and taking responsibility as a group. Having experience in leadership
          roles too I also developed strong leadership skills including
          communication, organizing, and planning short- and long-term goals
          {/* Hello, I'm Mustafa, a full-stack JavaScript developer based in the Netherlands.{" "}
          <br />
          <br /> Originally from Izmir in the Turkey, I spent several years
          teaching English in Busan, South Korea, where I honed my communication
          and interpersonal skills. <br />
          <br />
          Driven by my passion for technology, I transitioned to a career in web
          development. Since then, I am continually learning new technologies
          and approaches to development.
          <br />
          <br />I have a keen interest in front-end development and creating
          visually appealing and responsive websites. I particularly enjoy
          working with ReactJS and other modern front-end frameworks. <br />
          <br />
          When I'm not coding, I enjoy playing board games, exploring new
          places, and catching up on the latest true-crime documentaries. <br />
          <br /> */}
          {/* Thank you for visiting my personal portfolio website. If you have any
          questions or would like to collaborate on a project, please feel free
          to get in touch via my contact page! */}
          <span className=""></span>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="mx-auto md:mb-10 "
      >
        <p className="text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="text-white w-10 h-10 animate-[bounce_1.5s_ease-in-out_infinite]"
            onClick={handleScroll}
            style={{ cursor: "pointer" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        animate={animation}
        id="skills-section" // Add an ID to the container of the Skills component
        className="inline-flex items-center md:bg-black md:bg-opacity-50 justify-center w-full xl:w-2/3 xl:mx-auto"
      >
        <motion.h1 className="roddenberry text-white text-2xl md:text-4xl xl:text-2xl tracking-widest">
          SKILLS
        </motion.h1>
        <motion.hr className="w-64 md:w-2/3 h-0.5 my-8 xl:my-0 ml-1 md:ml-5 xl:ml-5 border-0 bg-gray-300"></motion.hr>
      </motion.div>
      <motion.div animate={animation}>
        <Skills /> {/* Render the Skills component */}
      </motion.div>
    </motion.div>
  );
};

export default About;
