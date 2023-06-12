import React from "react";
import Product from "../components/Product";
import ProductCarousel from "../components/ProductCarousel";
import Breadcrumbs from "../components/Breadcrumbs";

const ProductSection = () => {
  return (
    <div className="py-10 mx-auto">
      <Breadcrumbs />
      <Product />
      <ProductCarousel />
    </div>
  );
};

export default ProductSection;
