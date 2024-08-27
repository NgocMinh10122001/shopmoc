"use client";
import React from "react";
import ButtonCustom from "../common/ButtonCustom";
import ListProDuct from "../common/product/ListProDuct";
import { products } from "../type/fakedata";
import { FaInstagram } from "react-icons/fa";

function HomePage() {
  return (
    <main className="home-container ">
      <div className="home-banner relative lg:z-30 ">
        {/* <div className="bg-[url('https://shop.mixigaming.com/wp-content/uploads/2024/02/419152112_384288470804062_5335351375390162625_n-scaled.jpg')] w-full h-[547px] bg-center bg-cover bg-no-repeat"></div> */}
        <img
          src="https://elise.vn/media/wysiwyg/ECOM/cv-3007.jpg"
          alt="no anh"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="best-sell py-[75px] container-m">
        <h2 className="w-full text-3xl text-black font-bold  text-center tracking-wide">
          <span className="text-[96%] sm:text-[150%] ">BÁN CHẠY NHẤT</span>
        </h2>
        <div className="w-full flex justify-center py-10 ">
          <ButtonCustom
            title={"Xem tất cả"}
            style="text-base overflow-hidden border-2 duration-300 ease-in-out font-semibold border-deep-green bg-white text-deep-green hover:bg-deep-green hover:text-white px-5 py-2 flex justify-center items-center"
          />
        </div>
        <div className="best-sell-products w-full container-m">
          <ListProDuct
            products={products}
            style={"grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mt-[50px]"}
          />
        </div>
      </div>
      <div className="video  h-fit w-full px-[15px] mx-auto max-w-[1310px] relative mt-10">
        <video
          className="w-full h-[350px]  object-cover"
          playsInline
          autoPlay
          muted
          loop
        >
          <source
            src="https://vod.freecaster.com/louisvuitton/9cb5af35-66af-44af-abd5-9d1927aae873/025ox6D9WP1G8bMzeSeXkuZV_9.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="  content-video absolute left-[50%] top-[35%] -translate-x-[50%] flex flex-col gap-4">
          <h3 className="text-2xl font-semibold text-white tracking-wide text-center">
            EliseShop
          </h3>
          <p className="text-base font-light  text-white tracking-wide text-center">
            Cập nhật thông tin về sản phẩm mới
          </p>
          <div className="flex items-center gap-2 justify-center text-light-gray">
            <ButtonCustom
              title="Fanpage"
              style=" tracking-wide text-sm overflow-hidden border-2 duration-300 ease-in-out font-bold border-white bg-white  text-light-gray hover:bg-[#f0f0f0]  px-3 py-2  flex justify-center items-center"
            />
            <ButtonCustom
              title="Instagram"
              style="tracking-wide text-sm overflow-hidden border-2 duration-300 ease-in-out font-bold border-white  text-white hover:bg-[#f0f0f0] hover:text-light-gray  px-3 py-2  flex justify-center items-center"
            />
          </div>
        </div>
      </div>
      <div className="feedback container-m py-[75px] flex flex-col items-center justify-center gap-20">
        <h2 className="w-full text-3xl text-black font-bold  text-center tracking-wide">
          <span className="text-[96%] container-m sm:text-[150%] ">
            Awesome feedback
          </span>
        </h2>
        <button className="flex text-white items-center justify-center gap-2 px-3 py-2 rounded-md  bg-deep-green hover:bg-blue-500 duration-300 ease-out">
          <FaInstagram size={12} color="white" />
          <p className="text-sm font-light tracking-wide">Follow us</p>
        </button>
      </div>
    </main>
  );
}

export default HomePage;
