import React from "react";
import { Item, useCart } from "react-use-cart";
import { IoAdd, IoRemove } from "react-icons/io5";

import { categoryMap } from "../LaundaryItem/ItemListing";

type BasketItemsProps = {
  item: Item;
};

const BasketItems: React.FC<BasketItemsProps> = ({ item }) => {
  const { updateItemQuantity } = useCart();

  const add = (currentItem: Item) => {
    updateItemQuantity(currentItem.id, (currentItem?.quantity as number) + 1);
  };
  const remove = (currentItem: Item) => {
    updateItemQuantity(currentItem.id, (currentItem?.quantity as number) - 1);
  };
  return (
    <div className="flex justify-between">
      <div className=" flex gap-3">
        <div className="md:w-[4.8rem] md:h-[4.3rem] w-[3.7rem] h-[3.7rem] flex items-center justify-center  rounded-[1.3rem] bg-secondary-black/70">
          <img
            src={item.image_url}
            alt="items"
            className="w-full h-full rounded-[1.3rem] object-cover"
          />
        </div>
        <div>
          <p className=" text-[1rem]">
            {item.name}{" "}
            <span className="text-[1rem] text-neutral-400">
              {categoryMap[item.category]}
            </span>
          </p>
          <p className=" text-[.65rem] text-neutral-200">
            &#8358; {item.price.toLocaleString()} / item
          </p>
          <p className="text-[.8rem] text-light-gold">
            &#8358; {item?.itemTotal?.toLocaleString()}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-evenly items-center">
        <button
          className="w-[1.3rem] h-[1.3rem]  rounded-full bg-neutral-300 hover:bg-white text-black flex  items-center transition justify-center text-[.7rem]"
          onClick={() => add(item)}
        >
          <IoAdd />
        </button>
        {item.quantity}
        <button
          className="w-[1.3rem] h-[1.3rem]  rounded-full bg-transparent hover:bg-mid-black border border-white  flex items-center justify-center text-[.7rem]"
          onClick={() => remove(item)}
        >
          <IoRemove />
        </button>
      </div>
    </div>
  );
};
export default BasketItems;
