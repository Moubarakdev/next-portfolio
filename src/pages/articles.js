import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import article4 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import article5 from "../../public/images/articles/smooth scrolling in reactjs.png";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-xl font-semibold capitalize hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        ref={imgRef}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        src={img}
        alt={title}
        className="absolute z-10 hidden h-auto w-96 rounded-lg"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative my-4 flex w-full items-center justify-between rounded-xl border-b-4 border-r-4 border-solid border-dark bg-light p-4 py-6 text-dark first:mt-0 dark:border-light dark:bg-dark dark:text-light"
    >
      <MovingImg title={title} img={img} link={link} />

      <span className="pl-4 font-semibold text-primary dark:text-primaryDark">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <>
      <li className=" col-span-1 w-full rounded-2xl border border-solid border-dark bg-light p-4 dark:border-light dark:bg-dark">
        <Link
          href={link}
          target="_blank"
          className="inline-block w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage
            src={img}
            alt={title}
            className="h-auto w-full"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </Link>
        <Link href={link} target="_blank">
          <h2 className="capitalized my-2 text-2xl font-bold hover:underline">
            {title}
          </h2>
        </Link>
        <p className="mb-2 text-sm ">{summary}</p>
        <span className="font-semibold text-primary dark:text-primaryDark">
          {time}
        </span>
      </li>
    </>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title>MBKDEV | Articles Page</title>
        <meta name="description" content="articles" />
      </Head>
      <main className="mb-16 flex w-full flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change The World!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from
                scratch. Follow this step-by-step guide to integrate Pagination
                component in your ReactJS project."
              time=" 9 min read"
              link="/"
              img={article1}
            />
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch"
              summary="Learn how to build a custom pagination component in ReactJS from
                scratch. Follow this step-by-step guide to integrate Pagination
                component in your ReactJS project."
              time=" 9 min read"
              link="/"
              img={article2}
            />
          </ul>
          <h2 className="my-16 mt-32 w-full text-center text-4xl font-bold">
            All Articles
          </h2>
          <ul>
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2023"
              link="/"
              img={article3}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2023"
              link="/"
              img={article4}
            />
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              date="March 22, 2023"
              link="/"
              img={article5}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
