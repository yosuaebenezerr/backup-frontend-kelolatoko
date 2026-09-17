"use client";

import { useState } from "react";
import { SearchProduct } from "../../_global/components/SearchProduct";
import { actionButtonClient } from "../utils/actionButtonClient";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { useGetAllProduct } from "../action/product/useGetAllProduct";
import Image from "next/image";
import { useDebounce } from "@/feature/_global/utils/useDebounce";
import { formatRupiah } from "../helpers/formatRupuah";
import { ProductInformation } from "@/feature/_global/components/ProductInformation";

type Product = {
  id: string;
  name: string;
  priceSell: number;
  profit: number;
  stock: number;
  category: string;
};

export default function MainDashboardClient() {
  const actionButton = actionButtonClient;

  const [searchValue, setSearchValue] = useState("");
  const [active, setActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  const { data: dataSearch, isLoading } = useGetAllProduct({
    search: debouncedSearchValue,
  });

  const dataDashboard = dataSearch || [];
  return (
    <>
      <div
        className={cn(`flex justify-between 
                          lg:flex-col lg:gap-3
                          xl:flex-row xl:gap-4
                                                    `)}
      >
        <div className="flex w-full flex-col gap-2 relative">
          <SearchProduct
            value={searchValue}
            setValue={setSearchValue}
            active={active}
            setActive={setActive}
            className="xl:w-212"
          />
          {active && (
            <div className="absolute top-full left-0 w-full h-80 max-h-fit overflow-y-auto bg-gray-100 rounded-sm p-2 z-50 shadow-lg mt-1">
              {isLoading ? (
                <div className="flex justify-center items-center h-full">
                  <p className="text-gray-500">Loading...</p>
                </div>
              ) : dataDashboard.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                  <p className="text-gray-500">Tidak ada produk ditemukan</p>
                </div>
              ) : (
                dataDashboard.map((product) => (
                  <div key={product.id} className="flex flex-col py-1">
                    <Card
                      className="gap-1 p-0 rounded-sm mb-3 last:mb-0 hover:cursor-pointer"
                      onClick={() => {
                        setSelectedProduct(product);
                        setIsOpen(true);
                      }}
                    >
                      <CardContent className="flex gap-2 p-0 items-center">
                        <Image
                          src="/placeholder.png"
                          alt={`Gambar ${product.name}`}
                          width={100}
                          height={70}
                          unoptimized
                          priority
                        />
                        <div>
                          <h1 className="font-bold text-[16px]">
                            {product.name}
                          </h1>
                          <h1>{formatRupiah(product.priceSell)}</h1>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))
              )}
            </div>
          )}
        </div>

        <div className="flex lg:gap-2 xl:gap-0.5">
          {actionButton.map((button, index) => (
            <div key={index}>{button.component}</div>
          ))}
        </div>
      </div>

      {isOpen && selectedProduct && (
        <ProductInformation
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          productId={selectedProduct.id}
          productName={selectedProduct.name}
          category={selectedProduct.category}
          cleanProfit={selectedProduct.profit}
          priceSell={selectedProduct.priceSell}
          stock={selectedProduct.stock}
        />
      )}
    </>
  );
}
