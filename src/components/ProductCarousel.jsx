import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { NextArrow, PreviousArrow } from "./Icons";

const ProductCarousel = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const products = props.products_data;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const showPrevButton = currentIndex > 0;
  const showNextButton = currentIndex < products.length - 1;

  return (
    <div className="px-4 mt-10 lg:max-w-[1100px] lg:mx-auto">
      <h2 className="text-[24px] font-semibold text-slate-800">
        Other items you might also like
      </h2>
      <div className="mt-6 flex items-center justify-between">
        {showPrevButton && (
          <button
            className="p-2 border border-solid border-slate-300 rounded-full"
            onClick={handlePrev}
          >
            <PreviousArrow />
          </button>
        )}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {products.map((product, index) => (
              <div key={product.id} className="w-full px-2">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        {showNextButton && (
          <button
            className="p-2 border border-solid border-slate-300 rounded-full"
            onClick={handleNext}
          >
            <NextArrow />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCarousel;
