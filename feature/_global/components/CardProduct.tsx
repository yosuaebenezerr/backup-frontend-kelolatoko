"use client";
import { Card, CardContent } from "@/components/ui/card";

import { ProductInformation } from "@/feature/_global/components/ProductInformation";
import { formatRupiah } from "@/feature/dashboard/helpers/formatRupuah";
import Image from "next/image";
import { useState } from "react";

export function CardProduct({
  productId,
  productName,
  priceSell,
  cleanProfit,
  stock,
  category,
  mode,
  totalSold,
}: {
  productId: string;
  productName: string;
  priceSell: number;
  cleanProfit: number;
  stock: number;
  category: string;
  mode?: "best-seller" | "all-product";
  totalSold?: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Card
        className="w-85 hover:cursor-pointer hover:shadow-lg transition-all duration-300"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src="/placeholder.png"
          alt={productName || "Product Image"}
          width={350}
          height={200}
          unoptimized
          className="object-contain w-auto h-auto"
          priority
        />
        <CardContent>
          <h3 className="font-bold line-clamp-1">{productName}</h3>
          <p className="text-lg">{formatRupiah(priceSell)}</p>
          {mode === "best-seller" && (
            <p className="flex test-md justify-end font-semibold">
              Terjual: {totalSold}
            </p>
          )}
        </CardContent>
      </Card>

      {isOpen && (
        <ProductInformation
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          productId={productId}
          productName={productName}
          priceSell={priceSell}
          cleanProfit={cleanProfit}
          stock={stock}
          category={category}
        />
      )}
    </>
  );
}
