import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { IMenuCus2Data } from "../type/types";

export default function SubMenuCus2({ thumbNail, link }: IMenuCus2Data) {
  return (
    <div className="group ">
      <div className="h-[224px] overflow-hidden">
        <img
          src={`${thumbNail}`}
          alt="no img"
          className="w-full h-full object-cover group-hover:scale-125 duration-500 ease-in-out"
        />
      </div>
      <Link
        href={`${link}`}
        className="flex items-center gap-1 mt-10 text-deep-green hover:text-black duration-300 ease-in-out"
      >
        <span className="uppercase text-xs font-semibold  tracking-wide">
          Xem Thêm
        </span>
        <FiChevronRight size={16} className="" />
      </Link>
    </div>
  );
}
