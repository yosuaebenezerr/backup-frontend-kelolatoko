import { GlobalResponse } from "../../_global/interface/global.interface";

export interface IResGet10Products extends GlobalResponse {
  data: {
    id: string;
    name: string;
    priceSell: number;
    profit: number;
    stock: number;
    category: string;
  }[];
}

export interface IResGetBestSeller extends GlobalResponse {
  data: {
    id: string;
    totalSold: number;
    name: string;
    priceSell: number;
    profit: number;
    stock: number;
    category: string;
  }[];
}
