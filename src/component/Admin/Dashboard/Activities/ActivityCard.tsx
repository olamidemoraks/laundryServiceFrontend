import React from "react";

type ActivityCardProps = {
  label: string;
  value: number;
  children: any;
  style?: string;
};

const ActivityCard: React.FC<ActivityCardProps> = ({
  label,
  value,
  children,
  style,
}) => {
  return (
    <div
      className={`${style} bg-gradient-to-bl via-mid-black from-mid-black/75 rounded-[.43rem] p-3 flex items-center gap-2 h-[5rem]`}
    >
      <div className="flex items-start gap-2 ">
        <div className="w-[3rem] h-[3rem] flex  justify-center">{children}</div>
        <div className="flex flex-col ">
          <p className=" leading-4 text-neutral-300 text-[.87rem]">{label}</p>
          <p className=" text-white text-[1.2rem] font-semibold">{value}</p>
        </div>
      </div>
    </div>
  );
};
export default ActivityCard;
