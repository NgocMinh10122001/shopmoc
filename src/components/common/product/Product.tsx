import { IProduct } from "@/components/type/types";
import React from "react";

function Product({ product }: { product: IProduct }) {
  // ${product?.url}
  return (
    <div className="product w-[306px]  group">
      <div
        className={`bg-[url("${product?.thumbNailZoomOut}") group-hover:bg-[url("${product?.thumbNailZoomIn}")] bg-no-repeat w-full bg-contain h-[407px]`}
      ></div>
    </div>
  );
}

export default Product;
