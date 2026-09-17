import { ITransaction } from "../models/orderModel";

export interface ITableTransaction {
  transactions: ITransaction[];
  totalTransaction: number;
  totalProfit: number;
}
