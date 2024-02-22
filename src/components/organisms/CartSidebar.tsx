"use client";
import Heading, { HeadingType } from "../atoms/Heading";
import CartItemRow from "../molecules/CartItemRow";
import { Cart, CartItem } from "@/types/Cart";
import { useState } from "react";
import LabelledField from "../molecules/LabelledField";

function calculateAreaCovered(items: CartItem[]) {
  return items
    .map((item) => item.quantity * item.spreadPerPlant)
    .reduce((prev, current) => prev + current);
}
const defaultCart: Cart = {
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
  totalArea: 0,
};
defaultCart.totalArea = calculateAreaCovered(defaultCart.items)

function getItemIndexFromCart(cart: Cart, itemId: string): number {
  const foundValue = cart.items.findIndex((value) => value.plantId === itemId);
  if (foundValue === -1) {
    throw Error("Could not find plant in cart with id " + itemId);
  }

  return foundValue;
}

function addItemToCart(currentCart: Cart, newItem: CartItem): Cart {
  const updatedItems = [...currentCart.items, newItem];
  return {
    ...currentCart,
    items: updatedItems,
    totalArea: calculateAreaCovered(updatedItems),
  };
}

function removeItemFromCart(currentCart: Cart, index: number): Cart {
  const updatedItems = [...currentCart.items];
  updatedItems.splice(index);
  return {
    ...currentCart,
    items: updatedItems,
    totalArea: calculateAreaCovered(updatedItems),
  };
}

function updateItemInCart(
  currentCart: Cart,
  index: number,
  updatedItem: CartItem
): Cart {
  const cartCopy = {
    ...currentCart,
  };
  cartCopy.items[index] = updatedItem;
  cartCopy.totalArea = calculateAreaCovered(cartCopy.items);
  return cartCopy;
}

export default function CartSidebar(props: {}) {
  const [cart, setCart] = useState(defaultCart);
  return (
    <div className="w-full h-full flex flex-col">
      <Heading type={HeadingType.SectionHeader} className="text-center">
        My Garden
      </Heading>
      {cart.items.map((item, index) => {
        return (
          <CartItemRow
            data={item}
            id={item.plantId}
            key={index}
            onChange={(updatedItem: CartItem) => {
              setCart(updateItemInCart(cart, index, updatedItem));
            }}
          />
        );
      })}

      <div className="justify-self-end mt-auto">
        <LabelledField
          fieldData={cart.totalArea + " sq ft"}
          label="Total Area Covered"
          id="totalAreaCovered"
        />
      </div>
    </div>
  );
}
