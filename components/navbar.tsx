import Link from "next/link";
import React from "react";
import Logo from "./logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon} from "./icons";

type Props = {};

const CustomLink = ({href, title, className=""} : {href : string, title : string, className : string}) => {
    const router = useRouter()
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block bg-dark ${router.asPath == href ? "w-full" : "w-0"}  group-hover:w-full transition-[width] ease-in duration-300 absolute left-0 -bottom-0.5`}>&nbsp;</span>
        </Link>
    )
}

const Navbar = (props: Props) => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="mx-4" />
        <CustomLink href="/articles" title="Articles" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a href="/" target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale : 0.9}}
        >
          <TwitterIcon className="w-6 mr-3" />
        </motion.a>
        <motion.a href="/" target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale : 0.9}}
        >
          <GithubIcon className="w-6 mx-3" />
        </motion.a>
        <motion.a href="/" target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale : 0.9}}
        >
          <LinkedInIcon  className="w-6 mx-3"/>
        </motion.a>
        <motion.a href="/" target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale : 0.9}}
        >
          <PinterestIcon className="w-6 mx-3" />
        </motion.a>
        <motion.a href="/" target="_blank"
        whileHover={{y:-2}}
        whileTap={{scale : 0.9}}
        >
          <DribbbleIcon className="w-6 ml-3" />
        </motion.a>
      </nav>
      <div className=" absolute top-2 left-[50%] translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
