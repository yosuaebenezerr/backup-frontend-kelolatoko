import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Info } from "lucide-react";
import { detailProduct } from "../models/orderModel";

export function DetailTransaction({
  namaPelanggan,
  detailTransaksi,
  totalTransaksi,
  totalKeuntungan,
}: {
  namaPelanggan: string;
  detailTransaksi: detailProduct[];
  totalTransaksi: number;
  totalKeuntungan: number;
}) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="outline" size="sm">
            <Info />
          </Button>
        }
      />

      <DialogContent>
        <DialogTitle className="font-bold">Detail Transaksi</DialogTitle>
        <p>{namaPelanggan}</p>
      </DialogContent>
    </Dialog>
  );
}
