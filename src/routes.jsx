import React, { Suspense } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { lazily } from "react-lazily";

import App from "./App";

import { Loading, ProtectedRoute } from "./components/Utility";

//? Authentication
const Auth = lazily(() => import("./pages/Auth"));
const Admin = lazily(() => import("./pages/Admin"));
const User = lazily(() => import("./pages/User"));

//? Components
const { AllProducts, Products, ProductDetailsPage } = lazily(() =>
  import("./pages/Product")
);
const { AllBrands, AllCategeories, Cart, Home, PaymentPage } = lazily(() =>
  import("./pages")
);

//? Application Routes
const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <>{(err) => JSON.stringify(err)}</>,
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
            <Suspense fallback={<Loading />}>
              <Auth.Login />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      //? Register Page
      {
        path: "/register",
        element: (
          <ProtectedRoute user={"false"} href={"/"}>
            <Suspense fallback={<Loading />}>
              <Auth.Register />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      //? Forget Password Page
      {
        path: "/forget-password",
        element: (
          <ProtectedRoute user="false" href="/">
            <Suspense fallback={<Loading />}>
              <Auth.ForgetPassword />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      //? Verify Reset Code Page
      {
        path: "/verify-code",
        element: (
          <ProtectedRoute user="false" href="/">
            <Suspense fallback={<Loading />}>
              <Auth.VerifyResetCode />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      //? Reset Password Page
      {
        path: "/reset-password",
        element: (
          <ProtectedRoute user="false" href="/">
            <Suspense fallback={<Loading />}>
              <Auth.ResetPassword />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      //? All Categories Page
      {
        path: "/categories",
        element: (
          <Suspense fallback={<Loading />}>
            <AllCategeories />
          </Suspense>
        ),
      },
      //? All Brands Page
      {
        path: "/brands",
        element: (
          <Suspense fallback={<Loading />}>
            <AllBrands />
          </Suspense>
        ),
      },
      //? Products Page
      {
        path: "/products",
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
        children: [
          //? All Products Page
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <AllProducts />
              </Suspense>
            ),
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
        element: (
          <ProtectedRoute role="user" href="..">
            <Suspense fallback={<Loading />}>
              <Cart />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      //? Payment Page
      {
        path: "/paymethod",
        element: (
          <ProtectedRoute role="user" href="..">
            <Suspense fallback={<Loading />}>
              <PaymentPage />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      //? Adminstrator Page
      {
        path: "/admin",
        element: (
          <ProtectedRoute role="admin" href="..">
            <Suspense fallback={<Loading />}>
              <Admin.AdminPage />
            </Suspense>
          </ProtectedRoute>
        ),
        children: [
          {
            //? Adminstrator Page
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <Admin.AdminAllProducts />
              </Suspense>
            ),
          },
          {
            path: "orders",
            children: [
              {
                //? Adminstrator Orders Page
                index: true,
                element: (
                  <Suspense fallback={<Loading />}>
                    <Admin.AdminAllOrdersPage />
                  </Suspense>
                ),
              },
              {
                //? Adminstrator Order Details Page
                path: ":orderId",
                element: (
                  <Suspense fallback={<Loading />}>
                    <Admin.AdminOrderDetailsPage />
                  </Suspense>
                ),
              },
            ],
          },
          {
            //? Adminstrator Add Brand Page
            path: "add-brand",
            element: (
              <Suspense fallback={<Loading />}>
                <Admin.AdminAddBrandPage />
              </Suspense>
            ),
          },
          {
            //? Adminstrator Add Category Page
            path: "add-category",
            element: (
              <Suspense fallback={<Loading />}>
                <Admin.AdminAddCategoryPage />
              </Suspense>
            ),
          },
          {
            //? Adminstrator Add Sub Category Page
            path: "add-sub-category",
            element: (
              <Suspense fallback={<Loading />}>
                <Admin.AdminAddSubCategoryPage />
              </Suspense>
            ),
          },
          {
            //? Adminstrator Add Product Page
            path: "add-product",
            element: (
              <Suspense fallback={<Loading />}>
                <Admin.AdminAddProductPage />
              </Suspense>
            ),
          },
          {
            //? Adminstrator Add Product Page
            path: "edit-product/:productId",
            element: (
              <Suspense fallback={<Loading />}>
                <Admin.AdminEditProductPage />
              </Suspense>
            ),
          },
          {
            //? Adminstrator Copons Page
            path: "copons",
            element: (
              <Suspense fallback={<Loading />}>
                <Admin.AdminCoponsPage />
              </Suspense>
            ),
          },
          {
            //? Adminstrator Add Copon Page
            path: "add-copon",
            element: (
              <Suspense fallback={<Loading />}>
                <Admin.AdminAddCoponPage />
              </Suspense>
            ),
          },
          {
            //? Adminstrator Edit Copon Page
            path: "edit-copon/:coponId",
            element: (
              <Suspense fallback={<Loading />}>
                <Admin.AdminEditCoponPage />
              </Suspense>
            ),
          },
        ],
      },
      //? User Page
      {
        path: "/user",
        element: (
          <ProtectedRoute role="user" href="..">
            <Suspense fallback={<Loading />}>
              <User.UserPage />
            </Suspense>
          </ProtectedRoute>
        ),
        children: [
          //? User Profile Page
          {
            index: true,
            element: (
              <Suspense fallback={<Loading />}>
                <User.UserProfilePage />
              </Suspense>
            ),
          },
          //? User Orders Page
          {
            path: "orders",
            element: (
              <Suspense fallback={<Loading />}>
                <User.UserOrdersPage />
              </Suspense>
            ),
          },
          //? User Favorites Page
          {
            path: "favorites",
            element: (
              <Suspense fallback={<Loading />}>
                <User.UserFavoriteProductsPage />
              </Suspense>
            ),
          },
          //? User Address Page
          {
            path: "address",
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<Loading />}>
                    <User.UserAddressesPage />
                  </Suspense>
                ),
              },
              //? User Add New Address Page
              {
                path: "add-address",
                element: (
                  <Suspense fallback={<Loading />}>
                    <User.UserAddAddressPage />
                  </Suspense>
                ),
              },
              //? User Edit Address Page
              {
                path: "edit/:addressId",
                element: (
                  <Suspense fallback={<Loading />}>
                    <User.UserEditAddressPage />
                  </Suspense>
                ),
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
