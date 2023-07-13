import React from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";

type OrderUserProps = {
  profile?: Order;
};

const OrderUser: React.FC<OrderUserProps> = ({ profile }) => {
  console.log(profile);
  return (
    <div className="bg-mid-black/50 rounded-md mt-1 py-7 px-3  group flex flex-col">
      <div className="flex gap-3">
        <div className=" flex items-center justify-center flex-col  ">
          <div className="left-0 flex items-center justify-center h-[3.2rem] w-[3.17rem] rounded-full bg-gradient-to-tr to-primary-black from-mid-black group-hover:from-primary-black group-hover:to-mid-black  p-[1px]  border-dashed border-light-gold border-l-[2px] duration-100 ease-in group-hover:border-r-[2px] group-hover:border-l-0 cursor-pointer z-50">
            <div className=" z-50">
              <p className="text-[1.5rem] font-semibold uppercase group-hover:-skew-x-4 group-hover:-skew-y-1 skew-x-1 skew-y-4 transition">
                {profile?.name?.split("")[0]}
              </p>
            </div>
          </div>
          {/* <div className="absolute -left-[.37rem] h-[3.19rem] w-[3.2rem] rounded-full bg-gradient-to-tr from-primary-black to-dark-gold/10 group-hover:to-primary-black group-hover:from-dark-gold/10 group-hover:left-[.37rem] transition cursor-pointer" /> */}
        </div>
        <div className="flex flex-col gap-1">
          <p className=" text-[1.5rem]">{profile?.name}</p>
          <div className=" flex items-center gap-2">
            <MdEmail className=" text-neutral-300" />{" "}
            <p className=" text-neutral-300 ">{profile?.email}</p>
          </div>
          <div className=" flex items-center gap-2">
            <FaPhoneAlt className=" text-neutral-300" />{" "}
            <p className=" text-neutral-300 ">{profile?.phonenumber}</p>
          </div>
        </div>
      </div>
      <div className="flex py-1 px-2 items-center gap-1   bg-secondary-black/70 rounded-[.3rem] mt-5 ">
        <div>
          <MdLocationOn className="text-red-500 text-[1.8rem]" />
        </div>
        <p className=" text-[.9rem]">{profile?.address}</p>
      </div>
      <div className="mt-3">
        <div className="flex items-center gap-2">
          <AiOutlineHistory className="ease-out duration-300 text-[.9rem]" />
          <p className="text-[.8rem]"> Pickup Info</p>
        </div>

        <div className="flex bg-primary-black rounded-[.2rem] p-2 mt-2 gap-8">
          <div className="flex flex-col gap-1">
            <p className=" text-neutral-400 text-[.9rem]">Date</p>
            <p className="text-[.9rem]">
              {new Date(profile?.pickupDate ?? "").toLocaleDateString()}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-neutral-400 text-[.9rem]">Time</p>
            <p className="text-[.9rem]">{profile?.pickupTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderUser;
