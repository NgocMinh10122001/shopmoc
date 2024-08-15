import React from "react";
import { IUl } from "../type/types";
import FooterContent from "./FooterContent";
import FooterCustom from "./FooterCustom";

const middle1: IUl[] = [
  {
    name: "Áo CSGO",
    url: "",
  },
  {
    name: "Áo Mixi",
    url: "",
  },
  {
    name: "Áo PUBG",
    url: "",
  },
  {
    name: "Áo Refund Gaming",
    url: "",
  },
  {
    name: "Đồ lưu niệm Mixi",
    url: "",
  },
  {
    name: "Áo ba lỗ",
    url: "",
  },
];
const middle2: IUl[] = [
  {
    name: "Giới thiệu",
    url: "",
  },
  {
    name: "Chính sách bảo mật",
    url: "",
  },
  {
    name: "Điều khoản ",
    url: "",
  },
  {
    name: "Sitemap",
    url: "",
  },
];
function Footer() {
  return (
    <footer className=" w-full h-fit border-t-[1px] border-gray-300 bg-white  py-10 ">
      <div className="w-full px-[15px] mx-auto max-w-[1310px] grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        <div className="top">
          <FooterContent
            title="Về chúng tôi"
            content="Website chính thức và duy nhất của MixiShop. Hiện tại chúng mình chỉ nhận đơn hàng trên website chứ không nhận bất kỳ nơi nào khác nhé!"
          />
        </div>
        <div className="middle">
          <FooterCustom title="Danh mục sản phẩm" ul={middle1} />
        </div>
        <div className="middle2">
          <FooterCustom title="Thông tin" ul={middle2} />
        </div>
        <div className="bot">
          <FooterContent
            title="Hỗ trợ"
            content="Mọi thắc mắc và góp ý cần hỗ trợ xin vui lòng liên hệ Fanpage và Instagram"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
