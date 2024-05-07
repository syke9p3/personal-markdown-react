import React from "react";
import { NavLink } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <span className="flex gap-1 items-center pb-6">
      <NavLink to="/">
        <p className="py-2 pr-3 hover:text-pink-500">My Notes</p>
      </NavLink>
      <p>/</p>
      <span className="px-3 py-2 font-bold">Breadcrumb</span>
    </span>
  );
};

export default Breadcrumb;
