import React from "react";
import Bubble from "./Bubble";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, zoomIn } from "../../utils/motion";

type HeroSectionProps = {};

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <motion.div
      variants={staggerContainer as any}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mx-auto md:w-[70%] w-[90%] justify-evenly gap-8 flex h-[90vh] relative"
    >
      <div className="flex-1 flex flex-col justify-center">
        <motion.div
          variants={slideIn("left", "spring", 0.3, 2)}
          className="relative w-fit"
        >
          <h2 className="md:text-[3.55rem] text-[2.8rem] md:text-left text-center  md:leading-[4.3rem] leading-[3.3rem] font-bold tracking-[0.045em] z-40 relative w-fit">
            Best Helping Hands for You
          </h2>
          <div className=" h-2 w-full bg-light-gold absolute md:bottom-2 bottom-1 z-0" />
        </motion.div>
        <motion.p
          variants={slideIn("left", "spring", 0.4, 2)}
          className="text-[1.3rem] mt-5 md:w-[80%]  md:text-left text-center tracking-wide"
        >
          Laundry & dry cleaning picked up and delivered to your door, hassle
          free and affordable dry cleaning and delivered to your home or office.
        </motion.p>
        <div className="-z-10 md:hidden block absolute w-[80%] h-[100%]">
          <Bubble />
        </div>
      </div>
      <div className="flex-1 items-center justify-center md:flex hidden">
        <div className="lg:w-[27rem] w-[24rem] relative h-[29rem]">
          <Bubble />
          <motion.div
            variants={zoomIn(0.4, 1.3)}
            className="w-[12rem] h-[12rem] absolute rounded-full left-6 top-[9rem] "
          >
            <img
              src="./washing1.jpg"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          <motion.div
            variants={zoomIn(0.4, 1.6)}
            className="w-[12rem] h-[12rem] absolute rounded-full right-12 top-0 "
          >
            <img
              src="./washing2.jpg"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
          <motion.div
            variants={zoomIn(0.4, 1.9)}
            className="w-[12rem] h-[12rem] absolute rounded-full right-4 bottom-0 "
          >
            <img
              src="./washing3.jpg"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default HeroSection;
