// React
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import App from "./App";
import Home from "./pages/Home/Home";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import AllCategeories from "./pages/Category/AllCategeories";
import AllBrands from "./pages/Brands/AllBrands";
import Products from "./pages/Product/Products";
import AllProducts from "./pages/Product/AllProducts";
import ProductDetailsPage from "./pages/Product/ProductDetailsPage";
import Cart from "./pages/Cart/Cart";
import PaymentPage from "./pages/Payment/PaymentPage";
// ? Admin Pages
import AdminPage from "./pages/Admin/AdminPage";
import AdminAllProducts from "./pages/Admin/AdminAllProducts";
import AdminAllOrdersPage from "./pages/Admin/AdminAllOrdersPage";
import AdminAddBrandPage from "./pages/Admin/AdminAddBrandPage";
import AdminOrderDetailsPage from "./pages/Admin/AdminOrderDetailsPage";
import AdminAddCategoryPage from "./pages/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./pages/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./pages/Admin/AdminAddProductPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        //? Home Page
        index: true,
        element: <Home />,
      },
      {
        //? Login Page
        path: "/login",
        element: <Login />,
      },
      {
        //? Register Page
        path: "/register",
        element: <Register />,
      },
      {
        //? All Categories Page
        path: "/categories",
        element: <AllCategeories />,
      },
      {
        //? All Brands Page
        path: "/brands",
        element: <AllBrands />,
      },
      {
        //? Products Page
        path: "/products",
        element: <Products />,
        children: [
          {
            //? All Products Page
            index: true,
            element: <AllProducts />,
          },
          {
            //? Product Details Page
            path: ":id",
            element: <ProductDetailsPage />,
          },
        ],
      },
      {
        //? Cart Page
        path: "/cart",
        element: <Cart />,
      },
      {
        //? Payment Page
        path: "/paymethod",
        element: <PaymentPage />,
      },
      {
        //? Adminstrator Page
        path: "/admin",
        element: <AdminPage />,
        children: [
          {
            //? Adminstrator Page
            index: true,
            element: <AdminAllProducts />,
          },
          {
            path: "orders",
            children: [
              {
                //? Adminstrator Orders Page
                index: true,
                element: <AdminAllOrdersPage />,
              },
              {
                //? Adminstrator Order Details Page
                path: ":orderId",
                element: <AdminOrderDetailsPage />,
              },
            ],
          },
          {
            //? Adminstrator Add Brand Page
            path: "add-brand",
            element: <AdminAddBrandPage />,
          },
          {
            //? Adminstrator Add Category Page
            path: "add-category",
            element: <AdminAddCategoryPage />,
          },
          {
            //? Adminstrator Add Sub Category Page
            path: "add-sub-category",
            element: <AdminAddSubCategoryPage />,
          },
          {
            //? Adminstrator Add Product Page
            path: "add-product",
            element: <AdminAddProductPage />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
