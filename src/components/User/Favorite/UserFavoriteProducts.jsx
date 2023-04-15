//? User: Favorite Products Container
import UserFavoriteItem from "./UserFavoriteItem";
import Pagination from "../../Utility/Pagination";

export default function UserFavoriteProducts() {
  return (
    <>
      <div className="mb-4 grid grid-cols-12 gap-4">
        <UserFavoriteItem />
        <UserFavoriteItem />
        <UserFavoriteItem />
        <UserFavoriteItem />
        <UserFavoriteItem />
        <UserFavoriteItem />
        <UserFavoriteItem />
        <UserFavoriteItem />
      </div>
      <Pagination />
    </>
  );
}

//! AiFillHeart
