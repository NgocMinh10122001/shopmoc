"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IHeaderCategory } from "../type/types";

export default function HeaderCategory({
  title,
  currentP,
  totalP,
}: IHeaderCategory) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="max-lg:flex-col max-lg:gap-4 header-category w-full flex items-center justify-between">
      <div className="left">
        <h2 className="text-black font-bold text-2xl uppercase mb-1 max-lg:text-center">
          {title}
        </h2>
        <div className="flex items-center gap-2 text-light-gray">
          <Link href={"/"}>
            <span className="text-xs font-light uppercase">Trang chủ</span>
          </Link>
          <span className="font-light">/</span>
          <span className="text-black font-semibold text-xs tracking-wide uppercase">
            {title}
          </span>
        </div>
      </div>
      <div className="right flex max-sm:flex-col items-center gap-4 text-black max-w-full">
        <span className="font-light text-base">
          Hiển thị {currentP} của {totalP} kết quả
        </span>
        <form className="px-3 py-2  shadow-md rounded-sm overflow-hidden bg-white max-w-full ring-1 ring-gray-300 w-[240px]">
          <select
            id="options"
            value={selectedValue}
            onChange={handleChange}
            className="outline-none  bg-transparent w-full font-light text-base tracking-wide text-light-gray"
          >
            <option value="" disabled>
              Mới nhất
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </form>
      </div>
    </div>
  );
}
