import React from "react";
import Product from "../components/Product";
import Breadcrumbs from "../components/Breadcrumbs";

const ProductSection = () => {
  return (
    <div className="py-10 mx-auto">
      <Breadcrumbs />
      <Product />
    </div>
  );
};

export default ProductSection;
