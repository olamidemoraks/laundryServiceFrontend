import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";

type NavLinkProps = {
  to: string;
  label: string;
};

const NavLink: React.FC<NavLinkProps> = ({ label, to }) => {
  return (
    <div className="flex gap-5 items-center">
      <Link
        to={to}
        className="border-[2px] border-mid-black p-[.4rem] rounded-[.4rem] cursor-pointer hover:bg-mid-black transition"
      >
        <AiOutlineLeft className=" text-white/70" />
      </Link>
      <p className=" font-bold text-xl">{label}</p>
    </div>
  );
};
export default NavLink;
