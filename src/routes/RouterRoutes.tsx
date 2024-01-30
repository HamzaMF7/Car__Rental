import { Routes, Route } from "react-router";
import Home from "../pages/Home";
import About from "../pages/About";
import Cars from "../pages/Cars";
import CarDetails from "../pages/CarDetails";
import Contact from "../pages/Contact";
import ErrorPage from "../pages/ErrorPage";
import useScrollRestore from "../hooks/useScrollRestore";
import Payement from "../pages/Payement";

const RouterRoutes = () => {
  useScrollRestore();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/car-details/:id" element={<CarDetails />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/payement" element={<Payement />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default RouterRoutes;
