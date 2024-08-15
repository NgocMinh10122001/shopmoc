"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaSearch } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";

function Header() {
  const [showBar, setShowBar] = useState(false);
  return (
    <header className="text-black h-[100px] bg-white shadow-lg relative z-30   pt-[6px] ">
      <div className="contai w-full px-[15px] mx-auto max-w-[1310px]">
        <div className=" flex items-center justify-between">
          <div
            className="mobile-bar min-[1016px]:hidden"
            onClick={() => setShowBar(!showBar)}
          >
            <FaBars size={30} />
          </div>
          <div className="left flex items-center gap-7">
            <div className="logo bg-[url('https://shop.mixigaming.com/wp-content/uploads/2019/06/logo-mixi-t%C3%A9t.png')] bg-contain w-[151px] h-[90px]"></div>
            <div className="hidden min-[1026px]:flex menu  items-center gap-5">
              <div className="relative py-3 cursor-pointer group">
                <FaSearch size={16} />
                <div className="w-full h-1 rounded-full bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
              </div>
              <Link
                href={""}
                className="uppercase font-bold text-[14px] text-light-gray duration-300 ease-in-out hover:text-deep-green !leading-[16px] tracking-wide relative py-3 group"
              >
                Home
                <div className="w-full h-1 rounded-full bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
              </Link>
              <div className="flex items-center gap-2 relative py-3 group">
                <Link
                  href={""}
                  className="uppercase font-bold text-[14px] text-light-gray duration-300 ease-in-out hover:text-deep-green !leading-[16px] tracking-wide "
                >
                  Danh mục sản phẩm
                </Link>
                <GoChevronDown size={16} color="#666666d9" />
                <div className="w-full h-1 rounded-full bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
              </div>
              <Link
                href={""}
                className="uppercase font-bold text-[14px] text-light-gray duration-300 ease-in-out hover:text-deep-green !leading-[16px] tracking-wide relative py-3 group"
              >
                Thông báo
                <div className=" w-full h-1 rounded-full bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 duration-300 ease-in-out"></div>
              </Link>
            </div>
          </div>
          <div className="right flex items-center gap-6">
            <div className="hidden min-[1016px]:flex contact  items-center gap-2 py-4 cursor-pointer border-r-[1px] border-light-gray pe-4">
              <FaPhone size={16} />
              <span className="uppercase font-semibold text-[14px] text-light-gray duration-300 ease-in-out hover:text-black !leading-[16px] tracking-wide">
                0343690805
              </span>
            </div>
            <div className="shopping-cart flex items-center gap-1">
              <span className="uppercase hidden min-[1016px]:block font-bold text-[14px] text-light-gray duration-300 ease-in-out hover:text-deep-green !leading-[16px] py-4 cursor-pointer tracking-wide">
                Giỏ hàng
              </span>
              <FaCartShopping className="w-[30px] h-[30px] min-[1016px]:w-[20px] min-[1016px]:h-[20px]" />
            </div>
          </div>
        </div>
        <div
          className={`mobile-nav bg-white h-screen w-[250px] fixed top-0 left-0 z-20 min-[1016px]:hidden -translate-x-[100%] ${
            showBar && "translate-x-0"
          } duration-300`}
        >
          <ul>
            <li className="py-4 px-4 ">
              <div className="mobile-search rounded-full flex justify-between items-center px-3  bg-[#f0f0f0] py-1 w-full">
                <input
                  type="text"
                  value={""}
                  placeholder="Tìm kiếm"
                  className=" h-[25px] text-xs bg-transparent py-2 outline-none"
                />
                <FaSearch size={16} />
              </div>
            </li>
            <li className="py-4 border-t-[1px] border-t-gray-100 px-4 text-light-gray font-semibold text-xs tracking-wide uppercase cursor-pointer">
              <Link href={""}>MixiShop</Link>
            </li>
            <li className="py-4 border-t-[1px] border-t-gray-100 px-4 text-light-gray font-semibold text-xs tracking-wide uppercase cursor-pointer">
              <Link href={""} className="flex items-center gap-2">
                <span>Đồ Lưu Niệm Mixi</span>{" "}
                <div className="bg-red-600 rounded-md px-2 py-1 text-white text-xs">
                  HOT
                </div>
              </Link>
            </li>
            <li className="py-4 border-t-[1px] border-t-gray-100 px-4 text-light-gray font-semibold text-xs tracking-wide uppercase cursor-pointer">
              <Link href={""} className="flex items-center justify-between">
                <span>Áo</span> <GoChevronDown size={20} color="#000" />
              </Link>
            </li>
            <li className="py-4 border-t-[1px] border-t-gray-100 ps-4 text-light-gray font-semibold text-xs tracking-wide uppercase cursor-pointer">
              <Link href={""}>Thông Báo</Link>
            </li>
            <li className="py-4 border-t-[1px] border-t-gray-100 ps-4 text-light-gray font-semibold text-xs tracking-wide uppercase flex items-center gap-2">
              <div className="rounded-full p-2 flex justify-center items-center bg-blue-700 cursor-pointer">
                <FaFacebookF size={18} color="white" />
              </div>
              <div className="rounded-full p-2 flex justify-center items-center bg-blue-600 cursor-pointer">
                <FaInstagram size={18} color="white" />
              </div>
            </li>
          </ul>
        </div>
        {showBar && (
          <div
            className="mobile-overlay bg-gray-500 opacity-70 top-0 left-0 right-0 bottom-0 fixed z-10 min-[1016px]:hidden"
            onClick={() => setShowBar(false)}
          ></div>
        )}
      </div>
    </header>
  );
}

export default Header;
