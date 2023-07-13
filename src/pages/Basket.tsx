import React, { useMemo, useState } from "react";
import { BsBagXFill, BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

import BasketItems from "../component/BasketItem/BasketItem";
import { categoryMap } from "../component/LaundaryItem/ItemListing";
import PageTemplate from "../component/Layout/PageTemplate";
import Location from "../component/Location/Location";
import Button from "../component/Utils/Button";
import Empty from "../component/Utils/Empty";
import NavLink from "../component/Utils/NavLink";

type BasketProps = {};

const Basket: React.FC<BasketProps> = () => {
  const navigate = useNavigate();
  const [cartType, setCartType] = useState("");
  const { items, cartTotal, totalItems, emptyCart, isEmpty } = useCart();

  const category = useMemo(() => {
    const allCategory = items.map((item) => item.category);
    //get the unique category from the array
    const category = allCategory.filter(
      (item, idx) => allCategory.indexOf(item) === idx
    );

    return category;
  }, [items]);

  console.log("category", category);
  return (
    <PageTemplate>
      <div className="w-full">
        <div className="flex justify-between w-full">
          <NavLink to="/home" label="My Basket" />

          <div
            onClick={emptyCart}
            className={` flex h-[3rem] w-[3rem] rounded-full items-center justify-center hover:bg-rose-500/20 cursor-pointer transition  bg-primary-black text-neutral-200`}
          >
            <BsBagXFill className=" text-[.9rem]" />
          </div>
        </div>
        <Location />

        {isEmpty ? (
          <div className="flex items-center justify-center h-[15rem] grayscale">
            <Empty />
          </div>
        ) : (
          <div className="flex flex-col gap-3 mt-6 mb-[5rem] min-h-[68vh] ">
            {category.map((value) => (
              <>
                <div
                  key={value}
                  className=" flex flex-col w-full bg-mid-black rounded-[.4rem] px-4 py-3 cursor-pointer transition hover:bg-dark-gold/10"
                >
                  <div
                    className=" flex justify-between w-full items-center"
                    onClick={() =>
                      setCartType((prev) => (prev === value ? "" : value))
                    }
                  >
                    <div className="flex gap-2 items-center">
                      <div className="relative h-[1.7rem] w-[1.7rem] flex items-center justify-center bg-gradient-to-tl from-mid-black/80 group-hover:to-secondary-black/70 to-secondary-black font-semibold rounded-[.3rem] transition">
                        {items
                          .filter((item) => item.category === value)
                          .map((item) => item.quantity)
                          .reduce((total: any, value) => (total += value), 0)}
                      </div>
                      <p className="text-[.9rem]"> {categoryMap[value]}</p>
                    </div>
                    {cartType === value ? (
                      <BsChevronUp className="text-[.7rem]" />
                    ) : (
                      <BsChevronDown className="text-[.7rem]" />
                    )}
                  </div>

                  {cartType === value && <div className="mt-5" />}
                  <div className="flex flex-col gap-4 ">
                    {
                      cartType === value &&
                        items
                          .filter((item) => item.category === value)
                          .map((item) => (
                            <BasketItems key={item.id} item={item} />
                          ))
                      // : null
                    }
                  </div>
                </div>
              </>
            ))}
          </div>
          // <div className="flex flex-col gap-3 mt-6 mb-[5rem] min-h-[68vh]">
          //   {items.map((item) => (
          //     <BasketItems key={item.id} item={item} />
          //   ))}
          // </div>
        )}

        <div className=" min-w-[21rem] fixed bottom-0 z-40">
          <div className="black_glassmorphism flex h-[7.5rem] rounded-t-[2rem] flex-col relative w-full">
            <div className="flex px-8 pt-4 pb-2 justify-between">
              <p className="text-[.72rem] text-neutral-300">
                Total Price ({totalItems} items)
              </p>
              <p className=" font-semibold text-[.87]">
                &#8358; {cartTotal.toLocaleString()}
              </p>
            </div>
            <div className=" bg-mid-black py-4 px-6 rounded-t-[1.3rem] absolute w-full bottom-0">
              <Button
                disabled={isEmpty ? true : false}
                name="Schedule Now"
                handleClick={() => navigate("/schedule")}
                rounded="rounded-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
export default Basket;
