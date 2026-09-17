"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { DatePickerWithRange } from "./DatePickerWithRange";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { useGetChartTransactions } from "@/feature/dashboard/action/order/useGetChartTransactions";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartLineLinear() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(new Date().setDate(new Date().getDate() - 30)),
    to: new Date(new Date().setHours(23, 59, 59, 999)),
  });

  const { data: chartData } = useGetChartTransactions({
    startDate: date?.from?.toISOString(),
    endDate: date?.to?.toISOString(),
  });

  console.log(chartData);

  return (
    <Card className="w-full">
      <CardHeader className="flex justify-between items-center">
        <CardTitle className="font-bold">PENDAPATAN</CardTitle>
        <DatePickerWithRange
          date={date}
          setDate={setDate}
          className="mx-60 border-2"
        />
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-85 w-full px-2">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            className="h-20"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              interval="preserveStartEnd"
              // tickFormatter={(value) => {
              //   return value.toLocaleDateString("id-ID", {
              //     month: "short",
              //     day: "numeric",
              //   });
              // }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="count"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="value"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
