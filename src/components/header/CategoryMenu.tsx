import React from "react";
import { middle1, subMenuCus2Data } from "../type/fakedata";
import SubMenuCus2 from "./SubMenuCus2";
import SubMenuCus from "./SubMenuCus";

function CategoryMenu({ showCate }: { showCate: boolean }) {
  console.log("check cate", showCate);

  return (
    <div
      className={`absolute  opacity-0 category-menu w-full h-fit py-[40px] bg-category-menu max-[1016px]:hidden shadow-xl  ${
        showCate && " opacity-100 "
      } duration-500 `}
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
