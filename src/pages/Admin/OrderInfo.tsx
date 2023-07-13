import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getResevation } from "../../app/api/reservationApi";
import OrderDetail from "../../component/Admin/Order/OrderDetail";
import OrderUser from "../../component/Admin/Order/OrderUser";
import Loader from "../../component/Utils/Loader";

type OrderInfoProps = {};

const OrderInfo: React.FC<OrderInfoProps> = () => {
  const params = useParams;
  const { id } = params();
  console.log(id);
  const { data, isLoading, refetch } = useQuery<Order>({
    queryFn: async () => {
      return getResevation({ id: id as string });
    },
    enabled: !!id,
    refetchOnWindowFocus: true,
  });

  useEffect(() => {
    refetch();
  }, [id]);
  if (isLoading) {
    return (
      <div className=" h-[70vh] w-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  return (
    <div className="px-[4rem] mt-4 w-full ">
      <div className="flex gap-4 w-full md:flex-row flex-col">
        <OrderDetail delivery={data} onRefetch={refetch} />
        <div className="flex-[.5]">
          <OrderUser profile={data} />
        </div>
      </div>
    </div>
  );
};
export default OrderInfo;
