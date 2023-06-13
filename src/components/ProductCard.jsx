import React from "react";
import { RatingStarIcon } from "./Icons";

const ProductCard = (props) => {
  return (
    <div className="max-w-[167px] py-3 rounded-xl border border-solid border-slate-300">
      <div className={`w-[164px] h-[162px]`}>
        <img src={props.product.image} className="w-[164px] h-[162px] object-contain"/>
      </div>
      <div className="mt-2 px-4 flex flex-col gap-2">
        <h3 className="text-md font-medium text-neutral-600">
          {props.product.title}
        </h3>
        <p className="text-[18px] font-semibold text-primary">
          ${props.product.price}
        </p>
        <p className="text-sm text-neutral-500">{props.product.category}</p>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-2 px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium">
            <RatingStarIcon />
            {props.product.rating.rate}
          </div>
          <p className="text-sm font-medium text-neutral-500">
            {props.product.rating.count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;