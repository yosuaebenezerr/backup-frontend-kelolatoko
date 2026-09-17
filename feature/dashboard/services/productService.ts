import { API_ENDPOINTS } from "@/constants/api";
import {
  IResGet10Products,
  IResGetBestSeller,
} from "@/feature/dashboard/models/productModel";
import apiClient from "@/lib/apiClient";
import { validationAddProduct } from "@/schema/validation-add-product";
import { IResGetCategory } from "../models/categoryModel";

const productService = {
  addCategoryProduct: async ({ name }: { name: string }) => {
    const response = await apiClient.post(API_ENDPOINTS.PRODUCT.addCategory, {
      name,
    });
    return response;
  },

  getCategoryProduct: async () => {
    const response = await apiClient.get<IResGetCategory>(
      API_ENDPOINTS.PRODUCT.getCategory,
    );
    return response;
  },

  getAllProduct: async (search?: string) => {
    const response = await apiClient.get<IResGet10Products>(
      API_ENDPOINTS.PRODUCT.allProduct,
      {
        params: {
          search,
        },
      },
    );
    return response;
  },

  getBestSellerProduct: async () => {
    return await apiClient.get<IResGetBestSeller>(
      API_ENDPOINTS.PRODUCT.getBestSellerProduct,
    );
  },

  getAllProductAvailable: async ({
    status,
    category,
  }: {
    status?: string;
    category?: string;
  }) => {
    const response = await apiClient.get<IResGet10Products>(
      API_ENDPOINTS.PRODUCT.allProductStatus,
      {
        params: {
          status,
          category,
        },
      },
    );
    return response;
  },

  addProduct: async ({ data }: { data: validationAddProduct }) => {
    const response = await apiClient.post(
      API_ENDPOINTS.PRODUCT.addProduct,
      data,
    );
    return response;
  },

  updateProduct: async ({
    productId,
    data,
  }: {
    productId: string;
    data: validationAddProduct;
  }) => {
    const response = await apiClient.put(
      `${API_ENDPOINTS.PRODUCT.updateProduct}/${productId}`,
      data,
    );
    return response;
  },

  get10ProductsAvailable: async () => {
    const response = await apiClient.get<IResGet10Products>(
      API_ENDPOINTS.PRODUCT.get10ProductsAvailable,
    );
    return response;
  },
  get10ProductsNotAvailable: async () => {
    const response = await apiClient.get<IResGet10Products>(
      API_ENDPOINTS.PRODUCT.get10ProductsNotAvailable,
    );
    return response;
  },
};

export default productService;
