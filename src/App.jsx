import { Outlet } from "react-router-dom";
import Header from "./components/Utility/Header";
import Footer from "./components/Utility/Footer";
import "./tailwind.css";

function App() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
