export type CartItem = {
  plantLabel: string;
  quantity: number;
  plantId: string;
  href: string;
  thumbnail?: string;
  spreadPerPlant: number;
};

export type Cart = {
    items: CartItem[];
    totalArea: number; // square footage covered by items in cart
    targetTotalArea: number; // maximum area that could be covered
}