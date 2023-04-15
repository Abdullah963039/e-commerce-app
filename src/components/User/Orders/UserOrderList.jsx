import UserOrderItem from "./UserOrderItem";

export default function UserOrderList() {
  return (
    <>
      <div className="flex flex-col">
        <UserOrderItem />
        <UserOrderItem />
        <UserOrderItem />
      </div>
    </>
  );
}
