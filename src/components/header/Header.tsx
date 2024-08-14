import Link from "next/link";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { GoChevronDown } from "react-icons/go";
import { FaPhone } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
function Header() {
  return (
    <header className="text-black w-full h-[100px] bg-white shadow-lg relative z-30  px-[15px] pt-[6px]">
      <div className="container mx-[65px] flex items-center justify-between">
        <div className="left flex items-center gap-7">
          <div className="logo bg-[url('https://shop.mixigaming.com/wp-content/uploads/2019/06/logo-mixi-t%C3%A9t.png')] bg-contain w-[151px] h-[90px]"></div>
          <div className="menu flex items-center gap-5">
            <div className="relative py-3 cursor-pointer group">
              <FaSearch size={16} />
              <div className="w-full h-1 rounded-full bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
            </div>
            <Link
              href={""}
              className="uppercase font-bold text-[14px] text-deep-green !leading-[16px] tracking-wide relative py-3 group"
            >
              Home
              <div className="w-full h-1 rounded-full bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
            </Link>
            <div className="flex items-center gap-2 relative py-3 group">
              <Link
                href={""}
                className="uppercase font-bold text-[14px] text-light-gray !leading-[16px] tracking-wide "
              >
                Danh mục sản phẩm
              </Link>
              <GoChevronDown size={16} color="#666666d9" />
              <div className="w-full h-1 rounded-full bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 duration-300 ease-in-out "></div>
            </div>
            <Link
              href={""}
              className="uppercase font-bold text-[14px] text-light-gray !leading-[16px] tracking-wide relative py-3 group"
            >
              Thông báo
              <div className=" w-full h-1 rounded-full bg-deep-green opacity-0 absolute bottom-0 group-hover:opacity-100 duration-300 ease-in-out"></div>
            </Link>
          </div>
        </div>
        <div className="right flex items-center gap-6">
          <div className="contact flex items-center gap-2 py-4 cursor-pointer border-r-[1px] border-light-gray pe-4">
            <FaPhone size={16} />
            <span className="uppercase font-semibold text-[14px] text-light-gray !leading-[16px] tracking-wide">
              0343690805
            </span>
          </div>
          <div className="shopping-cart flex items-center gap-1">
            <span className="uppercase font-bold text-[14px] text-light-gray !leading-[16px] py-4 cursor-pointer tracking-wide">
              Giỏ hàng
            </span>
            <FaCartShopping size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
