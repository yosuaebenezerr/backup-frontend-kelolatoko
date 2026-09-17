import { useQuery } from "@tanstack/react-query";
import orderService from "../../services/orderService";

export function useGetHighlightTransactions() {
  const response = useQuery({
    queryKey: ["getHighlightTransactions"],
    queryFn: async () => {
      return await orderService.getHighlightTransaction();
    },
  });
  return response;
}
