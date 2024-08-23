export interface IProduct {
  id: number;
  thumbNail: string[];
  title: string;
  name: string;
  des: string;
  category: string;
  rate: string | number;
  price: number;
  status: string;
  oldPrice: string | number;
  sizeThumbNail: string;
  size: string[];
  comments: IComment[];
}

export interface IUl {
  name: string;
  url: string;
  status: string | null;
}

export interface IMenuCus2Data {
  thumbNail: string;
  link: string;
}

export interface IHeaderCategory {
  title: string;
  currentP: string | number;
  totalP: string | number;
}
export interface IMainCategory {
  currentP: string | number;
  totalP: string | number;
  products: IProduct[];
  recent: any[];
}

export interface IComment {
  userId: string | number;
  content: string;
  userName: string;
  evaluate: number | string;
}
