import React from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/Utility";

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
          <ProtectedRoute user={"false"} href={"/"}>
            <Login />
          </ProtectedRoute>
        ),
      },
      //? Register Page
      {
        path: "/register",
        element: (
          <ProtectedRoute user={"false"} href={"/"}>
            <Register />
          </ProtectedRoute>
        ),
      },
      //? Forget Password Page
      {
        path: "/forget-password",
        element: (
          <ProtectedRoute user="false" href="/">
            <ForgetPassword />
          </ProtectedRoute>
        ),
      },
      //? Verify Reset Code Page
      {
        path: "/verify-code",
        element: (
          <ProtectedRoute user="false" href="/">
            <VerifyResetCode />
          </ProtectedRoute>
        ),
      },
      //? Reset Password Page
      {
        path: "/reset-password",
        element: (
          <ProtectedRoute user="false" href="/">
            <ResetPassword />
          </ProtectedRoute>
        ),
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
          <ProtectedRoute role="user" href="..">
            <Cart />
          </ProtectedRoute>
        ),
      },
      //? Payment Page
      {
        path: "/paymethod",
        element: (
          <ProtectedRoute role="user" href="..">
            <PaymentPage />
          </ProtectedRoute>
        ), //todo Protect This route
      },
      //? Adminstrator Page
      {
        path: "/admin",
        element: (
          <ProtectedRoute role="admin" href="..">
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
          <ProtectedRoute role="user" href="..">
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
