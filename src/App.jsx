import { Outlet } from "react-router-dom";
import Header from "./components/Utility/Header";
import Footer from "./components/Utility/Footer";
import "./tailwind.css";
import "react-toastify/dist/ReactToastify.css"; //? Notification Styles

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
