"use client";
import React, { useState } from "react";
import {
  IoChevronBackSharp,
  IoChevronForwardSharp,
  IoMail,
} from "react-icons/io5";
import { IoLogoPinterest } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { transformPrice } from "../type/func";
import ButtonCustom from "../common/ButtonCustom";
import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { IProduct } from "../type/types";
import { MdAdd } from "react-icons/md";
import { RiSubtractFill } from "react-icons/ri";

export default function ProductInfor({
  products,
  id,
}: {
  products: IProduct[];
  id: string | number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  // const zoomLeft =
  //   (document.getElementById("product-zoom")?.offsetLeft as number) ;
  // const zoomTop =
  //   (document.getElementById("product-zoom")?.offsetTop as number) ;
  // const [positionX, setPostionX] = useState<number>();
  // const [positionY, setPostionY] = useState<number>();

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
    <div className="detail grid grid-cols-12 gap-4">
      <div className="left col-span-12 lg:col-span-7 flex flex-col-reverse sm:grid sm:grid-cols-12  gap-4">
        <div className="scroll col-span-2 flex sm:flex-col gap-4 max-h-[913px] overflow-scroll">
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
                className={`w-full h-[120px]  object-cover  ${
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
                className={`w-full h-fit  group relative overflow-hidden flex-shrink-0 -translate-x-[${currentIndex}00%] duration-500 `}
                // onMouseMove={(e) => {
                //   setPostionX(e.nativeEvent.clientX - zoomLeft);
                //   setPostionY(e.nativeEvent.clientY - zoomTop);
                // }}
                style={{
                  transform: `translateX(-${currentIndex}00%)`,
                }}
              >
                <img
                  src={`${item}`}
                  alt=""
                  className={`w-full h-fit  object-cover object-center  duration-500  overflow-hidden`}
                  // style={{
                  //   transformOrigin: `${positionX}px ${positionY}px`,
                  // }}
                />
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
      <div className="right col-span-12 lg:col-span-5 ">
        <div className="">
          <h2 className=" title text-black font-bold text-2xl sm:text-3xl uppercase mb-4 max-w-full">
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
            className={`font-bold text-xl sm:text-2xl tracking-wide mb-4 ${
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
          <div className="size flex max-sm:flex-col max-sm:gap-4  sm:items-center justify-between mb-8">
            <p className="text-black text-base font-semibold uppercase tracking-wide">
              SIZE
            </p>
            <form className="px-3 py-1  shadow-sm  overflow-hidden bg-reduce-light-gray ring-1 ring-gray-300 w-[300px] max-w-full rounded-full">
              <select
                id="options"
                value={selectedValue}
                onChange={handleChange}
                className="outline-none  bg-transparent w-full font-light text-sm tracking-wide text-light-gray "
              >
                <option value="" disabled>
                  Chọn một tuỳ chọn
                </option>
                {product[0].size.map((item, index) => (
                  <option key={index} value={`${item}`}>
                    {item}
                  </option>
                ))}
                {/* <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option> */}
              </select>
            </form>
          </div>
          <div className="quantity flex max-sm:flex-wrap items-center gap-4 mb-8 ">
            <div className="add-sub  flex items-center overflow-hidden text-base  border-2 duration-300 ease-in-out font-semibold border-deep-green   text-black  px-3 py-2 justify-center rounded-full">
              <div
                className="left text-black  "
                onClick={() => handleChangeQuantity("reduce")}
              >
                <RiSubtractFill size={21} color="black" />
              </div>
              <input
                type={"number"}
                className="center text-center bg-transparent outline-none  text-black text-base font-bold w-[50px] px-1"
                value={quantity}
                onChange={(e: any) => setQuantity(+e.target.value)}
              />

              <div
                className="right text-black text-sm  "
                onClick={() => handleChangeQuantity("add")}
              >
                <MdAdd size={20} color="black" />
              </div>
            </div>
            <ButtonCustom
              title="Thêm vào giỏ hàng"
              style="text-base overflow-hidden border-2 duration-300 ease-in-out font-semibold border-deep-green hover:bg-white  hover:text-deep-green bg-deep-green text-white px-5 py-2 flex justify-center items-center rounded-full"
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
  );
}
