"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import ProductInfor from "./ProductInfor";
import { products } from "../type/fakedata";
import Extra from "./Extra";
import Comments from "./Comments";
import SameProduct from "./SameProduct";

export default function ProductDetail() {
  const params = useParams<{ name: string }>();
  const id = params.name;
  const [showComment, setShowComment] = useState(false);
  return (
    <div className="product-detail w-full min-h-[100vh] container-m relative z-30 my-8">
      <div className="flex items-center gap-2 text-light-gray mb-8">
        <Link href={"/"}>
          <span className="text-xs font-light uppercase">Trang chủ</span>
        </Link>
        <span className="font-light">/</span>
        <Link href={"/"}>
          <span className="text-xs font-light uppercase">ĐỒ LƯU NIỆM MIXI</span>
        </Link>
      </div>
      <div className="detail mb-20">
        <ProductInfor products={products} id={id} />
      </div>
      <div className="comment mb-20">
        <hr />
        <div className="flex gap-4 items-center ">
          <div
            className={`show-extra  py-4 relative group uppercase font-semibold w-fit tracking-wide text-sm hover:cursor-pointer ${
              showComment ? "text-light-gray" : "text-black"
            }`}
            onClick={() => setShowComment(false)}
          >
            Thông tin bổ sung
            <div
              className={`w-full absolute top-0 h-[3px] rounded-full bg-deep-green opacity-0 ${
                showComment ? "group-hover:opacity-100" : "opacity-100"
              } duration-300 ease-in-out`}
            ></div>
          </div>
          <div
            className={`show-extra  py-4 relative group uppercase font-semibold w-fit tracking-wide text-sm hover:cursor-pointer ${
              showComment ? "text-black" : "text-light-gray"
            }`}
            onClick={() => setShowComment(true)}
          >
            Đánh giá (5)
            <div
              className={`w-full absolute top-0 h-[3px] rounded-full bg-deep-green opacity-0 ${
                showComment ? "opacity-100" : "group-hover:opacity-100"
              } duration-300 ease-in-out`}
            ></div>
          </div>
        </div>
        <div className="mb-4">
          {showComment ? (
            <Comments
              comments={products[0].comments}
              productName={products[0].title}
            />
          ) : (
            <>
              <Extra genre={products[0].title} />
              <hr />
            </>
          )}
        </div>
      </div>
      <div className="same">
        <hr className="mb-4" />
        <h2 className="title text-black font-bold text-3xl uppercase mb-4">
          Sản phẩm tương tự
        </h2>
        <SameProduct products={products} />
      </div>
    </div>
  );
}
