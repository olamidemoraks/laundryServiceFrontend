import React from "react";

type Bubble3Props = {};

const Bubble3: React.FC<Bubble3Props> = () => {
  return (
    <>
      <div className="absolute top-4 right-2 bubble2 ">
        <div className=" h-20 w-20 bg-blue-900/20 rounded-full relative ">
          <div className="h-5 w-5 bg-blue-200/10 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-7 w-7 bg-blue-200/10 rounded-full absolute top-[1.87rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute top-24 right-0 bubble2">
        <div className=" h-10 w-10 bg-blue-900/20 rounded-full relative ">
          <div className="h-2 w-2 bg-blue-200/10 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-3 w-3 bg-blue-200/10 rounded-full absolute top-[1.1rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute top-6 -right-8 bubble3 ">
        <div className=" h-12 w-12 bg-blue-900/20 rounded-full relative ">
          <div className="h-2 w-2 bg-blue-200/10 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-3 w-3 bg-blue-200/10 rounded-full absolute top-[1.1rem] right-[.3rem]" />
        </div>
      </div>
    </>
  );
};
export default Bubble3;
