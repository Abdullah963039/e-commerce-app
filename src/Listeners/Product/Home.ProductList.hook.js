// hooks
import { useEffect, useState } from "react";
import { useStore } from "../../hooks";

export default function HomeProductListHook() {
  const { getAllProducts, loading } = useStore();

  const [mostSold, setMostSold] = useState([]);
  const [mostRated, setMostRated] = useState([]);
  const [fashionProducts, setFashionProducts] = useState([]);

  //? Get Home Page Products
  useEffect(() => {
    const getMostSoldProducts = async () => {
      try {
        const res = await getAllProducts(4, "sold");
        setMostSold(res?.data);
      } catch (er) {
        console.log(er);
      }
    };
    const getMostFasionProducts = async () => {
      try {
        const res = await getAllProducts(4, "brand");
        setFashionProducts(res?.data);
      } catch (er) {
        console.log(er);
      }
    };
    const getMostRatedProducts = async () => {
      try {
        const res = await getAllProducts(4, "rate");
        setMostRated(res?.data);
      } catch (er) {
        console.log(er);
      }
    };

    getMostSoldProducts();
    getMostFasionProducts();
    getMostRatedProducts();

    // Destructor
    return () => {
      setMostSold([]);
      setFashionProducts([]);
      setMostRated([]);
    };
  }, []);

  return { mostSold, fashionProducts, mostRated, loading };
}
