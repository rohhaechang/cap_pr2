import { fetchDataByCik } from "@/app/lib/data";
import Table from "@/app/components/Table";
import Link from "next/link";
import { randomInt } from "crypto";
import ChartJsExample from "@/app/components/LineChart";
import LineChart from "@/app/components/LineChart";

export default async function ProductDetails({
  params,
}: {
  params: { cik: string };
  }) {
  const data = await fetchDataByCik(params.cik)
  const jsonData = data.rows[0]
  const item_8: { [key: string]: { [key: string]: any } } = JSON.parse(jsonData.item_8);


  return (
    <main>
      <Link href="/">Main</Link>
      <div>
        <h1>{jsonData.name}</h1>
        <p>company cik: { jsonData.company_cik}</p>
      </div>
      {Object.entries(item_8).map(([key, value]) => <Table key={randomInt(500)} name={key} params={value}></Table>)}
    </main>

  );
}