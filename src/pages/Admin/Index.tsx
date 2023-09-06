import React from "react";
import Activities from "../../component/Admin/Dashboard/Activities/Activities";
import TodayPickup from "../../component/Admin/Dashboard/TodayPickup/TodayPickup";
import { useQuery } from "react-query";
import { getOverview } from "../../app/api/overview";
import Loader from "../../component/Utils/Loader";

type IndexProps = {};

const Index: React.FC<IndexProps> = () => {
  const { data: overview, isLoading } = useQuery<Overview>({
    queryKey: "Overview",
    queryFn: getOverview,
  });

  if (isLoading || !overview) {
    return <Loader />;
  }
  return (
    <div className="md:px-[4rem] px-[1rem] mt-4 w-full min-h-[70vh] ">
      <div className="flex flex-col gap-1 pb-4">
        <p className="text-[1.4rem] font-semibold ">Dashboard</p>
        <p className=" text-neutral-400 text-sm">
          Overview of program performance and recent activities
        </p>
      </div>
      <div className="w-full">
        <Activities overview={overview} />
      </div>

      <div className="my-6 flex flex-col gap-3">
        <p className=" text-sm text-neutral-300">Todays Pickup</p>
        <TodayPickup delivery={overview?.todayPickup} />
      </div>
    </div>
  );
};
export default Index;
