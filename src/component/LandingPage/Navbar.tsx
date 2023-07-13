import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="mx-auto lg:w-[75%] md:w-[80%] w-[90%] z-50 relative"
    >
      <div className="py-5 flex justify-between w-full items-center">
        <div className="flex gap-4 items-center ">
          <span className="text-[1.4rem] font-bold">E</span>
          <div className="relative -translate-y-4 -translate-x-[.4rem]">
            <div className="w-[.6rem] h-[2rem] bg-white absolute skew-x-[45deg] rounded-sm top-0" />
            <div className="w-[.6rem] h-[2.3rem] bg-light-gold absolute -skew-x-[43deg] rounded-sm top-0" />
          </div>
          <span className="text-[1.4rem] uppercase font-bold">
            quisite mart
          </span>
        </div>
        <div className="md:block hidden ">
          <ul className=" list-none flex gap-8 text-[1rem] ">
            <li className="   cursor-pointer  flex flex-col items-center group min-h-[2rem] ">
              <a
                href="/#"
                className=" ease-linear duration-150 transition group-hover:text-light-gold"
              >
                Home
              </a>
              <div className="ease-linear duration-300 transition h-[.4rem] w-[.4rem] bg-light-gold rounded-full hidden group-hover:block" />
            </li>

            <li className="   cursor-pointer  flex flex-col items-center group ">
              <a
                href="/#services"
                className=" ease-linear duration-150 transition group-hover:text-light-gold"
              >
                Services
              </a>
              <div className="ease-linear duration-300 transition h-[.4rem] w-[.4rem] bg-light-gold rounded-full hidden group-hover:block" />
            </li>
            <li className="   cursor-pointer  flex flex-col items-center group ">
              <a
                href="/#works"
                className=" ease-linear duration-150 transition group-hover:text-light-gold"
              >
                About Us
              </a>
              <div className="ease-linear duration-300 transition h-[.4rem] w-[.4rem] bg-light-gold rounded-full hidden group-hover:block" />
            </li>
            {/* <li className="   cursor-pointer  flex flex-col items-center group ">
              <a
                href="/#"
                className=" ease-linear duration-150 transition group-hover:text-light-gold"
              >
                Contact Us
              </a>
              <div className="ease-linear duration-300 transition h-[.4rem] w-[.4rem] bg-light-gold rounded-full hidden group-hover:block" />
            </li> */}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <Link
            to="authenticate"
            className=" bg-light-gold w-[5.5rem] py-[.4rem] text-center rounded-full capitalize text-black font-semibold"
          >
            Sign in
          </Link>
          <div className="md:hidden block cursor-pointer">
            {!isOpen ? (
              <AiOutlineMenu onClick={() => setIsOpen(true)} />
            ) : (
              <AiOutlineClose onClick={() => setIsOpen(false)} />
            )}
          </div>
        </div>
        <div
          className={`${
            !isOpen
              ? "opacity-0 translate-x-[12rem] scale-0"
              : "opacity-100 translate-x-2"
          } black_glassmorphism p-[3rem] absolute top-[3.9rem] right-0 w-[13rem] z-50 md:hidden block ease-out duration-500`}
        >
          <ul className=" list-none flex flex-col gap-4 text-[1rem] ">
            <li className="   cursor-pointer  flex flex-col items-center group">
              <a
                href="/#"
                className=" ease-linear duration-150 transition group-hover:text-light-gold"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
            </li>
            <li className="   cursor-pointer  flex flex-col items-center group ">
              <a
                href="/#services"
                className=" ease-linear duration-150 transition group-hover:text-light-gold"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li className="   cursor-pointer  flex flex-col items-center group ">
              <a
                href="/#works"
                className=" ease-linear duration-150 transition group-hover:text-light-gold "
                onClick={() => setIsOpen(false)}
              >
                About Us
              </a>
            </li>

            <li className="   cursor-pointer  flex flex-col items-center group ">
              <a
                href="/#"
                className=" ease-linear duration-150 transition group-hover:text-light-gold"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
export default Navbar;
