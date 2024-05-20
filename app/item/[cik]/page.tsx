import { fetchDataByCik } from "@/app/lib/data";
import Link from "next/link";

export default async function ProductDetails({
  params,
}: {
  params: { cik: string };
  }) {
  const data = await fetchDataByCik(params.cik)
  const jsonData = data.rows[0]
  return (
    <div>
      <Link href="/">메인으로</Link>
      <h1>{jsonData.name}</h1>
      <p>{ jsonData.company_cik}</p>
   </div>
  );
}