import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { UserData } from "../context/User";

const Navbar = () => {
  const navigate = useNavigate();
  const { logoutUser, user } = UserData(); // Get user info from context

  return (
    <>
      {/* Welcome message at the top center */}
      <div className="w-full text-center font-semibold text-3xl mb-2">
        Welcome {user?.role === "admin" ? "Admin" : user?.name || "Guest"}!
      </div>

      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            src={assets.arrow_left}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt="Back"
            onClick={() => navigate(-1)}
          />
          <img
            src={assets.arrow_right}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt="Forward"
            onClick={() => navigate(+1)}
          />
        </div>

        <div className="flex items-center gap-4">
          <p
            className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl cursor-pointer"
            onClick={logoutUser}
          >
            Logout
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          All
        </p>
        <p
          onClick={() => navigate("/playlist")}
          className="bg-black px-4 py-1 rounded-2xl cursor-pointer md:hidden"
        >
          PlayList
        </p>
      </div>
    </>
  );
};

export default Navbar;
