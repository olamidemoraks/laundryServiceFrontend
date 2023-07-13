import React from "react";
import { GoCheck } from "react-icons/go";
type SuccessProps = {
  onClose: () => void;
};

const Success: React.FC<SuccessProps> = ({ onClose }) => {
  return (
    <div className="h-[16rem] w-[14rem] bg-mid-black rounded-lg p-4 relative flex flex-col items-center">
      <div className="flex items-center justify-center h-[2.4rem] w-[2.4rem] bg-green-400/20 rounded-full text-[1.3rem]">
        <GoCheck />
      </div>
      <div className="flex flex-col  mt-3">
        <p className=" text-center text-[1rem] font-semibold">Successful</p>
        <p className="text-[.7rem] text-neutral-400 mt-2 text-center">
          Thanks for using our laundry service. We will soon process your
          reservation.
        </p>
      </div>
      <div className="w-full">
        <button
          onClick={onClose}
          type="button"
          className="rounded-[2rem] py-1 bg-light-gold hover:bg-dark-gold font-semibold text-sm w-full text-black mt-[2rem]"
        >
          OK
        </button>
      </div>
    </div>
  );
};
export default Success;
