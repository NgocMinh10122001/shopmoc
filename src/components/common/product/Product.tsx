"use client";
import { IProduct } from "@/components/type/types";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa6";

function Product({ product }: { product: IProduct }) {
  const [height, setHeight] = useState(window.innerWidth);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => setHeight(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className="product w-full overflow-hidden cursor-pointer"
      onClick={() => router.push(`/san-pham/${product.name}`)}
    >
      <div
        className={`zoomOut group bg-no-repeat w-full   cursor-pointer relative`}
      >
        {/* background-image: url("${product.thumbNailZoomOut}"); */}
        {/* .zoomOut:hover {
              background-image: url("${product.thumbNailZoomIn}");
            } */}
        <style jsx>
          {`
            .zoomOut {
              height: ${window.innerWidth > 678
                ? `407`
                : `${height * 0.52994791666}`}px;
            }
          `}
        </style>
        <img
          src={`${product.thumbNailZoomOut}`}
          alt="no-img"
          className={`absolute top-0 bottom-0 left-0 right-0 opacity-100 group-hover:opacity-0 h-full object-cover duration-1000 ease-in-out`}
        />
        <img
          src={`${product.thumbNailZoomIn}`}
          alt="no-img"
          className={`absolute top-0 bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 h-full object-cover duration-1000 ease-in-out`}
        />
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
          <p className="font-light text-xs tracking-wide">{product?.title}</p>
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
                {product?.oldPrice.toLocaleString("vi", {
                  style: "currency",
                  currency: "VND",
                })}{" "}
              </p>
            )}
            <p>
              {product?.price.toLocaleString("vi", {
                style: "currency",
                currency: "VND",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
