'use client'

import { useEffect, useState } from "react";
import { fetchDataByCik } from "@/app/lib/data";
import Table from "@/app/components/Table";
import Link from "next/link";
import ReactModal from "react-modal";
import { randomInt } from "crypto";
import LineChart from "@/app/components/LineChart";

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
      <div style={{paddingLeft: "12px"}}>
        <p style={{ fontSize: "24px", paddingBottom: "12px", paddingTop: "12px" }}>Company Overview</p>
        <p>Apple Inc. designs, manufactures, and markets a wide range of hardware products, services, and digital content, facing intense competition and supply chain challenges while emphasizing innovation, inclusivity, and workplace safety.</p>
      </div>
      <div style={{paddingLeft: "12px"}}>
        <p style={{ fontSize: "24px", paddingBottom: "12px", paddingTop: "12px" }}>Risk Factor</p>
        <p>Key risk factors for AAPL include exposure to macroeconomic conditions, global supply chain disruptions, intense competition, legal and regulatory compliance challenges, financial risks related to foreign exchange rates and credit, and stock price volatility.</p>
      </div>
      <div style={{paddingLeft: "12px"}}>
        <p style={{ fontSize: "24px", paddingBottom: "12px", paddingTop: "12px" }}>Property</p>
        <p>Apple's headquarters is in Cupertino, California, with owned or leased facilities and land for corporate functions, R&D, data centers, retail, and other purposes across the U.S. and internationally, all in good operating condition.</p>
      </div>
      <div style={{paddingLeft: "12px"}}>
        <p style={{ fontSize: "24px", paddingBottom: "12px", paddingTop: "12px" }}>Market for Registrant’s Common Equity</p>
        <p>Apple Inc. has 23,763 shareholders of record as of October 20, 2023, with a total of 106,595 shares repurchased during the three months ended September 30, 2023, under a $90 billion share repurchase program, including new accelerated share repurchase agreements, reflecting a strong market presence and strategic capital allocation.</p>
      </div>
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
