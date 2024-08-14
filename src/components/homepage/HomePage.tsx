"useClient";
import React from "react";
import ButtonCustom from "../common/ButtonCustom";
import ListProDuct from "../common/product/ListProDuct";
import { products } from "../type/fakedata";

function HomePage() {
  return (
    <main className="home-container">
      <div className="home-banner relative z-0">
        <div className="bg-[url('https://shop.mixigaming.com/wp-content/uploads/2024/02/419152112_384288470804062_5335351375390162625_n-scaled.jpg')] w-full h-[547px] bg-center bg-contain bg-no-repeat"></div>
      </div>
      <div className="best-sell py-[75px] ">
        <h2 className="w-full text-3xl text-black font-bold  text-center tracking-wide">
          <span className="text-[150%] ">BÁN CHẠY NHẤT</span>
        </h2>
        <div className="w-full flex justify-center py-10">
          <ButtonCustom title={"Xem tất cả"} />
        </div>
        <div className="best-sell-products">
          <ListProDuct products={products} />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
