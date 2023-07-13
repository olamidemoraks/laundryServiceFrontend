import React from "react";
import ActivityCard from "./ActivityCard";
import {
  FcApproval,
  FcApprove,
  FcAreaChart,
  FcBarChart,
  FcBearish,
  FcBusinessman,
  FcComboChart,
  FcCustomerSupport,
  FcFeedback,
  FcHighPriority,
  FcLeave,
  FcLineChart,
  FcPieChart,
  FcPlanner,
  FcProcess,
  FcShipped,
  FcSynchronize,
} from "react-icons/fc";
import { BiUser } from "react-icons/bi";

type ActivitiesProps = {
  overview: Overview | undefined;
};

const Activities: React.FC<ActivitiesProps> = ({ overview }) => {
  return (
    <div className=" grid md:grid-cols-3 grid-cols-2 mt-4 gap-7">
      <ActivityCard
        label="Total Order"
        value={overview?.totalReservations ?? 0}
        style="to-blue-600/20"
      >
        <FcComboChart className="text-[2rem]" />
      </ActivityCard>
      <ActivityCard
        label="Of pending"
        value={overview?.pending ?? 0}
        style="to-orange-500/20"
      >
        <FcSynchronize className="text-[2rem]" />
      </ActivityCard>
      <ActivityCard
        label="Of ongoing"
        value={overview?.ongoing ?? 0}
        style="to-blue-600/20"
      >
        <FcPlanner className="text-[2rem]" />
      </ActivityCard>
      <ActivityCard
        label="Of success"
        value={overview?.delivered ?? 0}
        style="to-green-600/20"
      >
        <FcShipped className="text-[2rem]" />
      </ActivityCard>
      <ActivityCard
        label="Of rejected"
        value={overview?.rejected ?? 0}
        style="to-rose-600/20"
      >
        <FcLeave className="text-[2rem]" />
      </ActivityCard>
      <ActivityCard
        label="Total Customer"
        value={overview?.totalUser ?? 0}
        style="to-indigo-600/20"
      >
        <BiUser className="text-[2rem] text-indigo-700" />
      </ActivityCard>
    </div>
  );
};
export default Activities;
