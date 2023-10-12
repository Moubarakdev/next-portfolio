import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize ">{type}&nbsp;</h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75">
          {time} | {place}
        </span>
        <p className="w-full font-medium">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="mb-32 w-full text-center text-8xl font-bold">Education</h2>
      <div ref={ref} className="relative mx-auto w-[75%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light"
        />
        <ul className="mt-1 flex w-full flex-col items-center justify-between">
          <Details
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="Relevant courses included
            Data Structures and Algorithms, Computer Systems Engineering, and
            Artificial Intelligence."
          />

          <Details
            type=" Master Of Computer Science"
            time="2020-2022 "
            place="Stanford University"
            info="Completed a master's project on deep
            learning, developing a new neural network architecture for natural
            language understanding."
          />
          <Details
            type="Online Coursework"
            time="2016-2020"
            place="Coursera And EdX"
            info=" Completed coursework
            in advanced topics such as Reinforcement Learning, Computer Vision,
            and Machine Learning Engineering."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
