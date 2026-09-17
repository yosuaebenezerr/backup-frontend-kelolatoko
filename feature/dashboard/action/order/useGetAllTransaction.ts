import { useQuery } from "@tanstack/react-query";
import orderService from "../../services/orderService";

export function useGetAllTransaction({
  startDate,
  endDate,
}: {
  startDate?: string;
  endDate?: string;
}) {
  const response = useQuery({
    queryKey: ["getAllTransaction", startDate, endDate],
    queryFn: async () => {
      if (!startDate || !endDate) {
        throw new Error("startDate dan endDate wajib diisi");
      }
      return await orderService.getAllTransaction({
        startDate: startDate,
        endDate: endDate,
      });
    },
    select: (res) => res.data.data,
  });
  return response;
}
