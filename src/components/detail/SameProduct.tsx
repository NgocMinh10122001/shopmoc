"use client"
import React from "react";
import { Carousel } from "antd";
import Product from "../common/product/Product";
import { IProduct } from "../type/types";

export default function SameProduct({ products }: { products: IProduct[] }) {
  return (
    <>
      <Carousel arrows={true} slidesToShow={4} slidesToScroll={1} dots={false}  >
        {products.map((item, index) => (
          <Product key={index} product={item} />
        ))}
        
      </Carousel>
    </>
  );
}
