import React, { useState } from "react";
import { timeSetting } from "../../utils/date";

type PickupTimeProps = {
  setPickupTime: (value: string) => void;
};

const PickupTime: React.FC<PickupTimeProps> = ({ setPickupTime }) => {
  const [active, setActive] = useState<number>();

  return (
    <div className="w-full mt-4">
      <p className="font-semibold text-neutral-400 mb-3">Pickup Time</p>

      <div className=" grid grid-cols-3 gap-3 items-center w-full">
        {timeSetting.map((time, idx) => (
          <div
            onClick={() => {
              setActive(idx);
              setPickupTime(time.name);
            }}
            className={`${
              active === idx
                ? "bg-light-gold  text-primary-black"
                : "bg-mid-black"
            }  hover:bg-dark-gold/10 text-center text-neutral-300  cursor-pointer w-full  rounded-md px-2 py-[.35rem] ease-linear duration-100  `}
            key={idx}
          >
            <div className="text-sm ">{time.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PickupTime;
