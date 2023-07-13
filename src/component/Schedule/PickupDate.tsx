import React, { useState } from "react";
import moment from "moment";
import { dateSetting } from "../../utils/date";

type PickupDateProps = {
  setPickupDate: (value: string) => void;
};

const PickupDate: React.FC<PickupDateProps> = ({ setPickupDate }) => {
  const [active, setActive] = useState<number>();
  return (
    <div className="flex flex-col w-full mt-3">
      <div className="flex justify-between">
        <p className="font-semibold text-neutral-400">Pickup Date</p>
        <p className="text-light-gold font-semibold">
          {moment().format("MMMM")}
        </p>
      </div>
      <div className="flex justify-center overflow-x-auto w-[100%] gap-3 mt-3 scrollbar-thin scrollbar-track-indigo-200/50 scrollbar-thumb-indigo-400 scroll-smooth ">
        {dateSetting.map(({ id, main, day, date }) => (
          <button
            onClick={() => {
              setActive(id);
              setPickupDate(main);
            }}
            className={`${
              active === id
                ? "bg-light-gold  text-primary-black"
                : "bg-mid-black"
            } ${
              moment() <= moment().day(5) && moment() >= moment(main)
                ? "hidden"
                : ""
            }
               p-1  hover:bg-dark-gold/10  text-neutral-300  cursor-pointer rounded-[.9rem] w-[2.7rem] h-[3.4rem]  transition text-center`}
            key={id}
          >
            <p className=" text-[.7rem] font-semibold">{day}</p>
            <p className="text-[1rem] font-bold">{date.split("th")}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
export default PickupDate;
