// hooks
import { useEffect } from "react";
import { useStore } from "./hooks";

// components
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Header, Footer } from "./components/Utility";
import Cookies from "js-cookie";

// styles
import "./tailwind.css";
import "react-toastify/dist/ReactToastify.css"; //? Notification Styles

function App() {
  const { getLoggedUser, getLoggedUserCart } = useStore();

  //? Get Logged User
  useEffect(() => {
    const getUser = async () => {
      const userResponse = await getLoggedUser();
      if (userResponse?.role !== "admin") {
        const cartResponse = await getLoggedUserCart();
      }
    };

    if (localStorage.getItem("token") != null) {
      Cookies.set("is_user_logged", "true");
      getUser();
      return;
    } else {
      Cookies.set("is_user_logged", "false");
      return;
    }

    return () => {};
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />

      <ToastContainer rtl />
    </>
  );
}

export default App;
