import React from "react";
import useAuth from "../../hooks/useAuth";
import { FcFlashOff } from "react-icons/fc";
import { googleLogout } from "@react-oauth/google";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const { profile, sendLogout } = useAuth();

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const handleLogout = () => {
    sendLogout();
    googleLogout();
    queryClient.removeQueries(["reservation", "showMe"]);
    navigate("/authenticate");
  };
  return (
    <div className="flex justify-end border-b border-neutral-800 pb-2">
      <div className="  flex  items-center mt-5 gap-3 ease-out duration-300">
        <div className="flex flex-col items-end">
          <p className="text-[.66rem] font-bold text-neutral-200 tracking-wider uppercase">
            {profile.name}
          </p>
          <p className="text-[.66rem] font-bold text-neutral-400 tracking-wider uppercase">
            Admin
          </p>
        </div>
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
  );
};
export default Navbar;
