import { Outlet } from "react-router-dom";
import Header from "./components/Utility/Header";
import Footer from "./components/Utility/Footer";
import "./tailwind.css";
import "react-toastify/dist/ReactToastify.css"; //? Notification Styles
import { ToastContainer } from "react-toastify";

function App() {
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
