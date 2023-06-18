import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./utils";

//? Authentication
import {
  Login,
  Register,
  ForgetPassword,
  ResetPassword,
  VerifyResetCode,
} from "./pages/Auth";

//? Components
import { AllProducts, Products, ProductDetailsPage } from "./pages/Product";
import { AllBrands, AllCategeories, Cart, Home, PaymentPage } from "./pages";
import App from "./App";

// ? Admin Pages
import {
  AdminAddCoponPage,
  AdminAddBrandPage,
  AdminAddCategoryPage,
  AdminAddProductPage,
  AdminAddSubCategoryPage,
  AdminAllOrdersPage,
  AdminAllProducts,
  AdminCoponsPage,
  AdminEditCoponPage,
  AdminEditProductPage,
  AdminOrderDetailsPage,
  AdminPage,
} from "./pages/Admin";

//? User Pages
import {
  UserAddAddressPage,
  UserAddressesPage,
  UserEditAddressPage,
  UserFavoriteProductsPage,
  UserOrdersPage,
  UserPage,
  UserProfilePage,
} from "./pages/User";

//? Application Routes
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <Navigate to={".."} replace />,
    children: [
      //? Home Page
      {
        index: true,
        element: <Home />,
      },
      //? Login Page
      {
        path: "/login",
        element: (
          <ProtectedRoute auth={false} to={"/"}>
            <Login />
          </ProtectedRoute>
        ),
      },
      //? Register Page
      {
        path: "/register",
        element: (
          <ProtectedRoute auth={false} to={"/"}>
            <Register />
          </ProtectedRoute>
        ),
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
            element: <ProductDetailsPage />,
          },
        ],
      },
      //? Cart Page
      {
        path: "/cart",
        element: (
          <ProtectedRoute admin={false} to="..">
            <Cart />
          </ProtectedRoute>
        ),
      },
      //? Payment Page
      {
        path: "/paymethod",
        element: <PaymentPage />,
      },
      //? Adminstrator Page
      {
        path: "/admin",
        element: (
          <ProtectedRoute admin={true} to="..">
            <AdminPage />
          </ProtectedRoute>
        ),
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
      //? User Page
      {
        path: "/user",
        element: (
          <ProtectedRoute admin={false} to="..">
            <UserPage />
          </ProtectedRoute>
        ),
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
                path: "edit/:addressId",
                element: <UserEditAddressPage />,
              },
            ],
          },
        ],
      },
    ],
  },
];

// Create the routes
export const router = createBrowserRouter(routes);
