"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import Product from "../common/product/Product";
import { IProduct } from "../type/types";

export default function SameProduct({ products }: { products: IProduct[] }) {
  const [width, setWidth] = useState<number>(0);
  const [slideToShow, setSlideToShow] = useState<number>(4);
  console.log("check w", width);
  // Initialize with a default value

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    // Set initial height
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (width > 1024) setSlideToShow(4);
    else if (width > 768 && width <= 1024) setSlideToShow(3);
    else if (width > 640 && width <= 768) setSlideToShow(2);
    else setSlideToShow(2);
  }, [width]);
  return (
    <>
      <Carousel
        arrows={width < 640 ? false : true}
        slidesToShow={slideToShow}
        slidesToScroll={2}
        dots={false}
      >
        {products.map((item, index) => (
          <Product key={index} product={item} />
        ))}
      </Carousel>
    </>
  );
}
