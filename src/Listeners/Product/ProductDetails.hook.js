import { useParams } from "react-router-dom";
import { useStore } from "../../hooks/useStore";
import { useState, useEffect } from "react";

export default function ProductDetailsHook() {
  const { productId } = useParams(); // Get product id from url

  const [product, setProduct] = useState({}); // Store Product Info
  const [productImages, setProductImages] = useState([]); // Store Product Images

  //   ? Use Global Store
  const {
    getSpecificProduct,
    getSpecificBrand,
    getSpecificCategory,
    getAllProducts,
    allProducts,
    loading,
  } = useStore();

  // ? Use Effect
  useEffect(() => {
    const getProductInfo = async () => {
      try {
        const productInfo = await getSpecificProduct(productId);
        const categoryName = await getSpecificCategory(productInfo["category"]); // get category name
        const brandName = await getSpecificBrand(productInfo["brand"]); // get brand name
        setProduct({ ...productInfo, categoryName, brandName }); // set product after fetch data
        setProductImages(productInfo.images.map((url) => ({ original: url }))); // create object to make suit logic for gallary lib
      } catch (error) {
        console.log(error);
      }
    };

    getProductInfo(); //> To Get Product data when render page

    getAllProducts(4); //> To get 4 products you may like

    return () => setProduct({}); //> clear data after close this page
  }, [productId]); // renders when change product id

  return { product, loading, allProducts, productImages };
}
