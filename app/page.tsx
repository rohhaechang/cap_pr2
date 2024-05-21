import { fetchData } from "./lib/data";
import Card from "./components/Card";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetchData();
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {data.rows.map((item) => <div key={item.company_cik}><Card params={{
          name: item.name,
          cik: item.company_cik,
          recent_year: item.year
        }} ></Card></div>)}
      </div>
    </main>
  );
}
