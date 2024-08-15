"use client";
import { IProduct } from "@/components/type/types";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

function Product({ product }: { product: IProduct }) {
  const [zoom, setZoom] = useState<boolean>(false);
  const [height, setHeight] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="product w-full overflow-hidden  "
      onMouseEnter={(e) => setZoom(true)}
      onMouseLeave={(e) => setZoom(false)}
    >
      <div
        className={`zoomOut  bg-no-repeat w-full bg-cover   duration-1000 ease-in-out cursor-pointer relative`}
      >
        <style jsx>
          {`
            .zoomOut {
              background-image: url("${product.thumbNailZoomOut}");
              height: ${window.innerWidth > 678
                ? `407`
                : `${height * 0.52994791666}`}px;
            }
            .zoomOut:hover {
              background-image: url("${product.thumbNailZoomIn}");
            }
          `}
        </style>
        {product?.status === "off" && (
          <div className="status absolute w-full h-fit py-5 bg-white opacity-70 top-[40%] text-center">
            <span className="uppercase text-black text-lg font-semibold ">
              Hết hàng
            </span>
          </div>
        )}
        {product?.status === "sell" && (
          <div className="status absolute w-fit h-fit p-2 bg-red-700 opacity-70 shadow-lg shadow-red-500 top-0 right-0 text-center">
            <span className="uppercase text-white text-base font-semibold ">
              Giảm giá
            </span>
          </div>
        )}
      </div>
      <div className="content text-black text-center">
        <div className="top mt-3 text-light-gray">
          <p className="font-light text-xs tracking-wide">{product?.name}</p>
          <p className="font-light text-base text-deep-green tracking-wide pt-1">
            {product?.des}
          </p>
        </div>
        <div className="bot pt-2 ">
          <p className="flex items-center justify-center ">
            {Array(product?.rate)
              .fill("")
              .map((item, index) => (
                <FaStar key={index} size={16} color="#d35400" />
              ))}
          </p>
          <div
            className={`font-bold text-base tracking-wide ${
              product?.oldPrice && "flex justify-center items-center gap-3 pt-1"
            }`}
          >
            {product?.status === "sell" && (
              <p className="font-light line-through text-sm text-light-gray">
                {product?.oldPrice} <span className="underline">đ</span>
              </p>
            )}
            <p>
              {product?.price} <span className="underline">đ</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
