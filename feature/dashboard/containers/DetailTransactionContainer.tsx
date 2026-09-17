"use client";
import { Button } from "@/components/ui/button";
import { DatePickerWithRange } from "@/feature/_global/components/DatePickerWithRange";
import { OptionCategory } from "@/feature/_global/components/OptionCategory";
import { TableDataTransaction } from "@/feature/_global/components/TableDataTransaction";
import { Download } from "lucide-react";
import { useState } from "react";
import { useGetAllTransaction } from "../action/order/useGetAllTransaction";
import { DateRange } from "react-day-picker";

export function DetailTransactionContainer() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date(new Date().setHours(23, 59, 59, 999)),
  });

  const { data: allTransaction } = useGetAllTransaction({
    startDate: date?.from?.toISOString(),
    endDate: date?.to?.toISOString(),
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  return (
    <div className="flex flex-col items-center w-full gap-4">
      <div className="flex justify-between w-325 items-center">
        <h1 className="text-3xl font-bold">Detail Transaksi</h1>

        <div className="flex gap-2.5 items-center">
          <OptionCategory
            value={selectedCategory}
            setValue={setSelectedCategory}
            namingText=""
          />
          <DatePickerWithRange
            className="h-10.5"
            date={date}
            setDate={setDate}
          />

          <Button className="flex bg-green-500 hover:bg-green-400 text-white gap-4 h-10.5">
            <p>Unduh Excel</p>
            <Download />
          </Button>
        </div>
      </div>
      <TableDataTransaction
        dataTransaction={
          allTransaction || {
            transactions: [],
            totalTransaction: 0,
            totalProfit: 0,
          }
        }
      />
    </div>
  );
}
