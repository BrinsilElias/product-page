import axios from "axios";
import Product from "../components/Product";
import React, { useState, useEffect } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { EmptyStateIcon } from "../components/Icons";
import ProductCarousel from "../components/ProductCarousel";

const ProductSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <div className="py-10 mx-auto">
          <Breadcrumbs />
          <Product product_data={data[0]} />
          <ProductCarousel products_data={data} />
        </div>
      ) : (
        <div className="h-screen flex items-center justify-center flex-col">
          <EmptyStateIcon />
          <p className="text-md font-semibold text-slate-800 mt-3">No Data Available</p>
          <p className="text-sm text-neutral-500">Server down, data cannot be fetched</p>
        </div>
      )}
    </>
  );
};

export default ProductSection;
