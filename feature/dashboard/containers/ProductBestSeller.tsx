import { CardProduct } from "@/feature/_global/components/CardProduct";
import { useGetBestSellerProduct } from "../action/product/useGetBestSellerProduct";

export function ProductBestSeller() {
  const { data: productBestSeller } = useGetBestSellerProduct();
  return (
    <div className="space-y-2 mt-10">
      <h1 className="bg-[#041336] w-fit text-white px-4 rounded-sm font-bold text-lg">
        10 Produk Terlaris (30 hari terakhir)
      </h1>

      <div className="grid grid-cols-5 gap-4">
        {productBestSeller?.map((product) => (
          <CardProduct
            productId={product.id}
            key={product.id}
            productName={product.name}
            priceSell={product.priceSell}
            cleanProfit={product.priceSell}
            stock={product.stock}
            category={product.category}
            mode="best-seller"
            totalSold={product.totalSold}
          />
        ))}
      </div>
    </div>
  );
}
