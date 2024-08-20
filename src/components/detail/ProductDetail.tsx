"use client";
import { Carousel } from "antd";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import {
  IoChevronBackSharp,
  IoChevronForwardSharp,
  IoMail,
} from "react-icons/io5";
import { IoLogoPinterest } from "react-icons/io";
import { products } from "../type/fakedata";
import { FaStar } from "react-icons/fa6";
import { transformPrice } from "../type/func";
import ButtonCustom from "../common/ButtonCustom";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";

export default function ProductDetail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const zoomWidth = document.getElementById("product-zoom")
    ?.offsetWidth as number;
  const zoomHeight = document.getElementById("product-zoom")
    ?.offsetHeight as number;
  const [positionX, setPostionX] = useState<number>();
  const [positionY, setPostionY] = useState<number>();
  console.log("check ", positionX, positionY);

  const params = useParams<{ name: string }>();
  const id = params.name;
  const product = products.filter((item) => item.id === +id && item);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? product[0].thumbNail.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === product[0].thumbNail.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const handleChangeQuantity = (status: string) => {
    if (status === "add" && quantity >= 1) {
      let count = quantity + 1;
      setQuantity(count);
    } else if (status === "reduce" && quantity > 1) {
      let count = quantity - 1;
      setQuantity(count);
    } else {
      setQuantity(1);
    }
  };
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
      <div className="detail grid grid-cols-12 gap-4">
        <div className="left col-span-7 grid grid-cols-12 gap-4">
          <div className="scroll col-span-2 flex flex-col gap-4 max-h-[913px] overflow-scroll">
            {product[0].thumbNail.map((item, index) => (
              <div
                key={index}
                className={`max-h-[100px]  cursor-pointer overflow-hidden group ${
                  currentIndex === index
                    ? "border-[1px] border-[#0000004d]"
                    : "border-[1px] border-white opacity-50  hover:opacity-100 duration-500 ease-in-out"
                }`}
              >
                <img
                  key={index}
                  src={`${item}`}
                  alt="noimg"
                  className={`w-full h-[120px]  object-cover ${
                    currentIndex !== index && "group-hover:-translate-y-[5%]"
                  }   duration-500 ease-in-out`}
                  onClick={() => setCurrentIndex(index)}
                />
              </div>
            ))}
          </div>
          <div className=" w-full group col-span-10 overflow-hidden">
            <div className="flex h-fit w-full">
              {product[0].thumbNail.map((item, index) => (
                <div
                  key={index}
                  id="product-zoom"
                  className={`w-full h-[500px] relative flex-shrink-0 -translate-x-[${
                    currentIndex * 100
                  }%] duration-500 bg-[url("https://shop.mixigaming.com/wp-content/uploads/2021/01/DSC01720-copy-1000x800.jpg")]`}
                  onMouseMove={(e) => {
                    setPostionX((e.nativeEvent.offsetX * 100) / zoomWidth);
                    setPostionY((e.nativeEvent.offsetY * 100) / zoomHeight);
                  }}
                >
                  <style jsx>
                    {`
                      #product-zoom {
                        background-position: ${positionX}% ${positionY}%;
                      }
                      #product-zoom:hover {
                        background-size: 200%;
                        cursor: zoom-in;
                      }
                    `}
                  </style>
                  {/* <img
                    src={`${item}`}
                    alt=""
                    className={`w-full h-fit object-cover  `}
                  /> */}
                  {/* Left Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 absolute top-[50%] translate-x-2 group-hover:-translate-x-0  translate-y-[-50%] left-5 text-2xl rounded-full  text-black cursor-pointer hover:text-deep-green duration-500 ease-in-out">
                    <IoChevronBackSharp onClick={prevSlide} size={34} />
                  </div>
                  {/* Right Arrow */}
                  <div className="opacity-0 group-hover:opacity-100 absolute top-[50%] -translate-x-2 group-hover:translate-x-0  translate-y-[-50%] right-5 text-2xl rounded-full  text-black cursor-pointer hover:text-deep-green duration-500 ease-in-out">
                    <IoChevronForwardSharp onClick={nextSlide} size={34} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right col-span-5 h-[500px] ">
          <div className="">
            <h2 className="title text-black font-bold text-3xl uppercase mb-4">
              {product[0].title}
            </h2>
            <div className="bg-[#0000001a] w-[8%] rounded-full h-1 bar mb-4"></div>
            <p className="flex items-center rate mb-4">
              {Array(product[0].rate)
                .fill("")
                .map((item, index) => (
                  <FaStar key={index} size={16} color="#d35400" />
                ))}
            </p>

            <p className="text-deep-green font-light text-sm tracking-wide evaluate mb-4">
              (7 đánh giá của khách hàng)
            </p>
            <div
              className={`font-bold text-2xl tracking-wide mb-4 ${
                product[0].oldPrice && "flex  items-center gap-3 pt-1 price"
              }`}
            >
              {product[0].status === "sell" && (
                <p className="font-light line-through text-xl text-light-gray">
                  {transformPrice(product[0].oldPrice)}
                </p>
              )}
              <p className="text-black">{transformPrice(product[0].price)}</p>
            </div>
            <div className="size-thumbnail mb-6">
              <img
                src={product[0].sizeThumbNail}
                alt="no ing"
                className="w-full h-fit object-cover"
              />
            </div>
            <div className="size flex items-center justify-between mb-8">
              <p className="text-black text-base font-semibold uppercase tracking-wide">
                SIZE
              </p>
              <form className="px-3 py-1  shadow-sm  overflow-hidden bg-reduce-light-gray ring-1 ring-gray-300 w-[300px] rounded-full">
                <select
                  id="options"
                  value={selectedValue}
                  onChange={handleChange}
                  className="outline-none  bg-transparent w-full font-light text-sm tracking-wide text-light-gray "
                >
                  <option value="" disabled>
                    Chọn một tuỳ chọn
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </form>
            </div>
            <div className="quantity flex items-center gap-4 mb-8">
              <div className="add-sub  flex items-center overflow-hidden">
                <div
                  className="left text-black text-sm rounded-l-full border-[1px] border-light-gray px-3 py-[10px] hover:cursor-pointer hover:bg-white duration-300 ease-in-out"
                  onClick={() => handleChangeQuantity("reduce")}
                >
                  -
                </div>
                <input
                  type={"number"}
                  className="center text-center bg-transparent outline-none  text-black text-sm border-t-[1px] border-b-[1px] border-light-gray  w-[40px] py-[10px]"
                  value={quantity}
                  onChange={(e: any) => setQuantity(+e.target.value)}
                />

                <div
                  className="right text-black text-sm rounded-r-full border-[1px] border-light-gray px-3 py-[10px] hover:cursor-pointer hover:bg-white duration-300 ease-in-out"
                  onClick={() => handleChangeQuantity("add")}
                >
                  +
                </div>
              </div>
              <ButtonCustom
                title="Thêm vào giỏ hàng"
                style="text-sm overflow-hidden duration-300 ease-in-out font-bold  bg-[#d35400] opacity-50 text-white   hover:opacity-80 w-fit h-fit  px-5 py-3 flex justify-center items-center rounded-full"
              />
            </div>
          </div>
          <div className="bottom mb-4">
            <div className="mb-2">
              <hr className="mb-2" />
              <p className="text-black font-light text-sm">Mã: N/A</p>
            </div>
            <div>
              <hr className="mb-2" />
              <p className="text-black font-light text-sm">
                Danh mục:{" "}
                <span className="text-deep-green uppercase tracking-wide">
                  {product[0].category === "souvenirs" && "ĐỒ LƯU NIỆM MIXI"}
                </span>
              </p>
            </div>
          </div>
          <div className="share flex items-center  text-black">
            <div className="w-fit h-fit p-2 hover:cursor-pointer hover:bg-blue-700 duration-300 rounded-full hover:ring-2 hover:ring-blue-800 ease-in-out hover:text-white ">
              <FaFacebookF size={18} className="  " title="facebook" />
            </div>
            <div className="w-fit h-fit p-2 hover:cursor-pointer hover:bg-blue-600 duration-300 rounded-full hover:ring-2 hover:ring-blue-700 ease-in-out hover:text-white ">
              <FaTwitter size={18} title="twitter" />
            </div>
            <div className="w-fit h-fit p-2 hover:cursor-pointer hover:bg-gray-800 duration-300 rounded-full hover:ring-2 hover:ring-gray-900 ease-in-out hover:text-white ">
              <IoMail size={18} title="mail" />
            </div>
            <div className="w-fit h-fit p-2 hover:cursor-pointer hover:bg-red-500 duration-300 rounded-full hover:ring-2 hover:ring-red-600 ease-in-out hover:text-white ">
              <IoLogoPinterest size={18} title="pinterest" />
            </div>
            <div className="w-fit h-fit p-2 hover:cursor-pointer hover:bg-blue-600 duration-300 rounded-full hover:ring-2 hover:ring-blue-700 ease-in-out hover:text-white ">
              <FaInstagramSquare size={18} title="instagram" />
            </div>
          </div>
        </div>
      </div>
      <div className="comment"></div>
      <div className="same"></div>
    </div>
  );
}
