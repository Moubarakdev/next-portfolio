import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="absolute flex cursor-pointer items-center justify-center rounded-full bg-dark px-6 py-3 font-semibold text-light shadow-dark dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
const Skills = () => {
  return (
    <>
      <h2 className="mt-64 w-full text-center text-8xl font-bold">Skills</h2>
      <div className="dark:bg-circularDark relative flex h-screen w-full items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="absolute flex cursor-pointer items-center justify-center rounded-full bg-dark px-6 py-3 font-semibold text-light shadow-dark dark:bg-light dark:text-dark "
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="-2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="-6vw" />
        <Skill name="ReactJS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="-20vw" y="-15vw" />
        <Skill name="Python" x="15vw" y="-12vw" />
        <Skill name="Django" x="32vw" y="5vw" />
        <Skill name="Php" x="0vw" y="-20vw" />
        <Skill name="Laravel" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="-18vw" y="10vw" />
        <Skill name="Bootstrap" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
