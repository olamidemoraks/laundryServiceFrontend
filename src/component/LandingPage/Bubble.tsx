import React from "react";

type BubbleProps = {};

const Bubble: React.FC<BubbleProps> = () => {
  const pop = () => {
    let element1 = document.getElementById("p1");
    element1.innerText = "olamidemoraks";
  };
  return (
    <>
      <div
        className="absolute top-3 left-7 bubble1 cursor-pointer"
        onClick={pop}
      >
        <div
          id="p1"
          className=" h-20 w-20 bg-mid-black/70 rounded-full relative z-50"
        >
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
      <div className="absolute top-4 right-2 bubble3 z-50">
        <div className=" h-20 w-20 bg-purple-900/20 rounded-full relative z-50">
          <div className="h-5 w-5 bg-purple-200/10 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-7 w-7 bg-purple-200/10 rounded-full absolute top-[1.87rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute top-24 right-0 bubble1 z-40">
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

      <div className="absolute left-20 bottom-3 bubble2">
        <div className=" h-20 w-20 bg-mid-black/70 rounded-full relative z-50 ">
          <div className="h-5 w-5 bg-secondary-black/25 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-7 w-7 bg-secondary-black/25 rounded-full absolute top-[1.87rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute left-20 -bottom-8 bubble3">
        <div className=" h-12 w-12 bg-mid-black/70 rounded-full relative z-50">
          <div className="h-3 w-3 bg-secondary-black/25 rounded-full absolute top-[.43rem] right-[1.2rem]" />
          <div className="h-4 w-4 bg-secondary-black/25 rounded-full absolute top-[.73rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute left-40 bottom-1 bubble1">
        <div className=" h-14 w-14 bg-mid-black/70 rounded-full relative z-50">
          <div className="h-2 w-2 bg-secondary-black/25 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-5 w-5 bg-secondary-black/25 rounded-full absolute top-[1.2rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute right-[39%] bottom-[38%] bubble2 z-50">
        <div className=" h-20 w-20 bg-blue-900/20 rounded-full relative z-50">
          <div className="h-5 w-5 bg-blue-200/10 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-7 w-7 bg-blue-200/10 rounded-full absolute top-[1.87rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute right-[35%] bottom-[32%] bubble2">
        <div className=" h-10 w-10 bg-blue-900/20 rounded-full relative z-50">
          <div className="h-2 w-2 bg-blue-200/10 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-3 w-3 bg-blue-200/10 rounded-full absolute top-[1.1rem] right-[.3rem]" />
        </div>
      </div>
      <div className="absolute right-[50%] bottom-[24%] bubble3 z-50">
        <div className=" h-12 w-12 bg-blue-900/20 rounded-full relative z-50">
          <div className="h-2 w-2 bg-blue-200/10 rounded-full absolute top-[.5rem] right-[1rem]" />
          <div className="h-3 w-3 bg-blue-200/10 rounded-full absolute top-[1.1rem] right-[.3rem]" />
        </div>
      </div>
    </>
  );
};
export default Bubble;
