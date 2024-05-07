import React, { useContext, useState } from "react";
import { AuthContext } from "../main";
import PageLayout from "../components/PageLayout";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <PageLayout>
      <div className="flex flex-col gap-5 max-w-md">
        <h1 className="text-4xl">Sign In</h1>
        {/* <div className="flex flex-col">
            <label htmlFor="" className='font-bold'>User ID</label>
            <input type="text" disabled className='px-2 py-1 max-w-xs border border-black disabled:bg-gray-400'
            />
          </div> */}
        <form action="" className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold">
              Username
            </label>
            <input type="text" className="px-2 py-1 border border-black" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="font-bold">
              Password
            </label>
            <input type="text" className="px-2 py-1 border border-black" />
          </div>
          <div className="flex bg-slate-400">
            {/* TODO: simulation lang etong nav link */}
            <button className="px-3 py-2 w-full font-bold text-white bg-blue-500">
              <NavLink to="/">Login</NavLink>
            </button>
          </div>
        </form>
      </div>
    </PageLayout>
  );
};

export default Login;
