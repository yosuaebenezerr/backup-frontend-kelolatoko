import { useQuery } from "@tanstack/react-query";
import productService from "../../services/productService";

export function useGetBestSellerProduct() {
  const response = useQuery({
    queryKey: ["getBestSellerProduct"],
    queryFn: async () => {
      return await productService.getBestSellerProduct();
    },
    select: (res) => res.data.data,
  });

  return response;
}
