// hooks
import { useEffect } from "react";
import { useStore } from "./hooks/useStore";

// components
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/Utility/Header";
import Footer from "./components/Utility/Footer";

// styles
import "./tailwind.css";
import "react-toastify/dist/ReactToastify.css"; //? Notification Styles

// utils
import { getLocal } from "./utils/getValueFromStorage"; //todo

function App() {
  const { getLoggedUser } = useStore();

  //? Get Logged User
  useEffect(() => {
    const getUser = async () => {
      const response = await getLoggedUser();
    };

    if (localStorage.getItem("token") != null) getUser();

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
