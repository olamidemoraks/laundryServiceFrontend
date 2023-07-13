import React, { useEffect } from "react";
import { AiFillEdit } from "react-icons/ai";
import { categoryMap } from "../../LaundaryItem/ItemListing";
import { deliveryStatus } from "../../../utils/date";
import { useMutation } from "react-query";
import { updateReservationStatus } from "../../../app/api/reservationApi";
// import ItemCard from "../../History/ItemCard";

type OrderDetailProps = {
  delivery?: Order;
  onRefetch: any;
};

type ItemCardProps = {
  item: ReservationItem;
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="flex justify-between">
      <div className=" flex gap-3">
        <div className="md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem] flex items-center justify-center  rounded-[.9rem] bg-mid-black">
          <img
            src={`./../../../${item?.image_url}`}
            alt="items"
            className=" w-2/3"
          />
        </div>
        <div>
          <p className=" text-[.9rem]">
            {item?.name}{" "}
            <span className=" text-neutral-400">
              {categoryMap[item?.category]}
            </span>
          </p>
          <div className="flex gap-2 items-end">
            <p className="text-[.75rem] text-neutral-200">
              &#8358; {item?.price?.toLocaleString()} / item
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className=" text-[.75rem] text-neutral-200">{item?.quantity} item</p>
        <p className="text-[.8rem] text-light-gold">
          &#8358; {item?.totalPrice?.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

const OrderDetail: React.FC<OrderDetailProps> = ({ delivery, onRefetch }) => {
  const mutation = useMutation({
    mutationFn: updateReservationStatus,
  });

  useEffect(() => {
    onRefetch();
  }, [mutation.isSuccess]);

  const updateOrderStatus = (id: string, value: string) => {
    mutation.mutate({ id, values: { status: value } });
  };
  return (
    <div className="bg-mid-black/50 rounded-md mt-1 py-3 px-3 flex-1">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <AiFillEdit className="ease-out duration-300 text-[.9rem]" />
          <p className="text-[.8rem]">Update Status</p>
        </div>

        <div className="flex flex-col bg-primary-black rounded-[.2rem] p-2 mb-2 gap-2">
          <div className="flex items-center  gap-1">
            <p className=" text-neutral-400 text-[.9rem]">Current Status:</p>
            <p
              className={`${
                deliveryStatus[delivery?.status ?? ""]
              } capitalize leading-4`}
            >
              {delivery?.status}
            </p>
          </div>
          <div>
            <p className=" text-neutral-400 text-[.9rem]">To:</p>
            {delivery?.status === "pending" ||
            delivery?.status === "rejected" ? (
              <div className="flex gap-2 mt-1">
                <button
                  onClick={() => updateOrderStatus(delivery?._id, "ongoing")}
                  className="px-2 p-1 text-[.7rem] uppercase border border-green-600 text-green-500 hover:bg-green-600 hover:text-white hover:border-none transition  rounded-[.3rem] "
                >
                  Accept Booking
                </button>
                <button
                  onClick={() => updateOrderStatus(delivery?._id, "rejected")}
                  className="px-2 p-1 text-[.7rem] uppercase border border-red-600 text-red-500 hover:bg-red-600 hover:text-white hover:border-none transition rounded-[.3rem] "
                >
                  Reject Booking
                </button>
              </div>
            ) : (
              <button
                onClick={() => updateOrderStatus(delivery!._id, "delivered")}
                className="px-2 p-1 text-[.7rem] uppercase border border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white hover:border-none transition rounded-[.3rem] "
              >
                Completed
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-[1rem] font-bold text-neutral-400">
          # <span className=" text-neutral-100">{delivery?.receipt}</span>
        </p>
        {/* <div>
          Status:{" "}
          <span
            className={`${deliveryStatus[delivery?.status ?? ""]} capitalize`}
          >
            {delivery?.status}
          </span>
        </div> */}
      </div>
      <div className="flex flex-col gap-2 mt-2">
        {delivery?.items.map((item) => (
          <ItemCard item={item} key={item._id} />
        ))}
      </div>
      <p className="text-center text-light-gold font-semibold mt-1">
        <span className=" text-light-gold/70">
          Total ({delivery?.totalItems}):
        </span>{" "}
        &#8358; {delivery?.totalAmount.toLocaleString()}
      </p>
    </div>
  );
};
export default OrderDetail;
