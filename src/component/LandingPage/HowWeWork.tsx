import React from "react";
import LandingPageLayout from "../Layout/LandingPageLayout";
import {
  AiOutlineSmile,
  AiOutlineClockCircle,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import { FaRegCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, zoomIn } from "../../utils/motion";

type HowWeWorkProps = {};

const WorkCard = ({
  body,
  title,
  children,
}: {
  body: string;
  title: string;
  children: any;
}) => {
  return (
    <div className="w-full rounded-[.7rem] black_glassmorphism p-4">
      <div className="flex gap-5 items-start">
        <div className="h-[2.9rem] min-w-[2.9rem] flex items-center justify-center rounded-[.9rem] bg-light-gold text-primary-black/80 text-[1.5rem]">
          {children}
        </div>
        <div className=" flex flex-col gap-2">
          <p className=" capitalize text-[1.2rem] font-medium leading-none">
            {title}
          </p>
          <p className=" text-neutral-300 text-[.8rem] leading-5">{body}</p>
        </div>
      </div>
    </div>
  );
};
const HowWeWork: React.FC<HowWeWorkProps> = () => {
  return (
    <LandingPageLayout>
      <motion.div
        variants={staggerContainer as any}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.23 }}
        id="works"
        className=" bg-[url(./washinMachine.jpg)] bg-no-repeat bg-cover w-full rounded-[.9rem]"
      >
        <div className="backdrop-brightness-50 h-full w-full  md:p-12 p-2 rounded-[.9rem]">
          <motion.h1
            variants={fadeIn("right", "tween", 0.3, 1.3)}
            className="md:text-[2rem] text-[1.3rem] font-semibold leading-10 capitalize"
          >
            We Are working hard to earn <br /> your trust
          </motion.h1>
          <div className="grid sm:grid-cols-2 w-full gap-5 mt-8">
            <motion.div variants={zoomIn(0.2, 1.0)}>
              <WorkCard
                title="100% Happiness Guarantee"
                body="If you are not completely satisfied with your wash or dry cleaning. we will re-process your cloth for free."
              >
                <AiOutlineSmile />
              </WorkCard>
            </motion.div>
            <motion.div variants={zoomIn(0.2, 1.0)}>
              <WorkCard
                title="High Quality Services"
                body="We work hard to make sure that the cloth you get back are spotless and ready for action."
              >
                <FaRegCheckCircle />
              </WorkCard>
            </motion.div>

            <motion.div variants={zoomIn(0.2, 1.4)}>
              <WorkCard
                title="We Give Fast Service"
                body="We pickup wash and deliver in less than 4 days."
              >
                <AiOutlineClockCircle />
              </WorkCard>
            </motion.div>
            <motion.div variants={zoomIn(0.2, 1.4)}>
              <WorkCard
                title="Affordable price for You"
                body="The amount we charge is equivalent to the cost you bear to get the laundry done at home."
              >
                <AiOutlineDollarCircle />
              </WorkCard>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </LandingPageLayout>
  );
};
export default HowWeWork;
