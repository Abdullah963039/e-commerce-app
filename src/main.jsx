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

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/categories",
        element: <AllCategeories />,
      },
      {
        path: "/brands",
        element: <AllBrands />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: "",
            index: true,
            element: <AllProducts />,
          },
          {
            path: ":id",
            element: <ProductDetailsPage />,
          },
        ],
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
