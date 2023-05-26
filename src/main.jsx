// React
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Loading } from "./components/Utility/Loading";

// Components
import App from "./App";
//? Home
import Home from "./pages/Home/Home";
//? Authentication
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import VerifyResetCode from "./pages/Auth/VerifyResetCode";
//? Components
import AllCategeories from "./pages/Category/AllCategeories";
import AllBrands from "./pages/Brands/AllBrands";
import Products from "./pages/Product/Products";
import AllProducts from "./pages/Product/AllProducts";
const ProductDetailsPage = lazy(() =>
  import("./pages/Product/ProductDetailsPage")
);
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
import AdminEditProductPage from "./pages/Admin/AdminEditProductPage";
import AdminAddCoponPage from "./pages/Admin/AdminAddCoponPage";
import AdminEditCoponPage from "./pages/Admin/AdminEditCoponPage";
//? User Pages
import UserPage from "./pages/User/UserPage";
import UserProfilePage from "./pages/User/UserProfilePage";
import UserOrdersPage from "./pages/User/UserOrdersPage";
import UserFavoriteProductsPage from "./pages/User/UserFavoriteProductsPage";
import UserAddAddressPage from "./pages/User/UserAddAddressPage";
import UserAddressesPage from "./pages/User/UserAddressesPage";
import UserEditAddressPage from "./pages/User/UserEditAddressPage";
import AdminCoponsPage from "./pages/Admin/AdminCoponsPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //? Home Page
      {
        index: true,
        element: <Home />,
      },
      //? Login Page
      {
        path: "/login",
        element: <Login />,
      },
      //? Register Page
      {
        path: "/register",
        element: <Register />,
      },
      //? Forget Password Page
      {
        path: "/forget-password",
        element: <ForgetPassword />,
      },
      //? Verify Reset Code Page
      {
        path: "/verify-code",
        element: <VerifyResetCode />,
      },
      //? Reset Password Page
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
      //? All Categories Page
      {
        path: "/categories",
        element: <AllCategeories />,
      },
      //? All Brands Page
      {
        path: "/brands",
        element: <AllBrands />,
      },
      //? Products Page
      {
        path: "/products",
        element: <Products />,
        children: [
          //? All Products Page
          {
            index: true,
            element: <AllProducts />,
          },
          //? Product Details Page
          {
            path: ":productId",
            element: (
              <Suspense fallback={<Loading />}>
                <ProductDetailsPage />
              </Suspense>
            ),
          },
        ],
      },
      //? Cart Page
      {
        path: "/cart",
        element: <Cart />,
      },
      //? Payment Page
      {
        path: "/paymethod",
        element: <PaymentPage />,
      },
      //? Adminstrator Page
      {
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
          {
            //? Adminstrator Add Product Page
            path: "edit-product/:productId",
            element: <AdminEditProductPage />,
          },
          {
            //? Adminstrator Copons Page
            path: "copons",
            element: <AdminCoponsPage />,
          },
          {
            //? Adminstrator Add Copon Page
            path: "add-copon",
            element: <AdminAddCoponPage />,
          },
          {
            //? Adminstrator Edit Copon Page
            path: "edit-copon/:coponId",
            element: <AdminEditCoponPage />,
          },
        ],
      },
      {
        //? User Page
        path: "/user",
        element: <UserPage />,
        children: [
          //? User Profile Page
          {
            index: true,
            element: <UserProfilePage />,
          },
          //? User Orders Page
          {
            path: "orders",
            element: <UserOrdersPage />,
          },
          //? User Favorites Page
          {
            path: "favorites",
            element: <UserFavoriteProductsPage />,
          },
          //? User Address Page
          {
            path: "address",
            children: [
              {
                index: true,
                element: <UserAddressesPage />,
              },
              //? User Add New Address Page
              {
                path: "add-address",
                element: <UserAddAddressPage />,
              },
              //? User Edit Address Page
              {
                path: "edit", // todo Must Be Child Route
                element: <UserEditAddressPage />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
