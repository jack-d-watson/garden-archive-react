import Heading, { HeadingType } from "../atoms/Heading";
import CartItemRow from "../molecules/CartItemRow";
import { CartItem } from "@/types/Cart";
import LabelledField from "../molecules/LabelledField";
import { handleUpdateItem } from "@/utils/cartReducer";
import { useContext } from "react";
import { CartContext, CartDispatchContext } from "@/utils/cartContext";

export default function CartSidebar(props: {}) {
  const cart = useContext(CartContext)
  const dispatch = useContext(CartDispatchContext)

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
              handleUpdateItem(dispatch, updatedItem);
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
