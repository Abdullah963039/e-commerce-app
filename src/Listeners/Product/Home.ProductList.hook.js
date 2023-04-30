import { useEffect, useState } from "react";
import { useStore } from "../../hooks/useStore";

export default function HomeProductListHook() {
  const { getAllProducts, loading } = useStore();

  const [mostSold, setMostSold] = useState([]);
  const [mostRated, setMostRated] = useState([]);
  const [fashionProducts, setFashionProducts] = useState([]);

  //? Get Most Selled Products
  useEffect(() => {
    const fun = async () => {
      try {
        const res = await getAllProducts(4, "sold");
        setMostSold(res?.data);
      } catch (er) {
        console.log(er);
      }
    };

    fun();

    // Destructor
    return () => setMostSold([]);
  }, []);

  //? Get Products Sorting By Brands
  useEffect(() => {
    const fun = async () => {
      try {
        const res = await getAllProducts(4, "brand");
        setFashionProducts(res?.data);
      } catch (er) {
        console.log(er);
      }
    };

    fun();

    // Destructor
    return () => setFashionProducts([]);
  }, []);

  //? Get Most Rated Products
  useEffect(() => {
    const fun = async () => {
      try {
        const res = await getAllProducts(4, "rate");
        setMostRated(res?.data);
      } catch (er) {
        console.log(er);
      }
    };

    fun();

    // Destructor
    return () => setMostRated([]);
  }, []);

  return { mostSold, fashionProducts, mostRated, loading };
}
