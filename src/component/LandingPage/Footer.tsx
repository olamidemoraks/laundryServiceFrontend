import React from "react";
import { BsChatDotsFill, BsTelephoneFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { slideIn, zoomIn } from "../../utils/motion";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="mx-auto md:w-[70%] w-[90%] mt-10 py-7 z-50">
      <motion.div
        variants={zoomIn(0.3, 1.0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.23 }}
        className="flex  md:flex-row flex-col md:items-start items-center justify-between gap-6 border-t border-t-neutral-700 pt-10 "
      >
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
        <div className="">
          <p className=" text-[1.3rem] text-neutral-300 mb-2">Quick Link</p>

          <ul className=" list-none flex flex-col gap-2 text-[0.9rem] md:items-start items-center">
            <li className=" hover:border-b-[3px] hover:border-b-dark-gold ease-linear duration-150 trnasition cursor-pointer ">
              <a href="/#">Home</a>
            </li>
            <li className=" hover:border-b-[3px] hover:border-b-dark-gold ease-linear duration-150 trnasition cursor-pointer ">
              <a href="#services">Services</a>
            </li>
            <li className=" hover:border-b-[3px] hover:border-b-dark-gold ease-linear duration-150 trnasition cursor-pointer ">
              <a href="#works">How we work</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2 md:items-start items-center ">
          <p className=" text-[1.3rem] text-neutral-300">Contact Us</p>
          <p className="flex gap-2 items-center">
            <BsChatDotsFill className=" text-light-gold" />{" "}
            <span>grlaundry@gmail.com</span>
          </p>
          <p className="flex gap-2 items-center">
            <BsTelephoneFill className=" text-light-gold" />{" "}
            <span>08036379293</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default Footer;
