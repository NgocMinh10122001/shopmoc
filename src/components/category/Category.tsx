import React from "react";
import { IProduct } from "../type/types";
import HeaderCategory from "./HeaderCategory";
import MainCategory from "./MainCategory";

interface IProps {
  title: string;
  products: IProduct[];
}
export default function Category({ title, products }: IProps) {
  return (
    <div className="category container-m py-10 relative z-30">
      <HeaderCategory title={title} currentP="1-12" totalP="17" />
      <MainCategory products={products} recent={[]} currentP={""} totalP={""} />
    </div>
  );
}
