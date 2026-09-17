import { ChartLineLinear } from "@/feature/_global/components/ChartLineLinear";
import { HighlightTableDataTransaction } from "@/feature/_global/components/HighlightTableDataTransaction";
import { useGetHighlightTransactions } from "../action/order/useGetHighlightTransactions";

export default function OverviewTransaction() {
  const { data: highlight } = useGetHighlightTransactions();

  const invoices = highlight?.data?.data || [];

  setTimeout(() => {}, 1000000);

  return (
    <div className="flex space-x-15 w-full">
      <ChartLineLinear />
      <HighlightTableDataTransaction dataTransaction={invoices} />
    </div>
  );
}
