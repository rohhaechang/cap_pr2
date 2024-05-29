'use client'

import { useEffect, useState } from "react";
import { fetchDataByCik } from "@/app/lib/data";
import Table from "@/app/components/Table";
import Link from "next/link";
import ReactModal from "react-modal";
import { randomInt } from "crypto";
import LineChart from "@/app/components/LineChart";
import ItemsT from "@/app/components/itemsT";
import Summary from "@/app/components/Summary";

export default function ProductDetails({ params }: { params: { cik: string } }) {
  const [data, setData] = useState<any>(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState<{ name: string; params: { [key: string]: { [key: string]: any } } } | null>(null);

  useEffect(() => {
    async function getData() {
      const fetchedData = await fetchDataByCik(params.cik);
      setData(fetchedData.rows[0]);
    }
    getData();
  }, [params.cik]);

  const openModal = (name: string, params: { [key: string]: { [key: string]: any } }) => {
    setSelectedTable({ name, params });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedTable(null);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  const item_8: { [key: string]: { [key: string]: any } } = JSON.parse(data.item_8);

  return (
    <main>

      <Link href="/">Main</Link>
      <div style={{paddingBottom: "24px"}}>
        <h1 style={{paddingTop: "12px", paddingLeft: "12px"}}>{data.name}</h1>
        <p style={{paddingTop: "12px", paddingLeft: "12px"}}>company cik: {data.company_cik}</p>
      </div>
      <Summary params={data.summary}></Summary>
      <ItemsT name="Company Overview" params={data.item_1}></ItemsT>
      <ItemsT name="Risk Factor" params={data.item_1a}></ItemsT>
      <ItemsT name="Property" params={data.item_2}></ItemsT>
      <ItemsT name="Legal Proceedings" params={data.item_3}></ItemsT>
      <ItemsT name="Market for Registrant's Common Equity" params={data.item_5}></ItemsT>
      <ItemsT name="Management’s Discussion and Analysis of Financial Condition and Results of Operations" params={data.item_7}></ItemsT>
      <ItemsT name="Quantitative and Qualitative Disclosures About Market Risk" params={data.item_7a}></ItemsT>
      <div style={{ height: "48px", paddingLeft: "12px", paddingTop: "12px", fontSize: "18px", fontWeight: "bold"}}>tables and charts</div>
      <div style={{ padding: "12px 12px 12px 12px", display: "grid", gridTemplateColumns: "repeat(3, minmax(33%, auto))" }}>
        {Object.entries(item_8).map(([key, value]) => (
          <div key={key} onClick={() => openModal(key, value)}>
            <LineChart key={key} name={key} params={value} ></LineChart>
          </div>
        ))}
      </div>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Table Modal" >
        {selectedTable && <Table name={selectedTable.name} params={selectedTable.params} />}
        <button onClick={closeModal}>Close</button>
      </ReactModal>

    </main>
  );
}
