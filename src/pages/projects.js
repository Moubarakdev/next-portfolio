import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import Project2 from "../../public/images/projects/portfolio-cover-image.jpg";

const FeatureProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border border-solid border-dark bg-light p-12 shadow-2xl">
      <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="h-auto w-full" />
      </Link>

      <div className="flex w-1/2 flex-col items-start justify-between pl-6">
        <span className="text-xl font-medium text-primary ">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 ">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <>
      <article className="relative top-0  flex w-full flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6">
        <div className="absolute -right-3 top-0 -z-10 h-[103%] w-[101%] rounded-[2rem] rounded-br-3xl bg-dark" />
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg"
        >
          <Image src={img} alt={title} className="h-auto w-full" />
        </Link>

        <div className="mt-4 flex w-full flex-col items-start justify-between ">
          <span className="text-xl font-medium text-primary ">{type}</span>
          <Link
            href={link}
            target="_blank"
            className="underline-offset-2 hover:underline"
          >
            <h2 className="my-2 w-full text-left text-3xl font-bold">
              {title}
            </h2>
          </Link>

          <div className="mt-2 flex w-full items-center justify-between">
            <Link
              href={link}
              target="_blank"
              className="text-lg font-semibold underline"
            >
              Visit
            </Link>
            <Link href={github} target="_blank" className="w-8 ">
              <GithubIcon />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>MBKDEV | Projects Page</title>
        <meta name="description" content="my projects" />
      </Head>
      <main className="mb-16 flex w-full flex-col items-center justify-center">
        <Layout className="pt-16 ">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16"
          />
          <div className="grid-col-12 grid gap-24 gap-y-32">
            <div className=" col-span-12">
              <FeatureProject
                title="Crypto Screener Application"
                link="/"
                img={Project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
              local currency."
                type="Featured Project"
                github="/"
              />
            </div>
            <div className=" col-span-6">
              <Project
                title="React Portfolio Website"
                link="/"
                img={Project2}
                type="Featured Project"
                github="/"
              />
            </div>
            <div className=" col-span-6">
              {" "}
              <Project
                title="React Portfolio Website"
                link="/"
                img={Project2}
                type="Featured Project"
                github="/"
              />
            </div>
            <div className=" col-span-12">
              <FeatureProject
                title="React Portfolio Website"
                link="/"
                img={Project2}
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth 
                page transitions, cool background effects, unique design and it is mobile responsive."
                type="Featured Project"
                github="/"
              />
            </div>
            <div className=" col-span-6">
              {" "}
              <Project
                title="React Portfolio Website"
                link="/"
                img={Project2}
                type="Featured Project"
                github="/"
              />
            </div>
            <div className=" col-span-6">
              {" "}
              <Project
                title="React Portfolio Website"
                link="/"
                img={Project2}
                type="Featured Project"
                github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
