import React from "react";
import { categoryMap } from "../../component/LaundaryItem/ItemListing";

type ItemCardProps = {
  item: ReservationItem;
};

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="flex justify-between">
      <div className=" flex gap-3">
        <div className="md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem] flex items-center justify-center  rounded-[.9rem] bg-mid-black">
          <img src={item.image_url} alt="items" className=" w-2/3" />
        </div>
        <div>
          <p className=" text-[.9rem]">
            {item.name}{" "}
            <span className=" text-neutral-400">
              {categoryMap[item.category]}
            </span>
          </p>
          <div className="flex gap-2 items-end">
            <p className="text-[.65rem] text-neutral-200">
              &#8358; {item?.price?.toLocaleString()} / item
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <p className=" text-[.65rem] text-neutral-200">{item.quantity} item</p>
        <p className="text-[.8rem] text-light-gold">
          &#8358; {item?.totalPrice?.toLocaleString()}
        </p>
      </div>
    </div>
  );
};
export default ItemCard;
