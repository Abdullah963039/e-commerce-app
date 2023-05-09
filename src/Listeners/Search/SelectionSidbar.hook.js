// hooks
import { useEffect, useState } from "react";
import { useStore } from "../../hooks/useStore";
import ProductsPageContentHook from "../Product/ProductsPageContent.hook";

// note: qs refer to "query string" keyword

export const SelectionSidbarHook = () => {
  const [selectedCategories, setSelectedCategories] = useState(() => {
    let qsCategory = localStorage.getItem("categories");

    if (qsCategory != null) {
      let arr = qsCategory.split("&").map((cat) => {
        let equalSignIndex = cat.indexOf("=");
        return cat.slice(equalSignIndex + 1);
      });

      return arr;
    } else {
      return [];
    }
  });
  const [selectedBrands, setSelectedBrands] = useState(() => {
    let qsBrands = localStorage.getItem("brands");

    if (qsBrands != null) {
      let arr = qsBrands.split("&").map((brand) => {
        let equalSignIndex = brand.indexOf("=");
        return brand.slice(equalSignIndex + 1);
      });

      return arr;
    } else {
      return [];
    }
  });

  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");

  const { getAllCategories, allCategories, allBrands, getAllBrands } =
    useStore();
  const { getProduct } = ProductsPageContentHook();

  useEffect(() => {
    getAllCategories();
    getAllBrands();
  }, []);

  let queryCategories = selectedCategories
    .map((category) => `category[in][]=${category}`)
    .join("&");
  localStorage.setItem("categories", queryCategories);

  const selectCategory = (e) => {
    const value = e.target.value,
      checked = e.target.checked;

    if (checked) {
      setSelectedCategories((previousCategories) => [
        ...previousCategories,
        value,
      ]);
    } else {
      setSelectedCategories(selectedCategories.filter((id) => id !== value));
    }

    setTimeout(() => {
      getProduct();
    }, 1250);
  };

  let queryBrands = selectedBrands
    .map((brand) => `brand[in][]=${brand}`)
    .join("&");
  localStorage.setItem("brands", queryBrands);

  const selectBrand = (e) => {
    const value = e.target.value,
      checked = e.target.checked;

    if (checked) {
      setSelectedBrands((previousBrands) => [...previousBrands, value]);
    } else {
      setSelectedBrands(selectedBrands.filter((id) => id !== value));
    }
    setTimeout(() => {
      getProduct();
    }, 1250);
  };

  const onChangePriceFrom = (e) => {
    setPriceFrom(e.target.value);

    localStorage.setItem("priceFrom", e.target.value);

    setTimeout(() => {
      getProduct();
    }, 1000);
  };
  const onChangePriceTo = (e) => {
    setPriceTo(e.target.value);

    localStorage.setItem("priceTo", e.target.value);

    setTimeout(() => {
      getProduct();
    }, 1000);
  };

  return {
    allCategories,
    allBrands,
    selectCategory,
    selectBrand,
    priceFrom,
    priceTo,
    onChangePriceFrom,
    onChangePriceTo,
  };
};

// price from => price[gt]
// price to => price[lte]
