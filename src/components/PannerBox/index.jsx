import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const PannerBOx = ({ img, productname, description, price }) => {
  return (
    <div className="relative overflow-hidden rounded-lg group">

      <Link to="/">
        <img
          src={img}
          alt={productname}
          className="w-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-4"
        />
      </Link>

      <div
        className="
          absolute inset-0 flex flex-col items-center justify-center
          bg-[rgba(0,0,0,0.6)]
          text-white text-center px-4
          opacity-0 translate-y-full
          transition-all duration-500
          group-hover:opacity-100 group-hover:translate-y-0
        "
      >
        <h2 className="text-xl font-semibold mb-2">
          {productname}
        </h2>

        <p className="mb-2 text-sm">
          {description}
        </p>

        <p className="font-bold text-lg text-orange-400">
          {price}
        </p>

        <Button className=" border-2 border-amber-700 font-semibold text-sm">VIew All</Button>
      </div>

    </div>
  );
};

export default PannerBOx;
