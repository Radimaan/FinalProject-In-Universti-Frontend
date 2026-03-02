import { useState, createContext } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/routet";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import { IoCloseSharp } from "react-icons/io5";
import ProductZoom from "./components/ProductZoom";
import ProductDetailsComponent from "./components/ProductDetails/inde";

import toast, { Toaster } from 'react-hot-toast';


export const MyContext = createContext();

function App() {
  const [openProductDetailsModel, setOpenProductDetailsModel] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState("lg");

  const [openCartPanel, setOpenCartPanel] = useState(false);


  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };

  const handleClickCloseProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const handleProductDetailsModel = () => {
    setOpenProductDetailsModel(false);
  };

  const OpenAleartBox = (Status, msg) => {
    if (Status === "Success") {
      toast.success(msg || "Action was successful!");
    } else if (Status === "Error") {
      toast.error(msg || "An error occurred. Please try again.");
    } else {
      toast(Status);
    }

  }

  const values = {

    setOpenProductDetailsModel,
    setOpenCartPanel,
    toggleCartPanel,
    openCartPanel,
    OpenAleartBox
  };

  return (

    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />



        <Dialog
          onClose={handleProductDetailsModel}
          aria-labelledby="customized-dialog-title"
          open={openProductDetailsModel}
          className="ProductDetailsModel"
          fullWidth={fullWidth}
          maxWidth={maxWidth}
        >



          <DialogContent dividers>
            <div className="flex items-center w-full ProductDetailsModelContainer relative gap-8
           ">
              <Button className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-black !absolute top-0 right-0 !bg-[#f1f1f1]" onClick={handleClickCloseProductDetailsModel}><IoCloseSharp className="!text-[20px]" /></Button>
              <div className="col1 w-[40%]">
                <ProductZoom />
              </div>
              <div className="col2  ">
                <ProductDetailsComponent />

              </div>
            </div>
          </DialogContent>

        </Dialog>

        <Toaster />

      </MyContext.Provider>


    </>
  );
}

export default App;