import React from "react";

type EmptyProps = {};

const Empty: React.FC<EmptyProps> = () => {
  return (
    <div className="flex items-center justify-center p-3 w-full">
      <div className="h-[9rem] w-[12rem] object-fill ">
        <img src="./update.png" alt="" className=" w-full h-full " />
      </div>
    </div>
  );
};
export default Empty;
