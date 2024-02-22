import CartSidebar from "@/components/organisms/CartSidebar";
import { CartItem } from "@/types/Cart";

export default function PlantsLayout(props: { children: React.ReactNode }) {
  return (
    <section className="flex flex-row">
      <div className="grow w-2/3">{props.children}</div>
      <div className="float-right w-1/3 border">
        <CartSidebar />
      </div>
    </section>
  );
}
