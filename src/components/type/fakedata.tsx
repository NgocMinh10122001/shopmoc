import { IMenuCus2Data, IProduct, IUl } from "./types";

export const products: IProduct[] = [
  {
    id: 1,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/7_6d2380f151a445d0871676fc6221e134_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/9_48cdc0b0d4844f12adf4e3fc39040115_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/10_1ee892fe3a664ba38d2b1f2b576986e1_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "coc-mixi",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "souvenirs",
    price: 200000,
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "on",
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
  },
  {
    id: 2,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/1_d4682e87ec2446fda61afe5de9a89e37_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/2_54b06e6b64cb478f87340614e9beb23b_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/3_90420ad3811f41c79ec5641d1eed5775_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "souvenirs",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "sell",
  },
  {
    id: 3,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/7_6d2380f151a445d0871676fc6221e134_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/9_48cdc0b0d4844f12adf4e3fc39040115_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/10_1ee892fe3a664ba38d2b1f2b576986e1_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "on",
  },
  {
    id: 4,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/1_d4682e87ec2446fda61afe5de9a89e37_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/2_54b06e6b64cb478f87340614e9beb23b_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/3_90420ad3811f41c79ec5641d1eed5775_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "off",
  },
  {
    id: 5,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/7_6d2380f151a445d0871676fc6221e134_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/9_48cdc0b0d4844f12adf4e3fc39040115_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/10_1ee892fe3a664ba38d2b1f2b576986e1_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "on",
  },
  {
    id: 6,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/1_d4682e87ec2446fda61afe5de9a89e37_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/2_54b06e6b64cb478f87340614e9beb23b_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/3_90420ad3811f41c79ec5641d1eed5775_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "off",
  },
  {
    id: 7,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/7_6d2380f151a445d0871676fc6221e134_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/9_48cdc0b0d4844f12adf4e3fc39040115_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/10_1ee892fe3a664ba38d2b1f2b576986e1_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "on",
  },
  {
    id: 8,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/1_d4682e87ec2446fda61afe5de9a89e37_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/2_54b06e6b64cb478f87340614e9beb23b_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/3_90420ad3811f41c79ec5641d1eed5775_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "off",
  },
  {
    id: 9,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/7_6d2380f151a445d0871676fc6221e134_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/9_48cdc0b0d4844f12adf4e3fc39040115_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/10_1ee892fe3a664ba38d2b1f2b576986e1_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "on",
  },
  {
    id: 10,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/1_d4682e87ec2446fda61afe5de9a89e37_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/2_54b06e6b64cb478f87340614e9beb23b_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/3_90420ad3811f41c79ec5641d1eed5775_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "off",
  },
  {
    id: 11,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/7_6d2380f151a445d0871676fc6221e134_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/9_48cdc0b0d4844f12adf4e3fc39040115_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/10_1ee892fe3a664ba38d2b1f2b576986e1_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "on",
  },
  {
    id: 12,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/1_d4682e87ec2446fda61afe5de9a89e37_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/2_54b06e6b64cb478f87340614e9beb23b_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/3_90420ad3811f41c79ec5641d1eed5775_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "off",
  },
  {
    id: 13,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/7_6d2380f151a445d0871676fc6221e134_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/9_48cdc0b0d4844f12adf4e3fc39040115_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/10_1ee892fe3a664ba38d2b1f2b576986e1_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "on",
  },
  {
    id: 14,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/1_d4682e87ec2446fda61afe5de9a89e37_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/2_54b06e6b64cb478f87340614e9beb23b_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/3_90420ad3811f41c79ec5641d1eed5775_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "off",
  },
];
export const productsRecent: IProduct[] = [
  {
    id: 1,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/7_6d2380f151a445d0871676fc6221e134_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/9_48cdc0b0d4844f12adf4e3fc39040115_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/10_1ee892fe3a664ba38d2b1f2b576986e1_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "on",
  },
  {
    id: 2,
    oldPrice: 5000,
    thumbNail: [
      "https://product.hstatic.net/200000881795/product/1_d4682e87ec2446fda61afe5de9a89e37_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/2_54b06e6b64cb478f87340614e9beb23b_1024x1024.png",
      "https://product.hstatic.net/200000881795/product/3_90420ad3811f41c79ec5641d1eed5775_1024x1024.png",
    ],
    title: "jacket in silk crepe",
    name: "do-luu-niem",
    des: "Áo Jacket Mùa Đông",
    rate: 5,
    category: "",
    price: 200000,
    comments: [
      {
        userId: "1",
        content: "dep da man",
        userName: "Minh123",
        evaluate: 5,
      },
      {
        userId: "2",
        content: "dep da man 2",
        userName: "Minhvt",
        evaluate: 5,
      },
      {
        userId: "3",
        content: "dep da man 3",
        userName: "Minhqn",
        evaluate: 5,
      },
      {
        userId: "4",
        content: "dep da man 4",
        userName: "Minhdz",
        evaluate: 5,
      },
    ],
    size: ["S", "M", "L", "XL", "2XL"],
    sizeThumbNail:
      "https://image.hsv-tech.io/reebok/common/a7d62cba-aa0d-435e-97ac-d55b00c7f423.webp",
    status: "off",
  },
];
export const middle1: IUl[] = [
  {
    name: "Áo CSGO",
    url: "/danh-muc/ao-csgo",
    status: "hot",
  },
  {
    name: "Áo Mixi",
    url: "/danh-muc/ao-mixi",
    status: "new",
  },
  {
    name: "Áo PUBG",
    url: "/danh-muc/ao-pubg",
    status: "popular",
  },
  {
    name: "Áo Refund Gaming",
    url: "/danh-muc/ao-refund-gaming",
    status: null,
  },
  {
    name: "jacket in silk crepe",
    url: "/danh-muc/do-luu-niem",
    status: null,
  },
  {
    name: "Áo ba lỗ",
    url: "/danh-muc/ao-ba-lo",
    status: null,
  },
];
export const middle2: IUl[] = [
  {
    name: "Giới thiệu",
    url: "",
    status: null,
  },
  {
    name: "Chính sách bảo mật",
    url: "",
    status: null,
  },
  {
    name: "Điều khoản ",
    url: "",
    status: null,
  },
  {
    name: "Sitemap",
    url: "",
    status: null,
  },
];

export const subMenuCus2Data: IMenuCus2Data[] = [
  {
    thumbNail:
      "https://zunezx.com/upload/image/cache/data/SU-KIEN/Snapseed-b04-400-400.jpeg",
    link: "",
  },
  {
    thumbNail:
      "https://zunezx.com/upload/image/cache/data/san-pham/bottoms/pants/redline-pant/E38A9D8A-487F-46A8-B5D2-E2E912F0C0A8-5aa-400-400.jpeg",
    link: "",
  },
  {
    thumbNail:
      "https://zunezx.com/upload/image/cache/data/SU-KIEN/IMG4318-6e6-400-400.jpeg",
    link: "",
  },
];
