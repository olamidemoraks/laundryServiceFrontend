import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { toast } from "react-hot-toast";
import { BsXCircleFill, BsChevronDown, BsBox2Fill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { QueryClient, useMutation, useQuery } from "react-query";

import PageTemplate from "../component/Layout/PageTemplate";
import NavLink from "../component/Utils/NavLink";
import PickupDate from "../component/Schedule/PickupDate";
import PickupTime from "../component/Schedule/PickupTime";
import Button from "../component/Utils/Button";
import { createReservation } from "../app/api/reservationApi";
import Success from "../component/Schedule/SuccessModal";
import { useNavigate } from "react-router-dom";
import Location from "../component/Location/Location";

type ScheduleProps = {};

const Schedule: React.FC<ScheduleProps> = () => {
  const queryClient = new QueryClient();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const { items, cartTotal, totalItems, isEmpty, emptyCart } = useCart();
  const discount = (cartTotal * 10) / 100;
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");

  const mutation = useMutation({
    mutationFn: createReservation,
    onSuccess: (data) => {
      console.log(data);
      if (data?.isError) {
        toast(data?.message, {
          style: { background: "#1e1e1e", color: "#fff" },
          icon: <BsXCircleFill className="text-rose-400" />,
        });
      } else {
        queryClient.invalidateQueries("userReservation");
        emptyCart();
        setOpen(true);
      }
    },
  });
  //to check if user has address
  const { data: profile } = useQuery<Profile>({
    queryKey: "profile",
  });

  console.log(pickupDate, pickupTime);

  const checkoutHandler = () => {
    if (!pickupDate || !pickupTime) {
      toast("Please select pickup date and time", {
        style: { background: "#1e1e1e", color: "#fff" },
        icon: <BsXCircleFill className="text-rose-400" />,
      });
      return;
    }
    if (isEmpty) {
      toast("Your Basket Is Empty", {
        style: { background: "#1e1e1e", color: "#fff" },
        icon: <BsBox2Fill className="text-rose-400" />,
      });
      return;
    }
    if (!profile?.address) {
      toast("Please fiil in your collection address!", {
        style: { background: "#1e1e1e", color: "#fff" },
        icon: <MdLocationOn className="text-rose-400" />,
      });
      return;
    }

    const reservationObject = {
      items,
      totalAmount: cartTotal - discount,
      totalItems: totalItems,
      pickupDate,
      pickupTime,
    };

    mutation.mutate({ values: reservationObject });
  };

  const setModelClose = () => {
    setOpen(false);
    navigate("/home");
  };
  return (
    <PageTemplate>
      <div className="w-full ">
        <div
          className={`
          ${open ? "visible" : "hidden"}
          ${open ? "translate-y-0 " : "translate-y-full"}
          absolute bg-primary-black/40 inset-0 z-50 h-[100vh] flex justify-center items-center translate duration-100`}
        >
          <div
            className={`${
              open ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
            } translate duration-400 `}
          >
            <Success onClose={setModelClose} />
          </div>
        </div>

        <NavLink label="Schedule" to="/basket" />
        <Location />
        <PickupDate setPickupDate={setPickupDate} />
        <PickupTime setPickupTime={setPickupTime} />
        <br />
        <br />

        <div className=" min-w-[21rem] fixed bottom-0 z-40">
          <div className="black_glassmorphism flex h-[10rem] w-full rounded-t-[2rem] flex-col relative">
            <div className=" px-8 pt-4 pb-2 flex flex-col gap-1 ">
              <div className="flex justify-between">
                <p className="text-[.72rem] text-neutral-300">Item</p>
                <p className=" text-light-gold text-[.72rem]">
                  &#8358; {cartTotal.toLocaleString()}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-[.72rem] text-neutral-300">
                  Discount-<small>10%</small>
                </p>
                <p className="  text-[.72rem]">
                  &#8358; {discount.toLocaleString()}
                </p>
              </div>
            </div>
            <div className=" bg-mid-black py-4 px-6 rounded-t-[1.3rem] absolute bottom-0 w-full">
              <div className="flex justify-between px-2 pb-2">
                <p className="text-[.72rem] text-neutral-300 ">
                  Total Price ({totalItems} items)
                </p>
                <p className=" text-light-gold text-[.75rem] font-bold">
                  &#8358; {(cartTotal - discount).toLocaleString()}
                </p>
              </div>
              <Button
                name={mutation.isLoading ? "Checking out..." : "Checkout"}
                handleClick={checkoutHandler}
                rounded="rounded-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
export default Schedule;
