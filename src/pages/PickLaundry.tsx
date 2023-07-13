import React, { useCallback, useMemo, useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { toast } from "react-hot-toast";

import useCategory from "../hooks/useCategory";
import PageTemplate from "../component/Layout/PageTemplate";
import ItemListing from "../component/LaundaryItem/ItemListing";
import NavLink from "../component/Utils/NavLink";
import Button from "../component/Utils/Button";

type PickLaundryProps = {};

const PickLaundry: React.FC<PickLaundryProps> = () => {
  const { category } = useCategory();
  const { isEmpty, addItem } = useCart();
  const navigate = useNavigate();

  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  console.log(selectedItems);

  const totalQty: any = useMemo(() => {
    return selectedItems
      .map((item) => {
        return item.qty;
      })
      .reduce((a, b) => {
        return a + b;
      }, 0);
  }, [selectedItems]);

  const totalItem: any = useMemo(() => {
    return selectedItems
      .map((item) => item.totalPrice)
      .reduce((a, b) => a + b, 0);
  }, [selectedItems]);

  // console.log(selectedItems);

  const addToBasket = useCallback(() => {
    if (selectedItems.length === 0) {
      toast.error("Please select an item");
      return;
    }

    selectedItems.map((selectedItem) => {
      addItem(selectedItem, selectedItem.qty);
    });
    setSelectedItems([]);
    navigate("/home");
    toast.success("Item has been sent to basket");
  }, [selectedItems, setSelectedItems]);

  return (
    <PageTemplate>
      <div className="w-full">
        <div className="flex justify-between w-full">
          <NavLink to="/home" label="Laundry" />
          <div>
            <Link
              to={"/basket"}
              className={` flex h-[3rem] w-[3rem] rounded-full items-center justify-center hover:bg-mid-black/70 transition  bg-primary-black   text-neutral-200   `}
            >
              <div className="relative">
                <FaShoppingBag />
                {!isEmpty && (
                  <div className=" bg-rose-500 h-2 w-2 rounded-full absolute top-0 -right-1 border-[1px] border-neutral-400" />
                )}
              </div>
            </Link>
          </div>
        </div>

        {/* <Category category={category} setCategory={setCategory} label="" /> */}
        <ItemListing
          category={category}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />

        <div className=" w-[23rem] fixed bottom-0 z-40">
          <div className="black_glassmorphism flex h-[7.5rem] w-full rounded-t-[2rem] flex-col relative ">
            <div className="flex px-8 pt-4 pb-2 justify-between">
              <p className="text-[.72rem] text-neutral-300">
                Total Price ({totalQty} items)
              </p>
              <p className=" font-semibold text-[.87]">
                &#8358; {(totalItem as number).toLocaleString()}
              </p>
            </div>
            <div className=" bg-mid-black py-4 px-6 rounded-t-[1.3rem] absolute w-full bottom-0">
              <Button
                name="Add To Basket"
                handleClick={addToBasket}
                rounded="rounded-[1rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
};
export default PickLaundry;
