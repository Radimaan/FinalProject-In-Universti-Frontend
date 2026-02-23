import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

const ProductZoom = () => {
  const Zoom = InnerImageZoom.default || InnerImageZoom; // <- Tani ayaa saxaysa React 19 issue
  return (
    <>
      <Zoom
        src="https://api.spicezgold.com/download/file_1734528862995_deel-band-women-rayon-embroidered-kurta-pant-dupatta-set-product-images-rvotwal6de-0-202404071601.webp"
        
        zoomType="hover"
        zoomScale={1.5}
      />
    </>
  );
};

export default ProductZoom;