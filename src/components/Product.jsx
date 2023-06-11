import React from "react";
import Counter from "./Counter";
import * as RadioGroup from "@radix-ui/react-radio-group";
import {
  BookmarkIcon,
  ShareIcon,
  RatingStarIcon,
  ReviewIcon,
  BagIcon,
  DeliveryBagIcon,
  TruckIcon
} from "./Icons";

const Product = () => {
  return (
    <div>
      {/* Product Image */}
      <div className="px-16 w-[390px] h-[380px]">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
        />
      </div>
      {/* Product Details */}
      <div className="px-4 mt-8">
        {/* Product Actions */}
        <div className="flex items-center gap-3">
          <button className="bg-secondary p-[7px] rounded-md">
            <BookmarkIcon />
          </button>
          <button className="bg-secondary p-[7px] rounded-md">
            <ShareIcon />
          </button>
        </div>
        {/* Product Descriptions */}
        <div className="py-5 border-b border-solid border-slate-300">
          <h1 className="text-[21px] font-medium text-neutral-800">
            Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
          </h1>
          <h2 className="mt-2 text-md text-slate-400">Fjallaraven</h2>
          <p className="mt-3 text-sm text-neutral-800">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </p>
        </div>
        {/* Product Pricing */}
        <div className="py-5 border-b border-solid border-slate-300">
          <div>
            <p className="text-[28px] font-bold text-primary">$109.56</p>
            <p className="text-md text-neutral-500 line-through">$71.56</p>
          </div>
          <div className="mt-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium">
                <RatingStarIcon />
                3.9
              </div>
              <div className="flex items-center gap-2 px-2 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
                <ReviewIcon />
                120 Reviews
              </div>
            </div>
            <p className="text-sm text-slate-400 mt-3">
              <span className="font-medium text-green-700">93%</span> of buyers
              have recommended this.
            </p>
          </div>
        </div>
        {/* Product Size Select */}
        <div className="py-5 border-b border-solid border-slate-300">
          <p className="text-md text-slate-400">Choose a size</p>
          <form className="flex items-center gap-3 mt-3">
            <RadioGroup.Root aria-label="size options">
              <div className="flex items-center gap-2 rounded-lg py-2 px-3">
                <RadioGroup.Item
                  className="w-4 h-4 aspect-square rounded-full border border-solid border-neutral-600"
                  value="small"
                  id="r1"
                >
                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-primary" />
                </RadioGroup.Item>
                <label
                  className="text-sm font-medium text-neutral-600"
                  htmlFor="r1"
                >
                  Small
                </label>
              </div>
              <div className="flex items-center gap-2 rounded-lg py-2 px-3">
                <RadioGroup.Item
                  className="w-4 h-4 aspect-square rounded-full border border-solid border-neutral-600"
                  value="medium"
                  id="r2"
                >
                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-primary" />
                </RadioGroup.Item>
                <label
                  className="text-sm font-medium text-neutral-600"
                  htmlFor="r2"
                >
                  Medium
                </label>
              </div>
              <div className="flex items-center gap-2 rounded-lg py-2 px-3">
                <RadioGroup.Item
                  className="w-4 h-4 aspect-square rounded-full border border-solid border-neutral-600"
                  value="large"
                  id="r3"
                >
                  <RadioGroup.Indicator className="flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-[11px] after:h-[11px] after:rounded-[50%] after:bg-primary" />
                </RadioGroup.Item>
                <label
                  className="text-sm font-medium text-neutral-600"
                  htmlFor="r3"
                >
                  Large
                </label>
              </div>
            </RadioGroup.Root>
          </form>
        </div>
        {/* Product Action Group */}
        <div className="py-5 flex items-center gap-4">
          <Counter />
          <button
            type="button"
            className="inline-flex items-center gap-3 p-4 rounded-full bg-primary text-white text-md font-semibold"
          >
            <BagIcon />
            Add To Cart
          </button>
        </div>
        {/* Delivery Section */}
        <div className="p-4 rounded-xl border border-solid border-slate-300">
            <div className="flex items-start gap-3 pb-5 border-b border-solid border-slate-300">
                <TruckIcon />
                <div>
                    <p className="text-md font-semibold text-slate-800">Free Delivery</p>
                    <p className="text-sm text-neutral-600 underline">Enter your Postal code for Delivery Availability</p>
                </div>
            </div>
            <div className="flex items-start gap-3 mt-5">
                <DeliveryBagIcon />
                <div>
                    <p className="text-md font-semibold text-slate-800">Return Delivery</p>
                    <p className="text-sm text-neutral-600 underline">Free 30 days Delivery Return. Details</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
