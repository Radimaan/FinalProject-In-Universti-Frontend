import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from ".././components/Header/Header"
import Home from "../Pages/Home/Home";
import ProductLisiting from "../Pages/ProductLiting";
import Footer from "../components/Footer";
import ProductDelails from "../Pages/ProductDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import { Car } from "lucide-react";
import CartPage from "../Pages/Cart";
import VerifyPage from "../Pages/Veryfy";
import ForgetPassword from "../Pages/ForgetPassword";
import CheckOut from "../Pages/CheckOut";
import MyAccount from "../Pages/MyAccount";
import MyList from "../Pages/My-List";

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
      },
      {
        path : '/Login',
        element : <Login/>
      },
      {
        path : '/Register',
        element : <Register/>
      },
      {
        path : '/cart',
        element :<CartPage/>
      },
      {
        path : '/Verify',
        element : <VerifyPage/>
      },
      {
        path : 'ForgetPassword',
        element : <ForgetPassword/>
      },
      {
        path : '/CheckOut',
        element : <CheckOut/>
      },
      {
        path : '/my-account',
        element : <MyAccount/>
      },
      {
        path : '/my-wishlist',
        element : <MyList/>
      }


    ],
  },
]);