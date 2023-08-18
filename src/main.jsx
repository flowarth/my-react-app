import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/login.jsx";
import RegisterPage from "./Pages/register.jsx";
import ErrorPage from "./Pages/404";
import PorductsPage from "./Pages/products.jsx";
import ProfilePage from "./Pages/profile.jsx";
import DetailProductPage from "./Pages/detailProducts.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import DarkModeContextProvider from "./context/DarkMode.jsx";
import {TotalPriceProvider} from "./context/TotalPrice.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/products",
    element: <PorductsPage />,
  },
  {
    path: "/product/:id",
    element: <DetailProductPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>
);
