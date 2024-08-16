import { IProduct } from "@/components/type/types";
import React from "react";
import Product from "./Product";

function ListProDuct({
  products,
  style,
}: {
  products: IProduct[];
  style: string;
}) {
  return (
    <div className={`products-container grid   gap-6   ${style}`}>
      {products &&
        products.length > 0 &&
        products.map((item) => <Product key={item.id} product={item} />)}
    </div>
  );
}

export default ListProDuct;
