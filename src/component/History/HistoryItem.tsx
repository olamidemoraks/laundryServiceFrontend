import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { deliveryStatus } from "../../utils/date";
import HistoryItemDetails from "./HistoryItemDetails";

type HistoryItemProps = {
  delivery: Reservation;
  isSelected: string;
  setIsSelected: React.Dispatch<React.SetStateAction<any>>;
};

const HistoryItem: React.FC<HistoryItemProps> = ({
  delivery,
  isSelected,
  setIsSelected,
}) => {
  const handleSelection = (id: string) => {
    setIsSelected((prev: string) => {
      if (prev === id) {
        return "";
      } else {
        return id;
      }
    });
  };
  return (
    <>
      <div
        className={`${
          isSelected === delivery._id ? " bg-mid-black/50 " : "bg-primary-black"
        } rounded-[.4rem] w-full py-3 px-2 flex justify-between group cursor-pointer hover:bg-mid-black/50 `}
        onClick={() => handleSelection(delivery._id)}
      >
        <div className="flex gap-2 items-center">
          <div className="relative h-[1.7rem] w-[1.7rem] flex items-center justify-center bg-gradient-to-tl from-mid-black/80 group-hover:to-secondary-black/70 to-secondary-black font-semibold rounded-[.3rem] transition">
            {delivery?.totalItems}
          </div>
          <div>
            <p className=" text-[.7rem] capitalize font-semibold">
              Delivery{" "}
              <span className={`${deliveryStatus[delivery?.status]} `}>
                {" "}
                {delivery?.status === "delivered"
                  ? "successful"
                  : delivery?.status}
              </span>
            </p>
            {/* <p className=" text-[.65rem] text-neutral-400">
        {delivery.status === "pending"
          ? "awaiting approval!"
          : delivery.status === "ongoing"
          ? "Items received, please be patient."
          : ""}
      </p> */}
            <div className="flex items-center mt-1 ">
              <div
                className={`${
                  delivery.status === "pending"
                    ? " bg-gradient-to-tr from-dark-gold/60 to-light-gold"
                    : delivery.status === "ongoing"
                    ? "bg-gradient-to-tr to-purple-500 from-purple-600"
                    : delivery.status === "delivered"
                    ? "bg-gradient-to-tr to-blue-500 from-blue-600"
                    : delivery.status === "rejected"
                    ? "bg-gradient-to-tr to-red-500 from-red-600"
                    : "bg-mid-black"
                } h-4 w-4 rounded-full text-[.5rem] flex items-center justify-center`}
              >
                1
              </div>
              <div
                className={`${
                  delivery?.status === "ongoing"
                    ? "border-purple-500"
                    : delivery?.status === "delivered"
                    ? "border-blue-500"
                    : delivery.status === "rejected"
                    ? "border-red-500"
                    : "border-mid-black"
                } w-10 border-[2px] border-dashed  border-mid-black `}
              />
              <div
                className={`${
                  delivery?.status === "ongoing"
                    ? "bg-gradient-to-tr to-purple-500 from-purple-600"
                    : delivery?.status === "delivered"
                    ? "bg-gradient-to-tr to-blue-500 from-blue-600"
                    : delivery.status === "rejected"
                    ? "bg-gradient-to-tr to-red-500 from-red-600"
                    : "bg-mid-black"
                } h-4 w-4 rounded-full bg-mid-black text-[.5rem] flex items-center justify-center`}
              >
                2
              </div>
              <div
                className={`${
                  delivery.status === "delivered"
                    ? "border-blue-500"
                    : delivery.status === "rejected"
                    ? "border-red-500"
                    : "border-mid-black"
                } w-10  border-[2px] border-dashed  border-mid-black `}
              />
              <div
                className={`${
                  delivery.status === "delivered"
                    ? "bg-gradient-to-tr to-blue-500 from-blue-600"
                    : delivery.status === "rejected"
                    ? "bg-gradient-to-tr to-red-500 from-red-600"
                    : "bg-mid-black"
                }  h-4 w-4 rounded-full bg-mid-black text-[.5rem] flex items-center justify-center`}
              >
                3
              </div>
            </div>
          </div>
        </div>
        <p className="flex flex-col gap-2 items-end">
          <span className="text-neutral-400 text-[.65rem] group-hover:opacity-0 group-hover:-translate-y-2 ease-in duration-300">
            {"1day"}
          </span>
          {isSelected === delivery._id ? (
            <BsChevronUp className="   ease-out duration-300 text-[.6rem]" />
          ) : (
            <BsChevronDown className="   ease-out duration-300 text-[.6rem]" />
          )}
        </p>
      </div>

      {isSelected === delivery._id && (
        <HistoryItemDetails delivery={delivery} setIsSelected={setIsSelected} />
      )}
    </>
  );
};
export default HistoryItem;
