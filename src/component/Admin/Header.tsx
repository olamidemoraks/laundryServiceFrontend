import React from "react";
import { BsBasketFill } from "react-icons/bs";
import { GoDashboard } from "react-icons/go";
import { Link, useLocation } from "react-router-dom";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();
  console.log(location.pathname.split("/")[2]);
  const active = "bg-secondary-black/80";
  return (
    <div className="md:w-[12rem] w-[5rem] h-[100vh] bg-gradient-to-t to-mid-black/25 from-secondary-black/30 flex flex-col  relative">
      <Link to={"/"}>
        <h2 className=" flex justify-center w-full pt-10  font-bold text-[1.2rem] md:scale-100 scale-75  ">
          Laundry
        </h2>
      </Link>

      <div className="mx-auto mt-10 flex gap-2 flex-col">
        <Link
          to={"/admin"}
          className={`${
            location.pathname.split("/")[2] === undefined ? active : null
          }  flex gap-3 items-center cursor-pointer hover:bg-secondary-black p-2  md:w-[9rem] w-fit  rounded-[.2rem] transition hover:translate-x-1 `}
        >
          <div className="h-[1.47rem] w-[1.47rem] text-[14px] bg-gradient-to-tl from-mid-black/80 group-hover:to-secondary-black/70 to-secondary-black text-neutral-200 flex items-center justify-center rounded-[.4rem]">
            <GoDashboard className=" " />
          </div>
          <p className="hidden md:block text-[.9rem] text-neutral-300">
            Overview
          </p>
        </Link>
        <Link
          to={"order"}
          className={`${
            location.pathname.includes("order") && active
          } flex gap-3 items-center cursor-pointer hover:bg-secondary-black p-2  md:w-[9rem] w-fit  rounded-[.2rem] transition hover:translate-x-1 `}
        >
          <div className="h-[1.47rem] w-[1.47rem] text-[14px] bg-gradient-to-tl from-mid-black/80 group-hover:to-secondary-black/70 to-secondary-black text-neutral-200  flex items-center justify-center rounded-[.4rem]">
            <BsBasketFill className=" " />
          </div>
          <p className="hidden md:block text-[.9rem] text-neutral-300">
            Orders
          </p>
        </Link>
        <Link
          to={"customer"}
          className={`${
            location.pathname.includes("customer") && active
          } flex gap-3 items-center cursor-pointer hover:bg-secondary-black p-2 md:w-[9rem] w-fit rounded-[.2rem] transition hover:translate-x-1 `}
        >
          <div className="h-[1.47rem] w-[1.47rem] text-[14px] bg-gradient-to-tl from-mid-black/80 group-hover:to-secondary-black/70 to-secondary-black text-neutral-200  flex items-center justify-center rounded-[.4rem]">
            <BsBasketFill className=" " />
          </div>
          <p className="hidden md:block text-[.9rem] text-neutral-300">
            Customers
          </p>
        </Link>
      </div>
    </div>
  );
};
export default Header;
