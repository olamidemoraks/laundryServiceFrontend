import React, { useCallback, useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";

import { ItemType, categoryMap } from "./ItemListing";

type ItemCardProps = {
  item: ItemType;
  category: string;
  setSelectedItems: React.Dispatch<any>;
  selectedItems: any[];
};

const ItemCard: React.FC<ItemCardProps> = ({
  item,
  category,
  setSelectedItems,
  selectedItems,
}) => {
  const [quantity, setQuantity] = useState(item.qty);

  const add = useCallback(
    (itemPicked: ItemType) => {
      setQuantity((prev) => prev + 1);

      const existingItem = selectedItems.find(
        (item) => item.id === `${category}${itemPicked.id}`
      );

      const product = { ...itemPicked };
      let products = [...selectedItems];

      if (!existingItem) {
        const newItem = {
          ...product,
          id: category + product.id,
          category,
          qty: 1,
          totalPrice: product.price,
        };

        setSelectedItems((prev: any[]) => [
          ...prev,
          {
            ...newItem,
          },
        ]);
      } else {
        existingItem.qty += 1;
        existingItem.totalPrice += product.price;
        const itemIdx = selectedItems.findIndex(
          (item) => item.id === existingItem.id
        );

        products[itemIdx] = existingItem;

        setSelectedItems(products);
      }
    },
    [quantity, category, selectedItems]
  );

  const remove = useCallback(
    (itemPicked: ItemType) => {
      if (quantity < 1) {
        return;
      }
      setQuantity((prev) => prev - 1);

      const existingItem = selectedItems.find(
        (item) => item.id === `${category}${itemPicked.id}`
      );

      const product = { ...itemPicked };
      let products = [...selectedItems];

      if (!existingItem) {
        return;
      } else if (existingItem) {
        existingItem.qty -= 1;
        existingItem.totalPrice -= product.price;
        const itemIdx = selectedItems.findIndex(
          (item) => item.id === existingItem.id
        );
        if (existingItem.qty === 0) {
          setSelectedItems(
            selectedItems.filter((item) => item.id !== existingItem.id)
          );
        } else {
          products[itemIdx] = existingItem;
          setSelectedItems(products);
        }
      }
    },
    [quantity, category, selectedItems]
  );

  return (
    <div className="flex justify-between">
      <div className=" flex gap-3">
        <div className="md:w-[4.8rem] md:h-[4.3rem] w-[3.7rem] h-[3.7rem] flex items-center justify-center  rounded-[1.3rem] bg-mid-black">
          <img src={item.image_url} alt="items" className=" w-2/3" />
        </div>
        <div>
          <p className=" text-[1rem]">
            {item.name}{" "}
            <span className="text-[1rem] text-neutral-400">
              {categoryMap[category]}
            </span>
          </p>
          <p className=" text-[.65rem] text-neutral-200">
            &#8358;{item.price.toLocaleString()} / item
          </p>
          <p className="text-[.8rem] text-light-gold">
            &#8358;{(item.price * quantity).toLocaleString()}
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
        {quantity}
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
export default ItemCard;
