import React from "react";
import { ArrowIcon } from "./Icons";

const Breadcrumbs = () => {
  return (
    <div className="px-4 mb-8 flex items-center gap-2 max-w-[400px] mx-auto md:max-w-none md:px-16 lg:max-w-[1200px] lg:mx-auto">
      <p className="text-sm text-slate-400">Category</p>
      <ArrowIcon />
      <p className="text-sm text-slate-400">Men's Clothing</p>
      <ArrowIcon />
      <p className="text-sm text-slate-400">Bags</p>
      <ArrowIcon />
      <p className="text-sm font-semibold text-primary">Backpack</p>
    </div>
  );
};

export default Breadcrumbs;
