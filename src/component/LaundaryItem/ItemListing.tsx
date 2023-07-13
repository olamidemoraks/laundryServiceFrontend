import React from "react";

import ItemCard from "./ItemCard";
import { Items } from "../../utils/constant";

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
  return (
    <div className="w-full mt-6 flex gap-1 flex-col">
      <p className="text-sm">{categoryMap[category]}</p>
      <div className="w-full flex flex-col gap-4 mt-2 min-h-[70vh]">
        {Items(category).map((item, idx) => (
          <ItemCard
            key={idx}
            item={item}
            category={category}
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
        ))}
      </div>
    </div>
  );
};
export default ItemListing;
