//? Cart Containter > Contains All Cart Items ..

import CartItem from "./CartItem";

export default function CartsContainer() {
  return (
    <div className="flex flex-col items-start justify-between gap-4">
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}
