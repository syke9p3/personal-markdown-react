import React from "react";
import Navbar from "./Navbar";

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container lg:max-w-5xl py-5 px-[5%] mx-auto">{children}</div>
    </>
  );
};

export default PageLayout;
