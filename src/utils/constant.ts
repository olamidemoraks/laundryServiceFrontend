import { ItemType } from "../component/LaundaryItem/ItemListing";

export const Items = (category: string): ItemType[] => {
  let removeValue = 1;
  if (category === "wash") {
    removeValue = 2;
  } else if (category === "wash_and_iron") {
    removeValue = 1;
  } else if (category === "iron") {
    removeValue = 2.2;
  } else if (category === "repair") {
    removeValue = 2.4;
  }

  return [
    {
      id: "1",
      name: "Shirt",
      qty: 0,
      price: Number((150 / removeValue).toFixed(0)),
      image_url: "./folded_cloth.png",
    },
    {
      id: "2",
      name: "Jeans",
      qty: 0,
      price: Number((120 / removeValue).toFixed(0)),
      image_url: "./folded_cloth.png",
    },
    {
      id: "3",
      name: "Suit",
      qty: 0,
      price: Number((1000 / removeValue).toFixed(0)),
      image_url: "./suit.png",
    },
    {
      id: "4",
      name: "Wrapper",
      qty: 0,
      price: Number((100 / removeValue).toFixed(0)),
      image_url: "./folded_cloth.png",
    },
  ];
};
