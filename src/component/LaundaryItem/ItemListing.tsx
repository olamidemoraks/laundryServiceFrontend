import React, { useMemo, useState } from "react";

import ItemCard from "./ItemCard";
import { Items } from "../../utils/constant";
import { BiAddToQueue } from "react-icons/bi";

type ItemListingProps = {
  category: string;
  setSelectedItems: React.Dispatch<any>;
  selectedItems: any[];
};

export interface ItemType {
  id: string;
  name: string;
  qty: number;
  price: number;
  image_url: string;
}
export const categoryMap: any = {
  wash_and_iron: "Wash & Iron",
  wash: "Wash",
  iron: "Iron",
  repair: "Repair",
};

const ItemListing: React.FC<ItemListingProps> = ({
  category,
  selectedItems,
  setSelectedItems,
}) => {
  const [moreView, setMoreView] = useState(false);

  const filtedItem = useMemo(() => {
    if (!moreView) {
      return Items(category).slice(0, 7);
    } else {
      return Items(category);
    }
  }, [moreView]);
  return (
    <div className="w-full mt-6 flex gap-1 flex-col  mb-[5rem]">
      <p className="text-sm">{categoryMap[category]}</p>
      <div className="w-full flex flex-col gap-5 mt-2 min-h-[70vh]">
        {filtedItem.map((item, idx) => (
          <ItemCard
            key={idx}
            item={item}
            category={category}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
        ))}
      </div>
      <div
        className="flex items-center gap-2 mx-auto black_glassmorphism rounded-full px-2 py-1 text-neutral-400 hover:text-white mt-[2rem] cursor-pointer"
        onClick={() => setMoreView((prev) => !prev)}
      >
        {!moreView ? (
          <>
            <BiAddToQueue /> show more
          </>
        ) : (
          <>
            <BiAddToQueue /> show less
          </>
        )}
      </div>
    </div>
  );
};
export default ItemListing;
