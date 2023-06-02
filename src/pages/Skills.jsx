import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      className="select-none w-full h-full bg-black bg-opacity-30 mt-1 lg:mt-10 text-white"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full">
        <div className=" w-full flex justify-center items-center flex-col md:mb-7">
          {/* <p className="text-5xl inline border-b-4 text-center roddenberry tracking-widest">
            Skills
          </p> */}
          <p className="py-4 md:text-xl text-center font-mono">
            I enjoy diving into and learning new things. Here's a list of
            technologies I've worked with
          </p>
        </div>
        <div className="w-full text-xl font-mono grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
         
         
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 4,
              repeatDelay: 3,
              repeatType: "reverse",
            }}
          >
            <motion.p
              animate={{
                color: ["#fff", "#38bdf8"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 4,
                repeatDelay: 3,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              JAVASCRIPT
            </motion.p>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 4,
              repeatDelay: 3,
              repeatType: "reverse",
            }}
          >
            <motion.p
              animate={{
                color: ["#fff", "#38bdf8"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 4,
                repeatDelay: 3,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              TYPESCRIPT
            </motion.p>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 3,
              repeatDelay: 2,
              repeatType: "reverse",
            }}
          >
            <motion.p
              animate={{
                color: ["#fff", "#818cf8"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 3,
                repeatDelay: 2,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              REACT
            </motion.p>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 2,
              repeatDelay: 3,
              repeatType: "reverse",
            }}
          >
            <motion.p
              animate={{
                color: ["#fff", "#818cf8"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 2,
                repeatDelay: 3,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              NODE JS
            </motion.p>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 4,
              repeatDelay: 4,
              repeatType: "reverse",
            }}
          >
            <motion.p
              animate={{
                color: ["#fff", "#fb7185"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 4,
                repeatDelay: 4,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              GITHUB
            </motion.p>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 3,
              repeatDelay: 3,
              repeatType: "reverse",
            }}
            // className=""
          >
            <motion.p
              animate={{
                color: ["#fff", "#fbbf24"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 3,
                repeatDelay: 3,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              HTML
            </motion.p>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 1,
              repeatDelay: 4,
              repeatType: "reverse",
            }}
          >
            <motion.p
              animate={{
                color: ["#fff", "#fb7185"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 1,
                repeatDelay: 4,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              CSS
            </motion.p>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 4,
              repeatDelay: 4,
              repeatType: "reverse",
            }}
          >
            <motion.p
              animate={{
                color: ["#fff", "#fbbf24"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 4,
                repeatDelay: 4,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              MONGO DB
            </motion.p>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 2,
              repeatDelay: 3,
              repeatType: "reverse",
            }}
          >
            <motion.p
              animate={{
                color: ["#fff", "#38bdf8"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 2,
                repeatDelay: 3,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              FIREBASE
            </motion.p>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 1,
              repeatDelay: 3,
              repeatType: "reverse",
            }}
          >
            <motion.p
              animate={{
                color: ["#fff", "#38bdf8"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 1,
                repeatDelay: 3,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              TAILWIND
            </motion.p>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 4,
              repeatDelay: 4,
              repeatType: "reverse",
            }}
          >
            <motion.p
              animate={{
                color: ["#fff", "#fbbf24"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 4,
                repeatDelay: 4,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              DJANGO
            </motion.p>
          </motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1],
            }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              delay: 3,
              repeatDelay: 4,
              repeatType: "reverse",
            }}
          >
            <motion.p
              animate={{
                color: ["#fff", "#fb7185"],
              }}
              transition={{
                ease: "linear",
                repeat: Infinity,
                delay: 3,
                repeatDelay: 4,
                repeatType: "reverse",
              }}
              className="my-4"
            >
              PYTHON
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
