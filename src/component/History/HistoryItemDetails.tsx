import React, { useMemo, useState } from "react";
import ItemCard from "./ItemCard";
import {
  BsCheckCircle,
  BsChevronDown,
  BsChevronUp,
  BsInfoCircleFill,
} from "react-icons/bs";
import { AiFillDelete, AiOutlineHistory } from "react-icons/ai";
import { useMutation, useQueryClient } from "react-query";
import { deleteUserReservation } from "../../app/api/reservationApi";
import { toast } from "react-hot-toast";
import { categoryMap } from "../LaundaryItem/ItemListing";

type HistoryItemDetailsProps = {
  delivery: Reservation;
  setIsSelected: React.Dispatch<React.SetStateAction<any>>;
};

const HistoryItemDetails: React.FC<HistoryItemDetailsProps> = ({
  delivery,
}) => {
  const [cartType, setCartType] = useState([]);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteUserReservation,
    onSuccess: (data) => {
      console.log(data);
      toast("Deleted successfully", {
        style: { background: "#1e1e1e", color: "#fff" },
        icon: <BsCheckCircle className="text-green-400" />,
      });
      queryClient.refetchQueries("userReservation");
    },
  });

  const category = useMemo(() => {
    const allCategory = delivery.items.map((item) => item.category);
    const category = allCategory.filter(
      (item, idx) => allCategory.indexOf(item) === idx
    );

    return category;
  }, [delivery]);

  const toggleCategory = (category: string) => {
    let newCartType = [];
    if (cartType.includes(category)) {
      newCartType = cartType.filter((value) => value !== category);
      setCartType(newCartType);
    } else {
      setCartType((prev) => [...prev, category]);
    }
  };

  const handleDelete = (id: string) => {
    console.log(id);
    mutation.mutate({ id });
  };
  return (
    <div className="bg-mid-black/50 rounded-md mt-1 py-3 px-3">
      <div className="flex justify-between">
        <p className="text-[1rem] font-bold text-neutral-400">
          # <span className=" text-neutral-100">{delivery?.receipt}</span>
        </p>
        <div
          className="h-[1.2rem] w-[1.2rem] rounded-sm flex items-center justify-center bg-gradient-to-tr from-rose-600 to-rose-400 cursor-pointer group"
          onClick={() => handleDelete(delivery?._id)}
        >
          <AiFillDelete className=" text-neutral-300 scale-90 group-hover:scale-100 transition" />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-6 mb-[2rem] ">
        {category.map((value) => (
          <>
            <div
              key={value}
              className=" flex flex-col w-full bg-mid-black rounded-[.4rem] px-4 py-3 cursor-pointer transition hover:bg-dark-gold/10"
            >
              <div
                className=" flex justify-between w-full items-center"
                onClick={() => toggleCategory(value)}
              >
                <div className="flex gap-2 items-center">
                  <div className="relative h-[1.7rem] w-[1.7rem] flex items-center justify-center bg-gradient-to-tl from-mid-black/80 group-hover:to-secondary-black/70 to-secondary-black font-semibold rounded-[.3rem] transition">
                    {delivery?.items
                      ?.filter((item) => item.category === value)
                      .map((item) => item.quantity)
                      .reduce((total: any, value) => (total += value), 0)}
                  </div>
                  <p className="text-[.9rem]"> {categoryMap[value]}</p>
                </div>
                {cartType.includes(value) ? (
                  <BsChevronUp className="text-[.7rem]" />
                ) : (
                  <BsChevronDown className="text-[.7rem]" />
                )}
              </div>

              {cartType.includes(value) && <div className="mt-5" />}
              <div className="flex flex-col gap-4 ">
                {
                  cartType.includes(value) &&
                    delivery?.items
                      ?.filter((item) => item.category === value)
                      .map((item) => <ItemCard key={item._id} item={item} />)
                  // : null
                }
              </div>
            </div>
          </>
        ))}
      </div>
      {/* <div className="flex flex-col gap-2 mt-2">
        {delivery.items.map((item) => (
          <ItemCard item={item} key={item._id} />
        ))}
      </div> */}
      <p className="text-center text-light-gold font-semibold mt-1">
        <span className=" text-light-gold/70">Total:</span> &#8358;{" "}
        {delivery.totalAmount.toLocaleString()}
      </p>
      <div>
        <div className="flex items-center gap-2">
          <AiOutlineHistory className="ease-out duration-300 text-[.9rem]" />
          <p className="text-[.8rem]"> Pickup Info</p>
        </div>

        <div className="flex bg-primary-black rounded-[.2rem] p-2 mt-2 gap-8">
          <div className="flex flex-col gap-1">
            <p className=" text-neutral-400 text-[.9rem]">Date</p>
            <p className="text-[.9rem]">
              {new Date(delivery?.pickupDate).toLocaleDateString()}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-neutral-400 text-[.9rem]">Time</p>
            <p className="text-[.9rem]">{delivery.pickupTime}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HistoryItemDetails;
