import React from "react";
import { AiFillMessage } from "react-icons/ai";
import { BsTelephoneFill } from "react-icons/bs";

type UserCardProps = {
  users: Profile;
};

const UserCard: React.FC<UserCardProps> = ({ users }) => {
  return (
    <div className=" w-[12rem] h-[12rem] bg-gradient-to-br from-mid-black/70 via-secondary-black/40 hover:via-mid-black hover:to-secondary-black/30 to-mid-black/80 rounded-[.4rem] group flex flex-col items-center py-3 px-2 cursor-pointer">
      <div className="left-0 flex items-center justify-center h-[3.2rem] w-[3.17rem] rounded-full bg-gradient-to-tr to-primary-black from-mid-black group-hover:from-primary-black group-hover:to-mid-black  p-[1px]  border-dashed border-light-gold border-l-[2px] duration-100 ease-in group-hover:border-r-[2px] group-hover:border-l-0 cursor-pointer z-50">
        <div className=" z-50">
          <p className="text-[1.5rem] font-semibold uppercase group-hover:-skew-x-4 group-hover:-skew-y-1 skew-x-1 skew-y-4 transition">
            {users?.name?.split("")[0]}
          </p>
        </div>
      </div>
      <div className=" w-[11rem] text-center flex flex-col gap-2">
        <div className=" capitalize text-[.9rem] font-semibold tracking-wide mt-2 truncate">
          {users?.name}
        </div>
        <div className="flex gap-1 items-center truncate justify-center">
          <AiFillMessage className=" text-[1rem] text-light-gold" />{" "}
          <p className="text-[.8rem] truncate text-neutral-300">
            {users?.email}
          </p>
        </div>
        <div className="flex gap-1 items-center truncate justify-center">
          <BsTelephoneFill className=" text-[.84rem] text-light-gold" />{" "}
          <p className="text-[.8rem] truncate text-neutral-300">
            {users?.phonenumber ? users.phonenumber : "No Number"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
