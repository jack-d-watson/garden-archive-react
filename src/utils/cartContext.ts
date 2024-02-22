import { Cart, CartItem } from "@/types/Cart";
import { createContext } from "react";

let itemArr: CartItem[] = []

export type CartContextType = {
    items: CartItem[],
    addItem: (item: CartItem) => {},
    removeItem: (itemId: string) => {},
    updateItem: (itemId: string, updatedItem: CartItem) => {},
    getItem: (cart: Cart, itemId: string) => CartItem
}

export const CartContext = createContext({
    items: itemArr,
    addItem: (item: CartItem) => {},
    removeItem: (itemId: string) => {},
    updateItem: (itemId: string, updatedItem: CartItem) => {}
});
