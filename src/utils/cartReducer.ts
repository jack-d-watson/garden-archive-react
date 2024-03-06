import { Cart, CartItem } from "@/types/Cart";
import { Dispatch } from "react";

export type CartDispatchAction = {
  type: "AddItem" | "UpdateItem" | "RemoveItem";
  item?: CartItem;
  itemId?: string;
};

export function handleAddItem(
  dispatch: Dispatch<CartDispatchAction>,
  item: CartItem
) {
  dispatch({
    item,
    type: "AddItem",
  });
}

export function handleUpdateItem(
  dispatch: Dispatch<CartDispatchAction>,
  item: CartItem
) {
  dispatch({
    item,
    type: "UpdateItem",
  });
}

export function handleRemoveItem(
  dispatch: Dispatch<CartDispatchAction>,
  itemId: string
) {
  dispatch({
    itemId,
    type: "RemoveItem",
  });
}

function calculateAreaCovered(items: CartItem[]) {
  return items
    .map((item) => item.quantity * item.spreadPerPlant)
    .reduce((prev, current) => prev + current);
}

function getIndexFromItemId(items: CartItem[], itemId: string): number {
  return items.findIndex((value) => value.plantId === itemId);
}

export function cartReducer(cart: Cart, action: CartDispatchAction): Cart {
  let updatedItems: CartItem[] = [];
  switch (action.type) {
    case "AddItem":
      if (!action.item) {
        throw Error("item is required for action " + action.type);
      }
      updatedItems = [...cart.items, action.item];
      return {
        ...cart,
        items: updatedItems,
        totalArea: calculateAreaCovered(updatedItems),
      };
    case "UpdateItem":
      if (!action.item) {
        throw Error("item is required for action " + action.type);
      }
      updatedItems = [...cart.items];
      updatedItems[getIndexFromItemId(cart.items, action.item.plantId)] =
        action.item;
      return {
        ...cart,
        items: updatedItems,
        totalArea: calculateAreaCovered(updatedItems),
      };
    case "RemoveItem":
      if (!action.itemId) {
        throw Error("itemId is required for action " + action.type);
      }
      updatedItems = [...cart.items];
      updatedItems.splice(getIndexFromItemId(cart.items, action.itemId));
      return {
        ...cart,
        items: updatedItems,
        totalArea: calculateAreaCovered(updatedItems),
      };
  }
}
