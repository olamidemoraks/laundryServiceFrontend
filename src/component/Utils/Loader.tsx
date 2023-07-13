import React from "react";
import { FcFlashOn } from "react-icons/fc";

type LoaderProps = {
  message?: string;
};

const Loader: React.FC<LoaderProps> = ({ message = "please wait..." }) => {
  return (
    <div className="flex items-center flex-col justify-center gap-7">
      <div className=" animate-ping left-0 flex items-center justify-center h-[2.3rem] w-[2.3rem] rounded-full bg-gradient-to-tr to-primary-black from-mid-black group-hover:from-primary-black group-hover:to-mid-black  p-[1px]  border-dashed border-light-gold border-l-[2px] duration-100 ease-in group-hover:border-r-[2px] group-hover:border-l-0 cursor-pointer z-50">
        <div className=" z-50">
          <p className="text-[1.3rem] font-semibold uppercase group-hover:-skew-x-4 group-hover:-skew-y-1 skew-x-1 skew-y-4 transition">
            <FcFlashOn />
          </p>
        </div>
      </div>
      <p className="md:text-[1.4rem] italic text-light-gold ">{message}</p>
    </div>
  );
};
export default Loader;
