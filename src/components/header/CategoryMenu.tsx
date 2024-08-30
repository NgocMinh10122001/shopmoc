import React from "react";
import { middle1, subMenuCus2Data } from "../type/fakedata";
import SubMenuCus2 from "./SubMenuCus2";
import SubMenuCus from "./SubMenuCus";

function CategoryMenu() {
  return (
    <div
      className={`absolute  category-menu w-full h-fit py-[40px] bg-category-menu max-[1016px]:hidden shadow-xl   `}
    >
      <div className=" container-m grid   grid-cols-4 gap-4">
        <SubMenuCus title="Danh mục sản phẩm" ul={middle1} />
        {subMenuCus2Data.map((item, index) => (
          <SubMenuCus2
            key={index}
            thumbNail={item.thumbNail}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryMenu;
