import { validationAddOrder } from "@/schema/validation-add-order";
import { useMutation } from "@tanstack/react-query";
import orderService from "../../services/orderService";

export function useActionAddOrder() {
  const response = useMutation({
    mutationFn: async ({ data }: { data: validationAddOrder }) => {
      return await orderService.addOrder({ data });
    },
  });
  return response;
}
