import moment from "moment";
import React, { useState } from "react";
import {
  BsCheck2,
  BsX,
  BsThreeDotsVertical,
  BsClock,
  BsCalendar2Check,
  BsTrash,
  BsEye,
} from "react-icons/bs";

import { MdLocationOn } from "react-icons/md";
import { deliveryStatus } from "../../../utils/date";
import { useNavigate } from "react-router-dom";

type OrderCardProps = {
  order: Order;
  updateOrderStatus: (id: string, values: string) => void;
};

const OrderOption = ({ id }: { id: string }) => {
  const navigate = useNavigate();

  const gotoDetail = () => {
    navigate(`${id}`);
  };
  return (
    <div className=" bg-secondary-black w-[6rem] flex flex-col rounded-[.3rem] items-center gap-0 shadow-md shadow-primary-black">
      <p
        className="flex items-center gap-1 flex-row-reverse justify-between w-full px-2 py-1 hover:bg-mid-black transition cursor-pointer text-[.9rem]"
        onClick={gotoDetail}
      >
        <BsEye /> Details{" "}
      </p>
      <div className=" bg-neutral-200/40 w-full h-[1px]" />
      <p className="flex  items-center gap-1 flex-row-reverse justify-between w-full px-2 py-1 hover:bg-mid-black transition cursor-pointer text-[.9rem]">
        <BsTrash /> Remove
      </p>
    </div>
  );
};

const OrderCard: React.FC<OrderCardProps> = ({ order, updateOrderStatus }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative  min-w-[16rem] w-full min-h-[10rem] bg-gradient-to-br from-mid-black/70 via-secondary-black/40 hover:via-mid-black hover:to-secondary-black/30 to-mid-black/80 rounded-[.7rem] px-3 p-2 duration-100 ease-linear shadow-lg ">
      <div className=" bg-primary-black absolute w-full h-full top-0 -z-10"></div>
      <div className=" text-[1.5rem] font-semibold text-neutral-300 pb-2">
        <span className=" text-neutral-400"># </span>
        {order.receipt}
      </div>
      <div className="flex items-center gap-4">
        <div className="bg-gradient-to-tl from-mid-black/80 group-hover:to-secondary-black/70 to-secondary-black w-[3rem] h-[3rem] rounded-[.4rem] flex items-center justify-center text-[1.5rem] font-bold border border-neutral-700">
          {order.totalItems}
        </div>
        <div className="flex flex-col gap-1 ">
          <div className="flex  items-center gap-2 text-[.85rem] ">
            <BsCalendar2Check className=" text-light-gold text-[.9rem]" />
            <p className=" tracking-wider">
              {moment(order.pickupDate).format("DD MMM YYYY")}
            </p>
          </div>
          <div className="flex  items-center gap-2 text-[.85rem]">
            <BsClock className=" text-light-gold text-[.9rem] " />
            <p className=" tracking-wider">{order.pickupTime}</p>
          </div>
        </div>
      </div>
      {/* //Address */}
      <div className="flex py-1 px-2 items-center gap-1   bg-secondary-black/70 rounded-[.3rem] my-2 ">
        <div>
          <MdLocationOn className="text-red-500 " />
        </div>
        <p className=" text-[.9rem] truncate ">{order.address}</p>
      </div>
      <div
        className="w-full h-full absolute bg-transparent top-0 "
        onClick={() => setOpen(false)}
      ></div>
      <div
        className="absolute top-3 right-2 cursor-pointer hover:bg-neutral-400/25 p-[1px] rounded-full transition z-40"
        onClick={() => setOpen((prev) => !prev)}
      >
        <BsThreeDotsVertical />
      </div>
      {open && (
        <div className="absolute top-9 right-1">
          <OrderOption id={order._id} />
        </div>
      )}
      <div className="flex items-center justify-between ">
        <div className=" flex flex-row-reverse gap-2 z-50 items-center">
          {order.status === "pending" && (
            <>
              <button
                onClick={() => updateOrderStatus(order._id, "ongoing")}
                className="w-[1.8rem] h-[1.8rem] border border-green-700 bg-green-900/25 hover:bg-green-900/60 transition flex items-center justify-center rounded-[.3rem] relative group  ease-linear "
              >
                <BsCheck2 />
                <p className="absolute -bottom-8 border border-secondary-black bg-mid-black px-2 rounded-sm hidden group-hover:block text-[.85em]  duration-100">
                  Accept
                </p>
              </button>
              <button
                onClick={() => updateOrderStatus(order._id, "rejected")}
                className="w-[1.8rem] h-[1.8rem] border border-pink-700 bg-pink-900/25 hover:bg-pink-900/60 transition flex items-center justify-center rounded-[.3rem] relative group  ease-linear "
              >
                <BsX />
                <p className="absolute -bottom-8 border border-secondary-black bg-mid-black px-2 rounded-sm hidden group-hover:block text-[.85rem] duration-100">
                  Reject
                </p>
              </button>
            </>
          )}
          <p
            className={`${
              deliveryStatus[order.status]
            } text-[.7rem] bg-secondary-black px-1 rounded-[.4rem] h-fit py-[.1rem] capitalize`}
          >
            {order.status}
          </p>
        </div>
        <div className="">
          <p className=" text-neutral-400 font-semibold text-[.8rem]">
            {moment(order.createdAt).fromNow()}
          </p>
        </div>
      </div>
    </div>
  );
};
export default OrderCard;
