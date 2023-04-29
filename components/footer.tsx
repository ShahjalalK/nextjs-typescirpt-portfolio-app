import React from "react";
import Layout from "./layout";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark text-lg font-medium">
      <Layout className="flex items-center justify-between py-8">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div>
            Build With <span className="text-primary text-2xl">&#9825; </span>
          <Link href="https://www.fiverr.com" target="_blank" className="underline underline-offset-2">ShahjalalK</Link>
        </div>
        <Link href="/" className="underline underline-offset-2">Say hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
