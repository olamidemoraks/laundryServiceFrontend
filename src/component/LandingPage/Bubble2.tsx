import React from "react";

type Bubble2Props = {};

const Bubble2: React.FC<Bubble2Props> = () => {
  return (
    <>
      <div className="absolute top-3 left-7 bubble1">
        <div className=" h-20 w-20 bg-mid-black/70 rounded-full relative z-50">
          <div className="h-5 w-5 bg-secondary-black/25 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-7 w-7 bg-secondary-black/25 rounded-full absolute top-[1.87rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute top-24 left-7 bubble1">
        <div className=" h-14 w-14 bg-mid-black/70 rounded-full relative">
          <div className="h-2 w-2 bg-secondary-black/25 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-4 w-4 bg-secondary-black/25 rounded-full absolute top-[1.87rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute top-10 left-24 bubble2">
        <div className=" h-12 w-12 bg-mid-black/70 rounded-full relative z-50">
          <div className="h-2 w-2 bg-secondary-black/25 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-3 w-3 bg-secondary-black/25 rounded-full absolute top-[.87rem] right-[.3rem]" />
        </div>
      </div>
    </>
  );
};
export default Bubble2;
