import NumberInput from "../atoms/NumberInput";
import { CartItem } from "@/types/Cart";
import LabelledField from "./LabelledField";

export default function CartItemRow(props: {
  id: string;
  data: CartItem;
  onChange: (updatedItem: CartItem) => void;
}) {
  const { id, data, onChange } = props;
  return (
    <div id={id + "-cart-item"} className="grid grid-cols-3 items-center pb-2">
      <div className="col-span-2">
        <LabelledField
          fieldData={data.quantity * data.spreadPerPlant + " sq ft"}
          label={data.plantLabel}
          id={data.plantId + "-cart-label"}
        />
      </div>
      <NumberInput
        value={data.quantity}
        min={0}
        max={99}
        id={id + "-quantity"}
        onChange={(newValue: number) => {
          const updatedItem = data;
          updatedItem.quantity = newValue;
          onChange(updatedItem);
        }}
      />
    </div>
  );
}
