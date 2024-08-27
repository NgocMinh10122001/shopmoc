"use client";
import React, { useState } from "react";
import TitleFilter from "./TitleFilter";
import Link from "next/link";
import { middle1, productsRecent } from "@/components/type/fakedata";
import ProductsRecent from "@/components/common/product/ProductsRecent";
import ReactSlider from "react-slider";
export default function Filter() {
  const [price, setPrice] = useState<number[]>([0, 1000000]);
  const handleChangePrice = (e: any) => {
    setPrice(e);
  };

  return (
    <div className="filter">
      <div className="filter-price">
        <TitleFilter title="Lọc theo giá" />
        <div className="pt-6 w-full slider-container">
           
       <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        min={0}
        max={1000000}
        step={1}
        value={price}
        onChange={handleChangePrice}
        renderThumb={(props, state) => <div {...props} className="thumb" />}
        renderTrack={(props, state) => <div {...props} className="track" />}
      />
          <div className="price-container w-full flex items-center justify-between mt-4">
            <button className="btn-filter-price bg-[#666] hover:bg-[#515151] duration-300 ease-in-out rounded-full px-4 py-2 font-bold tracking-wider uppercase text-xs">
              Lọc
            </button>
            <div className="price flex items-center gap-2 ">
              <p className="text-black font-semibold text-base ">
                <span className="font-light ">Giá</span>{" "}
                {price[0].toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}{" "}
              </p>
              <p className="text-black ">-</p>
              <p className="text-black font-semibold text-base ">
                {price[1].toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="cate-product mt-9">
        <TitleFilter title="Danh mục sản phẩm" />
        <ul className=" pt-3">
          {middle1 &&
            middle1.length > 0 &&
            middle1.map((item, index) => (
              <li className=" text-black py-2" key={index}>
                <Link
                  href={`${item.url}`}
                  className="text-deep-green font-light text-base tracking-wide  hover:text-violet-500 duration-300 ease-in-out uppercase"
                >
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      <div className="recent mt-9">
        <TitleFilter title="Sản phẩm vừa xem" />
        <div className="pt-3">
          <ProductsRecent productsRecent={productsRecent} />
        </div>
      </div>
    </div>
  );
}
