import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  console.log(router);
  return (
    <Link href={href} className={`${className} group relative`}>
      {title}
      <span
        className={`ease absolute -bottom-0.5 left-0 inline-block h-[1px] bg-dark transition-[width] duration-300 group-hover:w-full dark:bg-light ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher();
  return (
    <header className="flex w-full items-center justify-between px-32 py-8 font-medium dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mr-4" />
        <CustomLink href="/projects" title="Projects" className="mr-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex flex-wrap items-center justify-center">
        <motion.a
          href="https://twitter.com"
          target={"_blank"}
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6 rounded-full bg-light "
        >
          <TwitterIcon />
        </motion.a>
        <motion.a
          href="https://github.com"
          target={"_blank"}
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://linkedin.com"
          target={"_blank"}
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://pinterest.com"
          target={"_blank"}
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="mx-3 w-6"
        >
          <PinterestIcon />
        </motion.a>
        <motion.a
          href="https://dribbble.com"
          target={"_blank"}
          whileHover={{
            y: -2,
          }}
          whileTap={{ scale: 0.9 }}
          className="ml-3 w-6"
        >
          <DribbbleIcon />
        </motion.a>
        <button
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default NavBar;
