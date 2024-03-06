import { Cart } from "@/types/Cart";
import { Dispatch, createContext } from "react";
import { CartDispatchAction } from "./cartReducer";

export const defaultCart: Cart = {
  items: [
    {
      plantLabel: "Chocolate Daisy",
      quantity: 2,
      plantId: "berlandiera-lyrata",
      href: "/plants/berlandiera-lyrata",
      spreadPerPlant: 1.5,
    },
    {
      plantLabel: "Yarrow",
      quantity: 4,
      plantId: "achillea-millefolium",
      href: "/plants/achillea-millefolium",
      spreadPerPlant: 1.5,
    },
  ],
  targetTotalArea: 0,
  totalArea: 9,
};

export const CartContext = createContext<Cart>(defaultCart);
export const CartDispatchContext = createContext<Dispatch<CartDispatchAction>>(() => {})