import { transformPrice } from "@/components/type/func";
import { IProduct } from "@/components/type/types";
import React from "react";

interface IProps {
  productsRecent: IProduct[];
}
export default function ProductsRecent(props: IProps) {
  const { productsRecent } = props;
  return (
    <>
      {productsRecent.map((product, index) => (
        <div key={product.id} className="flex gap-5 w-full py-[10px] ">
          <img
            src={product.thumbNailZoomOut}
            alt="no-img"
            className="max-w-[100px] max-h-[100px] w-[60px] h-[60px] object-cover cursor-pointer"
          />
          <div>
            <p className="text-deep-green max-w-full font-light text-base tracking-wide  hover:text-violet-500 duration-300 ease-in-out cursor-pointer">
              {product.des}
            </p>
            <p className="text-black font-bold text-base ">
              {transformPrice(product.price)}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
