import React, { useState } from "react";
import PageTemplate from "../component/Layout/PageTemplate";
import { useQuery } from "react-query";
import { getUserReservation } from "../app/api/reservationApi";
import NavLink from "../component/Utils/NavLink";
import HistoryItem from "../component/History/HistoryItem";
import Empty from "../component/Utils/Empty";
import { useLocation } from "react-router-dom";
import Location from "../component/Location/Location";
import useAuth from "../hooks/useAuth";
import Loader from "../component/Utils/Loader";

type HistoryProps = {};

const History: React.FC<HistoryProps> = () => {
  const location = useLocation();
  const { profile } = useAuth();
  const id = location.state?.id;
  const { data: reservations, isLoading } = useQuery<Reservation[]>({
    queryKey: "userReservation",
    queryFn: async () => {
      return await getUserReservation(profile.token);
    },
    enabled: !!profile.token,
  });
  const [isSelected, setIsSelected] = useState(id ?? "");
  console.log(isSelected);

  if (isLoading) {
    return (
      <PageTemplate>
        <div className=" h-[30vh] w-full flex items-center justify-center">
          <Loader message="Loading" />
        </div>
      </PageTemplate>
    );
  }
  return (
    <PageTemplate>
      <div className="w-full">
        <NavLink label="History" to="/home" />
        <Location />
        <div className="flex flex-col gap-3 mt-4">
          {reservations?.length === 0 ? (
            <Empty />
          ) : (
            reservations?.map((item) => (
              <HistoryItem
                key={item._id}
                delivery={item}
                isSelected={isSelected}
                setIsSelected={setIsSelected}
              />
            ))
          )}
        </div>
      </div>
    </PageTemplate>
  );
};
export default History;
