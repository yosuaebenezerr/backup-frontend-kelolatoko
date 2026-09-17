import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { AddProduct } from "@/feature/dashboard/components/content-action-product/AddProduct";
import { formatRupiah } from "@/feature/dashboard/helpers/formatRupuah";

export function ProductInformation({
  productId,
  productName,
  priceSell,
  cleanProfit,
  stock,
  category,
  isOpen,
  setIsOpen,
}: {
  productId: string;
  productName: string;
  priceSell: number;
  cleanProfit: number;
  stock: number;
  category: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="gap-0.5">
        <DialogTitle className="font-bold">{productName}</DialogTitle>
        <DialogDescription className="text-sm text-muted-foreground">
          Informasi Produk
        </DialogDescription>

        <div className="mt-4 space-y-2 w-full">
          <p>
            <span className="font-bold">Harga Jual:</span>{" "}
            {formatRupiah(priceSell)}
          </p>
          <p>
            <span className="font-bold">Keuntungan Bersih:</span>{" "}
            {formatRupiah(cleanProfit)}
          </p>
          <p>
            <span className="font-bold">Stok Persediaan:</span> {stock}
          </p>
          <p>
            <span className="font-bold">Kategori:</span> {category}
          </p>

          <div className="flex justify-end">
            <AddProduct
              mode="edit"
              editMode={{
                productId: productId,
                data: {
                  name: productName,
                  priceSell,
                  profit: cleanProfit,
                  stock,
                  categoryId: category,
                },
              }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
