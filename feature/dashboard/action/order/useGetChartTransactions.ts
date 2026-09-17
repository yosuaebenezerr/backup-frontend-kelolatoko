import { useQuery } from "@tanstack/react-query";
import orderService from "../../services/orderService";

export function useGetChartTransactions({
  startDate,
  endDate,
}: {
  startDate?: string;
  endDate?: string;
}) {
  const response = useQuery({
    queryKey: ["getChartTransactions", startDate, endDate],
    queryFn: async () => {
      return await orderService.getChartTransaction({ startDate, endDate });
    },
    select: (res) => res.data.data,
  });
  return response;
}
