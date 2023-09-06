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
      {/* <div id="works">
        <div className="relative w-fit mx-auto mt-6">
          <h2 className="md:text-[2rem] w-fit text-[1.5rem]  md:leading-[4.3rem] leading-[3.3rem] font-bold tracking-[0.045em] z-50 relative uppercase ">
            How We Work
          </h2>
          <div className=" h-1 w-full bg-light-gold/40 absolute md:bottom-5 bottom-4  z-0" />
        </div>
        <div className="flex-col gap-14 flex">
          <div className="mt-6 flex">
            <div className="flex justify-center w-full gap-12">
              <div className="flex-1 flex flex-col justify-center">
                <div className="relative w-fit  mt-6">
                  <h2 className="md:text-[2rem] w-fit text-[1.5rem]  md:leading-[4.3rem] leading-[3.3rem] font-bold tracking-[0.045em] z-50 relative uppercase ">
                    Pick Service
                  </h2>
                  <div className=" h-1 w-full bg-light-gold/40 absolute md:bottom-5 bottom-4  z-0" />
                </div>
                <p className="text-[1.2rem] w-[90%]">
                  Choose a service you want, select the items under the service
                  by clicking the plus button with your desire quantity, after
                  ward click add to basket button.
                </p>
              </div>
              <div className="flex-1">
                <div className="">
                  <img src="./service1.jpg" alt="service" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex justify-center gap-12 w-full">
              <div className="flex-1">
                <div className="">
                  <img src="./service1.jpg" alt="service" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center ">
                <div className="relative w-fit  mt-6">
                  <h2 className="md:text-[2rem] w-fit text-[1.5rem]  md:leading-[4.3rem] leading-[3.3rem] font-bold tracking-[0.045em] z-50 relative uppercase ">
                    Pick Schedule
                  </h2>
                  <div className=" h-1 w-full bg-light-gold/40 absolute md:bottom-5 bottom-4  z-0" />
                </div>
                <p className="text-[1.2rem] w-[90%]">
                  Go to your basket, where you will find your schedule service,
                  then proceed to schedule where you will be able to select a
                  date for your items to be picked up.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex justify-center gap-12 w-full">
              <div className="flex-1 flex flex-col justify-center ">
                <div className="relative w-fit  mt-6">
                  <h2 className="md:text-[2rem] w-fit text-[1.5rem]  md:leading-[4.3rem] leading-[3.3rem] font-bold tracking-[0.045em] z-50 relative uppercase ">
                    Payment
                  </h2>
                  <div className=" h-1 w-full bg-light-gold/40 absolute md:bottom-5 bottom-4  z-0" />
                </div>
                <p className="text-[1.2rem] w-[90%]">
                  You will be prompted to pay for your items total price for
                  that order when our agent comes for pick up, any method of
                  payment will be accepted such as cash, mobile transfer and
                  others.
                </p>
              </div>
              <div className="flex-1">
                <div className="">
                  <img src="./service1.jpg" alt="service" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <div className="flex justify-center gap-12 w-full">
              <div className="flex-1">
                <div className="">
                  <img src="./service1.jpg" alt="service" />
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center ">
                <div className="relative w-fit  mt-6">
                  <h2 className="md:text-[2rem] w-fit text-[1.5rem]  md:leading-[4.3rem] leading-[3.3rem] font-bold tracking-[0.045em] z-50 relative uppercase ">
                    Delivery
                  </h2>
                  <div className=" h-1 w-full bg-light-gold/40 absolute md:bottom-5 bottom-4  z-0" />
                </div>
                <p className="text-[1.2rem] w-[90%]">
                  After your order has been placed, it will be processed between
                  3-4 working days, after then you will be contacted on when and
                  where to retrieve your cleaned items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </LandingPageLayout>
  );
};
export default HowWeWork;
