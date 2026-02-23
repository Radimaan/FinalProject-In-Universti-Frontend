import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from ".././components/Header/Header"
import Home from "../Pages/Home/Home";
import ProductLisiting from "../Pages/ProductLiting";
import Footer from "../components/Footer";
import ProductDelails from "../Pages/ProductDetails";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "ProductListing",
        element: <ProductLisiting />,
      },
      {
        path : '/ProductDetaills/:id',
        element : <ProductDelails/>
      }
    ],
  },
]);