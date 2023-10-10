import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
import article2 from "../../public/images/articles/create loading screen in react js.jpg";
import Image from "next/image";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <>
      <li className=" col-span-1 w-full rounded-2xl border border-solid border-dark bg-light p-4 ">
        <Link
          href={link}
          target="_blank"
          className="inline-block w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <FramerImage src={img} alt={title} className="h-auto w-full" />
        </Link>
        <Link href={link} target="_blank">
          <h2 className="capitalized my-2 text-2xl  font-bold hover:underline">
            {title}
          </h2>
        </Link>
        <p className="mb-2 text-sm ">{summary}</p>
        <span className="font-semibold text-primary">{time}</span>
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
      <main className="mb-16 flex w-full flex-col items-center justify-center overflow-hidden">
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
        </Layout>
      </main>
    </>
  );
};

export default articles;
