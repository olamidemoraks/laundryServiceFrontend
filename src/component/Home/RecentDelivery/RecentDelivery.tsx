import React, { ReactNode, useMemo } from "react";
import { AiOutlineHistory } from "react-icons/ai";
import { Link } from "react-router-dom";

import OngoingDeliveryItem from "./RecentDeliveryItem";
import Empty from "../../Utils/Empty";
import { useQuery, useQueryClient } from "react-query";
import { getUserReservation } from "../../../app/api/reservationApi";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../Utils/Loader";

type OngoingDeliveryProps = {};

const OngoingDelivery: React.FC<OngoingDeliveryProps> = () => {
  const { profile } = useAuth();
  // console.log("profile", profile);
  const emptyResponse: any = [];
  const queryClient = useQueryClient();
  // const  = reservationApi()
  const { data: reservations, isLoading } = useQuery<Reservation[]>({
    queryKey: "userReservation",
    queryFn: async () => {
      return await getUserReservation(profile.token);
    },
    onSettled: (data: any) => {
      if (data?.isError === true) {
        queryClient.setQueriesData("userReservation", emptyResponse);
      }
    },
    enabled: !!profile.token,
  });

  const data = useMemo(() => {
    return reservations?.filter(
      (item) =>
        item.status.includes("pending") || item.status.includes("ongoing")
    );
  }, [reservations, isLoading]);

  let content: ReactNode;
  if (isLoading && reservations) {
    content = (
      <div className=" h-[30vh] w-full flex items-center justify-center">
        <Loader message="Loading" />
      </div>
    );
  }
  if (!isLoading) {
    content = (
      <div className="flex flex-col gap-2 mt-3">
        {data?.map((item) => (
          <OngoingDeliveryItem key={item._id} delivery={item} />
        ))}
      </div>
    );
  }
  if (!isLoading && reservations?.length === 0) {
    content = <Empty />;
  }

  return (
    <div className=" bg-mid-black p-3 rounded-[.5rem] w-full mt-4 mb-10">
      <div className="flex w-full justify-between">
        <p className=" text-[.6rem] flex items-center gap-2">
          <span className=" text-[1rem]">
            <AiOutlineHistory />
          </span>
          Ongoing Delivery
        </p>
        <Link to="/history" className="text-[.6rem] hover:underline">
          See all
        </Link>
      </div>

      {content}
    </div>
  );
};
export default OngoingDelivery;
