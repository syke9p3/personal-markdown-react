import { NavLink } from "react-router-dom";
import Avatar from "./Avatar";

const Navbar = () => {

  return (
    <nav className="text-white bg-[#252032]">
      <div className="container lg:max-w-5xl py-5 mx-auto flex justify-between items-center px-[5%]">
        <NavLink to="/"> 
          <h1 className="text-2xl">Personal Markdown</h1>
        </NavLink>
        <Avatar/>
      </div>
    </nav>
  );
};

export default Navbar;
