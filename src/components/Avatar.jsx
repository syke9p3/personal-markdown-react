import React, { useContext } from "react";
import { AuthContext } from "../main";
import { NavLink } from "react-router-dom";

const Avatar = () => {
  
    const loggedUser = useContext(AuthContext) || null;

  return (
    <NavLink to="/login">
      <span className="flex gap-3 items-center">
        <p className="italic opacity-80">{`${loggedUser.username}`}</p>
        <div>
          {/* Avatar */}
          <img
            src="https://i.pinimg.com/originals/74/39/08/743908b71d28a3414f903a8d15666475.png"
            alt="Avatar"
            className="object-cover w-8 h-8 rounded-full"
          />
        </div>
      </span>
    </NavLink>
  );
};

export default Avatar;
