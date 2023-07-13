import React from "react";

type Bubble1Props = {};

const Bubble1: React.FC<Bubble1Props> = () => {
  return (
    <>
      <div className="absolute top-4 right-2 bubble3 ">
        <div className=" h-20 w-20 bg-purple-900/20 rounded-full relative z-50">
          <div className="h-5 w-5 bg-purple-200/10 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-7 w-7 bg-purple-200/10 rounded-full absolute top-[1.87rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute top-24 right-0 bubble1 ">
        <div className=" h-14 w-14 bg-purple-900/20 rounded-full relative z-50">
          <div className="h-2 w-2 bg-purple-200/10 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-4 w-4 bg-purple-200/10 rounded-full absolute top-[.89rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute top-6 -right-8 bubble1">
        <div className=" h-10 w-10 bg-purple-900/20 rounded-full relative z-50">
          <div className="h-2 w-2 bg-purple-200/10 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-3 w-3 bg-purple-200/10 rounded-full absolute top-[.7rem] right-[.3rem]" />
        </div>
      </div>
    </>
  );
};
export default Bubble1;
