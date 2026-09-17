"use client";

import { useIsFetching } from "@tanstack/react-query";
import MainDashboardClient from "../containers/MainDashboardClient";
import OverviewTransaction from "../containers/OverviewTransaction";
import { ProductAvailable } from "../containers/ProductAvailable";
import { ProductBestSeller } from "../containers/ProductBestSeller";
import { ProductNotAvailable } from "../containers/ProductNotAvailable";

export default function DashboardView() {
  const isFetching = useIsFetching();
  return (
    <div className="flex flex-col space-y-5">
      {isFetching > 0 && (
        <div className="fixed top-20 right-8 z-50 flex items-center gap-2 bg-white/80 backdrop-blur-sm border px-4 py-2 rounded-full shadow-lg">
          <span className="animate-spin text-xl">⏳</span>
          <span className="text-sm font-semibold text-gray-700">
            Menyinkronkan...
          </span>
        </div>
      )}
      <MainDashboardClient />
      <OverviewTransaction />
      <ProductBestSeller />
      <ProductAvailable />
      <ProductNotAvailable />
    </div>
  );
}
