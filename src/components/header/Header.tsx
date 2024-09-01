"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaSearch } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import CategoryMenu from "./CategoryMenu";
import { usePathname } from "next/navigation";

function Header() {
  const [showBar, setShowBar] = useState(false);
  const [showCate, setShowCate] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={`text-black h-[100px] bg-white shadow-md relative    pt-[6px] ${
        showCate ? "z-50" : "z-40"
      }`}
    >
      <div className="contai w-full container-m relative z-20">
        <div className=" flex items-center justify-between">
          <div
            className="mobile-bar min-[1016px]:hidden"
            onClick={() => setShowBar(!showBar)}
          >
            <FaBars size={30} />
          </div>
          <div className="left flex items-center gap-7">
            <Link
              href={"/"}
              className="logo bg-[url('data:image/png;base64,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')] bg-no-repeat bg-contain w-[151px] h-[90px] bg-center"
            ></Link>
            <div className="hidden min-[1026px]:flex menu  items-center gap-5">
              <div className="relative py-3 cursor-pointer group">
                <FaSearch size={16} />
                <div className="w-full h-1 rounded-sm bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
              </div>
              <Link
                href={"/"}
                className={`uppercase font-bold text-[14px]  duration-300 ease-in-out hover:text-deep-green ${
                  pathname === "/" ? "text-deep-green" : " text-light-gray"
                } !leading-[16px] tracking-wide relative py-3 group`}
              >
                Home
                <div
                  className={`w-full h-1 rounded-sm bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 ${
                    pathname === "/" && "opacity-100"
                  } duration-300 ease-in-out `}
                ></div>
              </Link>
              <div
                className="flex items-center gap-2 relative py-3 group cursor-pointer"
                onClick={() => setShowCate(!showCate)}
              >
                <Link
                  href={""}
                  className={`uppercase font-bold text-[14px]  duration-300 ease-in-out group-hover:text-deep-green ${
                    showCate || pathname.includes("/danh-muc")
                      ? "text-deep-green"
                      : "text-light-gray"
                  } !leading-[16px] tracking-wide relative group`}
                >
                  Danh mục sản phẩm
                </Link>
                <GoChevronDown
                  size={16}
                  className={`${
                    showCate || pathname.includes("/danh-muc")
                      ? "text-deep-green rotate-180"
                      : "text-light-gray"
                  }  duration-300 ease-in-out`}
                />
                <div
                  className={`w-full h-1 rounded-sm bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 ${
                    pathname.includes("/danh-muc") && "opacity-100"
                  } duration-300 ease-in-out `}
                ></div>
              </div>
              <Link
                href={""}
                className={`uppercase font-bold text-[14px]  duration-300 ease-in-out hover:text-deep-green ${
                  pathname.includes("/thong-bao")
                    ? "text-deep-green"
                    : " text-light-gray"
                } !leading-[16px] tracking-wide relative py-3 group`}
              >
                Thông báo
                <div
                  className={`w-full h-1 rounded-sm bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 ${
                    pathname.includes("/thong-bao") && "opacity-100"
                  } duration-300 ease-in-out `}
                ></div>
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
              <div className="mobile-search rounded-sm flex justify-between items-center px-3  bg-[#f0f0f0] py-1 w-full">
                <input
                  type="text"
                  value={""}
                  placeholder="Tìm kiếm"
                  className=" h-[25px] text-xs bg-transparent py-2 outline-none"
                  onChange={() => {}}
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
                <div className="bg-red-600 rounded-sm px-2 py-1 text-white text-xs">
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
      <div className={`opacity-0 ${showCate && " opacity-100 "} duration-500`}>
        {showCate && <CategoryMenu />}
      </div>
    </header>
  );
}

export default Header;
