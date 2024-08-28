"use client";
import React, { useState } from "react";
import ListProDuct from "../common/product/ListProDuct";
import { IMainCategory } from "../type/types";
import Filter from "./filter/Filter";
import { Pagination } from "antd";
import { IoFilter } from "react-icons/io5";

export default function MainCategory({ ...props }: IMainCategory) {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <div className="main-category  grid grid-cols-4 gap-4 mt-10 lg:static overflow-hidden">
      {showFilter && (
        <div
          className="overlay absolute top-0 left-0 bottom-0 right-0 z-10 lg:hidden bg-gray-500 opacity-70 hover:cursor-pointer"
          onClick={() => setShowFilter(false)}
        ></div>
      )}
      <div className="col-span-4 flex justify-center lg:hidden">
        <div
          className="show-filter text-black flex items-center justify-between gap-4 lg:hidden text-lg font-bold px-4 py-2 tracking-wide uppercase  shadow-md rounded-sm overflow-hidden bg-white ring-1 ring-gray-300"
          onClick={() => setShowFilter(true)}
        >
          <IoFilter size={24} /> <p>Filter</p>
        </div>
      </div>
      <div
        className={`max-lg:absolute max-lg:z-20  max-lg:bg-[#fff] ${
          showFilter ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"
        } max-lg:p-4 left-0 top-0 bottom-0 lg:col-span-1 duration-300 max-sm:max-w-[70%]`}
      >
        <Filter />
      </div>
      <div className="col-span-4 lg:col-span-3 z-0">
        <ListProDuct
          products={props.products}
          style={"grid-cols-2 md:grid-cols-3  mt-0"}
        />
        <div className="pagination w-full flex mt-10 justify-center items-center ">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
}
