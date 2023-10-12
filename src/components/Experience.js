import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0 "
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize ">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="w-full font-medium">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="mb-32 w-full text-center text-8xl font-bold">
        Experience
      </h2>
      <div ref={ref} className="relative mx-auto w-[75%]">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light "
        />
        <ul className="mt-1 flex w-full flex-col items-center justify-between">
          <Details
            time="2022-Present"
            company="Google"
            position=" Software Engineer"
            companyLink=""
            address="Mountain View, CA"
            work="Worked on a
            team responsible for developing new features for Google's search
            engine, including improving the accuracy and relevance of search
            results and developing new tools for data analysis and visualization."
          />
          <Details
            time="Summer 2021"
            company="Facebook"
            position=" Intern"
            companyLink=""
            address="Menlo Park, CA."
            work="Worked on a team responsible for developing new features for Google's 
            search engine, including improving the accuracy and relevance of search results and 
            developing new tools for data analysis and visualization."
          />
          <Details
            time="2020-2021"
            company="Amazon"
            position=" Software Developer"
            companyLink="www.amazon.com"
            address="Seattle, WA."
            work="Worked
            on a team responsible for developing Amazon's mobile app, including
            implementing new features such as product recommendations and user
            reviews, and optimizing the app's performance and reliability."
          />
          <Details
            time="Summer 2019"
            company="Microsoft"
            position="Software Developer Intern"
            companyLink="www.microsoft.com"
            address="Redmond, WA."
            work="Worked
            on a team responsible for developing new features for Microsoft's
            Windows operating system, including implementing a new user interface
            for a system settings panel and optimizing the performance of a core
            system component."
          />
          <Details
            time="Fall 2018"
            company="MIT"
            position="Teaching Assistant"
            companyLink="www.mit.com"
            address="Massachusetts Ave, Cambridge, MA."
            work="Assisted in teaching a course on computer programming, held office hours to help students with assignments, 
            and graded exams and assignments."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
