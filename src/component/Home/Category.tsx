import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export interface Category {
  label: string;
  key: string;
  image_url: string;
  size: string;
}

type CategoryProps = {
  category: any;
  setCategory: (value: string) => void;
  label?: string;
};

const Category: React.FC<CategoryProps> = ({
  category,
  setCategory,
  label = "Category",
}) => {
  const categoryList: Category[] = [
    {
      label: "Wash and Iron",
      key: "wash_and_iron",
      image_url: "./suit.png",
      size: "w-1/2",
    },
    {
      label: "Wash",
      key: "wash",
      image_url: "./washing_machine.png",
      size: "w-1/2",
    },
    {
      label: "Iron",
      key: "iron",
      image_url: "./pressing_iron.png",
      size: "w-1/2",
    },
    {
      label: "Repair",
      key: "repair",
      image_url: "./folded_cloth.png",
      size: "w-3/4",
    },
  ];

  console.log(localStorage.getItem("category"));
  const navigate = useNavigate();

  const setCategoryHandler = useCallback(
    (value: string) => {
      if (category !== value) {
        setCategory(value);
      }

      navigate("/picklaundry");
    },
    [category]
  );

  return (
    <div className="w-full flex gap-2 flex-col mt-3">
      <p>{label}</p>
      <div className="flex md:gap-3 gap-2 justify-between items-start  overflow-x-hidden max-w-[23rem] ">
        {categoryList.map((item) => (
          <div
            key={item.key}
            className="flex flex-col items-center gap-[.5rem] cursor-pointer group max-h-[5.5rem]"
            onClick={() => {
              setCategoryHandler(item.key);
            }}
          >
            <div
              className={`${
                category === item.key
                  ? "bg-light-gold"
                  : "bg-mid-black group-hover:bg-dark-gold/10"
              } md:w-[4.8rem] md:h-[4.3rem] w-[4.5rem] h-[4rem] flex items-center justify-center transition rounded-[1.2rem] `}
            >
              <img
                className={`${item.size} grayscale group-hover:grayscale-0`}
                src={`${item.image_url}`}
                alt="category item"
              />
            </div>
            <p
              className={`${
                category === item.key ? "text-[.69rem]" : "text-[.64rem]"
              }  group-hover:text-[.69rem]`}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
