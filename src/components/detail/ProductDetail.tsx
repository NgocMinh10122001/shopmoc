"use client";
import { Carousel } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { products } from "../type/fakedata";
const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
export default function ProductDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === products.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="product-detail container-m relative z-30 my-8">
      <div className="flex items-center gap-2 text-light-gray mb-8">
        <Link href={"/"}>
          <span className="text-xs font-light uppercase">Trang chủ</span>
        </Link>
        <span className="font-light">/</span>
        <Link href={"/"}>
          <span className="text-xs font-light uppercase">ĐỒ LƯU NIỆM MIXI</span>
        </Link>
      </div>
      <div className="detail grid grid-cols-12 gap-4">
        <div className="left col-span-7 grid grid-cols-12 gap-4">
          <div className="scroll col-span-3 grid gap-4 max-h-[728px] overflow-scroll">
            {products.map((item, index) => (
              <img
                src={`${item.thumbNailZoomOut}`}
                alt="noimg"
                className="w-full h-auto object-cover border-[1px] border-[#0000004d] cursor-pointer"
              />
            ))}
          </div>
          <div className=" w-full h-full  relative group col-span-9">
            <div
              style={{
                backgroundImage: `url(${products[currentIndex].thumbNailZoomOut})`,
              }}
              className="w-full h-[728px]  bg-center bg-cover duration-500"
            ></div>
            {/* <img
              src={`${products[currentIndex].thumbNailZoomOut}`}
              alt=""
              className="w-full h-[728px]  bg-center bg-cover duration-500"
            /> */}
            {/* Left Arrow */}
            <div className="opacity-0 group-hover:opacity-100 absolute top-[50%] -translate-x-0 translate-y-[-50%] left-3 text-2xl rounded-full  text-black cursor-pointer hover:text-deep-green duration-300 ease-in-out">
              <FaChevronLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className="opacity-0 group-hover:opacity-100 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 text-2xl rounded-full  text-black cursor-pointer hover:text-deep-green duration-300 ease-in-out">
              <FaChevronRight onClick={nextSlide} size={30} />
            </div>
          </div>
        </div>
        <div className="right col-span-5 h-[500px] bg-orange-500"></div>
      </div>
      <div className="comment"></div>
      <div className="same"></div>
    </div>
  );
}
