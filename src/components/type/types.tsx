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
}
