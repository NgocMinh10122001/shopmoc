import { IProduct } from "@/components/type/types";
import React from "react";
import Product from "./Product";

function ListProDuct({ products }: { products: IProduct[] }) {
  //   console.log("check pr", products);

  return (
    <div className="products-container">
      {products &&
        products.length > 0 &&
        products.map((item) => <Product product={item} />)}
    </div>
  );
}

export default ListProDuct;
