import React from "react";
import LandingPageLayout from "../Layout/LandingPageLayout";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "../../utils/motion";

type ServicesProps = {};

const ServiceItem = ({
  count,
  title,
  children,
}: {
  count: string;
  title: string;
  children: any;
}) => {
  return (
    <div className="flex flex-col gap-5 z-50">
      <div className="flex gap-4 items-center">
        <div className="flex items-center justify-center h-[2rem] min-w-[2rem] rounded-full bg-light-gold text-black text-[1.3rem] font-semibold">
          {count}
        </div>
        <div className=" text-[1.3rem] font-semibold">{title}</div>
      </div>
      <div className=" text-neutral-300">{children}</div>
    </div>
  );
};

const Services: React.FC<ServicesProps> = () => {
  return (
    <LandingPageLayout>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        id="services"
        className=""
      >
        <motion.h1
          variants={fadeIn("right", "tween", 0.3, 1.3)}
          className="md:text-[2rem] text-[1.66rem] font-semibold"
        >
          We Collect, Clean and Deliver <br /> Your Laundry in less than 4 days
        </motion.h1>
        <div className="flex w-full mt-10 items-center gap-5 ">
          <div className="md:flex-1 flex-[0.2] md:grid grid-rows-2 hidden gap-6 ">
            <motion.div
              variants={zoomIn(0.3, 1.4)}
              className="rounded-[.8rem] lg:h-[20rem] lg:w-[23rem]  md:h-[15rem] md:w-[17rem] h-[12rem] w-[15rem] relative"
            >
              <img
                src="./washingMachine.jpg"
                className="rounded-[.8rem] w-full h-full"
              />
              <div className="top-0 bottom-0 left-0 right-0 backdrop-brightness-50 absolute rounded-[.8rem]" />
            </motion.div>
            <motion.div
              variants={zoomIn(0.3, 1.6)}
              className="rounded-[.8rem] lg:h-[20rem] lg:w-[23rem] md:h-[15rem] md:w-[17rem] h-[12rem] w-[15rem]  relative"
            >
              <img
                src="./sawingMachine.jpg"
                alt=""
                className="rounded-[.8rem] w-full h-full"
              />
              <div className="top-0 bottom-0 left-0 right-0 backdrop-brightness-50 absolute rounded-[.8rem]" />
            </motion.div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <motion.div
              variants={fadeIn("left", "tween", 0.4, 1.4)}
              className="flex flex-col gap-8"
            >
              <ServiceItem count="1" title="Laundry Service">
                <div>
                  This is for individual cleaning. items are wash and dry
                  cleaned as appropriate, ironed and delivered neatly.
                </div>
              </ServiceItem>
              <div className="h-[1px] bg-secondary-black w-full" />
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.4, 1.8)}
              className="flex flex-col gap-8"
            >
              <ServiceItem count="2" title="Washing Service">
                <div>
                  Items are washed cleaned as appropriate, without ironing and
                  delivered neatly.
                </div>
              </ServiceItem>
              <div className="h-[1px] bg-secondary-black w-full" />
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.4, 2.2)}
              className="flex flex-col gap-8"
            >
              <ServiceItem count="3" title="Ironing Service">
                <div>Items are ironed as appropriate and delivered neatly.</div>
              </ServiceItem>
              <div className="h-[1px] bg-secondary-black w-full" />
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.4, 2.6)}
              className="flex flex-col gap-8"
            >
              <ServiceItem count="4" title="Repairs Service">
                <div>
                  Need stitching or repairs on any items, we got it, item are
                  stitched delicately
                </div>
              </ServiceItem>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </LandingPageLayout>
  );
};
export default Services;
