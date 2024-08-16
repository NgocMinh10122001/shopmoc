export interface IProduct {
  id: number;
  thumbNailZoomOut: string;
  thumbNailZoomIn: string;
  name: string;
  des: string;
  rate: string | number;
  price: number;
  status: string;
  oldPrice: string | number;
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
