import { googleLogout } from "@react-oauth/google";
import React from "react";
import { FcFlashOff } from "react-icons/fc";
import { useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Location from "../Location/Location";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { profile, sendLogout } = useAuth();

  const darkMode: boolean = true;
  const handleLogout = () => {
    sendLogout();
    googleLogout();
    queryClient.removeQueries(["reservation", "showMe"]);
    navigate("/authenticate");
  };
  return (
    <div className="w-full">
      <div className="flex w-full justify-between items-center">
        <div className="relative flex items-center justify-center group ">
          <Link
            to="/profile"
            className="left-0  absolute flex items-center justify-center h-[3.2rem] w-[3.17rem] rounded-full bg-gradient-to-tr to-primary-black from-mid-black group-hover:from-primary-black group-hover:to-mid-black  p-[1px]  border-dashed border-light-gold border-l-[2px] duration-100 ease-in group-hover:border-r-[2px] group-hover:border-l-0 cursor-pointer z-50"
          >
            <div className=" z-50">
              <p className="text-[1.3rem] font-semibold uppercase group-hover:-skew-x-4 group-hover:-skew-y-1 skew-x-1 skew-y-4 transition">
                {profile?.name.split("")[0]}
              </p>
            </div>
          </Link>
          <div className="absolute -left-[.37rem] h-[3.19rem] w-[3.2rem] rounded-full bg-gradient-to-tr from-primary-black to-dark-gold/10 group-hover:to-primary-black group-hover:from-dark-gold/10 group-hover:left-[.37rem] transition cursor-pointer" />
        </div>
        <div className="flex gap-3 items-center">
          {/* <div className=" cursor-pointer">
            {!darkMode ? (
              <MdDarkMode className="text-[1.3rem] text-sky-900" />
            ) : (
              <MdLightMode className="text-[1.3rem] text-light-gold" />
            )}
          </div> */}
          <div
            className=" flex items-center justify-center flex-col group relative "
            onClick={handleLogout}
          >
            <div className="left-0 flex items-center justify-center h-[2.3rem] w-[2.3rem] rounded-full bg-gradient-to-tr to-primary-black from-mid-black group-hover:from-primary-black group-hover:to-mid-black  p-[1px]  border-dashed border-light-gold border-l-[2px] duration-100 ease-in group-hover:border-r-[2px] group-hover:border-l-0 cursor-pointer z-50">
              <div className=" z-50">
                <p className="text-[1.3rem] font-semibold uppercase group-hover:-skew-x-4 group-hover:-skew-y-1 skew-x-1 skew-y-4 transition">
                  <FcFlashOff />
                </p>
              </div>
            </div>
            <div className=" bg-mid-black text-[.8rem] px-2 p-1 rounded-[.5rem] w-[4rem] absolute top-12 group-hover:scale-100 scale-0 ease-in duration-150">
              Log out
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:text-2xl text-xl font-semibold mt-4">
        <span className=" font-thin">Hey</span>,{" "}
        <span className=" capitalize">{profile.name.split(" ")[0]}</span> 👋🏽{" "}
        <br />
        Get smart experience <br className="block md:hidden " /> in washing
      </div>
      <Location />
    </div>
  );
};
export default Navbar;
