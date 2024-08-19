"use client";
import React from "react";
import ListProDuct from "../common/product/ListProDuct";
import { IMainCategory } from "../type/types";
import Filter from "./filter/Filter";
import { Pagination } from "antd";

export default function MainCategory({ ...props }: IMainCategory) {
  return (
    <div className="main-category grid grid-cols-4 gap-4 mt-10">
      <div className="col-span-1">
        <Filter />
      </div>
      <div className="col-span-3">
        <ListProDuct
          products={props.products}
          style={"grid-cols-2  xl:grid-cols-3 mt-0"}
        />
        <div className="pagination w-full flex mt-10 justify-center items-center ">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
}
