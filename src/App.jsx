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
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sofa" element={<Sofa />} />
          <Route path="/chair" element={<Chair />} />
          <Route path="/table" element={<Tabel />} />
        </Routes>
      </Routers>
    </>
  );
}
