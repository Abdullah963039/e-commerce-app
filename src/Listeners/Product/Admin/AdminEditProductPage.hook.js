import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../../hooks/useStore";
import notify from "../../../utils/notifcation";
import { useReducer } from "react";

const colors = [
  { name: "أحمر", hex: "#F30B0B" },
  { name: "برتقالي", hex: "#ba4f07" },
  { name: "اصفر", hex: "#ba9707" },
  { name: "اخضر", hex: "#44ba07" },
  { name: "سماوي", hex: "#07ba8e" },
  { name: "ازرق", hex: "#0753ba" },
  { name: "بنفسجي", hex: "#5807ba" },
  { name: "وردي", hex: "#de33a9" },
  { name: "اسود", hex: "#222" },
  { name: "ابيض", hex: "#fefefe" },
];

export const AdminEditProductPageHook = () => {
  const { productId } = useParams(); // to get product id
  const [product, setProduct] = useState(""); // to store product details

  //? Global Store
  const {
    getSpecificProduct,
    editSpecificProduct,

    subCategories,
    loading,
    allCategories: { data: categories },
    allBrands: { data: brands },
    getAllCategories,
    getAllBrands,
    getAllSubCategoriesOnCategory,
  } = useStore();

  useEffect(() => {
    const asyncFunc = async () => {
      const res = await getSpecificProduct(productId);
      setProduct(res);

      await getAllCategories();
      await getAllBrands();
    };
    asyncFunc();

    return () => setProduct("");
  }, []); // dependencies refer to: product is allready been exist

  //? Use States
  const [imageCover, setImageCover] = useState(""); //> Image Cover State
  const [productImages, setProductImages] = useState([]); //> Product Images State
  const [mainCategory, setMainCategory] = useState(""); //> Main Category State
  const [budges, setBudges] = useState([]); //> Selected Subcategories State
  const [selectedBrand, setSelectedBrand] = useState(""); //> Selected Subcategories State
  const [availColors, setAvailColors] = useState([]); //> Available Colors State

  //? Use Ref
  const nameRef = useRef("");
  // nameRef.current.value = currentProduct["title"]; // set product title
  const descriptionRef = useRef("");
  // descriptionRef.current.value = currentProduct["description"]; // set product description
  const quantityRef = useRef("");
  // quantityRef.current.value = currentProduct["quantity"]; // set product quantity
  const priceRef = useRef("");
  // priceRef.current.value = currentProduct["price"]; // set product price
  const soldPriceRef = useRef("");

  // useEffect to set values
  useEffect(() => {
    nameRef.current.value = product["title"]; // set product title
    descriptionRef.current.value = product["description"]; // set product description
    quantityRef.current.value = product["quantity"]; // set product quantity
    priceRef.current.value = product["price"]; // set product price
    setMainCategory(product["category"]); // set product category
    setBudges(product["subcategory"]); // set product subcategory
    setSelectedBrand(product["brand"]); // set product brand
    setAvailColors(product["availableColors"]); // set product available colors
  }, [Boolean(product)]);

  // ? Product Image Cover
  const selectImageCover = (e) => {
    if (e.target.files[0] === undefined) return;
    setImageCover(e.target.files[0]);
  };
  const deleteImageCover = () => setImageCover(""); //* Delete image cover

  // ? Product Images
  const selectMultipleImages = (e) => {
    if (e.target.files[0] === undefined) return;
    if (
      e.target.files.length > 4 ||
      e.target.files.length + productImages.length > 4
    ) {
      notify("error", "لا يمكن اضافة أكتر من 4 صور");
      return;
    }
    setProductImages((prevImages) => [...prevImages, ...e.target.files]);
  };

  const deleteProductImage = (image) =>
    setProductImages([...productImages.filter((images) => images !== image)]);

  //? Category & Sub Category & Brand
  const addSubCategory = (e) => setBudges(e.value); //> Add Subcategory id Subcategories State

  const selectMainCategory = (e) => setMainCategory(e.value);

  const selectNewBrand = (e) => setSelectedBrand(e.value);

  //? Available Colors
  const addColor = (hex) => setAvailColors((prev) => [...prev, hex]); //> Add Color
  const deleteColor = (hex) =>
    setAvailColors([...availColors.filter((clr) => clr !== hex)]); //> Delete Color

  //? Use Effect

  useEffect(() => {
    if (mainCategory !== "") getAllSubCategoriesOnCategory(mainCategory);
  }, [mainCategory]);

  //? Handle Submit Function
  const editProduct = async (e) => {
    e.preventDefault();

    // > Form Validation
    if (
      nameRef.current.value === "" ||
      descriptionRef.current.value === "" ||
      quantityRef.current.value === "" ||
      priceRef.current.value === "" ||
      mainCategory === "" ||
      selectedBrand === "" ||
      availColors.length === 0 ||
      imageCover === "" ||
      productImages.length === 0
    ) {
      notify("error", "اكمل البيانات من فضلك !");
      return;
    }
  };

  // > Clear All Data After Success Submit Data
  const clearAllData = () => {
    setImageCover("");
    setProductImages([]);
    setMainCategory("");
    setBudges([]);
    setSelectedBrand("");
    setAvailColors([]);

    nameRef.current.value = "";
    descriptionRef.current.value = "";
    quantityRef.current.value = "";
    priceRef.current.value = "";
  };

  //? New Logic
  const handleChange = (e) => e.target.value;

  return {
    editProduct,
    loading,
    imageCoverLogic: { imageCover, selectImageCover, deleteImageCover },
    productImagesLogic: {
      productImages,
      selectMultipleImages,
      deleteProductImage,
    },
    nameRef,
    descriptionRef,
    quantityRef,
    priceRef,
    soldPriceRef,
    subCategoriesLogic: {
      budges,
      subCategories,
      addSubCategory,
    },
    MainCategoryLogic: {
      categories,
      mainCategory,
      selectMainCategory,
    },
    brandsLogic: {
      brands,
      selectedBrand,
      selectNewBrand,
    },
    colorsLogic: {
      colors,
      addColor,
      deleteColor,
      availColors,
    },
  };
};
