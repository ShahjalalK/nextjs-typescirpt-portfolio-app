import Layout from "@/components/layout";
import MetaSeo from "@/meta/metaSeo";
import Image from "next/image";
import ProfileImage from "../public/profile/developer-pic-1.png";
import AnimatedText from "@/components/animatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/hireMe";
import lighblue from '../public/images/svgs/miscellaneous_icons_1.svg'

export default function Home() {
  return (
    <>
      <MetaSeo />
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={ProfileImage}
                alt="Profile Image"
                className="w-full h-auto"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link href="/dummy.pdf" target="_blank"
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                download={true}
                >
                  Resume
                  <LinkArrow className="" />
                </Link>
                <Link href="mailto:shahjalalkhan895@gmail.com" className="ml-4 font-medium text-lg capitalize text-dark underline">
                Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className=" absolute right-8 bottom-8 inline-block w-24">
        <Image src={lighblue} alt="shahjalalk" className="w-full h-auto"/>
        </div>
      </main>
    </>
  );
}
