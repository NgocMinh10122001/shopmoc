import Link from "next/link";
import React from "react";
import { IUl } from "../type/types";

function FooterCustom({ title, ul }: { title: string; ul: IUl[] }) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-black text-base font-bold tracking-wide">{title}</h4>
      <ul className="ps-4">
        {ul &&
          ul.length > 0 &&
          ul.map((item, index) => (
            <li className="list-disc text-black py-[6px]" key={index}>
              <Link
                href={`${item.url}`}
                className="text-deep-green font-light text-base tracking-wide  hover:text-violet-500 duration-300 ease-in-out"
              >
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default FooterCustom;
