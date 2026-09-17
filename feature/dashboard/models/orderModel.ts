import { GlobalResponse } from "@/feature/_global/interface/global.interface";

export interface detailProduct {
  nameProduct: string;
  priceProduct: number;
  quantity: number;
  totalPrice: number;
  totalProfit: number;
}

export interface ITransaction {
  numberTransaction: string;
  namaCustomer: string;
  dateTransaction: string;
  totalTransaction: number;
  totalProfit: number;
  detailProduct: detailProduct[];
}

export interface IResGetAllTransaction extends GlobalResponse {
  data: {
    transactions: ITransaction[];
    totalTransaction: number;
    totalProfit: number;
  };
}

export interface ResGetHighlightTransaction extends GlobalResponse {
  data: {
    id: string;
    numberTransaction: string;
    namaCustomer: string;
    createdAt: string;
    totalTransaction: number;
  }[];
}

export interface ResGetChartTransaction extends GlobalResponse {
  data: {
    date: string;
    totalTransaction: number;
  }[];
}
