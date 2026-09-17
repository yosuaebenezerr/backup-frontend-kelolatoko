import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

interface TableTransactionProps {
  id: string;
  numberTransaction: string;
  namaCustomer: string;
  createdAt: string;
  totalTransaction: number;
}

export function HighlightTableDataTransaction({
  dataTransaction,
}: {
  dataTransaction: TableTransactionProps[];
}) {
  return (
    <div className="border-2 w-full rounded-md px-4">
      <div className="p-2 flex justify-between items-center">
        <h1 className="text-lg font-bold mb-1">Tabel Transaksi</h1>
        <Link href="/detail-transaction">
          <p className="text-blue-500 underline hover:cursor-pointer text-sm underline-offset-4 hover:text-blue-700">
            selengkapnya
          </p>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-55">No</TableHead>
            <TableHead>Pelanggan</TableHead>
            <TableHead>Tanggal</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dataTransaction.map((d) => (
            <TableRow key={d.id}>
              <TableCell className="font-medium">
                {d.numberTransaction}
              </TableCell>
              <TableCell>{d.namaCustomer}</TableCell>
              <TableCell>
                {new Date(d.createdAt).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  weekday: "short",
                  month: "short",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell className="text-right">
                {d.totalTransaction.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">
              {dataTransaction
                .map((tr) => tr.totalTransaction)
                .reduce((acc, value) => acc + value, 0)
                .toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                })}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
