import React from "react";
import { GoHome } from "react-icons/go";
import { HiHome } from "react-icons/hi";
import { SlHandbag } from "react-icons/sl";
import { FaShoppingBag } from "react-icons/fa";
import { IoPerson, IoPersonOutline } from "react-icons/io5";
import { useLocation, Link } from "react-router-dom";
import { useCart } from "react-use-cart";

type SideMenuProps = {};

const SideMenu: React.FC<SideMenuProps> = () => {
  const location = useLocation();
  const { isEmpty } = useCart();

  const pathName = location.pathname;
  console.log({ pathname: { pathName } });

  return (
    <div className="flex md:flex-col flex-row justify-evenly gap-5 black_glassmorphism p-1 rounded-full  fixed xl:top-[9rem] xl:left-[25rem] lg:top-[9rem] lg:left-[19rem] md:top-[9rem] md:left-[10rem] md:h-fit bottom-8 z-50 ">
      <div className="">
        <Link
          to={"/home"}
          className={`${
            pathName === "/home"
              ? " bg-light-gold text-black hover:bg-dark-gold"
              : "bg-primary-black  text-neutral-400 hover:bg-primary-black/70"
          } flex h-[3rem] w-[3rem] rounded-full items-center justify-center transition relative group`}
        >
          {pathName === "/home" ? <HiHome /> : <GoHome />}
          <div className="bg-light-gold/30 absolute h-[3rem] w-[3rem] rounded-full md:translate-y-5 group-hover:md:translate-y-0 md:translate-x-0 translate-x-5 group-hover:translate-x-0 transition duration-200 opacity-0 group-hover:opacity-50 blur-sm group-hover:blur-0 " />
        </Link>
      </div>
      {/* <div>
        <Link
          to={"/location"}
          className={`${
            pathName === "/location"
              ? " bg-light-gold text-black hover:bg-dark-gold"
              : "bg-primary-black  text-neutral-400 hover:bg-primary-black/70"
          } flex h-[3rem] w-[3rem] rounded-full items-center justify-center transition   bg-primary-black text-neutral-400 `}
        >
          {pathName === "/location" ? <FaMap /> : <FiMap />}
        </Link>
      </div> */}
      <div>
        <Link
          to={"/basket"}
          className={`${
            pathName === "/basket"
              ? " bg-light-gold text-black hover:bg-dark-gold"
              : "bg-primary-black  text-neutral-400 hover:bg-primary-black/70"
          } flex h-[3rem] w-[3rem] rounded-full items-center justify-center transition  bg-primary-black text-neutral-400 relative group`}
        >
          <div className="relative">
            {pathName === "/basket" ? <FaShoppingBag /> : <SlHandbag />}

            {!isEmpty && (
              <div className=" bg-rose-500 h-2 w-2 rounded-full absolute top-0 -right-1 border-[1px] border-neutral-400" />
            )}
          </div>
          <div className="bg-light-gold/30 absolute h-[3rem] w-[3rem] rounded-full md:translate-y-5 group-hover:md:translate-y-0 md:translate-x-0 -translate-x-5 group-hover:translate-x-0 transition duration-200 opacity-0 group-hover:opacity-50 blur-sm group-hover:blur-0 " />
        </Link>
      </div>
      <div>
        <Link
          to={"/profile"}
          className={`${
            pathName === "/profile"
              ? " bg-light-gold text-black hover:bg-dark-gold"
              : "bg-primary-black  text-neutral-400 hover:bg-primary-black/70"
          } flex h-[3rem] w-[3rem] rounded-full items-center justify-center transition relative group`}
        >
          {pathName === "/profile" ? <IoPerson /> : <IoPersonOutline />}
          <div className="bg-light-gold/30 absolute h-[3rem] w-[3rem] rounded-full md:-translate-y-5 group-hover:md:translate-y-0 md:translate-x-0 -translate-x-5 group-hover:translate-x-0 transition duration-200 opacity-0 group-hover:opacity-50 blur-sm group-hover:blur-0 " />
        </Link>
      </div>
    </div>
  );
};
export default SideMenu;
