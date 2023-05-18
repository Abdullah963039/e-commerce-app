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
import { getLocal } from "./utils/getValueFromStorage";

function App() {
  const { getLoggedUser } = useStore();

  //? Get Logged User
  useEffect(() => {
    const userId = getLocal("user");
    const getUser = async () => {
      const response = await getLoggedUser(userId);
    };

    if (userId == null) return;
    getUser();

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
