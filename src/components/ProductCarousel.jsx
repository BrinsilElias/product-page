import React from "react";
import ProductCard from "./ProductCard";

const ProductCarousel = () => {
  return (
    <div className="px-4 mt-10">
      <h2 className="text-[24px] font-semibold text-slate-800">
        Other items you might also like
      </h2>
      <div className="mt-6">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductCarousel;
