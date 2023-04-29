import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className: string;
};

const Layout = ({ children, className }: Props) => {
  return <div className={` w-full h-full inline-block bg-light z-0 p-32 ${className}`}>
    {children}
  </div>;
};

export default Layout;
