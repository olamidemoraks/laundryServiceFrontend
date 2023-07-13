import React, { useEffect, useState } from "react";

import { useMutation, useQuery } from "react-query";
import {
  allReservation,
  updateReservationStatus,
} from "../../app/api/reservationApi";
import OrderCard from "../../component/Admin/Order/OrderCard";
import Loader from "../../component/Utils/Loader";
import FilteringOrder from "../../component/Admin/Order/FilteringOrder";
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

type OrdersProps = {};

const Orders: React.FC<OrdersProps> = () => {
  const router = useLocation();
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const { data, isLoading, refetch } = useQuery({
    queryKey: "allReservation",
    queryFn: async () => {
      return allReservation(router.search);
    },
  });

  //to get the present queries
  let params: any = Object.fromEntries(searchParams);

  const [pageNumber, setPageNumber] = useState(1);
  let order: Order[] = data?.reservationWithUser;
  let numOfPage = data?.numOfPage;
  const mutation = useMutation({
    mutationFn: updateReservationStatus,
  });

  const nextPagination = () => {
    if (numOfPage === pageNumber) {
      return;
    }
    setPageNumber((prev) => prev + 1);
    params["page"] = pageNumber + 1;
    navigate({ search: `?${createSearchParams(params)}` });
  };
  const previousPagination = () => {
    if (pageNumber == 1) {
      return;
    }
    setPageNumber((prev) => prev - 1);
    params["page"] = pageNumber - 1;
    navigate({ search: `?${createSearchParams(params)}` });
  };

  useEffect(() => {
    refetch();
  }, [mutation.isSuccess, searchParams]);

  if (isLoading) {
    return (
      <div className=" h-[70vh] w-full flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  const updateOrderStatus = (id: string, value: string) => {
    mutation.mutate({ id, values: { status: value } });
  };

  return (
    <div className="md:px-[4rem] px-[1rem] mt-4 w-full min-h-[70vh] ">
      <div className="flex justify-between items-start  gap-3 mb-7">
        <div className=" text-[1.4rem] font-semibold">
          Bookings <span className=" text-neutral-400"> {order?.length}</span>
        </div>
        <FilteringOrder />
      </div>

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[2rem] gap-y-7 mt-6">
        {order?.map((item: any) => (
          <OrderCard order={item} updateOrderStatus={updateOrderStatus} />
        ))}
      </div>

      <div className="flex gap-3 mt-5 items-center ">
        <button
          className="px-2 py-1 bg-mid-black rounded-[.6rem] disabled:text-neutral-500 disabled:bg-transparent"
          onClick={previousPagination}
          disabled={pageNumber === 1 ? true : false}
        >
          Previous
        </button>
        {pageNumber} / {numOfPage}
        <button
          className="px-2 py-1 bg-mid-black rounded-[.6rem]  disabled:text-neutral-500 disabled:bg-transparent"
          onClick={nextPagination}
          disabled={pageNumber === numOfPage ? true : false}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default Orders;
