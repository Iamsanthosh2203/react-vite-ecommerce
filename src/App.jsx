import Nav from "./constant/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Sofa from "./pages/Sofa";
import Chair from "./pages/Chair";
import Tabel from "./pages/Tabel";

import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Nav />
      <Routers>
        <Routes>
          <Route path="react-vite-ecommerce/" element={<Home />} />
          <Route path="react-vite-ecommerce/products" element={<Products />} />
          <Route path="react-vite-ecommerce/sofa" element={<Sofa />} />
          <Route path="react-vite-ecommerce/chair" element={<Chair />} />
          <Route path="react-vite-ecommerce/table" element={<Tabel />} />
        </Routes>
      </Routers>
    </>
  );
}
