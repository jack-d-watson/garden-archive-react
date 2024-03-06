"use client";

import CartSidebar from "@/components/organisms/CartSidebar";
import {
  CartContext,
  CartDispatchContext,
  defaultCart,
} from "@/utils/cartContext";
import { cartReducer } from "@/utils/cartReducer";
import { useReducer } from "react";

export default function PlantsLayout(props: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, defaultCart);
  return (
    <section className="flex flex-row">
      <CartContext.Provider value={cart}>
        <CartDispatchContext.Provider value={dispatch}>
          <div className="grow w-2/3">{props.children}</div>
          <div className="float-right w-1/3 border">
            <CartSidebar />
          </div>
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </section>
  );
}
