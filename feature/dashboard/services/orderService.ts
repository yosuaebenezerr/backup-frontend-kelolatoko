import { API_ENDPOINTS } from "@/constants/api";
import apiClient from "@/lib/apiClient";
import { validationAddOrder } from "@/schema/validation-add-order";
import {
  IResGetAllTransaction,
  ResGetChartTransaction,
  ResGetHighlightTransaction,
  responseAddOrder,
} from "../models/orderModel";

const orderService = {
  addOrder: async ({ data }: { data: validationAddOrder }) => {
    const { namaCustomer, productSells } = data;
    const response = await apiClient.post<responseAddOrder>(
      API_ENDPOINTS.ORDER.addOrder,
      {
        namaCustomer,
        productSells,
      },
    );
    return response.data.data;
  },

  getAllTransaction: async ({
    startDate,
    endDate,
  }: {
    startDate: string;
    endDate: string;
  }) => {
    const response = await apiClient.get<IResGetAllTransaction>(
      API_ENDPOINTS.ORDER.getAllTransaction,
      {
        params: {
          startDate,
          endDate,
        },
      },
    );
    return response;
  },

  getHighlightTransaction: async () => {
    const response = await apiClient.get<ResGetHighlightTransaction>(
      API_ENDPOINTS.ORDER.getHighlightTransaction,
    );
    return response;
  },

  getChartTransaction: async ({
    startDate,
    endDate,
  }: {
    startDate?: string;
    endDate?: string;
  }) => {
    const response = await apiClient.get<ResGetChartTransaction>(
      API_ENDPOINTS.ORDER.getChartTransaction,
      {
        params: {
          startDate,
          endDate,
        },
      },
    );
    return response;
  },
};

export default orderService;
