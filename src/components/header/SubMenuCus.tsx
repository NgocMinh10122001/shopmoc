import Link from "next/link";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import ButtonCustom from "../common/ButtonCustom";
import { IUl } from "../type/types";

function SubMenuCus({ title, ul }: { title: string; ul: IUl[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-deep-green text-xl font-bold tracking-wide ">
        {title}
      </h4>
      <ul className="">
        {ul &&
          ul.length > 0 &&
          ul.map((item, index) => (
            <li
              className=" text-light-gray py-[10px] flex items-center gap-2"
              key={index}
            >
              <Link
                href={`${item.url}`}
                className="text-light-gray font-light text-base tracking-wide  hover:text-black duration-300 ease-in-out flex items-center gap-2"
              >
                <FiChevronRight size={18} />
                <span>{item.name}</span>
              </Link>
              {item?.status && (
                <div
                  className={`${item?.status === "hot" && "bg-red-600"} ${
                    item.status === "new" && "bg-deep-green"
                  } ${
                    item.status === "popular" && "bg-green-700"
                  } w-fit h-fit rounded-md px-2 py-1 text-white text-[8px] uppercase`}
                >
                  {item.status}
                </div>
              )}
            </li>
          ))}
      </ul>
      <ButtonCustom
        style="text-sm overflow-hidden border-2 duration-300 ease-in-out font-semibold border-deep-green bg-transparent text-deep-green hover:bg-deep-green hover:text-white w-fit h-fit rounded-lg px-3 py-1 flex justify-center items-center"
        title="Xem Tất cả"
      />
    </div>
  );
}

export default SubMenuCus;
