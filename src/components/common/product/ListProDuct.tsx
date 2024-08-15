import { IProduct } from "@/components/type/types";
import React from "react";
import Product from "./Product";

function ListProDuct({ products }: { products: IProduct[] }) {
  return (
    <div className="products-container grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 min-[2000px]:grid-cols-6 min-[2400px]:grid-cols-7 gap-6  mt-[60px]">
      {products &&
        products.length > 0 &&
        products.map((item) => <Product key={item.id} product={item} />)}
    </div>
  );
}

export default ListProDuct;
