import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DetailTransaction } from "@/feature/dashboard/components/DetailTransaction";
import { formatRupiah } from "@/feature/dashboard/helpers/formatRupuah";
import { ITableTransaction } from "@/feature/dashboard/interface/dashboard-interface";

export function TableDataTransaction({
  dataTransaction,
}: {
  dataTransaction: ITableTransaction;
}) {
  const totalPenjualan = dataTransaction.totalTransaction;
  const totalProfit = dataTransaction.totalProfit;

  return (
    <div className="flex w-325 px-7 py-3 justify-center border-2 rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25">No</TableHead>
            <TableHead>Pelanggan</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead>Total Transaksi (Rp)</TableHead>
            <TableHead>Keuntungan Bersih (Rp)</TableHead>
            <TableHead className="text-right">Detail</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dataTransaction.transactions.map((d) => (
            <TableRow key={d.numberTransaction}>
              <TableCell className="font-medium">
                {d.numberTransaction}
              </TableCell>
              <TableCell>{d.namaCustomer}</TableCell>
              <TableCell>
                {new Date(d.dateTransaction).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  weekday: "short",
                })}
              </TableCell>
              <TableCell>{formatRupiah(d.totalTransaction)}</TableCell>
              <TableCell>{formatRupiah(d.totalProfit)}</TableCell>
              <TableCell className="text-right">
                <DetailTransaction
                  namaPelanggan={d.namaCustomer}
                  detailTransaksi={d.detailProduct}
                  totalTransaksi={d.totalTransaction}
                  totalKeuntungan={d.totalProfit}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter className="gap-2">
          <TableRow>
            <TableCell colSpan={5}>Total Penjualan</TableCell>
            <TableCell className="text-right">
              {formatRupiah(totalPenjualan)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={5}>Total Keuntungan</TableCell>
            <TableCell className="text-right">
              {formatRupiah(totalProfit)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
