import { useStore } from "../../../hooks/useStore";
import { useState, useRef, useEffect } from "react";
import notify from "../../../utils/notifcation";

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

export default function AdminAddProductHook() {
  //? Global Store
  const {
    subCategories,
    loading,
    allCategories: { data: categories },
    allBrands: { data: brands },
    getAllCategories,
    getAllBrands,
    getAllSubCategoriesOnCategory,
    createNewProduct,
  } = useStore();

  //? Use States
  const [imageCover, setImageCover] = useState(""); //> Image Cover State
  const [productImages, setProductImages] = useState([]); //> Product Images State
  const [mainCategory, setMainCategory] = useState(""); //> Main Category State
  const [budges, setBudges] = useState([]); //> Selected Subcategories State
  const [selectedBrand, setSelectedBrand] = useState(""); //> Selected Subcategories State
  const [availColors, setAvailColors] = useState([]); //> Available Colors State

  //? Use Ref
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const quantityRef = useRef("");
  const priceRef = useRef("");
  const soldPriceRef = useRef("");

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
    getAllCategories();
    getAllBrands();
  }, []);

  useEffect(() => {
    if (mainCategory !== "") getAllSubCategoriesOnCategory(mainCategory);
  }, [mainCategory]);

  //? Handle Submit Function
  const sendData = async (e) => {
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

    const formData = new FormData(e.target);

    //> Add Product Images
    productImages.forEach((img) => formData.append("images", img));

    formData.append("category", mainCategory); //> Main Category
    formData.append("brand", selectedBrand); //> Main Brand

    //> Add Subcategories If It Exist
    if (budges.length > 0)
      budges.forEach((sub) => formData.append("subcategory", sub));

    availColors.forEach((clr) => formData.append("availableColors", clr));

    const response = await createNewProduct(formData);

    console.log(response);

    if (response.status === 400) notify("error", "هذا الاسم موجود مسبقا");
    if (response.status === 500) notify("error", "نعتذر يوجد خطأ في المخدم");
    if (response.status === 201) {
      notify("done");
      clearAllData();
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

  return {
    sendData,
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
}
