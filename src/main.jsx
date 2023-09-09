import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouteProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Chair from "./pages/Chair.jsx";
import Tabel from "./pages/Tabel.jsx";
import Sofa from "./pages/Sofa.jsx";

const route = createBrowserRouter([
  {
    path: "/react-vite-ecommerce/",
    element: <App />,
    children: [
      {
        path: "/react-vite-ecommerce/",
        element: <Home />,
      },
      {
        path: "/react-vite-ecommerce/chair",
        element: <Chair />,
      },

      {
        path: "/react-vite-ecommerce/sofa",
        element: <Sofa />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouteProvider router={route} />
  </React.StrictMode>
);
