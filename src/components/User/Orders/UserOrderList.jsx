import UserOrderItem from "./UserOrderItem";

export default function UserOrderList({ products }) {
  return (
    <>
      <div className="flex flex-col">
        {products?.map((product) => (
          <UserOrderItem key={product._id} orderItem={product} />
        ))}
      </div>
    </>
  );
}
